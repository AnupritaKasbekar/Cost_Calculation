module.exports = (sequelize,DataTypes)=>{
    const Bom_costs_ignore = sequelize.define("Bom_costs_ignore",{
          
            code_id:{
                 type:DataTypes.STRING(10),
                 primaryKey:true,
                 allowNull:false       
            },
            yyyymm:{
                type:DataTypes.STRING(10),
                primaryKey:true,
                allowNull:false   
            },
            material_cat:{
                type:DataTypes.STRING(50)
            },
            material_name:{
                type:DataTypes.STRING(250)
            },
          
           quantity:{
            type:DataTypes.FLOAT,
           },
           purchase_cost:{
            type:DataTypes.FLOAT,
           }
         
    });
   
    return Bom_costs_ignore;
}