const express = require("express");
const app = express();
const db = require('./config/keys').mongoURI;
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const users = require("./routes/api/users.js");
const tweets = require("./routes/api/tweets.js");
const passport = require('passport');
require('./config/passport')(passport)

mongoose 
  .connect(db, {useNewUrlParser: true })
  .then(() => console.log('connected to mongoDB'))
  .catch(err => console.log(err));

app.use(passport.initialize())

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/users", users);
app.use("/api/tweets", tweets);
