const express = require("express")
const router = express.Router()
const{Product_in_out_report, sequelize} = require("../models")
const { Op, where } = require("sequelize");


router.get('/',async(req,res)=>{
    try {
        const listOfProduct_in_out_report = await Product_in_out_report.findAll()
      
        res.json(listOfProduct_in_out_report)   
    } catch (error) {
        console.log(error)
    }
   
})

module.exports= router;