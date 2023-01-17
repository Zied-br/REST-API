const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config({ path: "./config/.env" });
app.use(express.json());
app.use("/", require("./roots/userRoots"));
const port = process.env.PORT;
mongoose.set("strictQuery", false);

mongoose.connect(process.env.URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.listen(port, (err) =>
  err ? console.log(err) : console.log(`server is running on ${port} `)
);
