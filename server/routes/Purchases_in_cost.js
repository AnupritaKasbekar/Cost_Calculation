const express = require("express")
const router = express.Router()
const{Purchases_in_cost,sequelize} = require("../models")
const { Op } = require("sequelize");

router.get('/date/:in_date',async(req,res)=>{
    try {
        const in_date = req.params.in_date
        const end_date = new Date(
            new Date(in_date).getFullYear(),
            new Date(in_date).getMonth()+3,
            new Date(in_date).getDate()
        ).toISOString().slice(0,10).replace(/-/g,".")
        
        const listOfMaterial_date = await Purchases_in_cost.findAll(
            {
                attributes: 
           
                [
                    'code_id',
                    'in_date',
                   
                    [sequelize.fn('sum', sequelize.col('in_qty')), 'in_qty_sum'],
                    [sequelize.fn('sum', sequelize.col('out_qty')), 'out_qty_sum'],
                    [sequelize.fn('avg', sequelize.col('in_price')), 'in_price_savg'],
                    [sequelize.fn('avg', sequelize.col('out_price')), 'out_price_savg'],
                   
                  
                ],
                group:[
                    'code_id'
                ],
               
                where:{
                  
                        [Op.and]: {
                            in_date:{
                                [Op.gte]: in_date,
                            }
                          /*  out_date:{
                                [Op.lte]: end_date
                            }*/
                           
                            
                        }
                        
                  
                    
                }
               
            }
        )
      
        res.json(listOfMaterial_date)   
    } catch (error) {
        console.log(error)
    }
   
})

router.get('/:code_id',async(req,res)=>{
    try {
        const code_id = req.params.code_id
        const listOfMaterial_reports = await Purchases_in_cost.findAll(
            {
                attributes:[
                    'code_id',
                    'in_date',
                    'in_qty',
                    'in_price',
                    'in_qty_into_price',
                    
                ],
                where:
                {
                    code_id:{
                        [Op.eq]:code_id
                    }
                  
                }
            }
        )
      
        res.json(listOfMaterial_reports)   
    } catch (error) {
        console.log(error)
    }
   
})




module.exports= router;