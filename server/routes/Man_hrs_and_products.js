const express = require("express")
const router = express.Router()
const{Man_hrs_and_products} = require("../models")
const { Op } = require("sequelize");


router.get('/',async(req,res)=>{
    try {
        const listOfMan_hrs = await Man_hrs_and_products.findAll()
      
        res.json(listOfMan_hrs)   
    } catch (error) {
        console.log(error)
    }
   
});


router.post("/",async(req,res)=>{
    try {
      
        const bodyTale = {
            product_id:req.body.product_id,
            product_name:req.body.product_name,
            standard:req.body.standard,
            batch_size:req.body.batch_size,
            product_group:req.body.product_group,
            synthesis_mn_hr:req.body.synthesis_mn_hr,
            qc_man_hr:req.body.qc_man_hr,
            syn_mn_hr_cal:req.body.syn_mn_hr_cal,
            qc_man_hr_cal:req.body.qc_man_hr_cal,
            createdAt:req.body.createdAt,
            updatedAt:req.body.updatedAt
        };
        await Man_hrs_and_products.create(bodyTale).then(data=>{
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
              message:
                err.message || "Some error occurred while creating the Tutorial."
            });
        });
     
    } catch (error) {
        console.log(error)
    }
   
})

module.exports= router;