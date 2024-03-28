const express = require("express")
const router = express.Router()
const{Manufacturing_costs} = require("../models")
const { Op } = require("sequelize");

router.get('/',async(req,res)=>{
    try {
        const listOfManufacturing_costs = await Manufacturing_costs.findAll({
            where:{
                date_from:{[Op.like]:'2022%'}
            }
        })
      
        res.json(listOfManufacturing_costs)   
    } catch (error) {
        console.log(error)
    }
   
})

router.get('/23',async(req,res)=>{
    try {
        const listOfManufacturing_costs = await Manufacturing_costs.findAll({
            where:{date_from:{[Op.like]:'2023%'}
            }
        })
      
        res.json(listOfManufacturing_costs)   
    } catch (error) {
        console.log(error)
    }
   
})



module.exports= router;