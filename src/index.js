const express = require("express");
require("dotenv").config();
const cors = require('cors');

const app = express();
const router = express.Router();
const JokesRouter = require("./routes/routes.js");
const bodyParser = require("body-parser");
app.use(bodyParser.json({ limit: "50mb" }));
app.use(cors());
app.use((req, res, next) => {
  res.header("Allow-Control-Allow-Origin", "*");
  res.header("Allow-Control-Allow-Headers", "GET, POST , PUT, DELETE, OPTIONS");
  next();
});

app.use("/", router);
app.use("/api/", JokesRouter);

const PORT = 24800;
app.listen(PORT, () => {
  console.log("Listening on Port ", PORT);
});
