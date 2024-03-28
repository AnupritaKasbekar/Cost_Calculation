module.exports = (sequelize,DataTypes)=>{
    const Purchase_sale_all_data = sequelize.define("Purchase_sale_all_data",{
          
            code_p_id:{
                 type:DataTypes.STRING(10),
                 allowNull:false       
            },
            in_date:{
                type:DataTypes.STRING(10),   
                allowNull:false   
            },
            option_code_in:{
                type:DataTypes.STRING(205)
            },
            option_code_out:{
                type:DataTypes.STRING(205)
            },
            sale_acc_name:{
                type:DataTypes.STRING(200)
            },
            purchase_acc_name:{
                type:DataTypes.STRING(200),
            },
            out_date:{
                type:DataTypes.STRING(10),
                allowNull:false   
            },
            pm_name:{
                type:DataTypes.STRING(250)  
            },
            opening_stk_qty:{
                type:DataTypes.FLOAT,
            },
            opening_stk_amt:{
                type:DataTypes.FLOAT,
            },

           in_qty:{
            type:DataTypes.FLOAT,
           },
           in_price:{
            type:DataTypes.FLOAT,
           },
           out_qty:{
            type:DataTypes.FLOAT,
           },
           out_price:{
            type:DataTypes.FLOAT,
           },
           in_qty_into_price:{
            type:DataTypes.FLOAT,
           },
           out_qty_into_price:{
            type:DataTypes.FLOAT,
           },
           closing_stock_qty:{
            type:DataTypes.FLOAT,
           },
           closing_stock_amt:{
            type:DataTypes.FLOAT
           } 
    });
   
    return Purchase_sale_all_data;
}