const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const articleRouter = require("./route/articleRoute.js");
const cors = require("cors");
require("dotenv").config();
var app = express();
app.use(cors("http://localhost:5173/"));

app.use(express.json());
mongoose
  .connect(process.env.mongo_uri
  )
  .then(() => {
    console.log("connected to MONGODB...");
  })
  .catch((error) => {
    console.log("error connecting to MONGODB:", error.message);
  });

app.use("/api/articles", articleRouter);

app.listen(3500, () => {
  console.log(`Server running on port 3500`);
});
