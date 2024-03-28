const express = require("express")
const router = express.Router()
const{Depreciation_alls} = require("../models")
const { Op } = require("sequelize");

router.post("/",async(req,res)=>{
    try {
      
        const bodyTale = {
            cat_proid:req.body.cat_proid,
            date_from:req.body.date_from,
            date_to:req.body.date_to,
            Syn_team:req.body.Syn_team,
            np_team:req.body.np_team,
            fp_team:req.body.fp_team,
            common:req.body.common,
            sales_adv:req.body.sales_adv,
            machinary:req.body.machinary,
           
        };
        await Depreciation_alls.create(bodyTale).then(data=>{
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