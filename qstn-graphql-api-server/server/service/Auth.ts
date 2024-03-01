// Auth.ts
import * as dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

const privateKey = `${process.env.ACCESS_TOKEN_SECRET}`;

export default ({ req }: any) => {
  const header = req.headers["x-access-token"];

  // not found
  if (!header) return { isAuth: false };

  // token
  const token: any = header.split(" ");

  // token not found
  if (!token) return { isAuth: false };

  let decodeToken: any;

  try {
    decodeToken = jwt.verify(token[1], privateKey);
  } catch (err) {
    return { isAuth: false };
  }

  // in case any error found
  if (!decodeToken) return { isAuth: false };

  // token decoded successfully, and extracted data
  return { isAuth: true, email: decodeToken.email };
};
