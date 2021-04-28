const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cookieParser = require('cookie-parser');
const fromFile = require('express-fileupload');

//connecting to database
mongoose
  .connect(
    `mongodb+srv://AndreaNurce:${process.env.CREDENCIALS}@cluster0.wim37.mongodb.net/E-comerce?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  )
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch((err) => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });




const corsConfig = function (req, res, next) {
  res.header("Access-Control-Allow-Origin", 'http://localhost:8080' );
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  next();
};

app.use(cookieParser());
app.use(bodyParser.json());
app.use(express.json());
app.use(corsConfig)
app.use(fromFile())



const signin = require("./routes/signIn");
const isAuth = require("./routes/isAuth");
const landingPage = require("./routes/landing-page");
app.use("/login", signin);
app.use("/isAuth", isAuth);
app.use("/landing-page", landingPage);
app.get('/',(req,res)=>{
  res.send('hello')
})
app.listen(8081, () => console.log(`Example app listening on port ${process.env.PORT}!`));
