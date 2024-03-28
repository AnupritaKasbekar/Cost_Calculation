module.exports = (sequelize,DataTypes)=>{
    const BomsTablesReports_apis = sequelize.define("BomsTablesReports_apis",{
           
            product_id:{
                type:DataTypes.STRING(20),
                primaryKey:true,
                allowNull:false
            },
            code_id:{
                 type:DataTypes.STRING(10),
                 primaryKey:true,
                 allowNull:false       
            },
            material_name:{
                type:DataTypes.STRING(250)  
            },
            product_name:{
                type:DataTypes.STRING(200)
            },
            batch_size:{
                type:DataTypes.INTEGER
            },
            batch:{
                type:DataTypes.FLOAT
            },
            product_cat:{
                type:DataTypes.STRING(3)
            },
            product_qty:{
                type:DataTypes.FLOAT
            },
            batch_into_kg:{
                type:DataTypes.FLOAT     
            },
            kg_batch:{
                type:DataTypes.FLOAT
            },
          
         
    });
   
    return BomsTablesReports_apis;
}