const express = require("express")
const router = express.Router()
const{Material_names} = require("../models")
const { Op } = require("sequelize");


router.get('/',async(req,res)=>{
    try {
        const listOfMaterial_name = await Material_names.findAll()
      
        res.json(listOfMaterial_name)   
    } catch (error) {
        console.log(error)
    }
   
})

router.post("/",async(req,res)=>{
    try {
        const Material_nameList = req.body
        await Bom_costs.create(Material_nameList);
        res.json(Material_nameList);
     
    } catch (error) {
        console.log(error)
    }
   
})
module.exports= router;