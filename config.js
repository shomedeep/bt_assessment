const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  port: process.env["PORT"],
  NODE_ENV: process.env["NODE_ENV"],
};
