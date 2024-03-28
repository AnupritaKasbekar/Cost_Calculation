const express = require("express")
const router = express.Router()
const{InventoryWebs} = require("../models")
const { Op, where } = require("sequelize");

router.post("/q",async(req,res)=>{
    try {
        const invent = req.body
   await InventoryWebs.create(invent)
   res.json(invent)
    } catch (error) {
        console.log("Error : "+error)
    }
   
})

router.get("/22",async(req,res)=>{
    try {
        const listinvent = await InventoryWebs.findAll({
            where:{
                date_from:{
                    [Op.like]:"2022%"
                }
            }
        })
        res.json(listinvent)
    } catch (error) {
        console.log(error   )
    }
})

router.get("/23",async(req,res)=>{
    try {
        const listinvent = await InventoryWebs.findAll({
            where:{
                date_from:{
                    [Op.like]:"2023%"
                }
            }
        })
        res.json(listinvent)
    } catch (error) {
        console.log(error   )
    }
})
module.exports= router;