const express = require("express")
const router = express.Router()
const{Material_reports,sequelize} = require("../models")
const { Op } = require("sequelize");


router.get('/:code_id',async(req,res)=>{
    try {
        const code_id = req.params.code_id
        const listOfMaterial_reports = await Material_reports.findAll(
            {
                attributes:[
                    'code_id',
                    'material_name',
                    'purchase_date',
                    'sale_date',
                    'remaining_qty',
                    'sum_in_qty',
                    'div_in_price',
                    'sum_in_qty_price_into_cost',
                    'sum_out_qty',
                    'div_out_price',
                    'sum_out_qty_price_into_cost'
                  
                    
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


router.get('/',async(req,res)=>{
    try {
        const listOfMaterial_reports = await Material_reports.findAll(
            {
                attributes:[
                    'code_id',
                    'material_name',
                    'purchase_date',
                    'sale_date',
                    'remaining_qty',
                    'sum_in_qty',
                    'div_in_price',
                    'sum_in_qty_price_into_cost',
                    'sum_out_qty',
                    'div_out_price',
                    'sum_out_qty_price_into_cost'
                ],
                group:[
                    'code_id', 'material_name'
                ],
            }
        )
      
        res.json(listOfMaterial_reports)   
    } catch (error) {
        console.log(error)
    }
   
})


/*Fetch data by date */
//router.get('/date/:purchase_date',async(req,res)=>{
    router.get('/date/:purchase_date',async(req,res)=>{
    try {
        const purchase_date = req.params.purchase_date
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
      
        const end_date = new Date(
            new Date(purchase_date).getFullYear(),
            new Date(purchase_date).getMonth()+3,
            new Date(purchase_date).getDate()
        ).toISOString().slice(0,10).replace(/-/g,".")
        const listOfMaterial_date = await Material_reports.findAll(
            {
                attributes: 
                //[[ sequelize.fn('YEAR', sequelize.col('created_at')), 'data']] 
               // [sequelize.fn('FORMAT', sequelize.col('purchase_date'), 'yyyy.mm-dd'), 'col_name']
                [
                    'code_id',
                    'material_name',
                    'purchase_date',
                    'sale_date',
                    'remaining_qty',
                    'sum_in_qty',
                    'div_in_price',
                    'sum_in_qty_price_into_cost',
                    'sum_out_qty',
                    'div_out_price',
                    'sum_out_qty_price_into_cost',
                   // [sequelize.fn('Year',sequelize.col('purchase_date')),'start_date']
                  
                ],
               
                where:{
                   // purchase_date:{
                        //[Op.eq]: start_date,
                        [Op.or]: {
                            purchase_date:{
                                [Op.gte]: purchase_date,
                            },
                            sale_date:{
                                [Op.lte]: end_date
                            }
                           
                            
                        }
                        
                   // }
                    
                }
               
            }
        )
      
        res.json(listOfMaterial_date)   
    } catch (error) {
        console.log(error)
    }
   
})

module.exports= router;