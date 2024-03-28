
const express = require("express")
const router = express.Router()
const{BomsTablesReports_apis,Bom_costs, sequelize} = require("../models")
const { Op,fn,col} = require("sequelize");


router.get('/',async(req,res)=>{
    try {
        const listOfBomsTablesReports = await BomsTablesReports_apis.findAll()
      
        res.json(listOfBomsTablesReports)   
    } catch (error) {
        console.log(error)
    }
   
})

router.get('/n',async(req,res)=>{
    try {
        const listBoms = await BomsTablesReports_apis.findAll({
        attributes:['product_name','product_id'],
           where:{
              product_name:{
                  [Op.ne]:""
              }
           }
        
        })
        
        res.json(listBoms)   
    } catch (error) {
        console.log(error)
    }
   
})
router.get('/:product_id',async(req,res)=>{
    try{
        const product_id = req.params.product_id
      
         const sum_ingredient = await BomsTablesReports_apis.findAll({
             attributes: [[sequelize.fn('sum',sequelize.col('product_cost')),'costofsum']],
               where:
               {
                product_id:{
                    [Op.eq]:product_id
                },
               
               } 
              
         })
         
         res.json(sum_ingredient)   
       
    }
    catch(error){

    }
})
router.get('/byId/:product_id',async(req,res)=>{
    try {
        const product_id = req.params.product_id
        const ingredient = await BomsTablesReports_apis.findAll({
      
           where:{
            product_id:{
                  [Op.eq]:product_id
              }
           }
        
        })

       /* const sum_ingredient = await BomsTablesReports.findAll({
            attributes: [
                'product_id',
                [sequelize.fn('sum', sequelize.col('cost')), 'total_amount'],
              ],
              group: ['product_id'],
              raw: true
        })*/
        
        res.json(ingredient)   
      
        
    } catch (error) {
        console.log(error)
    }
   
})

/* */
router.post("/",async(req,res)=>{
    try {
        const Bomslists = req.body
        await BomsTablesReports_apis.create(Bomslists);
        res.json(Bomslists);
     
    } catch (error) {
        console.log(error)
    }
   
})
/*Delete by id */
router.delete('/byId/:product_id',async(req,res)=>{
    try {
        const product_id = req.params.product_id
        await BomsTablesReports_apis.destroy({
      
           where:{
            product_id:{
                  [Op.eq]:product_id
              }
           }
        
        })
        
        
    } catch (error) {
        console.log(error)
    }
   
})
/* Update by Name */

module.exports= router;