const express = require("express")
const router = express.Router()
const{Manufacturing_cost_by_api_reports} = require("../models")
const { Op } = require("sequelize");

router.get('/',async(req,res)=>{
    try {
        const listOfManufacturing_cost_by_api_report = await Manufacturing_cost_by_api_reports.findAll()
      
        res.json(listOfManufacturing_cost_by_api_report)   
    } catch (error) {
        console.log(error)
    }
   
})


module.exports= router;