module.exports = (sequelize,DataTypes)=>{
    const Product_in_out_report = sequelize.define("Product_in_out_report",{
          
           
            code_id:{
                 type:DataTypes.STRING(10),
                 primaryKey:true,
                 allowNull:false       
            },
            product_name:{
                type:DataTypes.STRING(250)
            },
       
            in_date:{
                type:DataTypes.STRING(10)
            },
            out_date:{
                type:DataTypes.STRING(10)
            },
            remaining_qty:{
                type:DataTypes.FLOAT
            },
           sum_in_qty:{
                type:DataTypes.FLOAT,
           },
           div_in_price:{
                type:DataTypes.FLOAT,
           },
           sum_in_qty_price_into_cost:{
                type:DataTypes.FLOAT,
           },
      
           sum_out_qty:{
               type:DataTypes.FLOAT,
           },
           div_out_price:{
                type:DataTypes.FLOAT,
           },
          sum_out_qty_price_into_cost:{
            type:DataTypes.FLOAT,
           },
         
    });
   
    return Product_in_out_report;
}