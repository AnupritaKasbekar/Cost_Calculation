module.exports = (sequalize,DataTypes)=>{
    const InventoryWebs = sequalize.define("InventoryWebs",{
        othr_sales:{
            type:DataTypes.DOUBLE

        },   
        date_from:{
            type:DataTypes.STRING(10),
           
            allowNull:false
        },
        date_to:{
            type:DataTypes.STRING(10),
            
            allowNull:false
        },
        cost_of_good_sold:{
            type:DataTypes.DOUBLE

        },
        basic_prod_inventory_amt:{
            type:DataTypes.DOUBLE
        },
        curr_prod_purchase_amt:{
            type:DataTypes.DOUBLE
        },
        end_prod_inventory:{
            type:DataTypes.DOUBLE
        },
        trans_amt_anthr_acc:{
            type:DataTypes.DOUBLE
        },
        beg_othr_invent_asset_invent_amt:{
            type:DataTypes.DOUBLE
        },
        manu_cst_othr_asset:{
            type:DataTypes.DOUBLE
        },
        othr_invent_eop:{
            type:DataTypes.DOUBLE
        }
    });
    return InventoryWebs;
}