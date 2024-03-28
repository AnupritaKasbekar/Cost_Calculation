const express = require("express")
const router = express.Router()
const{Material_costs} = require("../models")
const { Op } = require("sequelize");


router.get('/',async(req,res)=>{
    try {
        const listOfMaterial_costs = await Material_costs.findAll()
      
        res.json(listOfMaterial_costs)   
    } catch (error) {
        console.log(error)
    }
   
})

router.post("/",async(req,res)=>{
    try {
        const Material_costsCostList = req.body
        await Bom_costs.create(BomsCMaterial_costsCostListostList);
        res.json(Material_costsCostList);
     
    } catch (error) {
        console.log(error)
    }
   
})
module.exports= router;