const express = require("express")
const router = express.Router()
const{Sales_out_costs,sequelize} = require("../models")
const { Op } = require("sequelize");


router.get('/:code_id',async(req,res)=>{
    try {
        const code_id = req.params.code_id
        const listOfSales_out_costs = await Sales_out_costs.findAll(
            {
                attributes:[
                    'code_id',
                    'out_date',
                    'out_qty',
                    'out_price',
                    
                    'out_qty_into_price',
                    
                ],
                where:
                {
                    code_id:{
                        [Op.eq]:code_id
                    }
                  
                }
            }
        )
      
        res.json(listOfSales_out_costs)   
    } catch (error) {
        console.log(error)
    }
   
})




module.exports= router;