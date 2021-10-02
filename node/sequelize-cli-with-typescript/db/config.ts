import { Options } from "sequelize/types";

export const development: Options = {
  username: "development",
  password: "development",
  database: "development",
  host: "localhost",
  port: 5432,
  dialect: "postgres",
};
