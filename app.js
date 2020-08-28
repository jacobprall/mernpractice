const express = require("express");
const app = express();
const db = require('./config/keys').mongoURI
const mongoose = require("mongoose")

mongoose 
  .connect(db, {useUnifiedTopology: true })
  .then(() => console.log('connected to mongoDB'))
  .catch(err => console.log(err));

app.get("/", (req, res) => res.send("Hello"));
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));