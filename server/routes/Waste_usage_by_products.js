const express = require("express");
const router = express.Router();
const{Waste_usage_by_products} = require("../models");

router.post("/",async(req,res)=>{
    try {
        console.log(req.body);
        const JsonData = req.body;

        for(let i=0;i<JsonData.length;i++)
        {
            const body_waste = {
                product_id:JsonData[i].product_id,
                date_from:JsonData[i].date_from,
                date_to:JsonData[i].date_to,
                waste_liquid1_price:JsonData[i].waste_liquid1_price,
                waste_liquid1_qty:JsonData[i].waste_liquid1_qty,
                waste_liquid2_price:JsonData[i].waste_liquid2_price,
                waste_liquid2_qty:JsonData[i].waste_liquid2_qty,
                waste_liquid3_price:JsonData[i].waste_liquid3_price,
                waste_liquid3_qty:JsonData[i].waste_liquid3_qty,
                waste_liquid4_price:JsonData[i].waste_liquid4_price,
                waste_liquid4_qty:JsonData[i].waste_liquid4_qty,
                waste_liquid5_price:JsonData[i].waste_liquid5_price,
                waste_liquid5_qty:JsonData[i].waste_liquid5_qty,
                carbon_price:JsonData[i].carbon_price,
                carbon_qty:JsonData[i].carbon_qty,
                electricity_usage:JsonData[i].electricity_usage,
                water_usage:JsonData[i].water_usage,
                water_waste:JsonData[i].water_waste
                
            };
            await Waste_usage_by_products.create(body_waste).then(data=>{
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