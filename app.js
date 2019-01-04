const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const mongoose = require("mongoose");

app.use(bodyParser.json());
app.use(cors());

mongoose.connect(
  process.env.MONGODB,
  { useNewUrlParser: true }
);

var Schema = mongoose.Schema;

var nameSchema = new Schema({
  name: String
});
var Name = mongoose.model("Name", nameSchema);

app.get("/", (req, res) => {
  Name.find()
    .then(function(name) {
      res.json(name);
    })
    .catch(function(err) {
      res.send(err);
    });
});

app.post("/", (req, res) => {
  Name.create(req.body)
    .then(function(newName) {
      res.status(201).json(newName);
    })
    .catch(function(err) {
      res.send(err);
    });
});

app.listen(4000, () => console.log("Server running on port 3000"));
