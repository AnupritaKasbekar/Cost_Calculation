const express = require("express")
const router = express.Router()
const{Material_names,Man_hrs_and_product_main_table,sequelize} = require("../models")
const { Op, where } = require("sequelize");
/*
 attributes:[
                'product_name',
                'material_pack_total',
                'labor_dir_cost_mn_hr_fix_cost',
                'labor_dir_cost_mn_hr_var_cost',
                'depreciation_sum',
                'rnd_sum',
                'total_fix_var_waste_disposal_cost',
                'elec_fix_var_tot_cost',
                'benefit_tot',
                'payment_tot',
                
            ]
*/

/*======================생산 Man-hour============================*/
router.get('/p_mnhrs22',async(req,res)=>{
    try {
        const listOfbatchNoSaleY = await Man_hrs_and_product_main_table.findAll({
            attributes:[
                'product_name',
                'date_from',
                'date_to',
                'batch_size',
                'batch',
                'synthesis_mn_hr',
                'syn_mn_into_batch',
                'sec_qc_percen',
                'syn_pilot_perc',
                'syn_art_perc',
                'by_busi_perc',
                'syn_total',
                'qc_man_hr',
                'qc_man_into_batch',
                'qc_total',
                'Sales_qty',
                'sales_amt',
                'sales_product',
                'sale_by_busins',
                'sale_total',
                'prod_amt',
                'prod_sec', 
                'prod_syn_pilot',
                'prod_tot',
                'opening_stk_qty', 
                'opening_st_amt',
                'opening_wip_qty',
                'opening_wip_fix_amt', 
                'opening_wip_variable_amt', 
                'opening_wip_amt',
                'product_in',
                'material_cost', 
                'packing_material' ,
                'material_pack_tot',
                'labor_dir_cost_mn_hr_fix_cost', 
                'labor_dir_cost_mn_hr_var_cost',
                'labor_cost_qc_mn_hr_fix_cost',
                'labor_cost_qc_mn_hr_var_cost',
                'labor_cost_support_dept_fix_cost',
                'labor_cost_support_dept_var_cost',
                'tot_fix_cost', 
                'tot_var_cost',
                'rndFixedlabor', 
                'rndlabor_cost_variation',
                'business_fixed_costs',
                'common_fixed_cost', 
                'fixed_ratio_sum',
                'variable_sum', 
                'rnd_sum', 
                'depreciation_by_business_sale', 
                'depreciation_by_product_direct',
                'depreciation_common_by_sale' ,
                'depreciation_sum',
                'food_expense',
                'common_benefits',
                'benefit_tot',
                'direct_payment', 
                'payment_common', 
                'payment_tot' ,
                'repaire_prod_direct',
                'repaire_by_business', 
                'repaire_common',
                'repair_total' ,
                'fuel_dir_cost', 
                'consumable_dir_prod_cost',
                'consumable_by_busins',
                'consumable_commn_sale',
                'consumable_sum',
                'tax_by_sale',
                'tax_by_common', 
                'tax_total', 
                'insurance_dir_sale',
                'insurance_commn_sale', 
                'insurance_tot',
                'education_fee',
                'vechicle_maint_cost', 
                'book_print_fee',
                'travel_expense_direct',
                'travel_expense_common', 
                'teavel_expense_tot',
                'enteritainment_fee', 
                'communitaction_cost', 
                'rent_direct', 
                'rent_common', 
                'rent_tot',  
                'transport_direct',  
                'transport_common', 
                'transport_tot',
                'overall_tot_fix_cost', 
                'overall_tot_var_cost', 
                'overall_total', 
                'waste_liquid_direct', 
                'activated_carbon_earth_usage', 
                'activate_carbon_item_direct', 
                'common_waste_organic', 
                'water_waste_plant', 
                'gelatin_fp',
                'general_garbage', 
                'wastewater_batch', 
                'wastewater',
                'wastewater_perc', 
                'ww_treat_prod_amt', 
                'indus_park_basic_fixed_ratio_sum', 
                'indus_ww_prod_amt', 
                'waste_disposal_var_cost_sum', 
                'total_fix_var_waste_disposal_cost', 
                'electric_cost_by_business_fix', 
                'elec_cost_three_fact_fix', 
                'elec_power_usage', 
                'electric_cost_amt', 
                'elec_cost_amt_per', 
                'elec_costprod_amt', 
                'elec_cost_cmmn_var', 
                'elec_cost_fix_ratio_sum', 
                'elec_var_cost', 
                'elec_fix_var_tot_cost', 
                'pur_wastewatr_batch', 
                'pur_wastewatr_vol', 
                'pur_wastewatr_vol_per', 
                'waste_utility_dir', 
                'waste_utility_comn_expense', 
                'water_utility_tot', 
                'tot_manu_fix_cost', 
                'tot_manu_var_cost', 
                'tot_manu_tot', 
                'manu_fix_cost', 
                'manu_var_cost', 
                'tot_manu_cost', 
                'dispatch_qty', 
                'dispatch_cost_sold', 
                'dispatch_amt', 
                'carry_ovr_stk_qty', 
                'carry_ovr_stk_amt', 
                'carry_ovr_mat_fix_cost', 
                'carry_ovr_mat_var', 
                'carryovr_mat_tot',
                'carryovr_qty'
                
            ],
            where:{
                date_from:{[Op.like]:'2022%'},
                product_group:{[Op.eq]:"Sys_api"}
            }
        })
        res.json(listOfbatchNoSaleY)
    } catch (error) {
        console.log(error)
    }
})

router.get('/pp_mnhrs22',async(req,res)=>{
    try {
        const listOfbatchNoSaleY = await Man_hrs_and_product_main_table.findAll({
            attributes:[
                'product_name',
                'date_from',
                'date_to',
                'batch_size',
                'batch',
                'synthesis_mn_hr',
                'syn_mn_into_batch',
                'sec_qc_percen',
                'syn_pilot_perc',
                'syn_art_perc',
                'by_busi_perc',
                'syn_total',
                'qc_man_hr',
                'qc_man_into_batch',
                'qc_total',
                'Sales_qty',
                'sales_amt',
                'sales_product',
                'sale_by_busins',
                'sale_total',
                'prod_amt',
                'prod_sec', 
                'prod_syn_pilot',
                'prod_tot',
                'opening_stk_qty', 
                'opening_st_amt',
                'opening_wip_qty',
                'opening_wip_fix_amt', 
                'opening_wip_variable_amt', 
                'opening_wip_amt',
                'product_in',
                'material_cost', 
                'packing_material' ,
                'material_pack_tot',
                'labor_dir_cost_mn_hr_fix_cost', 
                'labor_dir_cost_mn_hr_var_cost',
                'labor_cost_qc_mn_hr_fix_cost',
                'labor_cost_qc_mn_hr_var_cost',
                'labor_cost_support_dept_fix_cost',
                'labor_cost_support_dept_var_cost',
                'tot_fix_cost', 
                'tot_var_cost',
                'rndFixedlabor', 
                'rndlabor_cost_variation',
                'business_fixed_costs',
                'common_fixed_cost', 
                'fixed_ratio_sum',
                'variable_sum', 
                'rnd_sum', 
                'depreciation_by_business_sale', 
                'depreciation_by_product_direct',
                'depreciation_common_by_sale' ,
                'depreciation_sum',
                'food_expense',
                'common_benefits',
                'benefit_tot',
                'direct_payment', 
                'payment_common', 
                'payment_tot' ,
                'repaire_prod_direct',
                'repaire_by_business', 
                'repaire_common',
                'repair_total' ,
                'fuel_dir_cost', 
                'consumable_dir_prod_cost',
                'consumable_by_busins',
                'consumable_commn_sale',
                'consumable_sum',
                'tax_by_sale',
                'tax_by_common', 
                'tax_total', 
                'insurance_dir_sale',
                'insurance_commn_sale', 
                'insurance_tot',
                'education_fee',
                'vechicle_maint_cost', 
                'book_print_fee',
                'travel_expense_direct',
                'travel_expense_common', 
                'teavel_expense_tot',
                'enteritainment_fee', 
                'communitaction_cost', 
                'rent_direct', 
                'rent_common', 
                'rent_tot',  
                'transport_direct',  
                'transport_common', 
                'transport_tot',
                'overall_tot_fix_cost', 
                'overall_tot_var_cost', 
                'overall_total', 
                'waste_liquid_direct', 
                'activated_carbon_earth_usage', 
                'activate_carbon_item_direct', 
                'common_waste_organic', 
                'water_waste_plant', 
                'gelatin_fp',
                'general_garbage', 
                'wastewater_batch', 
                'wastewater',
                'wastewater_perc', 
                'ww_treat_prod_amt', 
                'indus_park_basic_fixed_ratio_sum', 
                'indus_ww_prod_amt', 
                'waste_disposal_var_cost_sum', 
                'total_fix_var_waste_disposal_cost', 
                'electric_cost_by_business_fix', 
                'elec_cost_three_fact_fix', 
                'elec_power_usage', 
                'electric_cost_amt', 
                'elec_cost_amt_per', 
                'elec_costprod_amt', 
                'elec_cost_cmmn_var', 
                'elec_cost_fix_ratio_sum', 
                'elec_var_cost', 
                'elec_fix_var_tot_cost', 
                'pur_wastewatr_batch', 
                'pur_wastewatr_vol', 
                'pur_wastewatr_vol_per', 
                'waste_utility_dir', 
                'waste_utility_comn_expense', 
                'water_utility_tot', 
                'tot_manu_fix_cost', 
                'tot_manu_var_cost', 
                'tot_manu_tot', 
                'manu_fix_cost', 
                'manu_var_cost', 
                'tot_manu_cost', 
                'dispatch_qty', 
                'dispatch_cost_sold', 
                'dispatch_amt', 
                'carry_ovr_stk_qty', 
                'carry_ovr_stk_amt', 
                'carry_ovr_mat_fix_cost', 
                'carry_ovr_mat_var', 
                'carryovr_mat_tot',
                'carryovr_qty'
                
            ],
            where:{
                date_from:{[Op.like]:'2022%'},
                product_group:{[Op.eq]:"product_api"}
            }
        })
        res.json(listOfbatchNoSaleY)
    } catch (error) {
        console.log(error)
    }
})

router.get('/ppilot_mnhrs22',async(req,res)=>{
    try {
        const listOfbatchNoSaleY = await Man_hrs_and_product_main_table.findAll({
            attributes:[
                'product_name',
                'date_from',
                'date_to',
                'batch_size',
                'batch',
                'synthesis_mn_hr',
                'syn_mn_into_batch',
                'sec_qc_percen',
                'syn_pilot_perc',
                'syn_art_perc',
                'by_busi_perc',
                'syn_total',
                'qc_man_hr',
                'qc_man_into_batch',
                'qc_total',
                'Sales_qty',
                'sales_amt',
                'sales_product',
                'sale_by_busins',
                'sale_total',
                'prod_amt',
                'prod_sec', 
                'prod_syn_pilot',
                'prod_tot',
                'opening_stk_qty', 
                'opening_st_amt',
                'opening_wip_qty',
                'opening_wip_fix_amt', 
                'opening_wip_variable_amt', 
                'opening_wip_amt',
                'product_in',
                'material_cost', 
                'packing_material' ,
                'material_pack_tot',
                'labor_dir_cost_mn_hr_fix_cost', 
                'labor_dir_cost_mn_hr_var_cost',
                'labor_cost_qc_mn_hr_fix_cost',
                'labor_cost_qc_mn_hr_var_cost',
                'labor_cost_support_dept_fix_cost',
                'labor_cost_support_dept_var_cost',
                'tot_fix_cost', 
                'tot_var_cost',
                'rndFixedlabor', 
                'rndlabor_cost_variation',
                'business_fixed_costs',
                'common_fixed_cost', 
                'fixed_ratio_sum',
                'variable_sum', 
                'rnd_sum', 
                'depreciation_by_business_sale', 
                'depreciation_by_product_direct',
                'depreciation_common_by_sale' ,
                'depreciation_sum',
                'food_expense',
                'common_benefits',
                'benefit_tot',
                'direct_payment', 
                'payment_common', 
                'payment_tot' ,
                'repaire_prod_direct',
                'repaire_by_business', 
                'repaire_common',
                'repair_total' ,
                'fuel_dir_cost', 
                'consumable_dir_prod_cost',
                'consumable_by_busins',
                'consumable_commn_sale',
                'consumable_sum',
                'tax_by_sale',
                'tax_by_common', 
                'tax_total', 
                'insurance_dir_sale',
                'insurance_commn_sale', 
                'insurance_tot',
                'education_fee',
                'vechicle_maint_cost', 
                'book_print_fee',
                'travel_expense_direct',
                'travel_expense_common', 
                'teavel_expense_tot',
                'enteritainment_fee', 
                'communitaction_cost', 
                'rent_direct', 
                'rent_common', 
                'rent_tot',  
                'transport_direct',  
                'transport_common', 
                'transport_tot',
                'overall_tot_fix_cost', 
                'overall_tot_var_cost', 
                'overall_total', 
                'waste_liquid_direct', 
                'activated_carbon_earth_usage', 
                'activate_carbon_item_direct', 
                'common_waste_organic', 
                'water_waste_plant', 
                'gelatin_fp',
                'general_garbage', 
                'wastewater_batch', 
                'wastewater',
                'wastewater_perc', 
                'ww_treat_prod_amt', 
                'indus_park_basic_fixed_ratio_sum', 
                'indus_ww_prod_amt', 
                'waste_disposal_var_cost_sum', 
                'total_fix_var_waste_disposal_cost', 
                'electric_cost_by_business_fix', 
                'elec_cost_three_fact_fix', 
                'elec_power_usage', 
                'electric_cost_amt', 
                'elec_cost_amt_per', 
                'elec_costprod_amt', 
                'elec_cost_cmmn_var', 
                'elec_cost_fix_ratio_sum', 
                'elec_var_cost', 
                'elec_fix_var_tot_cost', 
                'pur_wastewatr_batch', 
                'pur_wastewatr_vol', 
                'pur_wastewatr_vol_per', 
                'waste_utility_dir', 
                'waste_utility_comn_expense', 
                'water_utility_tot', 
                'tot_manu_fix_cost', 
                'tot_manu_var_cost', 
                'tot_manu_tot', 
                'manu_fix_cost', 
                'manu_var_cost', 
                'tot_manu_cost', 
                'dispatch_qty', 
                'dispatch_cost_sold', 
                'dispatch_amt', 
                'carry_ovr_stk_qty', 
                'carry_ovr_stk_amt', 
                'carry_ovr_mat_fix_cost', 
                'carry_ovr_mat_var', 
                'carryovr_mat_tot',
                'carryovr_qty'
                
                
            ],
            where:{
                date_from:{[Op.like]:'2022%'},
                product_group:{[Op.eq]:"pilot"}
            }
        })
        res.json(listOfbatchNoSaleY)
    } catch (error) {
        console.log(error)
    }
})

router.get('/ph_mnhrs22',async(req,res)=>{
    try {
        const listOfbatchNoSaleY = await Man_hrs_and_product_main_table.findAll({
            attributes:[
                'product_name',
                'date_from',
                'date_to',
                'batch_size',
                'batch',
                'synthesis_mn_hr',
                'syn_mn_into_batch',
                'sec_qc_percen',
                'syn_pilot_perc',
                'syn_art_perc',
                'by_busi_perc',
                'syn_total',
                'qc_man_hr',
                'qc_man_into_batch',
                'qc_total',
                'Sales_qty',
                'sales_amt',
                'sales_product',
                'sale_by_busins',
                'sale_total',
                'prod_amt',
                'prod_sec', 
                'prod_syn_pilot',
                'prod_tot',
                'opening_stk_qty', 
                'opening_st_amt',
                'opening_wip_qty',
                'opening_wip_fix_amt', 
                'opening_wip_variable_amt', 
                'opening_wip_amt',
                'product_in',
                'material_cost', 
                'packing_material' ,
                'material_pack_tot',
                'labor_dir_cost_mn_hr_fix_cost', 
                'labor_dir_cost_mn_hr_var_cost',
                'labor_cost_qc_mn_hr_fix_cost',
                'labor_cost_qc_mn_hr_var_cost',
                'labor_cost_support_dept_fix_cost',
                'labor_cost_support_dept_var_cost',
                'tot_fix_cost', 
                'tot_var_cost',
                'rndFixedlabor', 
                'rndlabor_cost_variation',
                'business_fixed_costs',
                'common_fixed_cost', 
                'fixed_ratio_sum',
                'variable_sum', 
                'rnd_sum', 
                'depreciation_by_business_sale', 
                'depreciation_by_product_direct',
                'depreciation_common_by_sale' ,
                'depreciation_sum',
                'food_expense',
                'common_benefits',
                'benefit_tot',
                'direct_payment', 
                'payment_common', 
                'payment_tot' ,
                'repaire_prod_direct',
                'repaire_by_business', 
                'repaire_common',
                'repair_total' ,
                'fuel_dir_cost', 
                'consumable_dir_prod_cost',
                'consumable_by_busins',
                'consumable_commn_sale',
                'consumable_sum',
                'tax_by_sale',
                'tax_by_common', 
                'tax_total', 
                'insurance_dir_sale',
                'insurance_commn_sale', 
                'insurance_tot',
                'education_fee',
                'vechicle_maint_cost', 
                'book_print_fee',
                'travel_expense_direct',
                'travel_expense_common', 
                'teavel_expense_tot',
                'enteritainment_fee', 
                'communitaction_cost', 
                'rent_direct', 
                'rent_common', 
                'rent_tot',  
                'transport_direct',  
                'transport_common', 
                'transport_tot',
                'overall_tot_fix_cost', 
                'overall_tot_var_cost', 
                'overall_total', 
                'waste_liquid_direct', 
                'activated_carbon_earth_usage', 
                'activate_carbon_item_direct', 
                'common_waste_organic', 
                'water_waste_plant', 
                'gelatin_fp',
                'general_garbage', 
                'wastewater_batch', 
                'wastewater',
                'wastewater_perc', 
                'ww_treat_prod_amt', 
                'indus_park_basic_fixed_ratio_sum', 
                'indus_ww_prod_amt', 
                'waste_disposal_var_cost_sum', 
                'total_fix_var_waste_disposal_cost', 
                'electric_cost_by_business_fix', 
                'elec_cost_three_fact_fix', 
                'elec_power_usage', 
                'electric_cost_amt', 
                'elec_cost_amt_per', 
                'elec_costprod_amt', 
                'elec_cost_cmmn_var', 
                'elec_cost_fix_ratio_sum', 
                'elec_var_cost', 
                'elec_fix_var_tot_cost', 
                'pur_wastewatr_batch', 
                'pur_wastewatr_vol', 
                'pur_wastewatr_vol_per', 
                'waste_utility_dir', 
                'waste_utility_comn_expense', 
                'water_utility_tot', 
                'tot_manu_fix_cost', 
                'tot_manu_var_cost', 
                'tot_manu_tot', 
                'manu_fix_cost', 
                'manu_var_cost', 
                'tot_manu_cost', 
                'dispatch_qty', 
                'dispatch_cost_sold', 
                'dispatch_amt', 
                'carry_ovr_stk_qty', 
                'carry_ovr_stk_amt', 
                'carry_ovr_mat_fix_cost', 
                'carry_ovr_mat_var', 
                'carryovr_mat_tot',
                'carryovr_qty'
                
                
            ],
            where:{
                date_from:{[Op.like]:'2022%'},
                product_group:{[Op.eq]:"her_med"}
            }
        })
        res.json(listOfbatchNoSaleY)
    } catch (error) {
        console.log(error)
    }
})

router.get('/pn_mnhrs22',async(req,res)=>{
    try {
        const listOfbatchNoSaleY = await Man_hrs_and_product_main_table.findAll({
            attributes:[
                'product_name',
                'date_from',
                'date_to',
                'batch_size',
                'batch',
                'synthesis_mn_hr',
                'syn_mn_into_batch',
                'sec_qc_percen',
                'syn_pilot_perc',
                'syn_art_perc',
                'by_busi_perc',
                'syn_total',
                'qc_man_hr',
                'qc_man_into_batch',
                'qc_total',
                'Sales_qty',
                'sales_amt',
                'sales_product',
                'sale_by_busins',
                'sale_total',
                'prod_amt',
                'prod_sec', 
                'prod_syn_pilot',
                'prod_tot',
                'opening_stk_qty', 
                'opening_st_amt',
                'opening_wip_qty',
                'opening_wip_fix_amt', 
                'opening_wip_variable_amt', 
                'opening_wip_amt',
                'product_in',
                'material_cost', 
                'packing_material' ,
                'material_pack_tot',
                'labor_dir_cost_mn_hr_fix_cost', 
                'labor_dir_cost_mn_hr_var_cost',
                'labor_cost_qc_mn_hr_fix_cost',
                'labor_cost_qc_mn_hr_var_cost',
                'labor_cost_support_dept_fix_cost',
                'labor_cost_support_dept_var_cost',
                'tot_fix_cost', 
                'tot_var_cost',
                'rndFixedlabor', 
                'rndlabor_cost_variation',
                'business_fixed_costs',
                'common_fixed_cost', 
                'fixed_ratio_sum',
                'variable_sum', 
                'rnd_sum', 
                'depreciation_by_business_sale', 
                'depreciation_by_product_direct',
                'depreciation_common_by_sale' ,
                'depreciation_sum',
                'food_expense',
                'common_benefits',
                'benefit_tot',
                'direct_payment', 
                'payment_common', 
                'payment_tot' ,
                'repaire_prod_direct',
                'repaire_by_business', 
                'repaire_common',
                'repair_total' ,
                'fuel_dir_cost', 
                'consumable_dir_prod_cost',
                'consumable_by_busins',
                'consumable_commn_sale',
                'consumable_sum',
                'tax_by_sale',
                'tax_by_common', 
                'tax_total', 
                'insurance_dir_sale',
                'insurance_commn_sale', 
                'insurance_tot',
                'education_fee',
                'vechicle_maint_cost', 
                'book_print_fee',
                'travel_expense_direct',
                'travel_expense_common', 
                'teavel_expense_tot',
                'enteritainment_fee', 
                'communitaction_cost', 
                'rent_direct', 
                'rent_common', 
                'rent_tot',  
                'transport_direct',  
                'transport_common', 
                'transport_tot',
                'overall_tot_fix_cost', 
                'overall_tot_var_cost', 
                'overall_total', 
                'waste_liquid_direct', 
                'activated_carbon_earth_usage', 
                'activate_carbon_item_direct', 
                'common_waste_organic', 
                'water_waste_plant', 
                'gelatin_fp',
                'general_garbage', 
                'wastewater_batch', 
                'wastewater',
                'wastewater_perc', 
                'ww_treat_prod_amt', 
                'indus_park_basic_fixed_ratio_sum', 
                'indus_ww_prod_amt', 
                'waste_disposal_var_cost_sum', 
                'total_fix_var_waste_disposal_cost', 
                'electric_cost_by_business_fix', 
                'elec_cost_three_fact_fix', 
                'elec_power_usage', 
                'electric_cost_amt', 
                'elec_cost_amt_per', 
                'elec_costprod_amt', 
                'elec_cost_cmmn_var', 
                'elec_cost_fix_ratio_sum', 
                'elec_var_cost', 
                'elec_fix_var_tot_cost', 
                'pur_wastewatr_batch', 
                'pur_wastewatr_vol', 
                'pur_wastewatr_vol_per', 
                'waste_utility_dir', 
                'waste_utility_comn_expense', 
                'water_utility_tot', 
                'tot_manu_fix_cost', 
                'tot_manu_var_cost', 
                'tot_manu_tot', 
                'manu_fix_cost', 
                'manu_var_cost', 
                'tot_manu_cost', 
                'dispatch_qty', 
                'dispatch_cost_sold', 
                'dispatch_amt', 
                'carry_ovr_stk_qty', 
                'carry_ovr_stk_amt', 
                'carry_ovr_mat_fix_cost', 
                'carry_ovr_mat_var', 
                'carryovr_mat_tot',
                'carryovr_qty'
                
                
            ],
            where:{
                date_from:{[Op.like]:'2022%'},
                product_group:{[Op.eq]:"finish_med"}
            }
        })
        res.json(listOfbatchNoSaleY)
    } catch (error) {
        console.log(error)
    }
})

router.get('/p_mnhrs23',async(req,res)=>{
    try {
        const listOfbatchNoSaleY = await Man_hrs_and_product_main_table.findAll({
            attributes:[
                'product_name',
                'date_from',
                'date_to',
                'batch_size',
                'batch',
                'synthesis_mn_hr',
                'syn_mn_into_batch',
                'sec_qc_percen',
                'syn_pilot_perc',
                'syn_art_perc',
                'by_busi_perc',
                'syn_total',
                'qc_man_hr',
                'qc_man_into_batch',
                'qc_total',
                'Sales_qty',
                'sales_amt',
                'sales_product',
                'sale_by_busins',
                'sale_total',
                'prod_amt',
                'prod_sec', 
                'prod_syn_pilot',
                'prod_tot',
                'opening_stk_qty', 
                'opening_st_amt',
                'opening_wip_qty',
                'opening_wip_fix_amt', 
                'opening_wip_variable_amt', 
                'opening_wip_amt',
                'product_in',
                'material_cost', 
                'packing_material' ,
                'material_pack_tot',
                'labor_dir_cost_mn_hr_fix_cost', 
                'labor_dir_cost_mn_hr_var_cost',
                'labor_cost_qc_mn_hr_fix_cost',
                'labor_cost_qc_mn_hr_var_cost',
                'labor_cost_support_dept_fix_cost',
                'labor_cost_support_dept_var_cost',
                'tot_fix_cost', 
                'tot_var_cost',
                'rndFixedlabor', 
                'rndlabor_cost_variation',
                'business_fixed_costs',
                'common_fixed_cost', 
                'fixed_ratio_sum',
                'variable_sum', 
                'rnd_sum', 
                'depreciation_by_business_sale', 
                'depreciation_by_product_direct',
                'depreciation_common_by_sale' ,
                'depreciation_sum',
                'food_expense',
                'common_benefits',
                'benefit_tot',
                'direct_payment', 
                'payment_common', 
                'payment_tot' ,
                'repaire_prod_direct',
                'repaire_by_business', 
                'repaire_common',
                'repair_total' ,
                'fuel_dir_cost', 
                'consumable_dir_prod_cost',
                'consumable_by_busins',
                'consumable_commn_sale',
                'consumable_sum',
                'tax_by_sale',
                'tax_by_common', 
                'tax_total', 
                'insurance_dir_sale',
                'insurance_commn_sale', 
                'insurance_tot',
                'education_fee',
                'vechicle_maint_cost', 
                'book_print_fee',
                'travel_expense_direct',
                'travel_expense_common', 
                'teavel_expense_tot',
                'enteritainment_fee', 
                'communitaction_cost', 
                'rent_direct', 
                'rent_common', 
                'rent_tot',  
                'transport_direct',  
                'transport_common', 
                'transport_tot',
                'overall_tot_fix_cost', 
                'overall_tot_var_cost', 
                'overall_total', 
                'waste_liquid_direct', 
                'activated_carbon_earth_usage', 
                'activate_carbon_item_direct', 
                'common_waste_organic', 
                'water_waste_plant', 
                'gelatin_fp',
                'general_garbage', 
                'wastewater_batch', 
                'wastewater',
                'wastewater_perc', 
                'ww_treat_prod_amt', 
                'indus_park_basic_fixed_ratio_sum', 
                'indus_ww_prod_amt', 
                'waste_disposal_var_cost_sum', 
                'total_fix_var_waste_disposal_cost', 
                'electric_cost_by_business_fix', 
                'elec_cost_three_fact_fix', 
                'elec_power_usage', 
                'electric_cost_amt', 
                'elec_cost_amt_per', 
                'elec_costprod_amt', 
                'elec_cost_cmmn_var', 
                'elec_cost_fix_ratio_sum', 
                'elec_var_cost', 
                'elec_fix_var_tot_cost', 
                'pur_wastewatr_batch', 
                'pur_wastewatr_vol', 
                'pur_wastewatr_vol_per', 
                'waste_utility_dir', 
                'waste_utility_comn_expense', 
                'water_utility_tot', 
                'tot_manu_fix_cost', 
                'tot_manu_var_cost', 
                'tot_manu_tot', 
                'manu_fix_cost', 
                'manu_var_cost', 
                'tot_manu_cost', 
                'dispatch_qty', 
                'dispatch_cost_sold', 
                'dispatch_amt', 
                'carry_ovr_stk_qty', 
                'carry_ovr_stk_amt', 
                'carry_ovr_mat_fix_cost', 
                'carry_ovr_mat_var', 
                'carryovr_mat_tot',
                'carryovr_qty'
                
                
            ],
            where:{
                date_from:{[Op.like]:'2023%'},
                product_group:{[Op.eq]:"Sys_api"}
            }
        })
        res.json(listOfbatchNoSaleY)
    } catch (error) {
        console.log(error)
    }
})

router.get('/pp_mnhrs23',async(req,res)=>{
    try {
        const listOfbatchNoSaleY = await Man_hrs_and_product_main_table.findAll({
            attributes:[
                'product_name',
                'date_from',
                'date_to',
                'batch_size',
                'batch',
                'synthesis_mn_hr',
                'syn_mn_into_batch',
                'sec_qc_percen',
                'syn_pilot_perc',
                'syn_art_perc',
                'by_busi_perc',
                'syn_total',
                'qc_man_hr',
                'qc_man_into_batch',
                'qc_total',
                'Sales_qty',
                'sales_amt',
                'sales_product',
                'sale_by_busins',
                'sale_total',
                'prod_amt',
                'prod_sec', 
                'prod_syn_pilot',
                'prod_tot',
                'opening_stk_qty', 
                'opening_st_amt',
                'opening_wip_qty',
                'opening_wip_fix_amt', 
                'opening_wip_variable_amt', 
                'opening_wip_amt',
                'product_in',
                'material_cost', 
                'packing_material' ,
                'material_pack_tot',
                'labor_dir_cost_mn_hr_fix_cost', 
                'labor_dir_cost_mn_hr_var_cost',
                'labor_cost_qc_mn_hr_fix_cost',
                'labor_cost_qc_mn_hr_var_cost',
                'labor_cost_support_dept_fix_cost',
                'labor_cost_support_dept_var_cost',
                'tot_fix_cost', 
                'tot_var_cost',
                'rndFixedlabor', 
                'rndlabor_cost_variation',
                'business_fixed_costs',
                'common_fixed_cost', 
                'fixed_ratio_sum',
                'variable_sum', 
                'rnd_sum', 
                'depreciation_by_business_sale', 
                'depreciation_by_product_direct',
                'depreciation_common_by_sale' ,
                'depreciation_sum',
                'food_expense',
                'common_benefits',
                'benefit_tot',
                'direct_payment', 
                'payment_common', 
                'payment_tot' ,
                'repaire_prod_direct',
                'repaire_by_business', 
                'repaire_common',
                'repair_total' ,
                'fuel_dir_cost', 
                'consumable_dir_prod_cost',
                'consumable_by_busins',
                'consumable_commn_sale',
                'consumable_sum',
                'tax_by_sale',
                'tax_by_common', 
                'tax_total', 
                'insurance_dir_sale',
                'insurance_commn_sale', 
                'insurance_tot',
                'education_fee',
                'vechicle_maint_cost', 
                'book_print_fee',
                'travel_expense_direct',
                'travel_expense_common', 
                'teavel_expense_tot',
                'enteritainment_fee', 
                'communitaction_cost', 
                'rent_direct', 
                'rent_common', 
                'rent_tot',  
                'transport_direct',  
                'transport_common', 
                'transport_tot',
                'overall_tot_fix_cost', 
                'overall_tot_var_cost', 
                'overall_total', 
                'waste_liquid_direct', 
                'activated_carbon_earth_usage', 
                'activate_carbon_item_direct', 
                'common_waste_organic', 
                'water_waste_plant', 
                'gelatin_fp',
                'general_garbage', 
                'wastewater_batch', 
                'wastewater',
                'wastewater_perc', 
                'ww_treat_prod_amt', 
                'indus_park_basic_fixed_ratio_sum', 
                'indus_ww_prod_amt', 
                'waste_disposal_var_cost_sum', 
                'total_fix_var_waste_disposal_cost', 
                'electric_cost_by_business_fix', 
                'elec_cost_three_fact_fix', 
                'elec_power_usage', 
                'electric_cost_amt', 
                'elec_cost_amt_per', 
                'elec_costprod_amt', 
                'elec_cost_cmmn_var', 
                'elec_cost_fix_ratio_sum', 
                'elec_var_cost', 
                'elec_fix_var_tot_cost', 
                'pur_wastewatr_batch', 
                'pur_wastewatr_vol', 
                'pur_wastewatr_vol_per', 
                'waste_utility_dir', 
                'waste_utility_comn_expense', 
                'water_utility_tot', 
                'tot_manu_fix_cost', 
                'tot_manu_var_cost', 
                'tot_manu_tot', 
                'manu_fix_cost', 
                'manu_var_cost', 
                'tot_manu_cost', 
                'dispatch_qty', 
                'dispatch_cost_sold', 
                'dispatch_amt', 
                'carry_ovr_stk_qty', 
                'carry_ovr_stk_amt', 
                'carry_ovr_mat_fix_cost', 
                'carry_ovr_mat_var', 
                'carryovr_mat_tot',
                'carryovr_qty'
                
                
            ],
            where:{
                date_from:{[Op.like]:'2023%'},
                product_group:{[Op.eq]:"product_api"}
            }
        })
        res.json(listOfbatchNoSaleY)
    } catch (error) {
        console.log(error)
    }
})

router.get('/ppilot_mnhrs23',async(req,res)=>{
    try {
        const listOfbatchNoSaleY = await Man_hrs_and_product_main_table.findAll({
            attributes:[
                'product_name',
                'date_from',
                'date_to',
                'batch_size',
                'batch',
                'synthesis_mn_hr',
                'syn_mn_into_batch',
                'sec_qc_percen',
                'syn_pilot_perc',
                'syn_art_perc',
                'by_busi_perc',
                'syn_total',
                'qc_man_hr',
                'qc_man_into_batch',
                'qc_total',
                'Sales_qty',
                'sales_amt',
                'sales_product',
                'sale_by_busins',
                'sale_total',
                'prod_amt',
                'prod_sec', 
                'prod_syn_pilot',
                'prod_tot',
                'opening_stk_qty', 
                'opening_st_amt',
                'opening_wip_qty',
                'opening_wip_fix_amt', 
                'opening_wip_variable_amt', 
                'opening_wip_amt',
                'product_in',
                'material_cost', 
                'packing_material' ,
                'material_pack_tot',
                'labor_dir_cost_mn_hr_fix_cost', 
                'labor_dir_cost_mn_hr_var_cost',
                'labor_cost_qc_mn_hr_fix_cost',
                'labor_cost_qc_mn_hr_var_cost',
                'labor_cost_support_dept_fix_cost',
                'labor_cost_support_dept_var_cost',
                'tot_fix_cost', 
                'tot_var_cost',
                'rndFixedlabor', 
                'rndlabor_cost_variation',
                'business_fixed_costs',
                'common_fixed_cost', 
                'fixed_ratio_sum',
                'variable_sum', 
                'rnd_sum', 
                'depreciation_by_business_sale', 
                'depreciation_by_product_direct',
                'depreciation_common_by_sale' ,
                'depreciation_sum',
                'food_expense',
                'common_benefits',
                'benefit_tot',
                'direct_payment', 
                'payment_common', 
                'payment_tot' ,
                'repaire_prod_direct',
                'repaire_by_business', 
                'repaire_common',
                'repair_total' ,
                'fuel_dir_cost', 
                'consumable_dir_prod_cost',
                'consumable_by_busins',
                'consumable_commn_sale',
                'consumable_sum',
                'tax_by_sale',
                'tax_by_common', 
                'tax_total', 
                'insurance_dir_sale',
                'insurance_commn_sale', 
                'insurance_tot',
                'education_fee',
                'vechicle_maint_cost', 
                'book_print_fee',
                'travel_expense_direct',
                'travel_expense_common', 
                'teavel_expense_tot',
                'enteritainment_fee', 
                'communitaction_cost', 
                'rent_direct', 
                'rent_common', 
                'rent_tot',  
                'transport_direct',  
                'transport_common', 
                'transport_tot',
                'overall_tot_fix_cost', 
                'overall_tot_var_cost', 
                'overall_total', 
                'waste_liquid_direct', 
                'activated_carbon_earth_usage', 
                'activate_carbon_item_direct', 
                'common_waste_organic', 
                'water_waste_plant', 
                'gelatin_fp',
                'general_garbage', 
                'wastewater_batch', 
                'wastewater',
                'wastewater_perc', 
                'ww_treat_prod_amt', 
                'indus_park_basic_fixed_ratio_sum', 
                'indus_ww_prod_amt', 
                'waste_disposal_var_cost_sum', 
                'total_fix_var_waste_disposal_cost', 
                'electric_cost_by_business_fix', 
                'elec_cost_three_fact_fix', 
                'elec_power_usage', 
                'electric_cost_amt', 
                'elec_cost_amt_per', 
                'elec_costprod_amt', 
                'elec_cost_cmmn_var', 
                'elec_cost_fix_ratio_sum', 
                'elec_var_cost', 
                'elec_fix_var_tot_cost', 
                'pur_wastewatr_batch', 
                'pur_wastewatr_vol', 
                'pur_wastewatr_vol_per', 
                'waste_utility_dir', 
                'waste_utility_comn_expense', 
                'water_utility_tot', 
                'tot_manu_fix_cost', 
                'tot_manu_var_cost', 
                'tot_manu_tot', 
                'manu_fix_cost', 
                'manu_var_cost', 
                'tot_manu_cost', 
                'dispatch_qty', 
                'dispatch_cost_sold', 
                'dispatch_amt', 
                'carry_ovr_stk_qty', 
                'carry_ovr_stk_amt', 
                'carry_ovr_mat_fix_cost', 
                'carry_ovr_mat_var', 
                'carryovr_mat_tot',
                'carryovr_qty'
                
                
            ],
            where:{
                date_from:{[Op.like]:'2023%'},
                product_group:{[Op.eq]:"pilot"}
            }
        })
        res.json(listOfbatchNoSaleY)
    } catch (error) {
        console.log(error)
    }
})

router.get('/ph_mnhrs23',async(req,res)=>{
    try {
        const listOfbatchNoSaleY = await Man_hrs_and_product_main_table.findAll({
            attributes:[
                'product_name',
                'date_from',
                'date_to',
                'batch_size',
                'batch',
                'synthesis_mn_hr',
                'syn_mn_into_batch',
                'sec_qc_percen',
                'syn_pilot_perc',
                'syn_art_perc',
                'by_busi_perc',
                'syn_total',
                'qc_man_hr',
                'qc_man_into_batch',
                'qc_total',
                'Sales_qty',
                'sales_amt',
                'sales_product',
                'sale_by_busins',
                'sale_total',
                'prod_amt',
                'prod_sec', 
                'prod_syn_pilot',
                'prod_tot',
                'opening_stk_qty', 
                'opening_st_amt',
                'opening_wip_qty',
                'opening_wip_fix_amt', 
                'opening_wip_variable_amt', 
                'opening_wip_amt',
                'product_in',
                'material_cost', 
                'packing_material' ,
                'material_pack_tot',
                'labor_dir_cost_mn_hr_fix_cost', 
                'labor_dir_cost_mn_hr_var_cost',
                'labor_cost_qc_mn_hr_fix_cost',
                'labor_cost_qc_mn_hr_var_cost',
                'labor_cost_support_dept_fix_cost',
                'labor_cost_support_dept_var_cost',
                'tot_fix_cost', 
                'tot_var_cost',
                'rndFixedlabor', 
                'rndlabor_cost_variation',
                'business_fixed_costs',
                'common_fixed_cost', 
                'fixed_ratio_sum',
                'variable_sum', 
                'rnd_sum', 
                'depreciation_by_business_sale', 
                'depreciation_by_product_direct',
                'depreciation_common_by_sale' ,
                'depreciation_sum',
                'food_expense',
                'common_benefits',
                'benefit_tot',
                'direct_payment', 
                'payment_common', 
                'payment_tot' ,
                'repaire_prod_direct',
                'repaire_by_business', 
                'repaire_common',
                'repair_total' ,
                'fuel_dir_cost', 
                'consumable_dir_prod_cost',
                'consumable_by_busins',
                'consumable_commn_sale',
                'consumable_sum',
                'tax_by_sale',
                'tax_by_common', 
                'tax_total', 
                'insurance_dir_sale',
                'insurance_commn_sale', 
                'insurance_tot',
                'education_fee',
                'vechicle_maint_cost', 
                'book_print_fee',
                'travel_expense_direct',
                'travel_expense_common', 
                'teavel_expense_tot',
                'enteritainment_fee', 
                'communitaction_cost', 
                'rent_direct', 
                'rent_common', 
                'rent_tot',  
                'transport_direct',  
                'transport_common', 
                'transport_tot',
                'overall_tot_fix_cost', 
                'overall_tot_var_cost', 
                'overall_total', 
                'waste_liquid_direct', 
                'activated_carbon_earth_usage', 
                'activate_carbon_item_direct', 
                'common_waste_organic', 
                'water_waste_plant', 
                'gelatin_fp',
                'general_garbage', 
                'wastewater_batch', 
                'wastewater',
                'wastewater_perc', 
                'ww_treat_prod_amt', 
                'indus_park_basic_fixed_ratio_sum', 
                'indus_ww_prod_amt', 
                'waste_disposal_var_cost_sum', 
                'total_fix_var_waste_disposal_cost', 
                'electric_cost_by_business_fix', 
                'elec_cost_three_fact_fix', 
                'elec_power_usage', 
                'electric_cost_amt', 
                'elec_cost_amt_per', 
                'elec_costprod_amt', 
                'elec_cost_cmmn_var', 
                'elec_cost_fix_ratio_sum', 
                'elec_var_cost', 
                'elec_fix_var_tot_cost', 
                'pur_wastewatr_batch', 
                'pur_wastewatr_vol', 
                'pur_wastewatr_vol_per', 
                'waste_utility_dir', 
                'waste_utility_comn_expense', 
                'water_utility_tot', 
                'tot_manu_fix_cost', 
                'tot_manu_var_cost', 
                'tot_manu_tot', 
                'manu_fix_cost', 
                'manu_var_cost', 
                'tot_manu_cost', 
                'dispatch_qty', 
                'dispatch_cost_sold', 
                'dispatch_amt', 
                'carry_ovr_stk_qty', 
                'carry_ovr_stk_amt', 
                'carry_ovr_mat_fix_cost', 
                'carry_ovr_mat_var', 
                'carryovr_mat_tot',
                'carryovr_qty'
                
                
            ],
            where:{
                date_from:{[Op.like]:'2023%'},
                product_group:{[Op.eq]:"her_med"}
            }
        })
        res.json(listOfbatchNoSaleY)
    } catch (error) {
        console.log(error)
    }
})

router.get('/pn_mnhrs23',async(req,res)=>{
    try {
        const listOfbatchNoSaleY = await Man_hrs_and_product_main_table.findAll({
            attributes:[
                'product_name',
                'date_from',
                'date_to',
                'batch_size',
                'batch',
                'synthesis_mn_hr',
                'syn_mn_into_batch',
                'sec_qc_percen',
                'syn_pilot_perc',
                'syn_art_perc',
                'by_busi_perc',
                'syn_total',
                'qc_man_hr',
                'qc_man_into_batch',
                'qc_total',
                'Sales_qty',
                'sales_amt',
                'sales_product',
                'sale_by_busins',
                'sale_total',
                'prod_amt',
                'prod_sec', 
                'prod_syn_pilot',
                'prod_tot',
                'opening_stk_qty', 
                'opening_st_amt',
                'opening_wip_qty',
                'opening_wip_fix_amt', 
                'opening_wip_variable_amt', 
                'opening_wip_amt',
                'product_in',
                'material_cost', 
                'packing_material' ,
                'material_pack_tot',
                'labor_dir_cost_mn_hr_fix_cost', 
                'labor_dir_cost_mn_hr_var_cost',
                'labor_cost_qc_mn_hr_fix_cost',
                'labor_cost_qc_mn_hr_var_cost',
                'labor_cost_support_dept_fix_cost',
                'labor_cost_support_dept_var_cost',
                'tot_fix_cost', 
                'tot_var_cost',
                'rndFixedlabor', 
                'rndlabor_cost_variation',
                'business_fixed_costs',
                'common_fixed_cost', 
                'fixed_ratio_sum',
                'variable_sum', 
                'rnd_sum', 
                'depreciation_by_business_sale', 
                'depreciation_by_product_direct',
                'depreciation_common_by_sale' ,
                'depreciation_sum',
                'food_expense',
                'common_benefits',
                'benefit_tot',
                'direct_payment', 
                'payment_common', 
                'payment_tot' ,
                'repaire_prod_direct',
                'repaire_by_business', 
                'repaire_common',
                'repair_total' ,
                'fuel_dir_cost', 
                'consumable_dir_prod_cost',
                'consumable_by_busins',
                'consumable_commn_sale',
                'consumable_sum',
                'tax_by_sale',
                'tax_by_common', 
                'tax_total', 
                'insurance_dir_sale',
                'insurance_commn_sale', 
                'insurance_tot',
                'education_fee',
                'vechicle_maint_cost', 
                'book_print_fee',
                'travel_expense_direct',
                'travel_expense_common', 
                'teavel_expense_tot',
                'enteritainment_fee', 
                'communitaction_cost', 
                'rent_direct', 
                'rent_common', 
                'rent_tot',  
                'transport_direct',  
                'transport_common', 
                'transport_tot',
                'overall_tot_fix_cost', 
                'overall_tot_var_cost', 
                'overall_total', 
                'waste_liquid_direct', 
                'activated_carbon_earth_usage', 
                'activate_carbon_item_direct', 
                'common_waste_organic', 
                'water_waste_plant', 
                'gelatin_fp',
                'general_garbage', 
                'wastewater_batch', 
                'wastewater',
                'wastewater_perc', 
                'ww_treat_prod_amt', 
                'indus_park_basic_fixed_ratio_sum', 
                'indus_ww_prod_amt', 
                'waste_disposal_var_cost_sum', 
                'total_fix_var_waste_disposal_cost', 
                'electric_cost_by_business_fix', 
                'elec_cost_three_fact_fix', 
                'elec_power_usage', 
                'electric_cost_amt', 
                'elec_cost_amt_per', 
                'elec_costprod_amt', 
                'elec_cost_cmmn_var', 
                'elec_cost_fix_ratio_sum', 
                'elec_var_cost', 
                'elec_fix_var_tot_cost', 
                'pur_wastewatr_batch', 
                'pur_wastewatr_vol', 
                'pur_wastewatr_vol_per', 
                'waste_utility_dir', 
                'waste_utility_comn_expense', 
                'water_utility_tot', 
                'tot_manu_fix_cost', 
                'tot_manu_var_cost', 
                'tot_manu_tot', 
                'manu_fix_cost', 
                'manu_var_cost', 
                'tot_manu_cost', 
                'dispatch_qty', 
                'dispatch_cost_sold', 
                'dispatch_amt', 
                'carry_ovr_stk_qty', 
                'carry_ovr_stk_amt', 
                'carry_ovr_mat_fix_cost', 
                'carry_ovr_mat_var', 
                'carryovr_mat_tot',
                'carryovr_qty'
                
                
                
            ],
            where:{
                date_from:{[Op.like]:'2023%'},
                product_group:{[Op.eq]:"finish_med"}
            }
        })
        res.json(listOfbatchNoSaleY)
    } catch (error) {
        console.log(error)
    }
})
/*==================================================*/


router.get('/batchNoSaleY',async(req,res)=>{
    try {
        const listOfbatchNoSaleY = await Man_hrs_and_product_main_table.findAll({
            where:{
                product_id :{
                    [Op.in]:["P1010-000","P1010-004L","P1010-007E","P1010-017K","P1010-055O","P1010-075"]
                }
               
            }
        })
        res.json(listOfbatchNoSaleY)
    } catch (error) {
        console.log(error)
    }
})

router.patch('/:product_id',async(req,res,next)=>{
    let product_idd = req.params.product_id
    console.log("Prpduct_id:"+product_idd)
   
    const batch_sizee = req.body.batch_size;
    console.log("batch_size:"+batch_sizee);
    const batchh = req.body.batch;
    console.log("batchh:"+batchh);

    const synthesis_mn_hrr = req.body.synthesis_mn_hr
    console.log("synthesis_mn_hrr:"+synthesis_mn_hrr)
    const syn_mn_into_batchh = req.body.syn_mn_into_batch
    console.log("syn_mn_into_batchh:"+syn_mn_into_batchh)
   
    const sales_amtt =  req.body.sales_amt;
    console.log("Sales amt:"+sales_amtt)
    const sales_productt = req.body.sales_product
    console.log("sales_productt:"+sales_productt)

    const qc_man_hrr =  req.body.qc_man_hr;
    console.log(" qc_man_hrr:"+qc_man_hrr)
    const qc_man_into_batchh = req.body.qc_man_into_batch
    console.log("qc_man_into_batchh:"+qc_man_into_batchh)

    const sale_by_businss = req.body.sale_by_busins
    console.log("sale_by_businss:"+sale_by_businss)

    const prod_amtt = req.body.prod_amt
    console.log("prod_amtt:"+prod_amtt)

    const opening_wip_fix_amtt = req.body.opening_wip_fix_amt
    console.log("opening_wip_fix_amt:"+opening_wip_fix_amtt)

    const opening_wip_variable_amtt = req.body.opening_wip_variable_amt
    console.log("opening_wip_variable_amt:"+opening_wip_variable_amtt)

    const opening_wip_amtt = req.body.opening_wip_amt
    console.log("opening_wip_amtt:"+opening_wip_amtt)

    const product_inn = req.body.product_in
    console.log("product_in:"+product_inn)


    const material_costt = req.body.material_cost
    console.log("material_cost:"+material_costt)

    const packing_materiall = req.body.packing_material
    console.log("packing_material:"+packing_materiall)

    const labor_dir_cost_mn_hr_fix_costt = req.body.labor_dir_cost_mn_hr_fix_cost
    console.log("labor_dir_cost_mn_hr_fix_cost:"+labor_dir_cost_mn_hr_fix_costt)
    const labor_dir_cost_mn_hr_var_costt = req.body.labor_dir_cost_mn_hr_var_cost
    console.log("labor_dir_cost_mn_hr_var_cost:"+labor_dir_cost_mn_hr_var_costt)

    const labor_cost_qc_mn_hr_fix_costt = req.body.labor_cost_qc_mn_hr_fix_cost
    console.log("labor_cost_qc_mn_hr_fix_cost:"+labor_cost_qc_mn_hr_fix_costt)
    const labor_cost_qc_mn_hr_var_costt = req.body.labor_cost_qc_mn_hr_var_cost
    console.log("labor_cost_qc_mn_hr_var_cost:"+labor_cost_qc_mn_hr_var_costt)

    const labor_cost_support_dept_fix_costt = req.body.labor_cost_support_dept_fix_cost
    console.log("labor_cost_support_dept_fix_cost:"+labor_cost_support_dept_fix_costt)
    const labor_cost_support_dept_var_costt = req.body.labor_cost_support_dept_var_cost
    console.log("labor_cost_support_dept_var_cost:"+labor_cost_support_dept_var_costt)

    const rndFixedlaborr  = req.body.rndFixedlabor
    console.log("rndFixedlabor:"+rndFixedlaborr)

    const rndlabor_cost_variationn = req.body.rndlabor_cost_variation
    console.log("rndlabor_cost_variation:"+rndlabor_cost_variationn)

    const business_fixed_costss = req.body.business_fixed_costs
    console.log("business_fixed_costs:"+business_fixed_costss)

    const common_fixed_costt = req.body.common_fixed_cost;
    console.log("common_fixed_cost:"+common_fixed_costt)

    const fixed_ratio_summ = req.body.fixed_ratio_sum
    console.log("fixed_ratio_sum:"+fixed_ratio_summ)

    const variable_summ = req.body.variable_sum
    console.log("variable_sum:"+variable_summ)
    const depreciation_by_business_salee = req.body.depreciation_by_business_sale
    const depreciation_by_product_directt = req.body.depreciation_by_product_direct
    const depreciation_common_by_salee = req.body.depreciation_common_by_sale
    const waste_liquid_directt = req.body.waste_liquid_direct
    const activated_carbon_earth_usagee = req.body.activated_carbon_earth_usage
    const activate_carbon_item_directt = req.body.activate_carbon_item_direct
    const common_waste_organicc= req.body.common_waste_organic
    const electric_cost_by_business_fixx = req.body.electric_cost_by_business_fix
    const elec_cost_three_fact_fixx = req.body.elec_cost_three_fact_fix
    /*const water_waste_plantt= req.body.water_waste_plant
    const gelatin_fpp= req.body.gelatin_fp
    const general_garbagee= req.body.general_garbage
    const wastewater_batchh= req.body.wastewater_batch
    const wastewaterr= req.body.wastewater*/
   try {
    await Man_hrs_and_product_main_table.update(
    {
        batch:batchh,
        batch_size:batch_sizee,

        synthesis_mn_hr:synthesis_mn_hrr,
        syn_mn_into_batch:syn_mn_into_batchh,
    
        sales_amt:sales_amtt,
        sales_product: sales_productt,

        qc_man_hr:qc_man_hrr,
        qc_man_into_batch:qc_man_into_batchh,

        prod_amt:prod_amtt,

        opening_wip_fix_amt:opening_wip_fix_amtt,
        opening_wip_variable_amt:opening_wip_variable_amtt,
        opening_wip_amt:opening_wip_amtt,
        product_in:product_inn,
        material_cost:material_costt,
        packing_material:packing_materiall,
        
        labor_dir_cost_mn_hr_fix_cost:labor_dir_cost_mn_hr_fix_costt,
        labor_dir_cost_mn_hr_var_cost:labor_dir_cost_mn_hr_var_costt,
        labor_cost_qc_mn_hr_fix_cost:labor_cost_qc_mn_hr_fix_costt,
        labor_cost_qc_mn_hr_var_cost:labor_cost_qc_mn_hr_var_costt,
        labor_cost_support_dept_fix_cost:labor_cost_support_dept_fix_costt,
        labor_cost_support_dept_var_cost:labor_cost_support_dept_var_costt,

        rndFixedlabor:rndFixedlaborr,
        rndlabor_cost_variation:rndlabor_cost_variationn,
        business_fixed_costs:business_fixed_costss,
        common_fixed_cost:common_fixed_costt,
        fixed_ratio_sum:fixed_ratio_summ,
        variable_sum:variable_summ,
        depreciation_by_business_sale:depreciation_by_business_salee,
        depreciation_by_product_direct:depreciation_by_product_directt,
        depreciation_common_by_sale:depreciation_common_by_salee,

        waste_liquid_direct:waste_liquid_directt,
        activated_carbon_earth_usage:activated_carbon_earth_usagee,
        activate_carbon_item_direct:activate_carbon_item_directt,
        common_waste_organic:common_waste_organicc,
        electric_cost_by_business_fix:electric_cost_by_business_fixx,
        elec_cost_three_fact_fix:elec_cost_three_fact_fixx,
        /*water_waste_plant:water_waste_plantt,
        gelatin_fp:gelatin_fpp,
        general_garbage:general_garbagee,
        wastewater_batch:wastewater_batchh,
        wastewater:wastewaterr*/
    },{
        where:{
            product_id:{
                
                [Op.eq]:product_idd
            }
        }
    })
       
   } catch (error) {
    console.log(error)
   }
});


router.get('/all22',async(req,res)=>{
    try {
        const listOfMan_hrs_and_product_main_table = await Man_hrs_and_product_main_table.findAll({
            where:{
                date_from:{[Op.like]:'2022%'},}
        })
      
        res.json(listOfMan_hrs_and_product_main_table)   
    } catch (error) {
        console.log(error)
    }
   
});

router.get('/prod_data22',async(req,res)=>{
    try {
        const listOfMan_hrs_and_product_main_table = await Man_hrs_and_product_main_table.findAll({
            where:{
                product_id:{
                    [Op.in]:["P1010-092","P1010-005","P1010-106","P1010-070","P1010-007E","P1010-007","P1010-017K",
                            "P1010-017","P1010-004","P1010-004L","P1010-001","P1010-071","P1010-055","P1010-075","P1010-091",
                            "P1010-086","P1010-102","P1010-083","P1010-065","P1010-088","P1010-084","P1010-071M","P1010-055O","P1010-075P"],
                       
                },
                date_from:{[Op.like]:'2022%'}, 
            }
        })
      
        res.json(listOfMan_hrs_and_product_main_table)   
    } catch (error) {
        console.log(error)
    }
   
});

router.get('/prod_data23',async(req,res)=>{
    try {
        const listOfMan_hrs_and_product_main_table = await Man_hrs_and_product_main_table.findAll({
            where:{
                product_id:{
                    [Op.in]:["P1010-092","P1010-005","P1010-106","P1010-070","P1010-007E","P1010-007","P1010-017K",
                            "P1010-017","P1010-004","P1010-004L","P1010-001","P1010-071","P1010-055","P1010-075","P1010-091",
                            "P1010-086","P1010-102","P1010-083","P1010-065","P1010-088","P1010-084","P1010-071M","P1010-055O","P1010-075P"],
                       
                },
                date_from:{[Op.like]:'2023%'}, 
            }
        })
      
        res.json(listOfMan_hrs_and_product_main_table)   
    } catch (error) {
        console.log(error)
    }
   
});
/*2022*/

router.get('/summery22',async(req,res)=>{
    try {
        const listOfMan_hrs_and_product_main_table = await Man_hrs_and_product_main_table.findAll({

            attributes:[
                'rnd_sum',
                'depreciation_sum',
                'total_fix_var_waste_disposal_cost',
                'elec_fix_var_tot_cost',
                'benefit_tot',
                'payment_tot',
                'repair_total',
                'fuel_dir_cost',
                'consumable_sum',
                'tax_total',
                'insurance_tot',
                'water_utility_tot',
                'education_fee',
                'vechicle_maint_cost',
                'book_print_fee',
                'teavel_expense_tot',
                'enteritainment_fee',
                'communitaction_cost',
                'rent_tot',
                'transport_tot'
                
                
            ],
            where:{
                date_from:{[Op.like]:'2022%'},}
        })
      
        res.json(listOfMan_hrs_and_product_main_table)   
    } catch (error) {
        console.log(error)
    }
   
});
router.get('/summery23',async(req,res)=>{
    try {
        const listOfMan_hrs_and_product_main_table = await Man_hrs_and_product_main_table.findAll({

            attributes:[
                'carry_ovr_stk_amt',
                'dispatch_amt',
                'business_fixed_costs','common_fixed_cost',
                'rnd_sum',
                'depreciation_sum',
                'total_fix_var_waste_disposal_cost',
                'elec_fix_var_tot_cost',
                'benefit_tot',
                'payment_tot',
                'repair_total',
                'fuel_dir_cost',
                'consumable_sum',
                'tax_total',
                'insurance_tot',
                'water_utility_tot',
                'education_fee',
                'vechicle_maint_cost',
                'book_print_fee',
                'teavel_expense_tot',
                'enteritainment_fee',
                'communitaction_cost',
                'rent_tot',
                'transport_tot'
                
                
            ],
            where:{
                date_from:{[Op.like]:'2023%'},}
        })
      
        res.json(listOfMan_hrs_and_product_main_table)   
    } catch (error) {
        console.log(error)
    }
   
});
router.get('/all23',async(req,res)=>{
    try {
        const listOfMan_hrs_and_product_main_table = await Man_hrs_and_product_main_table.findAll({
            where:{
                date_from:{[Op.like]:'2023%'},}
        })
      
        res.json(listOfMan_hrs_and_product_main_table)   
    } catch (error) {
        console.log(error)
    }
   
});
router.get('/s',async(req,res)=>{
    try {
        const listOfMan_hrs_and_product_main_table = await Man_hrs_and_product_main_table.findAll({
            where:{
                product_group:{
                    [Op.eq]:"Sys_api"
                },
                date_from:{[Op.like]:'2023%'}, 
            }
        })
      
        res.json(listOfMan_hrs_and_product_main_table)   
    } catch (error) {
        console.log(error)
    }
   
});

router.get('/p',async(req,res)=>{
    try {
        const listOfMan_hrs_and_product_main_table = await Man_hrs_and_product_main_table.findAll({
            where:{
                product_group:{
                    [Op.eq]:"pilot"
                },
                date_from:{[Op.like]:'2023%'}, 
            }
        })
      
        res.json(listOfMan_hrs_and_product_main_table)   
    } catch (error) {
        console.log(error)
    }
   
})

router.get('/pr',async(req,res)=>{
    try {
        const listOfMan_hrs_and_product_main_table = await Man_hrs_and_product_main_table.findAll({
            where:{
                product_group:{
                    [Op.eq]:"product_api"
                },
                date_from:{[Op.like]:'2023%'}, 
            }
        })
      
        res.json(listOfMan_hrs_and_product_main_table)   
    } catch (error) {
        console.log(error)
    }
   
})


router.get('/f',async(req,res)=>{
    try {
        const listOfMan_hrs_and_product_main_table = await Man_hrs_and_product_main_table.findAll({
            where:{
                product_group:{
                    [Op.eq]:"finish_med"
                },
                date_from:{[Op.like]:'2023%'}, 
            }
        })
      
        res.json(listOfMan_hrs_and_product_main_table)   
    } catch (error) {
        console.log(error)
    }
   
});

router.get('/h',async(req,res)=>{
    try {
        const listOfMan_hrs_and_product_main_table = await Man_hrs_and_product_main_table.findAll({
            where:{
                product_group:{
                    [Op.eq]:"her_med"
                },
                date_from:{[Op.like]:'2023%'}, 
            }
        })
      
        res.json(listOfMan_hrs_and_product_main_table)   
    } catch (error) {
        console.log(error)
    }
   
});
router.get('/',async(req,res)=>{
    try {
        const listOfMan_hrs_and_product_main_table = await Man_hrs_and_product_main_table.findAll({
            attributes:['product_name','Sales_qty','prod_tot'],
            where:{
                Sales_qty:{
                    [Op.eq]:0
                },
                prod_tot:{
                    [Op.ne]:0
                },
                date_from:{[Op.like]:'2023%'},
            }
        })
      
        res.json(listOfMan_hrs_and_product_main_table)   
    } catch (error) {
        console.log(error)
    }
   
})
router.get('/:product_id',async(req,res)=>{
    try {
        const product_id = req.params.product_id;
        const product_details = await Man_hrs_and_product_main_table.findAll({
            where:{
                product_id:{
                    [Op.eq]:product_id
                }
            }
        })
        res.json(product_details)
    } catch (error) {
        console.log("Error:"+error)
    }
})

router.get('/specialp/:product_id',async(req,res)=>{
    try {
        const product_id = req.params.product_id;
        const product_details = await Man_hrs_and_product_main_table.findAll({
            attributes:[
                'product_id',
                'product_name',
                'sales_amt'
            ],
            where:{
                product_id:{
                    [Op.eq]:product_id
                }
            }
        })
        res.json(product_details)
    } catch (error) {
        console.log("Error:"+error)
    }
})

/*2023*/



/*router.post("/",async(req,res)=>{
    try {
        const Material_nameList = req.body
        await Bom_costs.create(Material_nameList);
        res.json(Material_nameList);
     
    } catch (error) {
        console.log(error)
    }
   
})*/
module.exports= router;