
const express = require("express")
const router = express.Router()
const{Importsamples} = require("../models")

router.post("/",async(req,res)=>{
    try { 
        console.log(req.body)
        const JsonData = req.body;
       
        console.log("length:"+JsonData.length)    
     for(let i=0;i<JsonData.length;i++)
     {
        const cree_man = {
        ided: JsonData[i].ided,
        fn:JsonData[i].fn,
        ln:JsonData[i].ln,
        }
        await Importsamples.create(cree_man).then(data=>{
            res.send(data)
        }).catch(err=>{
            console.log("err"+err)
        });

     }
       /*const cre_man = {
        ided: JsonData[0].ided,
        fn:JsonData[0].fn,
        ln:JsonData[0].ln,

        
       }*/

       
    
       
       

    
       
       
       
     
    } catch (error) {
        console.log("In catch block:"+error)
    }
   
})
module.exports= router;