module.exports = (sequelize,DataTypes)=>{
    const Raw_package_material_cost = sequelize.define("Raw_package_material_cost",{
           
            product_id:{
                type:DataTypes.STRING(20),
                primaryKey:true,
                allowNull:false
            },
            date_from:{
                type:DataTypes.STRING(10),
                primaryKey:true,
                allowNull:false
            },
            date_to:{
                type:DataTypes.STRING(10),
                primaryKey:true,
                allowNull:false
            },
            product_name:{
                type:DataTypes.STRING(200),
            },
            unit_of_productn_kg:{
                type:DataTypes.DOUBLE
            },
            batch_num_of_inputs:{
                type:DataTypes.DOUBLE
            },
            raw_material_cost:{
                type:DataTypes.DOUBLE
            },
            package_material_cost:{
                type:DataTypes.DOUBLE
            },
            raw_pack_cost_total:{
                type:DataTypes.DOUBLE
            },
            opening_wip_qty:{
                type:DataTypes.DOUBLE
            },
            opening_wip_price:{
                type:DataTypes.DOUBLE
            },
            production_qty:{
                type:DataTypes.DOUBLE
            },
            
            closing_wip_qty:{
                type:DataTypes.DOUBLE
            },
          
         
    });
   
    return Raw_package_material_cost;
}