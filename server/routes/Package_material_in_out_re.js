const express = require("express")
const router = express.Router()
const{Package_material_in_out_re, sequelize} = require("../models")
const { Op, where } = require("sequelize");


router.get('/',async(req,res)=>{
    try {
        const listOfPackage_material_in_out_re = await Package_material_in_out_re.findAll()
      
        res.json(listOfPackage_material_in_out_re)   
    } catch (error) {
        console.log(error)
    }
   
})

module.exports= router;