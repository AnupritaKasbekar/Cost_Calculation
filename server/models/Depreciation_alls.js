module.exports = (sequelize,DataTypes)=>{
    const Depreciation_alls = sequelize.define("Depreciation_alls",{
          
        cat_proid:{
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
        Syn_team:{
                type:DataTypes.DOUBLE
        },
        np_team:{
                type:DataTypes.DOUBLE
        },
          
        fp_team:{
            type:DataTypes.DOUBLE,
        },
        common:{
            type:DataTypes.DOUBLE,
           },
        sales_adv:{
            type:DataTypes.DOUBLE,
           },
        machinary:{
            type:DataTypes.DOUBLE,
        }
         
    });
   
    return Depreciation_alls;
}