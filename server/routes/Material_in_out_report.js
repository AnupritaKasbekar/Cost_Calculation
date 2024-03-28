const express = require("express")
const router = express.Router()
const{Material_in_out_report, sequelize} = require("../models")
const { Op, where } = require("sequelize");


router.get('/',async(req,res)=>{
    try {
        const listOfMaterial_in_out_report = await Material_in_out_report.findAll()
      
        res.json(listOfMaterial_in_out_report)   
    } catch (error) {
        console.log(error)
    }
   
})

module.exports= router;