module.exports = (sequelize,DataTypes)=>{
    const Department_expenses = sequelize.define("Department_expenses",{
          
            group_name:{
                 type:DataTypes.STRING(100),
                 primaryKey:true,
                 allowNull:false       
            },
            department:{
                type:DataTypes.STRING(50),
                primaryKey:true,
                allowNull:false   
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
            dept_tot:{
                type:DataTypes.INTEGER
            },
            basic_sal:{
                type:DataTypes.DOUBLE
            },
          
           RP:{
            type:DataTypes.DOUBLE,
           },
           overtime:{
            type:DataTypes.DOUBLE,
           },
           sal_rp_tot:{
            type:DataTypes.DOUBLE,
           },
           var_expense:{
            type:DataTypes.DOUBLE,
           },
           extension:{
            type:DataTypes.DOUBLE,
           },
           var_ex_over_tot:{
            type:DataTypes.DOUBLE,
           },
         data_center_total:{
            type:DataTypes.DOUBLE,
         }
    });
   
    return Department_expenses;
}