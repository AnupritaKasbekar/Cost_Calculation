const express = require("express");
const router = express.Router();
const{Waste_cost_details} = require("../models");

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
                direct_cost:JsonData[i].direct_cost,
                indirect_cost:JsonData[i].indirect_cost,
               
                
            };
            await Waste_cost_details.create(body_waste).then(data=>{
                res.send(data)
            }).catch(err=>{
                console.log("err:"+err)
            });
        }
        
       
    } catch (error) {
        console.log("In catch block:"+error)
    }
})
module.exports= router;