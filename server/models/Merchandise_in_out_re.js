module.exports = (sequelize,DataTypes)=>{
    const Merchandise_in_out_re = sequelize.define("Merchandise_in_out_re",{
          
           
            code_id:{
                 type:DataTypes.STRING(10),
                 primaryKey:true,
                 allowNull:false       
            },
            material_name:{
                type:DataTypes.STRING(250)
            },
            material_cat:{
                type:DataTypes.STRING(50)
            },
            option_code:{
                type:DataTypes.STRING(50)
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
   
    return Merchandise_in_out_re; 
}