module.exports = (sequelize,DataTypes)=>{
    const Purchase_sale_together = sequelize.define("Purchase_sale_together",{
          
            code_id:{
                 type:DataTypes.STRING(10),
              
                 allowNull:false       
            },
            catergory:{
                type:DataTypes.STRING(20)
            },
          
            in_date:{
                type:DataTypes.STRING(10),
               
                allowNull:false   
            },
            out_date:{
                type:DataTypes.STRING(10),
               
                allowNull:false   
            },
          
           in_qty:{
            type:DataTypes.FLOAT,
           },
         
           in_price:{
            type:DataTypes.FLOAT,
           },
           in_qty_into_price:{
            type:DataTypes.FLOAT,
           },
          
        
        out_qty:{
            type:DataTypes.FLOAT,
           },
       out_price:{
        type:DataTypes.FLOAT,
       },
       out_qty_into_price:{
        type:DataTypes.FLOAT,
       },
       remainig_stk_qty:{
        type:DataTypes.FLOAT,
    },
    stk_price:{
        type:DataTypes.FLOAT,
    },
     stk_value:{
        type:DataTypes.FLOAT,
     }
         
    });
   
    return Purchase_sale_together;
}