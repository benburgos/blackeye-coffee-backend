


















































































































//Dependencies
require("dotenv").config();


const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const morgan = require("morgan");

// DB Config
require("./config/database");

//Routers
const drinksRouter = require("./routes/drinks");


//Middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use("/static", express.static("static")) 
app.use(cors());
app.use(morgan('dev'))



//Model

app.use("/drinks/", drinksRouter);
// app.get("/", (req, res) => {
//   res.send("Hello Blackeye Coffee!");
// });



//Listen

const PORT = process.env.PORT|| 3003
app.listen(PORT, () => console.log(`You're on port ${PORT}`));
