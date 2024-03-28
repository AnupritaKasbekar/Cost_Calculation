module.exports = (sequelize,DataTypes)=>{
    const Purchases_in_cost = sequelize.define("Purchases_in_cost",{
          
            code_id:{
                 type:DataTypes.STRING(10),
              
                 allowNull:false       
            },
            in_date:{
                type:DataTypes.STRING(10),
               
                allowNull:false   
            },
            purchase_acc_name:{
                type:DataTypes.STRING(200),
            },
          
           in_qty:{
            type:DataTypes.FLOAT,
           },
           
           in_price:{
            type:DataTypes.FLOAT,
           },
           out_qty:{
            type:DataTypes.FLOAT,
           },
           out_price:{
            type:DataTypes.FLOAT,
           },
           in_qty_into_price:{
            type:DataTypes.FLOAT,
           }
         
    });
   
    return Purchases_in_cost;
}