module.exports = (sequelize,DataTypes)=>{
    const Manufacturing_cost_by_api_reports = sequelize.define("Manufacturing_cost_by_api_reports",{
           
            product_group:{
                type:DataTypes.STRING(20),
               
            },
            date_from:{
                type:DataTypes.STRING(10),
                primaryKey:true,
                allowNull:false
            },
            date_to:{
                type:DataTypes.STRING(10),
                primaryKey:true,
                allowNull:false
            },
            category:{
                type:DataTypes.STRING(100),
                primaryKey:true,
                allowNull:false
            },
           
           
            manu_cost_fix:{
                type:DataTypes.FLOAT
            },
            manu_cost_var:{
                type:DataTypes.FLOAT
            },
            manu_cost_tot:{
                type:DataTypes.FLOAT
            },
           
            basic_mat_fix:{
                type:DataTypes.FLOAT
            },
            basic_mat_var:{
                type:DataTypes.FLOAT
            },
            basic_mat_tot:{
                     type:DataTypes.FLOAT
            },
            carryovr_fix:{
                type:DataTypes.FLOAT
            },  
            carryovr_var:{
                type:DataTypes.FLOAT
            },
            carryovr_tot:{
                type:DataTypes.FLOAT
            },
            tot_manu_fix:{
                type:DataTypes.FLOAT
            },
            tot_manu_var:{
                type:DataTypes.FLOAT
            },
            tot_manutot:{
                type:DataTypes.FLOAT
            },
            raw_mat_fix:{
                type:DataTypes.FLOAT 
            },
            raw_mat_var:{
                type:DataTypes.FLOAT
            },
            raw_mat_tot:{
                type:DataTypes.FLOAT
            },
            labor_fix:{
                type:DataTypes.FLOAT 
            },
            labor_var:{
                type:DataTypes.FLOAT
            },
            labor_tot:{
                type:DataTypes.FLOAT
            },
            manufacture_expense_fix:{
                type:DataTypes.FLOAT
            },
            manufacture_expense_var:{
                type:DataTypes.FLOAT
            },
            manufacture_expense_tot:{
                type:DataTypes.FLOAT
            },
           
            basic_work_fix:{
                type:DataTypes.FLOAT
            },
            basic_work_var:{
                type:DataTypes.FLOAT
            },
            basic_work_tot:{
                type:DataTypes.FLOAT
            },
            cost_of_making_fix:{
                type:DataTypes.FLOAT
            },
            cost_of_making_var:{
                type:DataTypes.FLOAT
            },
            cost_of_making_tot:{
                type:DataTypes.FLOAT
            },
        
    });
   
    return Manufacturing_cost_by_api_reports;
}