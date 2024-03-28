module.exports = (sequelize,DataTypes)=>{
    const Sales_out_costs = sequelize.define("Sales_out_costs",{
          
            code_id:{
                 type:DataTypes.STRING(10),
              
                 allowNull:false       
            },
            sale_acc_name:{
                type:DataTypes.STRING(200)
            },
            out_date:{
                type:DataTypes.STRING(10),
               
                allowNull:false   
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
         
    });
   
    return Sales_out_costs;
}