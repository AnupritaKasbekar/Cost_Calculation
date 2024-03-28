const express = require("express")
const router = express.Router()
const{Purchase_sale_together,sequelize} = require("../models")
const { Op } = require("sequelize");



router.get('/',async(req,res)=>{
    try {
        const listOfPurchase_sale_together = await Purchase_sale_together.findAll()
      
        res.json(listOfPurchase_sale_together)   
    } catch (error) {
        console.log(error)
    }
   
})

router.get('/date/stk/:in_date',async(req,res)=>{
    try {
        const out_date = req.params.in_date
        const in_date = new Date(
            new Date(out_date).getFullYear(),
            new Date(out_date).getMonth()-3,
            new Date(out_date).getDate()
        ).toISOString().slice(0,10).replace(/-/g,".")
        console.log("in_date:"+in_date);
        console.log("out_date:"+out_date);
        
        const listOfMaterial_date = await Purchase_sale_together.findAll(
            {
                attributes: 
           
                [
                    'code_id',
                    [sequelize.fn('sum', sequelize.col('in_qty')), 'in_qty_sumstk'],
                    [sequelize.fn('sum', sequelize.col('out_qty')), 'out_qty_sumstk'],
                  
                  
                ],
                group:[
                    'code_id'
                ],
               
                where:{
                  
                        [Op.and]: {
                            in_date:{
                                [Op.gte]: in_date,
                            },
                            out_date:{
                                [Op.lte]: out_date
                            }
                           
                            
                        }
                        
                  
                    
                }
               
            }
        )
      
        res.json(listOfMaterial_date)   
    } catch (error) {
        console.log(error)
    }
   
})


    router.get('/date/:in_date',async(req,res)=>{
    try {
        const in_date = req.params.in_date
        const end_date = new Date(
            new Date(in_date).getFullYear(),
            new Date(in_date).getMonth()+3,
            new Date(in_date).getDate()
        ).toISOString().slice(0,10).replace(/-/g,".")
        
        const listOfMaterial_date = await Purchase_sale_together.findAll(
            {
                attributes: 
           
                [
                    'code_id',
                    'in_date',
                    'out_date',
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
                            },
                            out_date:{
                                [Op.lte]: end_date
                            }
                           
                            
                        }
                        
                  
                    
                }
               
            }
        )
      
        res.json(listOfMaterial_date)   
    } catch (error) {
        console.log(error)
    }
   
})

module.exports= router;

 // }
     //[[ sequelize.fn('YEAR', sequelize.col('created_at')), 'data']] 
               // [sequelize.fn('FORMAT', sequelize.col('purchase_date'), 'yyyy.mm-dd'), 'col_name']
       // [sequelize.fn('Year',sequelize.col('purchase_date')),'start_date']
 // purchase_date:{
                        //[Op.eq]: start_date,
/*Fetch data by date */
//router.get('/date/:purchase_date',async(req,res)=>{
      /*
        table.findAll({where : {"fieldOfYourDate" : {[Op.between] : [startedDate , endDate ]}}})
.then((result) =>  res.status(200).json({data : result}))
.catch((error) =>  res.status(404).json({errorInfo: error}))
        
const where = {
  "date_field": {
    [Op.and]: {
      [Op.gte]: startOfDateRange,
      [Op.lte]: endOfDateRange
    }
  }
}
        */
        //model.findAll({attributes: [[ sequelize.fn('YEAR', sequelize.col('created_at')), 'data']] })
     //const end_date = new Date(new Date(purchase_date)+'' + 24 * 60 * 60 * 1000).toISOString().slice(0, 10).replace(/-/g,".");