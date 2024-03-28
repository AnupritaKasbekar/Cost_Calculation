const express = require("express")
const router = express.Router()
const{Utility_base} = require("../models")
const { Op } = require("sequelize");

router.get('/',async(req,res)=>{
    try {
        const listOfUtility_base = await Utility_base.findAll()
      
        res.json(listOfUtility_base)   
    } catch (error) {
        console.log(error)
    }
   
});

router.post("/",async(req,res)=>{
    try {
        const Utility_base_lists = req.body
        await Utility_base.create(Utility_base_lists);
        res.json(Utility_base_lists);
     
    } catch (error) {
        console.log(error)
    }
   
})

module.exports= router;