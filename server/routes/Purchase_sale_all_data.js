const express = require("express")
const router = express.Router()
const{Purchase_sale_all_data, sequelize} = require("../models")
const { Op, where } = require("sequelize");

router.get('/avg/:code_id',async(req,res)=>{
    try {
        const code_id = req.params.code_id
        const listOfInOut = await Purchase_sale_all_data.findAll({
            attributes:
            [
               /* [sequelize.fn('avg',sequelize.col('in_price')),'in_avg_price']*/
               'pm_name'
            ],
            limit:1,
            where:{
                code_p_id:{
                    [Op.eq]:code_id
                }
            }
        }
           
        )
        res.json(listOfInOut);
    } catch (error) {
        console.log(error);
    }
})

router.get('/:code_id',async(req,res)=>{
    try {
        const code_id = req.params.code_id
        const listOfInOut = await Purchase_sale_all_data.findAll({
            where:{
                code_p_id:{
                    [Op.eq]:code_id
                }
            }
        }
           
        )
        res.json(listOfInOut);
    } catch (error) {
        console.log(error);
    }
})
router.get('/',async(req,res)=>{
    try {
        const listOfPurchase_sale_all_datat = await Purchase_sale_all_data.findAll()
      
        res.json(listOfPurchase_sale_all_datat)   
    } catch (error) {
        console.log(error)
    }
   
})

module.exports= router;