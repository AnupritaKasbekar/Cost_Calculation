module.exports = (sequelize,DataTypes)=>{
    const Bom_prod_mat_rels_ignore = sequelize.define("Bom_prod_mat_rels_ignore",{
          
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
           
            category:{
                type:DataTypes.STRING(2)
            },
            batch_size:{
                type:DataTypes.INTEGER
            },
          
           package_size:{
            type:DataTypes.INTEGER,
           },
           ea_batch:{
            type:DataTypes.FLOAT,
           }
         
    });
   
    return Bom_prod_mat_rels_ignore;
}