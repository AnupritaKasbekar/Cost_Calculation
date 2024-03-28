module.exports = (sequelize,DataTypes)=>{
    const Utility_base = sequelize.define("Utility_base",{
           
            product_id:{
                type:DataTypes.INTEGER,
               
                allowNull:false
            },
           
            process:{
                type:DataTypes.STRING(40)
            },
            process_eng:{
                type:DataTypes.STRING(50)
            },
           
            facility_name:{
                type:DataTypes.STRING(30)
            },
            usage_time:{
                type:DataTypes.INTEGER
            },
            elec_motr_cap:{
                type:DataTypes.FLOAT
            },
            electrometer:{
                type:DataTypes.FLOAT 
            },
            pur_invet_cap:{
                type:DataTypes.INTEGER
            },
            waste_watr:
            {
                type:DataTypes.STRING(20) 
            },
            waste_liq_emisn:{
                type:DataTypes.STRING(20) 
            },
            waste_liq_emisn1:{
                type:DataTypes.STRING(20) 
            }

          
    });
   
    return Utility_base;
}