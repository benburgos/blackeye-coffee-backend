//Dependencies
require("dotenv").config();
const { PORT = 3001, DATABASE_URL } = process.env;
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const morgan = require("morgan");

//Database Connection
mongoose.connect(DATABASE_URL);

mongoose.connection
  .on("open", () => console.log("MongoDB Connected"))
  .on("close", () => console.log("Mongo Disconnected"))
  .on("error", (error) => console.log(error));

//Middleware
app.use(cors);
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/static", express.static("static"));

//Model
const DrinksSchema = new mongoose.Schema({
  name: String,
  image: String,
  price: Number,
  Ingredients: String,
});

const Drinks = mongoose.model("Drinks", DrinksSchema);

app.get("/", (req, res) => {
  res.send("Hello World");
});

//Listen
app.listen(PORT, () => console.log(`You're on port ${PORT}`));
