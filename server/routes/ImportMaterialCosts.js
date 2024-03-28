const express = require("express");
const router = express.Router();
const{ImportMaterialCosts, sequelize, Sequelize} = require("../models");
const { Op } = require("sequelize");
/*-----------------YY 2022------------------------------*/
router.get("/all22",async(req,res)=>{
    try {
        const listOfmateria_cost = await ImportMaterialCosts.findAll({
            where:{
                date_from:{[Op.like]:'2022%'},
            }
        })
      
        res.json(listOfmateria_cost)   
    } catch (error) {
        console.log(error)
    }
})

router.post("/",async(req,res)=>{
    try {
        console.log(req.body);
        const JsonData = req.body;

        for(let i=0;i<JsonData.length;i++)
        {
            const body_waste = {
                category:JsonData[i].category,
                date_from:JsonData[i].date_from,
                date_to:JsonData[i].date_to,
                api_name:JsonData[i].api_name,
                basic_stk:JsonData[i].basic_stk,
                in_option:JsonData[i].in_option,
                in_purchase:JsonData[i].in_purchase,
                out_cost_raw:JsonData[i].out_cost_raw,
                out_account:JsonData[i].out_account,
                final_stock:JsonData[i].final_stock,
                
            };
            await ImportMaterialCosts.create(body_waste).then(data=>{
                res.send(data)
            }).catch(err=>{
                console.log("err:"+err)
            });
        }
        
       
    } catch (error) {
        console.log("In catch block:"+error)
    }
})

router.get("/s22",async(req,res)=>{
   try {
    const in_purchase_cost = await ImportMaterialCosts.findAll(
        {
            attributes:[
                [sequelize.fn('sum',sequelize.col('in_purchase')),'sum_in_purchase'],
                [sequelize.fn('sum',(sequelize.col('in_option'))),'sum_in_option'],
                [sequelize.fn('sum',(sequelize.col('out_account'))),'sum_out_acc'],
               
               
            ],
            where:{
                date_from:{[Op.like]:'2022%'},
                category:{

                    [Op.eq]:"원재료"
                }
            }
        }
    )
    res.json(in_purchase_cost)
   } catch (error) {
    console.log(error)
   }
})

router.get("/sum_raw_mat22",async(req,res)=>{
    try {
        const sum_raw_mat_cost = await  ImportMaterialCosts.findAll(
            {
                attributes:[
                    [sequelize.fn('sum',(sequelize.col('basic_stk'))),'basic_stock_sum'],
                    [sequelize.fn('sum',(sequelize.col('in_option'))),'in_option_sum'],
                    [sequelize.fn('sum',(sequelize.col('in_purchase'))),'in_purchase_sum'],
                    [sequelize.fn('sum',(sequelize.col('out_cost_raw'))),'out_cst_sum'],
                    [sequelize.fn('sum',(sequelize.col('out_account'))),'out_account_sum'],
                    [sequelize.fn('sum',(sequelize.col('disposal_unwanted_itm'))),'disposal_sum'],
                   
                ],
                where:{
                    category:{ [Op.eq]:"원재료"},
                    date_from:{[Op.like]:'2022%'}
            }
        }
        )
        res.json(sum_raw_mat_cost)
    } catch (error) {
        console.log(error)
    }
})
router.get("/final_stk22",async(req,res)=>{
    try {
     const in_purchase_cost = await ImportMaterialCosts.findAll(
         {
             attributes:[
                [sequelize.fn('sum',(sequelize.col('basic_stk'))),'sum_basic_stk'],
                [sequelize.fn('sum',(sequelize.col('in_purchase'))),'sum_in_purchase'],
                [sequelize.fn('sum',(sequelize.col('in_option'))),'in_option_sum'],
                [sequelize.fn('sum',(sequelize.col('out_cost_raw'))),'sum_out_cost_raw'],
                [sequelize.fn('sum',(sequelize.col('out_account'))),'sum_out_account'],
                [sequelize.fn('sum',(sequelize.col('disposal_unwanted_itm'))),'disposal_sum'],
                  
              
            ],
             where:{
                 category:{[Op.eq]:"부재료"},
                 date_from:{[Op.like]:'2022%'}
             }
         }
     )
     res.json(in_purchase_cost)
    } catch (error) {
     console.log(error)
    }
 })

router.get("/out_acc22",async(req,res)=>{
    try {
     const in_purchase_cost = await ImportMaterialCosts.findAll(
         {
             attributes:['out_account'],
             where:{
                date_from:{[Op.like]:'2022%'},
                    category:{
                        [Op.eq]:"부재료"
                    },
                    api_name:{
                        [Op.eq]:"완제의약품"
                    },
                
                
             }
         }
     )
     res.json(in_purchase_cost)
    } catch (error) {
     console.log(error)
    }
 })

router.get("/o22",async(req,res)=>{
    try {
     const in_option_cost = await ImportMaterialCosts.findAll(
         {
             attributes:[[sequelize.fn('sum',sequelize.col('in_option')),'sum_in_option']],
             where:{
                date_from:{[Op.like]:'2022%'},
                 category:{
                     [Op.eq]:"원재료"
                 }
             }
         }
     )
     res.json(in_option_cost)
    } catch (error) {
     console.log(error)
    }
 })

 router.get("/a",async(req,res)=>{
    try {
     const in_option_cost = await ImportMaterialCosts.findAll(
         {
             attributes:[[sequelize.fn('sum',(sequelize.where(sequelize.col('in_option'),'+',sequelize.col('basic_stk'),'+',sequelize.col('in_purchase'),'-',sequelize.col('out_cost_raw')))
             ),'sum_in_option']],
             where:{
                 category:{
                     [Op.eq]:"원재료"
                 }
             }
         }
     )
     res.json(in_option_cost)
    } catch (error) {
     console.log(error)
    }
 });

 router.get("/am22",async(req,res)=>{
    try {
     const in_option_cost = await ImportMaterialCosts.findAll(
         {
             attributes:[[sequelize.fn('sum',sequelize.col('in_purchase')),'sum_purchaseamt']],
             where:{
                date_from:{[Op.like]:'2022%'},
                 category:{
                     [Op.eq]:"부재료"
                 }
             }
         }
     )
     res.json(in_option_cost)
    } catch (error) {
     console.log(error)
    }
 })

/*---------------------YY 2023----------------------*/

router.get("/all23",async(req,res)=>{
    try {
        const listOfmateria_cost = await ImportMaterialCosts.findAll({
            where:{
                date_from:{[Op.like]:'2023%'},
            }
        })
      
        res.json(listOfmateria_cost)   
    } catch (error) {
        console.log(error)
    }
})



router.get("/s23",async(req,res)=>{
   try {
    const in_purchase_cost = await ImportMaterialCosts.findAll(
        {
            attributes:[[sequelize.fn('sum',sequelize.col('in_purchase')),'sum_in_purchase']],
            where:{
                date_from:{[Op.like]:'2023%'},
                category:{

                    [Op.eq]:"원재료"
                }
            }
        }
    )
    res.json(in_purchase_cost)
   } catch (error) {
    console.log(error)
   }
})

router.get("/sum_raw_mat23",async(req,res)=>{
    try {
        const sum_raw_mat_cost = await  ImportMaterialCosts.findAll(
            {
                attributes:[
                    [sequelize.fn('sum',(sequelize.col('basic_stk'))),'basic_stock_sum'],
                    [sequelize.fn('sum',(sequelize.col('in_option'))),'in_option_sum'],
                    [sequelize.fn('sum',(sequelize.col('in_purchase'))),'in_purchase_sum'],
                    [sequelize.fn('sum',(sequelize.col('out_cost_raw'))),'out_cst_sum'],
                    [sequelize.fn('sum',(sequelize.col('out_account'))),'out_account_sum'],
                    [sequelize.fn('sum',(sequelize.col('disposal_unwanted_itm'))),'disposal_sum'],
                  
                ],
                where:{
                    category:{ [Op.eq]:"원재료"},
                    date_from:{[Op.like]:'2023%'}
            }
        }
        )
        res.json(sum_raw_mat_cost)
    } catch (error) {
        console.log(error)
    }
})
router.get("/final_stk23",async(req,res)=>{
    try {
     const in_purchase_cost = await ImportMaterialCosts.findAll(
         {
             attributes:[
                [sequelize.fn('sum',(sequelize.col('basic_stk'))),'sum_basic_stk'],
                [sequelize.fn('sum',(sequelize.col('in_purchase'))),'sum_in_purchase'],
                [sequelize.fn('sum',(sequelize.col('out_cost_raw'))),'sum_out_cost_raw'],
                [sequelize.fn('sum',(sequelize.col('out_account'))),'sum_out_account'],
               
              
            ],
             where:{
                 category:{[Op.eq]:"부재료"},
                 date_from:{[Op.like]:'2023%'}
             }
         }
     )
     res.json(in_purchase_cost)
    } catch (error) {
     console.log(error)
    }
 })

router.get("/out_acc23",async(req,res)=>{
    try {
     const in_purchase_cost = await ImportMaterialCosts.findAll(
         {
             attributes:['out_account'],
             where:{
                date_from:{[Op.like]:'2023%'},
                    category:{
                        [Op.eq]:"부재료"
                    },
                    api_name:{
                        [Op.eq]:"완제의약품"
                    },
                
                
             }
         }
     )
     res.json(in_purchase_cost)
    } catch (error) {
     console.log(error)
    }
 })

router.get("/o23",async(req,res)=>{
    try {
     const in_option_cost = await ImportMaterialCosts.findAll(
         {
             attributes:[[sequelize.fn('sum',sequelize.col('out_account')),'sum_in_option']],
             where:{
                date_from:{[Op.like]:'2023%'},
                 category:{
                     [Op.eq]:"원재료"
                 }
             }
         }
     )
     res.json(in_option_cost)
    } catch (error) {
     console.log(error)
    }
 })

 router.get("/a23",async(req,res)=>{
    try {
     const in_option_cost = await ImportMaterialCosts.findAll(
         {
             attributes:[[sequelize.fn('sum',(sequelize.where(sequelize.col('in_option'),'+',sequelize.col('basic_stk'),'+',sequelize.col('in_purchase'),'-',sequelize.col('out_cost_raw')))
             ),'sum_in_option']],
             where:{
                date_from:{[Op.like]:'2023%'},
                 category:{
                     [Op.eq]:"원재료"
                 }
             }
         }
     )
     res.json(in_option_cost)
    } catch (error) {
     console.log(error)
    }
 });

 router.get("/am23",async(req,res)=>{
    try {
     const in_option_cost = await ImportMaterialCosts.findAll(
         {
             attributes:[[sequelize.fn('sum',sequelize.col('in_purchase')),'sum_purchaseamt']],
             where:{
                date_from:{[Op.like]:'2023%'},
                 category:{
                     [Op.eq]:"부재료"
                 }
             }
         }
     )
     res.json(in_option_cost)
    } catch (error) {
     console.log(error)
    }
 })
 /*router.get("/am",async(req,res)=>{
    try {
     const in_option_cost = await ImportMaterialCosts.findAll(
         {
             attributes:['out_account'],
             where:{
                
                 category:{
                     [Op.eq]:"부재료"
                 }
             }
         }
     )
     res.json(in_option_cost)
    } catch (error) {
     console.log(error)
    }
 })*/
module.exports= router;