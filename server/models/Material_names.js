module.exports = (sequelize,DataTypes)=>{
    const Material_names = sequelize.define("Material_names",{
          
            code_id:{
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
          
         
    });
   
    return Material_names;
}