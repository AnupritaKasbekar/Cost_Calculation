module.exports = (sequelize,DataTypes)=>{
    const Material_costs = sequelize.define("Material_costs",{
          
            code_id:{
                 type:DataTypes.STRING(10),
                 primaryKey:true,
                 allowNull:false       
            },
            carry_frwd_stock:{
                type: DataTypes.INTEGER,
          },
          in_qty:{
              type: DataTypes.INTEGER,
           },
           out_qty:{
              type: DataTypes.INTEGER,
           },
           in_price:{
              type: DataTypes.DOUBLE,
           },
           out_price:{
              type: DataTypes.DOUBLE,
           },
          in_date:{
              type:DataTypes.STRING(10),
              
          },      
         out_date:{
          type:DataTypes.STRING(10),
         },
         
    });
   
    return Material_costs;
}