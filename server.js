//Dependencies
require("dotenv").config();

const PORT = process.env.PORT|| 3003

const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const morgan = require("morgan");



// Database Connection
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

//Save the connection
const cxn = mongoose.connection


//Setup mongoose connection messages
cxn.on("open", () => console.log("The Mongo Connection is Open"))
.on("close", () => console.log("The Mongo Connection is Closed"))
.on("error", (err)=> console.log(err))





Middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use("/static", express.static("static")) 
app.use(cors());
app.use(morgan('dev'))



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
app.get("/drinks", async(req, res)=>{
  try{
     
      res.json(await Drinks.find({}))
  }catch (error){
      //send error
      res.status(400).json(error)
  }
  })

  // CREATE
app.post("/drinks", async(req, res) => {
  try {
      res.json(await Drinks.create(req.body))
  } catch(error) {
      res.status(400).json(error)
  }
      
})
//Delete
app.delete("/drinks/:id", async(req, res)=>{
  try{
      res.json( await Drinks.findByIdAndDelete(req.params.id))
  }catch(error){
      res.status(400).json(error)
  }
})
      


//Drinks Update Route
app.put("/drinks/:id", async(req,res) => {
  try {
      res.json( await Drinks.findByIdAndUpdate(req.params.id, req.body, {new: true })
      ) // new:true is not required...
  }catch(error){
      res.status(400).json(error)
  }
})
//show drinks indiv
app.get("/drinks/:id", async (req, res) => {
  try {
    res.json(await Drinks.findById(req.params.id))
  } catch (error) {
    res.status(400).json(error)
  }
})


// // INDEX
// app.get("/drinks", async(req, res) => {
//     try {
//         res.json(await Drinks.find({}))
//     } catch (error) {
//         res.status(400).json(error)
//     }
// })

// // Delete 
// app.delete("/drink/:id", async(req, res) => {
//     try {
//         res.json(await Drink.findByIdAndDelete(req.params.id))
//     } catch (error) {
//         res.status(400).json(error)
//     }
// } )

// // UPDATE 
// app.put("/drink/:id", async (req, res) => {
//     try {
//         res.json(await Drink.findByIdAndUpdate(req.params.id, req.body, {new:true}))
//     } catch (error) {
//         res.status(400).json(error)
//     }
// })

// // CREATE 
// app.post("/drinks", async (req, res) => {
//     try {
//         res.json(await Drink.create (req.body))
//     } catch (error) {
//         res.status(400).json(error)
//     }
// })

// // SHOW
// app.get("/drinks/:id", async (req, res) => {
//     try {
//         res.json(await Drinks.findById (req.params.id))
//     } catch (error) {
//         res.status(400).json(error)
//     }
// })






//Listen
app.listen(PORT, () => console.log(`You're on port ${PORT}`));
