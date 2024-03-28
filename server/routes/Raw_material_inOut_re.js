const express = require("express")
const router = express.Router()
const{Raw_material_inOut_re, sequelize} = require("../models")
const { Op, where } = require("sequelize");


router.get('/',async(req,res)=>{
    try {
        const listOfRaw_material_inOut_re = await Raw_material_inOut_re.findAll()
      
        res.json(listOfRaw_material_inOut_re)   
    } catch (error) {
        console.log(error)
    }
   
})

module.exports= router;