const http = require("http");
const app = require("./app");

const env = process.env.NODE_ENV || "development";
const config = require("./config")[env];

const port = config.port || 3000;
const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
