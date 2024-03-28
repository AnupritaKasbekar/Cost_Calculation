module.exports = (sequelize,DataTypes)=>{
    const Material_reports = sequelize.define("Material_reports",{
          
           
            code_id:{
                 type:DataTypes.STRING(10),
                 primaryKey:true,
                 allowNull:false       
            },
            material_name:{
                type:DataTypes.STRING(250)
            },
         /*   in_date:{
              type:DataTypes.STRING(10),
              primaryKey:true,
              allowNull:false   
               },   
                   */
               purchase_date:{
                    type:DataTypes.STRING(10)
               },
               sale_date:{
                type:DataTypes.STRING(10)
               },
               remaining_qty:{
                    type:DataTypes.FLOAT
               },
           sum_in_qty:{
            type:DataTypes.FLOAT,
           },
           div_in_price:{
            type:DataTypes.FLOAT,
           },
           sum_in_qty_price_into_cost:{
            type:DataTypes.FLOAT,
           },
         /*  out_date:{
            type:DataTypes.STRING(10),
            primaryKey:true,
            allowNull:false   
             },*/
           sum_out_qty:{
               type:DataTypes.FLOAT,
           },
           div_out_price:{
            type:DataTypes.FLOAT,
           },
          sum_out_qty_price_into_cost:{
            type:DataTypes.FLOAT,
           },
           /*in_avg:{
            type:DataTypes.FLOAT,  
           },
           out_avg:{
            type:DataTypes.FLOAT,
           },*/
        
    });
   
    return Material_reports;
}