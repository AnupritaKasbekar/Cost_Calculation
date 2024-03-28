import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col,Row,Container} from 'react-bootstrap';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';



function Sys_api_report() {
  const[list_syn_api,setlist_syn_api] = useState([]);
  const[show_s,setShow_s] = useState(false);
  const[searchTerm,setSearchTerm] = useState([])

  
  useEffect(()=>{
    axios.get("http://localhost:3001/man_hrs_p/s").then((response)=>{
      setlist_syn_api(response.data)
      console.log(response.data)
    })
  },[]);



  /*Total calculations*/
  const syn_mn_into_batch_sum = list_syn_api.map(sum_syn_batch =>sum_syn_batch.syn_mn_into_batch).reduce((a,b)=>a+b,0);
  const sum_syn_qc_perc = list_syn_api.map(sum_syn_qc_per => sum_syn_qc_per.sec_qc_percen).reduce((a,b)=>a+b,0);
  const sum_syn_art_perc = list_syn_api.map(sum_syn_per => sum_syn_per.syn_art_perc).reduce((a,b)=>a+b,0);
  const sum_syn_pilot_perc = list_syn_api.map(syn_pilot_per => syn_pilot_per.syn_pilot_perc).reduce((a,b)=>a+b,0);
  const sum_by_busi_per = list_syn_api.map(by_bus => by_bus.by_busi_perc).reduce((a,b)=>a+b,0);
  const sum_syn_total = list_syn_api.map(syn_tot=>syn_tot.syn_total).reduce((a,b)=>a+b,0);

  const sum_qc_man_into_batch = list_syn_api.map(qc_man_b=>qc_man_b.qc_man_into_batch).reduce((a,b)=>a+b,0);
  const sum_qc_sec_perc = list_syn_api.map(qc_sec_per=>qc_sec_per.qc_sec_perc).reduce((a,b)=>a+b,0);
  const sum_syn_pilot_qc_perc = list_syn_api.map(syn_pilot_qc_per=>syn_pilot_qc_per.syn_pilot_qc_perc).reduce((a,b)=>a+b,0);
  const sum_syn_pro_qc_perc = list_syn_api.map(syn_pro_qc_per=>syn_pro_qc_per.syn_pro_qc_perc).reduce((a,b)=>a+b,0);
  const sum_by_business_qc = list_syn_api.map(by_business_q=>by_business_q.by_business_qc).reduce((a,b)=>a+b,0);
  const sum_qc_total = list_syn_api.map(qc_tot=>qc_tot.qc_total).reduce((a,b)=>a+b,0);
  
  const sum_sales_amt = list_syn_api.map(sal_amt=>sal_amt.sales_amt).reduce((a,b)=>a+b,0);
  const sum_sal_pro = list_syn_api.map(sales_pro => sales_pro.sales_product).reduce((a,b)=>a+b,0);
  const sum_sale_bus = list_syn_api.map(sal_bus=>sal_bus.sale_by_busins).reduce((a,b)=>a+b,0);
  const sum_sal_tot = list_syn_api.map(sal_tot=>sal_tot.sale_total).reduce((a,b)=>a+b,0);
  
  const sum_prod_amt = list_syn_api.map(pro_amt=>pro_amt.prod_amt).reduce((a,b)=>a+b,0);
  const sum_prod_sec = list_syn_api.map(prod_se=>prod_se.prod_sec).reduce((a,b)=>a+b,0);
  const sum_prod_syn_p = list_syn_api.map(prod_syn_p=>prod_syn_p.prod_syn_pilot).reduce((a,b)=>a+b,0);
  const sum_prod_tot = list_syn_api.map(prod_t=>prod_t.prod_tot).reduce((a,b)=>a+b,0);
  
  const sum_opening_stk_qty = list_syn_api.map(prod_t=>prod_t.opening_stk_qty).reduce((a,b)=>a+b,0);
  const sum_opening_st_amt = list_syn_api.map(prod_t=>prod_t.opening_st_amt).reduce((a,b)=>a+b,0);
  const sum_opening_wip_qty = list_syn_api.map(prod_t=>prod_t.opening_wip_qty).reduce((a,b)=>a+b,0);
  const sum_opening_wip_fix_amt = list_syn_api.map(prod_t=>prod_t.opening_wip_fix_amt).reduce((a,b)=>a+b,0);
  const sum_opening_wip_variable_amt = list_syn_api.map(prod_t=>prod_t.opening_wip_variable_amt).reduce((a,b)=>a+b,0);
  const sum_opening_wip_amt = list_syn_api.map(prod_t=>prod_t.opening_wip_amt).reduce((a,b)=>a+b,0);
  const sum_product_in = list_syn_api.map(prod_t=>prod_t.product_in).reduce((a,b)=>a+b,0);
  const sum_material_cost = list_syn_api.map(prod_t=>prod_t.material_cost).reduce((a,b)=>a+b,0);
  const sum_packing_material = list_syn_api.map(prod_t=>prod_t.packing_material).reduce((a,b)=>a+b,0);
  const sum_material_pack_tot = list_syn_api.map(prod_t=>prod_t.material_pack_tot).reduce((a,b)=>a+b,0);
  const sum_labor_dir_cost_mn_hr_fix_cost = list_syn_api.map(prod_t=>prod_t.labor_dir_cost_mn_hr_fix_cost).reduce((a,b)=>a+b,0);
  const sum_labor_dir_cost_mn_hr_var_cost = list_syn_api.map(prod_t=>prod_t.labor_dir_cost_mn_hr_var_cost).reduce((a,b)=>a+b,0);
  const sum_labor_cost_qc_mn_hr_fix_cost = list_syn_api.map(prod_t=>prod_t.labor_cost_qc_mn_hr_fix_cost).reduce((a,b)=>a+b,0);
  const sum_labor_cost_qc_mn_hr_var_cost = list_syn_api.map(prod_t=>prod_t.labor_cost_qc_mn_hr_var_cost).reduce((a,b)=>a+b,0);
  const sum_labor_cost_support_dept_fix_cost = list_syn_api.map(prod_t=>prod_t.labor_cost_support_dept_fix_cost).reduce((a,b)=>a+b,0);
  const sum_labor_cost_support_dept_var_cost = list_syn_api.map(prod_t=>prod_t.labor_cost_support_dept_var_cost).reduce((a,b)=>a+b,0);
  const sum_tot_fix_cost = list_syn_api.map(prod_t=>prod_t.tot_fix_cost).reduce((a,b)=>a+b,0);
  const sum_tot_var_cost = list_syn_api.map(prod_t=>prod_t.tot_var_cost).reduce((a,b)=>a+b,0);
  const sum_rndFixedlabor = list_syn_api.map(prod_t=>prod_t.rndFixedlabor).reduce((a,b)=>a+b,0);
  const sum_rndlabor_cost_variation = list_syn_api.map(prod_t=>prod_t.rndlabor_cost_variation).reduce((a,b)=>a+b,0);
  const sum_business_fixed_costs = list_syn_api.map(prod_t=>prod_t.business_fixed_costs).reduce((a,b)=>a+b,0);
  
 
  const sum_common_fixed_cost = list_syn_api.map(prod_t=>prod_t.common_fixed_cost).reduce((a,b)=>a+b,0);
  const sum_fixed_ratio_sum = list_syn_api.map(prod_t=>prod_t.fixed_ratio_sum).reduce((a,b)=>a+b,0);
  const sum_variable_sum = list_syn_api.map(prod_t=>prod_t.variable_sum).reduce((a,b)=>a+b,0);
  const sum_rnd_sum = list_syn_api.map(prod_t=>prod_t.rnd_sum).reduce((a,b)=>a+b,0);
  const sum_depreciation_by_business_sale = list_syn_api.map(prod_t=>prod_t.depreciation_by_business_sale).reduce((a,b)=>a+b,0);
  const sum_depreciation_by_product_direct = list_syn_api.map(prod_t=>prod_t.depreciation_by_product_direct).reduce((a,b)=>a+b,0);
  const sum_depreciation_common_by_sale = list_syn_api.map(prod_t=>prod_t.depreciation_common_by_sale).reduce((a,b)=>a+b,0);
  const sum_depreciation_sum = list_syn_api.map(prod_t=>prod_t.depreciation_sum).reduce((a,b)=>a+b,0);
  const sum_food_expense = list_syn_api.map(prod_t=>prod_t.food_expense).reduce((a,b)=>a+b,0);
  const sum_common_benefits = list_syn_api.map(prod_t=>prod_t.common_benefits).reduce((a,b)=>a+b,0);
  const sum_benefit_tot = list_syn_api.map(prod_t=>prod_t.benefit_tot).reduce((a,b)=>a+b,0);
  const sum_direct_payment = list_syn_api.map(prod_t=>prod_t.direct_payment).reduce((a,b)=>a+b,0);
  const sum_payment_common = list_syn_api.map(prod_t=>prod_t.payment_common).reduce((a,b)=>a+b,0);
  const sum_payment_tot = list_syn_api.map(prod_t=>prod_t.payment_tot).reduce((a,b)=>a+b,0);
  const sum_repaire_prod_direct = list_syn_api.map(prod_t=>prod_t.repaire_prod_direct).reduce((a,b)=>a+b,0);
  const sum_repaire_by_business = list_syn_api.map(prod_t=>prod_t.repaire_by_business).reduce((a,b)=>a+b,0);
  const sum_repaire_common = list_syn_api.map(prod_t=>prod_t.repaire_common).reduce((a,b)=>a+b,0);
  const sum_repair_total = list_syn_api.map(prod_t=>prod_t.repair_total).reduce((a,b)=>a+b,0);
  const sum_fuel_dir_cost = list_syn_api.map(prod_t=>prod_t.fuel_dir_cost).reduce((a,b)=>a+b,0);
  const sum_consumable_dir_prod_cost = list_syn_api.map(prod_t=>prod_t.consumable_dir_prod_cost).reduce((a,b)=>a+b,0);
  const sum_consumable_by_busins = list_syn_api.map(prod_t=>prod_t.consumable_by_busins).reduce((a,b)=>a+b,0);
  
  /*Sys API */
const tablerow_s = list_syn_api.filter((pro_nm)=>{
  if(searchTerm == "")
  {
    return pro_nm;
  }
  else if(pro_nm.product_name.toUpperCase().includes(searchTerm.toUpperCase()))
  {
return pro_nm;
  }
}).map((syn_api_r)=>{
  return( <tr>
     <td className='col_id_no'>{syn_api_r.product_name}</td>
     <td className='textright'>{syn_api_r.batch_size}</td>
     <td className='textright'>{syn_api_r.batch}</td>
     {show_s?<td className='textright'>{syn_api_r.synthesis_mn_hr}</td>:null}
     {show_s?<td className='textright'>{syn_api_r.syn_mn_into_batch.toLocaleString("ko-KR")}</td>:null}
     {show_s?<td className='textright'>{syn_api_r.sec_qc_percen.toLocaleString("ko-KR",{minimumFractionDigits:2})}</td>:null}
     {show_s?<td className='textright'>{syn_api_r.syn_pilot_perc.toLocaleString("ko-KR",{minimumFractionDigits:2})}</td>:null}
     {show_s?<td className='textright'>{syn_api_r.syn_art_perc.toLocaleString("ko-KR",{minimumFractionDigits:2})}</td>:null}
     {show_s?<td className='textright'>{syn_api_r.by_busi_perc.toLocaleString("ko-KR",{minimumFractionDigits:2})}</td>:null}
     {show_s?<td className='textright'>{syn_api_r.syn_total.toLocaleString("ko-KR")}</td>:null}
     {show_s?<td className='textright'>{syn_api_r.qc_man_hr}</td>:null}
     {show_s?<td className='textright'>{syn_api_r.qc_man_into_batch}</td>:null}
     {show_s?<td className='textright'>{syn_api_r.qc_sec_perc.toLocaleString("ko-KR",{minimumFractionDigits:2})}</td>:null}
     {show_s?<td className='textright'>{syn_api_r.syn_pilot_qc_perc.toLocaleString("ko-KR",{minimumFractionDigits:2})}</td>:null}
     {show_s?<td className='textright'>{syn_api_r.syn_pro_qc_perc.toLocaleString("ko-KR",{minimumFractionDigits:2})}</td>:null}
     {show_s?<td className='textright'>{syn_api_r.by_business_qc.toLocaleString("ko-KR",{minimumFractionDigits:2})}</td>:null}
     {show_s?<td className='textright'>{syn_api_r.qc_total.toLocaleString("ko-KR")}</td>:null}


     <td className='textright'>{syn_api_r.Sales_qty.toLocaleString("ko-KR")}</td>
     <td className='textright'>{syn_api_r.sales_amt.toLocaleString("ko-KR")}</td>
     {show_s?<td className='textright'>{syn_api_r.sales_product.toLocaleString("ko-KR")}</td>:null}
     {show_s?<td className='textright'>{syn_api_r.sale_by_busins.toLocaleString("ko-KR")}</td>:null}
     {show_s?<td className='textright'>{syn_api_r.sale_total.toLocaleString("ko-KR")}</td>:null}
     <td className='textright'>{(syn_api_r.batch_size*syn_api_r.batch).toLocaleString("ko-KR")}</td>
     <td className='textright'>{syn_api_r.prod_amt.toLocaleString("ko-KR")}</td>
     {show_s?<td className='textright'>{syn_api_r.prod_sec.toLocaleString("ko-KR",{minimumFractionDigits:2})}</td>:null}
     {show_s?<td className='textright'>{syn_api_r.prod_syn_pilot.toLocaleString("ko-KR",{minimumFractionDigits:2})}</td>:null}
     {show_s?<td className='textright'>{syn_api_r.prod_tot.toLocaleString("ko-KR",{minimumFractionDigits:2})}</td>:null}
     {show_s?<td className='textright'>{syn_api_r.opening_stk_qty.toLocaleString("ko-KR",{minimumFractionDigits:2})}</td>:null}
     {show_s?<td className='textright'>{syn_api_r.opening_st_amt.toLocaleString("ko-KR",{minimumFractionDigits:2})}</td>:null}
     {show_s?<td className='textright'>{syn_api_r.opening_wip_qty.toLocaleString("ko-KR",{minimumFractionDigits:2})}</td>:null}
     {show_s?<td className='textright'>{syn_api_r.opening_wip_fix_amt.toLocaleString("ko-KR",{minimumFractionDigits:2})}</td>:null}
     {show_s?<td className='textright'>{syn_api_r.opening_wip_variable_amt.toLocaleString("ko-KR",{minimumFractionDigits:2})}</td>:null}
     {show_s?<td className='textright'>{syn_api_r.opening_wip_amt.toLocaleString("ko-KR",{minimumFractionDigits:2})}</td>:null}
     

     {show_s?<td className='textright'>{syn_api_r.product_in.toLocaleString("ko-KR",{minimumFractionDigits:2})}</td>:null}
     {show_s?<td className='textright'>{syn_api_r.material_cost.toLocaleString("ko-KR",{minimumFractionDigits:2})}</td>:null}
     {show_s?<td className='textright'>{syn_api_r.packing_material.toLocaleString("ko-KR",{minimumFractionDigits:2})}</td>:null}
     {show_s?<td className='textright'>{syn_api_r.material_pack_tot.toLocaleString("ko-KR",{minimumFractionDigits:2})}</td>:null}

     {show_s?<td className='textright'>{syn_api_r.labor_dir_cost_mn_hr_fix_cost.toLocaleString("ko-KR",{minimumFractionDigits:0})}</td>:null}
     {show_s?<td className='textright'>{syn_api_r.labor_dir_cost_mn_hr_var_cost.toLocaleString("ko-KR",{minimumFractionDigits:0})}</td>:null}

     {show_s?<td className='textright'>{syn_api_r.labor_cost_qc_mn_hr_fix_cost.toLocaleString("ko-KR",{minimumFractionDigits:0})}</td>:null}
     {show_s?<td className='textright'>{syn_api_r.labor_cost_qc_mn_hr_var_cost.toLocaleString("ko-KR",{minimumFractionDigits:0})}</td>:null}

     {show_s?<td className='textright'>{syn_api_r.labor_cost_support_dept_fix_cost.toLocaleString("ko-KR",{minimumFractionDigits:0})}</td>:null}
     {show_s?<td className='textright'>{syn_api_r.labor_cost_support_dept_var_cost.toLocaleString("ko-KR",{minimumFractionDigits:0})}</td>:null}
     {show_s?<td className='textright'>{syn_api_r.tot_fix_cost.toLocaleString("ko-KR")}</td>:null}
     {show_s?<td className='textright'>{syn_api_r.tot_var_cost.toLocaleString("ko-KR")}</td>:null}
     {show_s?<td className='textright'>{(syn_api_r.tot_fix_cost+syn_api_r.tot_var_cost).toLocaleString("ko-KR")}</td>:null}
     
     {show_s?<td className='textright'>{syn_api_r.rndFixedlabor.toLocaleString("ko-KR")}</td>:null}
     {show_s?<td className='textright'>{syn_api_r.rndlabor_cost_variation.toLocaleString("ko-KR")}</td>:null}
     {show_s?<td className='textright'>{syn_api_r.business_fixed_costs.toLocaleString("ko-KR")}</td>:null}
     {show_s?<td className='textright'>{syn_api_r.common_fixed_cost.toLocaleString("ko-KR")}</td>:null}
     {show_s?<td className='textright'>{syn_api_r.fixed_ratio_sum.toLocaleString("ko-KR")}</td>:null}
     {show_s?<td className='textright'>{syn_api_r.variable_sum.toLocaleString("ko-KR")}</td>:null}
     {show_s?<td className='textright'>{syn_api_r.rnd_sum.toLocaleString("ko-KR")}</td>:null}
     {show_s?<td className='textright'>{syn_api_r.depreciation_by_business_sale.toLocaleString("ko-KR")}</td>:null}
     {show_s?<td className='textright'>{syn_api_r.depreciation_by_product_direct.toLocaleString("ko-KR")}</td>:null}
     {show_s?<td className='textright'>{syn_api_r.depreciation_common_by_sale.toLocaleString("ko-KR")}</td>:null}
     {show_s?<td className='textright'>{syn_api_r.depreciation_sum.toLocaleString("ko-KR")}</td>:null}


     {show_s?<td className='textright'>{syn_api_r.food_expense.toLocaleString("ko-KR")}</td>:null}
     {show_s?<td className='textright'>{syn_api_r.common_benefits.toLocaleString("ko-KR")}</td>:null}
     {show_s?<td className='textright'>{syn_api_r.benefit_tot.toLocaleString("ko-KR")}</td>:null}
     {show_s?<td className='textright'>{syn_api_r.direct_payment.toLocaleString("ko-KR")}</td>:null}
     {show_s?<td className='textright'>{syn_api_r.payment_common.toLocaleString("ko-KR")}</td>:null}
     {show_s?<td className='textright'>{syn_api_r.payment_tot.toLocaleString("ko-KR")}</td>:null}
     {show_s?<td className='textright'>{syn_api_r.repaire_prod_direct.toLocaleString("ko-KR")}</td>:null}
     {show_s?<td className='textright'>{syn_api_r.repaire_by_business.toLocaleString("ko-KR")}</td>:null}
     {show_s?<td className='textright'>{syn_api_r.repaire_common.toLocaleString("ko-KR")}</td>:null}
     {show_s?<td className='textright'>{syn_api_r.repair_total.toLocaleString("ko-KR")}</td>:null}
     {show_s?<td className='textright'>{syn_api_r.fuel_dir_cost.toLocaleString("ko-KR")}</td>:null}
     {show_s?<td className='textright'>{syn_api_r.consumable_dir_prod_cost.toLocaleString("ko-KR")}</td>:null}
     {show_s?<td className='textright'>{syn_api_r.consumable_by_busins.toLocaleString("ko-KR")}</td>:null}
     {show_s?<td className='textright'>{syn_api_r.consumable_commn_sale.toLocaleString("ko-KR")}</td>:null}
     {show_s?<td className='textright'>{syn_api_r.consumable_sum.toLocaleString("ko-KR")}</td>:null}
     {show_s?<td className='textright'>{syn_api_r.tax_by_sale.toLocaleString("ko-KR")}</td>:null}
     {show_s?<td className='textright'>{syn_api_r.tax_by_common.toLocaleString("ko-KR")}</td>:null}
     {show_s?<td className='textright'>{syn_api_r.tax_total.toLocaleString("ko-KR")}</td>:null}     
     {show_s?<td className='textright'>{syn_api_r.insurance_dir_sale.toLocaleString("ko-KR")}</td>:null}
     {show_s?<td className='textright'>{syn_api_r.insurance_commn_sale.toLocaleString("ko-KR")}</td>:null}
     {show_s?<td className='textright'>{syn_api_r.insurance_tot.toLocaleString("ko-KR")}</td>:null} 
     {show_s?<td className='textright'>{syn_api_r.education_fee.toLocaleString("ko-KR")}</td>:null}
     {show_s?<td className='textright'>{syn_api_r.vechicle_maint_cost.toLocaleString("ko-KR")}</td>:null}
     {show_s?<td className='textright'>{syn_api_r.book_print_fee.toLocaleString("ko-KR")}</td>:null}
     {show_s?<td className='textright'>{syn_api_r.travel_expense_direct.toLocaleString("ko-KR")}</td>:null}
     {show_s?<td className='textright'>{syn_api_r.travel_expense_common.toLocaleString("ko-KR")}</td>:null}
     {show_s?<td className='textright'>{syn_api_r.teavel_expense_tot.toLocaleString("ko-KR")}</td>:null}    
     {show_s?<td className='textright'>{syn_api_r.enteritainment_fee.toLocaleString("ko-KR")}</td>:null}
     {show_s?<td className='textright'>{syn_api_r.communitaction_cost.toLocaleString("ko-KR")}</td>:null}
     {show_s?<td className='textright'>{syn_api_r.rent_direct.toLocaleString("ko-KR")}</td>:null}
     {show_s?<td className='textright'>{syn_api_r.rent_common.toLocaleString("ko-KR")}</td>:null}
     {show_s?<td className='textright'>{syn_api_r.rent_tot.toLocaleString("ko-KR")}</td>:null}
     {show_s?<td className='textright'>{syn_api_r.transport_direct.toLocaleString("ko-KR")}</td>:null}
     {show_s?<td className='textright'>{syn_api_r.transport_common.toLocaleString("ko-KR")}</td>:null}
     {show_s?<td className='textright'>{syn_api_r.transport_tot.toLocaleString("ko-KR")}</td>:null}
     
     {show_s?<td className='textright'>{syn_api_r.overall_tot_fix_cost.toLocaleString("ko-KR")}</td>:null}
     {show_s?<td className='textright'>{syn_api_r.overall_tot_var_cost.toLocaleString("ko-KR")}</td>:null}
     {show_s?<td className='textright'>{syn_api_r.overall_total.toLocaleString("ko-KR")}</td>:null}

     {show_s?<td className='textright'>{syn_api_r.waste_liquid_direct.toLocaleString("ko-KR")}</td>:null}
     {show_s?<td className='textright'>{syn_api_r.activated_carbon_earth_usage.toLocaleString("ko-KR")}</td>:null}
     {show_s?<td className='textright'>{syn_api_r.activate_carbon_item_direct.toLocaleString("ko-KR")}</td>:null}
     {show_s?<td className='textright'>{syn_api_r.common_waste_organic.toLocaleString("ko-KR")}</td>:null}
     {show_s?<td className='textright'>{syn_api_r.water_waste_plant.toLocaleString("ko-KR")}</td>:null}    
     {show_s?<td className='textright'>{syn_api_r.gelatin_fp.toLocaleString("ko-KR")}</td>:null}
     {show_s?<td className='textright'>{syn_api_r.general_garbage.toLocaleString("ko-KR")}</td>:null}
     {show_s?<td className='textright'>{syn_api_r.wastewater_batch.toLocaleString("ko-KR")}</td>:null}
     {show_s?<td className='textright'>{syn_api_r.wastewater.toLocaleString("ko-KR")}</td>:null}
     {show_s?<td className='textright'>{syn_api_r.wastewater_perc.toLocaleString("ko-KR")}</td>:null}
     {show_s?<td className='textright'>{syn_api_r.ww_treat_prod_amt.toLocaleString("ko-KR")}</td>:null}
     {show_s?<td className='textright'>{syn_api_r.indus_park_basic_fixed_ratio_sum.toLocaleString("ko-KR")}</td>:null}
     {show_s?<td className='textright'>{syn_api_r.indus_ww_prod_amt.toLocaleString("ko-KR")}</td>:null}
     {show_s?<td className='textright'>{syn_api_r.indus_park_basic_fixed_ratio_sum.toLocaleString("ko-KR")}</td>:null}
     {show_s?<td className='textright'>{syn_api_r.waste_disposal_var_cost_sum.toLocaleString("ko-KR")}</td>:null}
     {show_s?<td className='textright'>{syn_api_r.total_fix_var_waste_disposal_cost.toLocaleString("ko-KR")}</td>:null}
    
     {show_s?<td className='textright'>{syn_api_r.electric_cost_by_business_fix.toLocaleString("ko-KR")}</td>:null}
     {show_s?<td className='textright'>{syn_api_r.elec_cost_three_fact_fix.toLocaleString("ko-KR")}</td>:null}
     {show_s?<td className='textright'>{syn_api_r.elec_power_usage.toLocaleString("ko-KR")}</td>:null}
     {show_s?<td className='textright'>{syn_api_r.electric_cost_amt.toLocaleString("ko-KR")}</td>:null}
     {show_s?<td className='textright'>{syn_api_r.elec_cost_amt_per.toLocaleString("ko-KR")}</td>:null}
     {show_s?<td className='textright'>{syn_api_r.elec_costprod_amt.toLocaleString("ko-KR")}</td>:null}
     {show_s?<td className='textright'>{syn_api_r.elec_cost_cmmn_var.toLocaleString("ko-KR")}</td>:null}
     {show_s?<td className='textright'>{syn_api_r.elec_cost_fix_ratio_sum.toLocaleString("ko-KR")}</td>:null}
     {show_s?<td className='textright'>{syn_api_r.elec_var_cost.toLocaleString("ko-KR")}</td>:null}
     {show_s?<td className='textright'>{syn_api_r.elec_fix_var_tot_cost.toLocaleString("ko-KR")}</td>:null}
     
     {show_s?<td className='textright'>{syn_api_r.pur_wastewatr_batch.toLocaleString("ko-KR")}</td>:null}
     {show_s?<td className='textright'>{syn_api_r.pur_wastewatr_vol.toLocaleString("ko-KR")}</td>:null}
     {show_s?<td className='textright'>{syn_api_r.pur_wastewatr_vol_per.toLocaleString("ko-KR")}</td>:null}     
     {show_s?<td className='textright'>{syn_api_r.waste_utility_dir.toLocaleString("ko-KR")}</td>:null}
     {show_s?<td className='textright'>{syn_api_r.waste_utility_comn_expense.toLocaleString("ko-KR")}</td>:null}
     {show_s?<td className='textright'>{syn_api_r.water_utility_tot.toLocaleString("ko-KR")}</td>:null}

     {show_s?<td className='textright'>{syn_api_r.tot_manu_fix_cost.toLocaleString("ko-KR")}</td>:null}
     {show_s?<td className='textright'>{syn_api_r.tot_manu_var_cost.toLocaleString("ko-KR")}</td>:null}
     {show_s?<td className='textright'>{syn_api_r.tot_manu_tot.toLocaleString("ko-KR")}</td>:null}

     {show_s?<td className='textright'>{syn_api_r.manu_fix_cost.toLocaleString("ko-KR")}</td>:null}
     {show_s?<td className='textright'>{syn_api_r.manu_var_cost.toLocaleString("ko-KR")}</td>:null}     
     {show_s?<td className='textright'>{syn_api_r.tot_manu_cost.toLocaleString("ko-KR")}</td>:null}

     {show_s?<td className='textright'>{syn_api_r.dispatch_qty.toLocaleString("ko-KR")}</td>:null}
     {show_s?<td className='textright'>{syn_api_r.dispatch_cost_sold.toLocaleString("ko-KR")}</td>:null}
     {show_s?<td className='textright'>{syn_api_r.dispatch_amt.toLocaleString("ko-KR")}</td>:null}

     {show_s?<td className='textright'>{syn_api_r.carry_ovr_stk_qty.toLocaleString("ko-KR")}</td>:null}
     {show_s?<td className='textright'>{syn_api_r.carry_ovr_stk_amt.toLocaleString("ko-KR")}</td>:null}

     {show_s?<td className='textright'>{syn_api_r. carryovr_qty.toLocaleString("ko-KR")}</td>:null}
     {show_s?<td className='textright'>{syn_api_r.carry_ovr_mat_fix_cost.toLocaleString("ko-KR")}</td>:null}
     {show_s?<td className='textright'>{syn_api_r.carry_ovr_mat_var.toLocaleString("ko-KR")}</td>:null}
     {show_s?<td className='textright'>{syn_api_r.carryovr_mat_tot.toLocaleString("ko-KR")}</td>:null}

     
   </tr>)
 })

 //const sync_sum = list_syn_api.map(sum_syn_batch =>sum_syn_batch.syn_mn_into_batch).reduce((sums,sum_syn_batch)=>sum_syn_batch+sums);
  return (
  <>
   <h3 className='title_color container-fluid'>합성API</h3>
    <div className='scrollmenu section container'> 
          
          
          <br></br>
         
            <Container>
         <Row>
             <Col>
             <ReactHTMLTableToExcel
                    id="test-table-xls-button"
                    className="download-table-xls-button"
                    table="empTable"
                    filename="합성API"
                    sheet="합성API"
                    buttonText="Download as XLS"/>
             </Col>
             <Col>
             <input type="text" placeholder='Search by product name...' onChange={event=>{
         setSearchTerm(event.target.value)
         
     }}/>
             
             </Col>
         </Row>
     </Container>
    
            <br>
            </br>
            <div className='container'>
            <button className='btn btn-success ' onClick={()=>setShow_s(true)}>Show All</button>{" "}
          <button className='btn btn-danger' onClick={()=>setShow_s(false)}>Hide</button>
         
            </div>
          
          <table id='empTable' className='container-fluid table-responsive'>
          <thead className='mainlink_title'>
            <tr className='new_title'>
              <td className='border-0 col_id_no'></td>
              <td className='border-0'> </td>
              <td className='border-0'></td>
            {show_s?<td className='border-0'></td>:null}
            {show_s?<td className='border-0'></td>:null}
              {show_s?<td className='border-0'></td>:null}
              {show_s?<td className='border-0' title>생산 Man Hour</td>:null}
              {show_s?<td className='border-0'></td>:null}
              {show_s?<td className='border-0'></td>:null}
              {show_s?<td className='border-0'></td>:null}
              {show_s?<td className='border-0'></td>:null}
              {show_s?<td className='border-0'></td>:null}
              {show_s?<td className='border-0'></td>:null}
              {show_s?<td className='border-0' title>QC Man Hour</td>:null}
              {show_s?<td className='border-0'></td>:null}
              {show_s?<td className='border-0'></td>:null}
              {show_s?<td className='border-0'></td>:null}
              <td className='border-0'></td>
              <td className='border-0' title>매출(생산투입有)</td>
              {show_s?<td className='border-0'></td>:null}
              {show_s?<td className='border-0'></td>:null}
              {show_s?<td className='border-0'></td>:null}
              <td className='border-0'></td>
              <td className='border-0'>생산투입금액</td>
              {show_s?<td className='border-0'></td>:null}
              {show_s?<td className='border-0'></td>:null}
              {show_s?<td className='border-0'></td>:null}
              {show_s?<td className='border-0'></td>:null}
              {show_s?<td className='border-0'>기초재고</td>:null}
              {show_s?<td className='border-0'></td>:null}
              {show_s?<td className='border-0'>기초재공</td>:null}
              {show_s?<td className='border-0'></td>:null}
              {show_s?<td className='border-0'></td>:null}
              {show_s?<td className='border-0'></td>:null}
              {show_s?<td className='border-0'>원부재료비</td>:null}
              {show_s?<td className='border-0'></td>:null}
              {show_s?<td className='border-0'></td>:null}

              {show_s?<td className='border-0'></td>:null}
              {show_s?<td className='border-0'>직접비(man-hour 기준 배분)	</td>:null}
              {show_s?<td className='border-0'></td>:null}
              {show_s?<td className='border-0'>QC(man-hour 기준 배분)	</td>:null}
              {show_s?<td className='border-0'></td>:null}
              {show_s?<td className='border-0'>지원(공통)(생산금액 기준 배분)	</td>:null}

              {show_s?<td className='border-0'></td>:null}
              {show_s?<td className='border-0'>합계	</td>:null}
              {show_s?<td className='border-0'></td>:null}

              {show_s?<td className='border-0'></td>:null}
              {show_s?<td className='border-0'>	</td>:null}
              {show_s?<td className='border-0'></td>:null}
              {show_s?<td className='border-0'>연구개발비(고정_변동) (매출기준)</td>:null}
              {show_s?<td className='border-0'></td>:null}
              {show_s?<td className='border-0'></td>:null}
              {show_s?<td className='border-0'></td>:null}
             

              {show_s?<td className='border-0'></td>:null}
              {show_s?<td className='border-0'></td>:null}
              {show_s?<td className='border-0'>감가상각비(고정)</td>:null}
              {show_s?<td className='border-0'></td>:null}

              {show_s?<td className='border-0'></td>:null}
              {show_s?<td className='border-0'>복리후생비(고정)</td>:null}
              {show_s?<td className='border-0'></td>:null}

              {show_s?<td className='border-0'></td>:null}
              {show_s?<td className='border-0'>지급수수료(고정)</td>:null}
              {show_s?<td className='border-0'></td>:null}

              {show_s?<td className='border-0'></td>:null}
              {show_s?<td className='border-0'>수선비(고정)</td>:null}
              {show_s?<td className='border-0'></td>:null}
              {show_s?<td className='border-0'></td>:null}

              {show_s?<td className='border-0'>연료비(변동)</td>:null}


              {show_s?<td className='border-0'></td>:null}
              {show_s?<td className='border-0'>소모품비(변동)</td>:null}
              {show_s?<td className='border-0'></td>:null}
              {show_s?<td className='border-0'></td>:null}

              {show_s?<td className='border-0'></td>:null}
              {show_s?<td className='border-0'>세금과공과(고정)</td>:null}
              {show_s?<td className='border-0'></td>:null}

              {show_s?<td className='border-0'></td>:null}
              {show_s?<td className='border-0'>보험료(고정)</td>:null}
              {show_s?<td className='border-0'></td>:null}

              {show_s?<td className='border-0'>교육훈련비(고정)</td>:null}
              {show_s?<td className='border-0'>차량유지비(고정)</td>:null}
              {show_s?<td className='border-0'>도서인쇄비(고정)</td>:null}
              {show_s?<td className='border-0'></td>:null}
              {show_s?<td className='border-0'>여비교통비(변동)</td>:null}
              {show_s?<td className='border-0'></td>:null}

              {show_s?<td className='border-0'>접대비(고정)</td>:null}

              {show_s?<td className='border-0'>통신비(고정)</td>:null}
              {show_s?<td className='border-0'></td>:null}
              {show_s?<td className='border-0'>지급임차료(고정)</td>:null}
              {show_s?<td className='border-0'></td>:null}
              {show_s?<td className='border-0'></td>:null}
              {show_s?<td className='border-0'>운반비(변동)</td>:null}
              {show_s?<td className='border-0'></td>:null}

              {show_s?<td className='border-0'></td>:null}
              {show_s?<td className='border-0'>합계</td>:null}
              {show_s?<td className='border-0'></td>:null}


              {show_s?<td className='border-0'></td>:null}
              {show_s?<td className='border-0'></td>:null}
              {show_s?<td className='border-0'></td>:null}
              {show_s?<td className='border-0'></td>:null}
              {show_s?<td className='border-0'></td>:null}
              {show_s?<td className='border-0'></td>:null}
              {show_s?<td className='border-0'></td>:null}
              {show_s?<td className='border-0'>폐기물처리비 waste disposal </td>:null}
              {show_s?<td className='border-0'></td>:null}
              {show_s?<td className='border-0'></td>:null}
              {show_s?<td className='border-0'></td>:null}
              {show_s?<td className='border-0'></td>:null}
              {show_s?<td className='border-0'></td>:null}
              {show_s?<td className='border-0'></td>:null}
              {show_s?<td className='border-0'></td>:null}
              {show_s?<td className='border-0'></td>:null}

              {show_s?<td className='border-0'></td>:null}
              {show_s?<td className='border-0'></td>:null}
              {show_s?<td className='border-0'>전력비 electricity cost</td>:null}
              {show_s?<td className='border-0'></td>:null}
              {show_s?<td className='border-0'></td>:null}
              {show_s?<td className='border-0'></td>:null}
              {show_s?<td className='border-0'></td>:null}
              {show_s?<td className='border-0'>전력비 electricity cost</td>:null}
              {show_s?<td className='border-0'></td>:null}
              {show_s?<td className='border-0'></td>:null}

              {show_s?<td className='border-0'></td>:null}
              {show_s?<td className='border-0'>수도광열비(변동)Water and utilities ratio (variable)	</td>:null}
              {show_s?<td className='border-0'></td>:null}
              {show_s?<td className='border-0'></td>:null}
              {show_s?<td className='border-0'></td>:null}
              {show_s?<td className='border-0'></td>:null}

              {show_s?<td className='border-0'></td>:null}
              {show_s?<td className='border-0'>총제조비용(원재료비+노무비+제조경비)</td>:null}
              {show_s?<td className='border-0'></td>:null}

              {show_s?<td className='border-0'></td>:null}
              {show_s?<td className='border-0'>제조원가</td>:null}
              {show_s?<td className='border-0'></td>:null}

              {show_s?<td className='border-0'></td>:null}
              {show_s?<td className='border-0'>당기 출고dispatch</td>:null}
              {show_s?<td className='border-0'></td>:null}

              {show_s?<td className='border-0'></td>:null}
              {show_s?<td className='border-0'>이월재고carryovr stock</td>:null}


              {show_s?<td className='border-0'></td>:null}
              {show_s?<td className='border-0'>이월재공carryovr_mat</td>:null}
              {show_s?<td className='border-0'></td>:null}
              {show_s?<td className='border-0'></td>:null}
              
            </tr>

            <tr className='rounded'>
              <th className='col_id_no'>Product_name</th>
              <th className=''>Batch Size batch_size</th>
              <th className=''>Batch</th>
              {show_s?<th className='q1'>Man hour synthesis_mn_hr</th>:null}
              {show_s?<th className='q1'>ManHour*batch syn_mn_into_batch</th>:null}
              {show_s?<th className='q1'>부문별% sec_qc_percen</th>:null}
              {show_s?<th className='q1'>합성+PILOT% syn_pilot_perc</th>:null}
              {show_s?<th className='q1'>합성+조품% syn_art_perc</th>:null}
              {show_s?<th className='q1'>사업별% by_busi_perc</th>:null}
              {show_s?<th className='q1'>전체% syn_total</th>:null}
              {show_s?<th className='q2'>Man hour qc_man_hr</th>:null}
              {show_s?<th className='q2'>ManHour*batch qc_man_into_batch</th>:null}
              {show_s?<th className='q2'>부문별% qc_sec_perc</th>:null}
              {show_s?<th className='q2'>합성+PILOT% syn_pilot_qc_perc</th>:null}
              {show_s?<th className='q2'>합성+조품% syn_pro_qc_perc</th>:null}
              {show_s?<th className='q2'>사업별% by_business_qc</th>:null}
              {show_s?<th className='q2'>전체% qc_total</th>:null}
              <th className='q3'>수량</th>
              <th className='q3'>매출액(생산무관)</th>
              {show_s?<th className='q3'>매출액(생산무관)</th>:null}
              {show_s?<th className='q3'>사업별%(생산투입有)</th>:null}
              {show_s?<th className='q3'>전체%</th>:null}
              <th className='q4'>수량</th>
              <th className='q4'>금액</th>
              {show_s?<th className='q4'>부문% </th>:null}
              {show_s?<th className='q4'>(합성+PILOT)%</th>:null}
              {show_s?<th className='q4'>전체%</th>:null}
            
              {show_s?<th className='q5'>수량 </th>:null}
              {show_s?<th className='q5'>금액</th>:null}
              {show_s?<th className='q5'>수량</th>:null}
              {show_s?<th className='q5'>고정비 </th>:null}
              {show_s?<th className='q5'>변동비</th>:null}
              {show_s?<th className='q5'>금액</th>:null}

              {show_s?<th className='q5'>수량</th>:null}
              {show_s?<th className='q5'>material cost 원료비</th>:null}
              {show_s?<th className='q5'>packing material cost 재료비</th>:null}
              {show_s?<th className='q5'>total 합계</th>:null}

              {show_s?<th className='q1'>고정비 fixed labor cost</th>:null}
              {show_s?<th className='q1'>변동비 variable labor cost</th>:null}
              {show_s?<th className='q2'>고정비fixed labor cost</th>:null}
              {show_s?<th className='q2'>변동비 variable labor cost</th>:null}
              {show_s?<th className='q3'>고정비</th>:null}
              {show_s?<th className='q3'>변동비</th>:null}
              
              {show_s?<th className='q4'>고정비</th>:null}
              {show_s?<th className='q4'>변동비</th>:null}
              {show_s?<th className='q4'>합계</th>:null}

              {show_s?<th className='q1'>연구개발노무비_고정</th>:null}
              {show_s?<th className='q1'>연구개발노무비_변동</th>:null}
              {show_s?<th className='q1'>사업별_고정비</th>:null}
              {show_s?<th className='q1'>공통_고정비</th>:null}
              {show_s?<th className='q1'>고정비합계</th>:null}
              {show_s?<th className='q1'>변동비합계</th>:null}
              {show_s?<th className='q1'>합계</th>:null}

              {show_s?<th className='q2'>사업별(매출기준)</th>:null}
              {show_s?<th className='q2'>제품별(직접) ?</th>:null}
              {show_s?<th className='q2'>공통(매출기준)</th>:null}
              {show_s?<th className='q2'>합계</th>:null}

              {show_s?<th className='q3'>직접(식비 外)(생산) food_expense</th>:null}
              {show_s?<th className='q3'>공통(매출) common_benefits</th>:null}
              {show_s?<th className='q3'>합계 benefit_tot</th>:null}
              {show_s?<th className='q4'>직접(매출)direct_payment</th>:null}
              {show_s?<th className='q4'>공통(매출) payment_common</th>:null}
              {show_s?<th className='q4'>합계 payment_tot</th>:null}
              {show_s?<th className='q5'>부문별_직접(생산)repaire_prod_direct</th>:null}
              {show_s?<th className='q5'>사업별(생산) repaire_by_business</th>:null}
              {show_s?<th className='q5'>공통(매출)repaire_common</th>:null}
              {show_s?<th className='q5'>합계repair_total</th>:null}
              {show_s?<th className='q1'>직접(생산금액) fuel_dir_cost</th>:null}
              {show_s?<th className='q2'>부문별_직접(생산) consumable_dir_prod_cost</th>:null}
              {show_s?<th className='q2'>사업별(생산)consumable_by_busins</th>:null}
              {show_s?<th className='q2'>공통(매출)consumable_commn_sale</th>:null}
              {show_s?<th className='q2'>합계consumable_sum</th>:null}
              {show_s?<th className='q3'>tax_by_sale직접(매출기준)</th>:null}
              {show_s?<th className='q3'>공통(매출기준)tax_by_common</th>:null}
              {show_s?<th className='q3'>합계 tax_total</th>:null}
              {show_s?<th className='q4'>직접(매출기준)</th>:null}
              {show_s?<th className='q4'>공통(매출기준)</th>:null}
              {show_s?<th className='q4'>합계</th>:null}

              {show_s?<th className='q1'>(매출기준)education_fee</th>:null}
              {show_s?<th className='q2'>(매출기준) vechicle_maint_cost</th>:null}
              {show_s?<th className='q3'>(매출기준) book_print_fee</th>:null}    

              {show_s?<th className='q1'>직접(생산금액)travel_expense_direct</th>:null}
              {show_s?<th className='q1'>공통(매출기준)travel_expense_common</th>:null}
              {show_s?<th className='q1'>합계 teavel_expense_tot</th>:null}          

              {show_s?<th className='q2'>(매출기준)enteritainment_fee</th>:null}   
              {show_s?<th className='q3'>(매출기준)communitaction_cost</th>:null}

              {show_s?<th className='q4'>직접(매출기준) rent_direct</th>:null}
              {show_s?<th className='q4'>공통(매출기준)rent_common</th>:null}
              {show_s?<th className='q4'>합계rent_tot</th>:null}       

              {show_s?<th className='q1'>직접(매출기준)transport_direct</th>:null}
              {show_s?<th className='q1'>공통(매출기준)transport_common</th>:null}
              {show_s?<th className='q1'>합계transport_tot</th>:null} 

               {show_s?<th className='q5'>고정비 overall_tot_fix_cost</th>:null}
              {show_s?<th className='q5'>변동비 overall_tot_var_cost</th>:null}
              {show_s?<th className='q5'>합계 overall_total</th>:null}    

              {show_s?<th className='q1'>폐액(품목_직접)waste_liquid_direct</th>:null}
              {show_s?<th className='q1'>활성탄_규조토사용량activated_carbon_earth_usage</th>:null}
              {show_s?<th className='q1'>활성탄外(품목_직접)activate_carbon_item_direct</th>:null}
              {show_s?<th className='q1'>폐유기용제 공통 (생산금액) common_waste_organic</th>:null}
              {show_s?<th className='q1'>폐수장 오니슬러지(생산금액)water_waste_plant</th>:null}
              {show_s?<th className='q1'>젤라틴/천연물(변동)(생산금액기준)gelatin_fp</th>:null}
              {show_s?<th className='q1'>일반쓰레기(변동)(매출기준)general_garbage</th>:null}
              {show_s?<th className='q1'>폐수량/batch wastewater_batch</th>:null}
              {show_s?<th className='q1'>wastewater</th>:null}
              {show_s?<th className='q1'>wastewater%</th>:null}
              {show_s?<th className='q1'>폐수처리약품(변동)(생산금액기준)ww_treat_prod_amt</th>:null}
              {show_s?<th className='q1'>공단_기본_(고정)(매출기준) indus_park_basic_fixed_ratio_sum</th>:null}
              {show_s?<th className='q1'>공단폐수(변동)(생산금액기준)indus_ww_prod_amt</th>:null}
              {show_s?<th className='q1'>고정비합계indus_park_basic_fixed_ratio_sum</th>:null}
              {show_s?<th className='q1'>변동비합계waste_disposal_var_cost_sum</th>:null}
              {show_s?<th className='q1'>합계 total_fix_var_waste_disposal_cost(고정비+변동비)m</th>:null}
              
              {show_s?<th className='q2'>기본료_사업별(고정) (생산기준)electric_cost_by_business_fix</th>:null}
              {show_s?<th className='q2'>기본료_3공장 및 공통(고정), (생산기준)elec_cost_three_fact_fix</th>:null}
              {show_s?<th className='q2'>전력사용량/batch elec_power_usage</th>:null}
              {show_s?<th className='q2'>전력량 electric_cost_amt</th>:null}
              {show_s?<th className='q2'>elec_cost_amt_per%</th>:null}
              {show_s?<th className='q2'>전력비_품목(변동(생산금액기준)elec_costprod_amt</th>:null}
              {show_s?<th className='q2'>전력비_공통(변동)(생산금액기준)elec_cost_cmmn_var</th>:null}
              {show_s?<th className='q2'>고정비합계elec_cost_fix_ratio_sum</th>:null}
              {show_s?<th className='q2'>변동비합계elec_var_cost</th>:null}
              {show_s?<th className='q2'>합계(고정비+변동비)elec_fix_var_tot_cost</th>:null}
              
              {show_s?<th className='q3'>(정수+폐수)량/batch our)pur_wastewatr_batch</th>:null}
              {show_s?<th className='q3'>(정수+폐수)량pur_wastewatr_vol</th>:null}
              {show_s?<th className='q3'>pur_wastewatr_vol_per %</th>:null}
              {show_s?<th className='q3'>직접비 waste_utility_dir</th>:null}
              {show_s?<th className='q3'>공통(생산금액기준)waste_utility_comn_expense</th>:null}
              {show_s?<th className='q3'>water_utility_tot합계</th>:null}

              {show_s?<th className='q1'>고정비tot_manu_fix_cost</th>:null}
              {show_s?<th className='q1'>변동비tot_manu_var_cost</th>:null}
              {show_s?<th className='q1'>합계tot_manu_tot</th>:null}

              {show_s?<th className='q3'>고정비manu_fix_cost</th>:null}
              {show_s?<th className='q3'>변동비manu_var_cost</th>:null}
              {show_s?<th className='q3'>합계tot_manu_cost</th>:null}
              
              {show_s?<th className='q1'> 수량 dispatch_qty</th>:null}
              {show_s?<th className='q1'> 매출원가dispatch_cost_sold</th>:null}
              {show_s?<th className='q1'> 금액 dispatch_amt</th>:null}


              {show_s?<th className='q2'> 수량 carry_ovr_stk_qty</th>:null}
              {show_s?<th className='q2'> 금액 carry_ovr_stk_amt</th>:null}


              {show_s?<th className='q3'>  carryovr_qty수량</th>:null}
              {show_s?<th className='q3'>고정비carry_ovr_mat_fix_cost</th>:null}
              {show_s?<th className='q3'>변동비carry_ovr_mat_var</th>:null}
              {show_s?<th className='q3'>합계carryovr_mat_tot</th>:null}
             
          
            </tr>
          </thead>

          <tbody className='table_str q1'>
          {tablerow_s}

          </tbody>
          {show_s?<tr>
            <th>Total</th>
            <th></th>
            <th></th>
            <th></th>
            <th>{syn_mn_into_batch_sum.toLocaleString("ko-KR",{minimumFractionDigits:2})}</th>
            <th>{sum_syn_qc_perc.toLocaleString("ko-KR",{minimumFractionDigits:2})}</th>
            <th>{sum_syn_pilot_perc.toLocaleString("ko-KR",{minimumFractionDigits:2})}</th>
            <th>{sum_syn_art_perc.toLocaleString("ko-KR",{minimumFractionDigits:2})}</th>
            <th>{sum_by_busi_per.toLocaleString("ko-KR",{minimumFractionDigits:2})}</th>
            <th>{sum_syn_total.toLocaleString("ko-KR",{minimumFractionDigits:2})}</th>
            <th></th>
            <th>{sum_qc_man_into_batch.toLocaleString("ko-KR",{minimumFractionDigits:2})}</th>
            <th>{sum_qc_sec_perc.toLocaleString("ko-KR",{minimumFractionDigits:2})}</th>
            <th>{sum_syn_pilot_qc_perc.toLocaleString("ko-KR",{minimumFractionDigits:2})}</th>
            <th>{sum_syn_pro_qc_perc.toLocaleString("ko-KR",{minimumFractionDigits:2})}</th>
            <th>{sum_by_business_qc.toLocaleString("ko-KR",{minimumFractionDigits:2})}</th>
            <th>{sum_qc_total.toLocaleString("ko-KR",{minimumFractionDigits:2})}</th>
            <th></th>
            <th>{sum_sales_amt.toLocaleString("ko-KR")}</th>
            <th>{sum_sal_pro.toLocaleString("ko-KR")}</th>
            <th>{sum_sale_bus.toLocaleString("ko-KR",{minimumFractionDigits:2})}</th>
            <th>{sum_sal_tot.toLocaleString("ko-KR",{minimumFractionDigits:2})}</th>
            <th></th>
            <th>{sum_prod_amt.toLocaleString("ko-KR")}</th>
            <th>{sum_prod_sec.toLocaleString("ko-KR",{minimumFractionDigits:2})}</th>
            <th>{sum_prod_syn_p.toLocaleString("ko-KR",{minimumFractionDigits:2})}</th>
            <th>{sum_prod_tot.toLocaleString("ko-KR",{minimumFractionDigits:2})}</th>
            <th>{sum_opening_stk_qty.toLocaleString("ko-KR",{minimumFractionDigits:2})}</th>
            <th>{sum_opening_st_amt.toLocaleString("ko-KR",{minimumFractionDigits:2}) }</th>
            <th>{sum_opening_wip_qty.toLocaleString("ko-KR",{minimumFractionDigits:2})}</th>
            <th>{sum_opening_wip_fix_amt.toLocaleString("ko-KR",{minimumFractionDigits:2})}</th>
            <th>{sum_opening_wip_variable_amt.toLocaleString("ko-KR",{minimumFractionDigits:2})}</th>
            <th>{sum_opening_wip_amt.toLocaleString("ko-KR",{minimumFractionDigits:2})}</th>
            <th>{sum_product_in.toLocaleString("ko-KR",{minimumFractionDigits:2})}</th>
            <th>{sum_material_cost.toLocaleString("ko-KR",{minimumFractionDigits:2})}</th>
            <th>{sum_packing_material.toLocaleString("ko-KR",{minimumFractionDigits:2})}</th>
            <th>{sum_material_pack_tot.toLocaleString("ko-KR",{minimumFractionDigits:2})}</th>
            <th>{sum_labor_dir_cost_mn_hr_fix_cost.toLocaleString("ko-KR",{minimumFractionDigits:2})}</th>
            <th>{sum_labor_dir_cost_mn_hr_var_cost.toLocaleString("ko-KR",{minimumFractionDigits:2})}</th>
            <th>{sum_labor_cost_qc_mn_hr_fix_cost.toLocaleString("ko-KR",{minimumFractionDigits:2})}</th>
            <th>{sum_labor_cost_qc_mn_hr_var_cost.toLocaleString("ko-KR",{minimumFractionDigits:2})}</th>
            <th>{sum_labor_cost_support_dept_fix_cost.toLocaleString("ko-KR",{minimumFractionDigits:2})}</th>
            <th>{sum_labor_cost_support_dept_var_cost.toLocaleString("ko-KR",{minimumFractionDigits:2})}</th>
            <th>{sum_tot_fix_cost.toLocaleString("ko-KR",{minimumFractionDigits:2})}</th>
            <th>{sum_tot_var_cost.toLocaleString("ko-KR",{minimumFractionDigits:2})}</th>
            <th>{sum_rndFixedlabor.toLocaleString("ko-KR",{minimumFractionDigits:2})}</th>
            <th>{sum_rndlabor_cost_variation.toLocaleString("ko-KR",{minimumFractionDigits:2})}</th>
            <th>{sum_business_fixed_costs.toLocaleString("ko-KR",{minimumFractionDigits:2})}</th>
            <th>{sum_common_fixed_cost.toLocaleString("ko-KR",{minimumFractionDigits:2}) }</th>
            <th>{sum_fixed_ratio_sum.toLocaleString("ko-KR",{minimumFractionDigits:2}) }</th>
            <th>{sum_variable_sum.toLocaleString("ko-KR",{minimumFractionDigits:2}) }</th>
            <th>{sum_rnd_sum.toLocaleString("ko-KR",{minimumFractionDigits:2}) }</th>
            <th>{sum_depreciation_by_business_sale.toLocaleString("ko-KR",{minimumFractionDigits:2}) }</th>
            <th>{sum_depreciation_by_product_direct.toLocaleString("ko-KR",{minimumFractionDigits:2}) }</th>
            <th>{sum_depreciation_common_by_sale.toLocaleString("ko-KR",{minimumFractionDigits:2}) }</th>
            <th>{sum_depreciation_sum.toLocaleString("ko-KR",{minimumFractionDigits:2}) }</th>
            <th>{sum_food_expense.toLocaleString("ko-KR",{minimumFractionDigits:2}) }</th>
            <th>{sum_common_benefits.toLocaleString("ko-KR",{minimumFractionDigits:2}) }</th>
            <th>{sum_benefit_tot.toLocaleString("ko-KR",{minimumFractionDigits:2}) }</th>
            <th>{sum_direct_payment.toLocaleString("ko-KR",{minimumFractionDigits:2}) }</th>
            <th>{sum_payment_common.toLocaleString("ko-KR",{minimumFractionDigits:2}) }</th>
            <th>{sum_payment_tot.toLocaleString("ko-KR",{minimumFractionDigits:2}) }</th>
            <th>{sum_repaire_prod_direct.toLocaleString("ko-KR",{minimumFractionDigits:2}) }</th>
            <th>{sum_repaire_by_business.toLocaleString("ko-KR",{minimumFractionDigits:2}) }</th>
            <th>{sum_repaire_common.toLocaleString("ko-KR",{minimumFractionDigits:2}) }</th>
            <th>{sum_repair_total.toLocaleString("ko-KR",{minimumFractionDigits:2}) }</th>
            <th>{sum_fuel_dir_cost.toLocaleString("ko-KR",{minimumFractionDigits:2}) }</th>
            <th>{sum_consumable_dir_prod_cost.toLocaleString("ko-KR",{minimumFractionDigits:2}) }</th>
            <th>{sum_consumable_by_busins.toLocaleString("ko-KR",{minimumFractionDigits:2}) }</th>
            <th></th><th></th><th></th><th></th><th></th>
            <th></th><th></th><th></th>
            <th></th><th></th><th></th><th></th>
            <th></th><th></th><th></th><th></th><th></th><th></th><th></th>
            <th></th><th></th><th></th><th></th><th></th><th></th><th></th>
            <th></th><th></th><th></th><th></th><th></th><th></th><th></th><th></th><th></th>
            <th></th><th></th><th></th><th></th><th></th><th></th><th></th><th></th>
            <th></th><th></th><th></th><th></th><th></th>
            <th></th><th></th><th></th><th></th><th></th><th></th><th></th>
            <th></th><th></th><th></th>
            <th></th><th></th><th></th><th></th><th></th><th></th><th></th>
            <th></th><th></th><th></th> <th></th><th></th><th></th><th></th><th></th>
           
            </tr>:null}
            
          </table>
          
      </div>
      <br></br><br></br><br></br>
    </>
    
  )
}

export default Sys_api_report

