

module.exports = (sequelize,DataTypes)=>{
    const Waste_cost_details = sequelize.define("Waste_cost_details",{
        category:{
            type:DataTypes.STRING(100),
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
        direct_cost:{
            type:DataTypes.DOUBLE,
        },
        indirect_cost:{
            type:DataTypes.DOUBLE,
        },
        
    });
return Waste_cost_details;
}