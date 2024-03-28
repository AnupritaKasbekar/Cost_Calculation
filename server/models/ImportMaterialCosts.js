
module.exports = (sequelize,DataTypes)=>{
    const ImportMaterialCosts = sequelize.define("ImportMaterialCosts",{
        category:{
            type:DataTypes.STRING(50),
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
        api_name:{
            type:DataTypes.STRING(10),
            primaryKey:true,
            allowNull:false
        },
        basic_stk:{
            type:DataTypes.DOUBLE,
        },
        in_option:{
            type:DataTypes.DOUBLE,
        },
        in_purchase:{
            type:DataTypes.DOUBLE,
        },
        out_cost_raw:{
            type:DataTypes.DOUBLE,
        },
        out_account:{
            type:DataTypes.DOUBLE,
        },
        disposal_unwanted_itm:{
            type:DataTypes.DOUBLE,
        },
        final_stock:{
            type:DataTypes.DOUBLE,
        }
        
    });
return ImportMaterialCosts;
}