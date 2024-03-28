const express = require("express")
const router = express.Router()
const{Merchandise_in_out_re, sequelize} = require("../models")
const { Op, where } = require("sequelize");


router.get('/',async(req,res)=>{
    try {
        const listOfMerchandise_in_out_re = await Merchandise_in_out_re.findAll()
      
        res.json(listOfMerchandise_in_out_re)   
    } catch (error) {
        console.log(error)
    }
   
})

module.exports= router;