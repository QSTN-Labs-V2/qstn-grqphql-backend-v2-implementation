import express from "express";
import { ApolloServer } from "apollo-server-express";
import { dbconnection } from "./db/postgres";
import { dbconnectionMetrics } from "./db/metrics";
import {
  ApolloServerPluginDrainHttpServer,
  ApolloServerPluginLandingPageLocalDefault,
} from "apollo-server-core";
import Auth from "./service/Auth";
import { ServiceTypeDefs } from "./service/serviceSchema";
import ServiceResolvers from "./service/serviceResolver";

import compression from "compression";
import cors from "cors";
import http from "http";
import bodyParser from 'body-parser';
import snakeCase from "lodash.snakecase";
/*import { setMaxListeners, EventEmitter } from "events";
const target = new EventTarget();
const emitter = new EventEmitter();
setMaxListeners(50, target, emitter);*/

const PORT = process.env.PORT || 4000;

interface appContext {
  token?: string;
}

const snakeCaseFieldResolver = (source, args, contextValue, info) => {
  const snakedField = source[snakeCase(info.fieldName)]
  return snakedField ? snakedField : source[info.fieldName];
};

async function startApolloServer(typeDefs: any, resolvers: any) {
  // Required logic for integrating with Express
  const app = express();
  app.use(cors());
  app.use(compression());
  app.use(bodyParser.urlencoded({
    limit: "300mb",
    extended: false
  }));
  app.use(bodyParser.json({limit: "300mb"}));
  // Our httpServer handles incoming requests to our Express app.
  // Below, we tell Apollo Server to "drain" this httpServer,
  // enabling our servers to shut down gracefully.
  const httpServer = http.createServer(app);

  // Same ApolloServer initialization as before, plus the drain plugin
  // for our httpServer.
  const server = new ApolloServer({
    fieldResolver: snakeCaseFieldResolver,
    typeDefs,
    resolvers,
    context: Auth,
    csrfPrevention: true,
    cache: "bounded",
    plugins: [
      ApolloServerPluginDrainHttpServer({ httpServer }),
      ApolloServerPluginLandingPageLocalDefault({ embed: true }),
    ],
  });

  // More required logic for integrating with Express
  await server.start();
  server.applyMiddleware({
    app,
    // By default, apollo-server hosts its GraphQL endpoint at the
    // server root. However, *other* Apollo Server packages host it at
    // /graphql. Optionally provide this to match apollo-server.
    path: "/",
  });

  // Modified server startup
  await new Promise<void>((resolve) =>
    httpServer.listen({ port: PORT }, resolve)
  );
  console.log(
    `🚀 GraphQL Server ready at http://localhost:${PORT}${server.graphqlPath}`
  );
}

dbconnection.connect((err) => {
  if (err) {
    console.error("connection error", err.stack);
  } else {
    console.log("⚗️  Postgres DB connected!");
  }
});

dbconnectionMetrics.connect((err) => {
  if (err) {
    console.error("connection error", err.stack);
  } else {
    console.log("🧩 Metrics DB connected!");
  }
});


startApolloServer(ServiceTypeDefs, ServiceResolvers);
