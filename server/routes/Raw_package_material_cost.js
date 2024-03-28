const express = require("express")
const router = express.Router()
const{Raw_package_material_cost} = require("../models")
const { Op } = require("sequelize");


router.get('/22',async(req,res)=>{
    try {
        const listOfRaw_package_material_cost = await Raw_package_material_cost.findAll({
            where:{date_from:{[Op.like]:'2022%'}
            }
        })
      
        res.json(listOfRaw_package_material_cost)   
    } catch (error) {
        console.log(error)
    }
   
})


router.get('/23',async(req,res)=>{
    try {
        const listOfRaw_package_material_cost = await Raw_package_material_cost.findAll({
            where:{date_from:{[Op.like]:'2023%'}
            }
        })
      
        res.json(listOfRaw_package_material_cost)   
    } catch (error) {
        console.log(error)
    }
   
})

module.exports= router;