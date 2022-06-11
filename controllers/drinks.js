const Drinks = require("../models/drinksSchema")

const index =  async(req, res)=>{
    try{
       
        res.json(await Drinks.find({}))
    }catch (error){
        //send error
        res.status(400).json(error)
    }
    }

      //Delete
const del =  async(req, res)=>{
    try{
        res.json( await Drinks.findByIdAndDelete(req.params.id))
    }catch(error){
        res.status(400).json(error)
    }
  }

    
  //Drinks Update Route
 const update=  async(req,res) => {
    try {
        res.json( await Drinks.findByIdAndUpdate(req.params.id, req.body, {new: true })
        ) // new:true is not required...
    }catch(error){
        res.status(400).json(error)
    }
  }


    // CREATE
 const create=  async(req, res) => {
    try {
        res.json(await Drinks.create(req.body))
    } catch(error) {
        res.status(400).json(error)
    }
        
  }


  //show drinks indiv
 const show=  async (req, res) => {
    try {
      res.json(await Drinks.findById(req.params.id))
    } catch (error) {
      res.status(400).json(error)
    }
  }

  module.exports = {
    index,
    del,
    update,
    create,
    show,
  };
  