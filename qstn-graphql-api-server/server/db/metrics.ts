import * as dotenv from "dotenv";
const { Pool } = require("pg");
dotenv.config();

export const dbconnectionMetrics = new Pool({
  host: process.env.METRICS_PGHOST,
  port: process.env.METRICS_PGPORT,
  username: process.env.METRICS_PGUSERNAME,
  password: process.env.METRICS_PGPASSWORD,
  database: process.env.METRICS_PGDATABASE,
});
