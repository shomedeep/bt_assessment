const http = require("http");
const app = require("./app");
const cluster = require("cluster");
const os = require("os");

const config = require("./config");

const port = config.port || 3000;
const mode = process.env.NODE_ENV || "development";

const server = http.createServer(app);

if (mode === "production" && cluster.isMaster) {
  const numWorkers = os.cpus().length;
  console.log(`Master ${process.pid} is running`);
  for (let i = 0; i < numWorkers; i++) {
    cluster.fork();
  }
  cluster.on("death", (worker) => {
    console.log(`Worker ${worker.process.pid} died`);
    cluster.fork();
  });
} else {
  server.listen(port, () => {
    console.log(`Server is running on port ${port} in ${mode} mode`);
  });
}
