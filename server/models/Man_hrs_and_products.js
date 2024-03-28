module.exports = (sequelize,DataTypes)=>{
    const Man_hrs_and_products = sequelize.define("Man_hrs_and_products",{
           
            product_id:{
                type:DataTypes.STRING(20),
                primaryKey:true,
                allowNull:false
            },
            date_from:{
                type:DataTypes.STRING(10),
                primaryKey:true,
                allowNull:false
            },
            date_from:{
                type:DataTypes.STRING(10),
                primaryKey:true,
                allowNull:false
            },
            product_name:{
                type:DataTypes.STRING(300)
            },
           
            standard:{
                type:DataTypes.STRING(2)
            },
            batch_size:{
                type:DataTypes.INTEGER
            },
            product_group:{
                type:DataTypes.STRING(25)
            },
           
            synthesis_mn_hr:{
                type:DataTypes.FLOAT
            },
            qc_man_hr:{
                type:DataTypes.FLOAT
            },
            Sales_qty:{
                type:DataTypes.FLOAT,
            },
            sales_amt:{
                type:DataTypes.FLOAT,
            },
          
    });
   
    return Man_hrs_and_products;
}