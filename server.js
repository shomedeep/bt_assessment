const express = require("express");
const bodyParser = require("body-parser");
const router = require("./routes/userRoute");


const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use("/api", router);

app
  .listen(port, () => {
    console.log(`Server is running on port ${port}`);
  })
  .on("error", () => {
    console.log("error to connect server");
  });
