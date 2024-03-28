const express = require("express")
const router = express.Router()
const{Department_expenses, sequelize} = require("../models")
const { Op } = require("sequelize");

router.post("/post",async(req,res)=>{
    try {
       const bodyTale ={
        group_name:req.body.group_name,
        date_from:req.body.date_from,
        date_to:req.body.date_to,
        department:req.body.department,
        dept_tot:req.body.dept_tot,
        basic_sal:req.body.basic_sal,
        RP:req.body.RP,
        overtime:req.body.overtime,
        sal_rp_tot: parseInt(req.body.basic_sal)+parseInt(req.body.RP)+parseInt(req.body.overtime),
        var_expense:req.body.var_expense,
        extension:req.body.extension,
        var_ex_over_tot:parseInt(req.body.var_expense)+parseInt(req.body.extension),
        data_center_total:parseInt(req.body.basic_sal)+parseInt(req.body.RP)+parseInt(req.body.overtime)+parseInt(req.body.var_expense)+parseInt(req.body.extension)
       };
       await  Department_expenses.create(bodyTale).then(data=>{
        res.send(data)
        
       })
       .catch(err=>{
            res.status(500).send({
                message:
                err.message || "some error occurred while creating the data"
            })
       })
    } catch (error) {
     console.log(error)   
    }
})
router.get('/seoulOff',async(req,res)=>{
    try {
          const listSeoul = await Department_expenses.findAll({
            where :{
                date_from:{[Op.like]:'2022%'},
                department:{[Op.eq] :"서울사무소"}
            }
          })
          res.json(listSeoul)  
    } catch (error) {
        conso9le.log(error)
    }
})
router.get('/22',async(req,res)=>{
    try {
        const listOfDepartment_expenses = await Department_expenses.findAll({
            where:{
                date_from:{[Op.like]:'2022%'},}
        })
      
        res.json(listOfDepartment_expenses)   
    } catch (error) {
        console.log(error)
    }
   
})


router.get('/2022',async(req,res)=>{
    try {
        const listOfDepartment_expenses = await Department_expenses.findAll(
            {
                where:{
                    date_from:{[Op.like]:'2022%'},
                    date_to:{[Op.like]:'2022%'},
                }
            }
        )
      
        res.json(listOfDepartment_expenses)   
    } catch (error) {
        console.log(error)
    }
   
})


router.get('/sum_sal_var22',async(req,res)=>{
    try {
        const listOfDepartment_expenses1 = await Department_expenses.findAll(
            {
                attributes:[[sequelize.fn('sum',(sequelize.where(sequelize.col('basic_sal'),'+',sequelize.col('var_ex_over_tot')))
             ),'sum_sal_var']],
             where:{
                date_from:{[Op.like]:'2022%'},
                 group_name:{
                     [Op.in]:["합성API","완제의약품(10)",
                     "천연물사업(4)","품질","기타생산지원"]
                 }
             }
         
            }
        )
      
        res.json(listOfDepartment_expenses1)   
    } catch (error) {
        console.log(error)
    }
   
})

/*2023*/
router.get('/23',async(req,res)=>{
    try {
        const listOfDepartment_expenses = await Department_expenses.findAll({
            where:{
                date_from:{[Op.like]:'2023%'},}
        })
      
        res.json(listOfDepartment_expenses)   
    } catch (error) {
        console.log(error)
    }
   
})


router.get('/2023',async(req,res)=>{
    try {
        const listOfDepartment_expenses = await Department_expenses.findAll(
            {
                where:{
                    date_from:{[Op.like]:'2023%'},
                    date_to:{[Op.like]:'2023%'},
                }
            }
        )
      
        res.json(listOfDepartment_expenses)   
    } catch (error) {
        console.log(error)
    }
   
})


router.get('/sum_sal_var23',async(req,res)=>{
    try {
        const listOfDepartment_expenses1 = await Department_expenses.findAll(
            {
                attributes:[[sequelize.fn('sum',(sequelize.where(sequelize.col('basic_sal'),'+',sequelize.col('var_ex_over_tot')))
             ),'sum_sal_var']],
             where:{
                date_from:{[Op.like]:'2023%'},
                 group_name:{
                     [Op.in]:["합성API","완제의약품(10)",
                     "천연물사업(4)","품질","기타생산지원"]
                 }
             }
         
            }
        )
      
        res.json(listOfDepartment_expenses1)   
    } catch (error) {
        console.log(error)
    }
   
})
module.exports= router;