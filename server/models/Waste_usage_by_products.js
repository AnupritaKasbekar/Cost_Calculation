module.exports=(sequelize,DataTypes)=>{
 const Waste_usage_by_products = sequelize.define("Waste_usage_by_products",{
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
    waste_liquid1_price:{
        type:DataTypes.DOUBLE
    },
    waste_liquid1_qty:{
        type:DataTypes.DOUBLE
    },
    waste_liquid2_price:{
        type:DataTypes.DOUBLE
    },
    waste_liquid2_qty:{
        type:DataTypes.DOUBLE
    },
    waste_liquid3_price:{
        type:DataTypes.DOUBLE
    },
    waste_liquid3_qty:{
        type:DataTypes.DOUBLE
    },
    waste_liquid4_price:{
        type:DataTypes.DOUBLE
    },
    waste_liquid4_qty:{
        type:DataTypes.DOUBLE
    },
    waste_liquid5_price:{
        type:DataTypes.DOUBLE
    },
    waste_liquid5_qty:{
        type:DataTypes.DOUBLE
    },
    carbon_price:{
        type:DataTypes.DOUBLE
    },
    carbon_qty:{
        type:DataTypes.DOUBLE
    },
    electricity_usage:{
        type:DataTypes.DOUBLE
    },
    water_usage:{
        type:DataTypes.DOUBLE
    },
    water_waste:{
        type:DataTypes.DOUBLE
    }



 })
    return Waste_usage_by_products;
}