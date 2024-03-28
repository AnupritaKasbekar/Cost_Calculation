const express = require("express")
const router = express.Router()
const{Bom_costs} = require("../models")
const { Op } = require("sequelize");

router.get('/',async(req,res)=>{
    try {
        const listOfBomCost = await Bom_costs.findAll()
      
        res.json(listOfBomCost)   
    } catch (error) {
        console.log(error)
    }
   
})

router.post("/",async(req,res)=>{
    try {
        const BomsCostList = req.body
        await Bom_costs.create(BomsCostList);
        res.json(BomsCostList);
     
    } catch (error) {
        console.log(error)
    }
   
})
module.exports= router;