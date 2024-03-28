import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

function SysManu() {
  const[list_sys_mnhr,setlist_sys_mnhr] = useState([])

  useEffect(()=>{
    axios.get("http://localhost:3001/man_hrs_p/p_mnhrs22").then((response)=>{
      setlist_sys_mnhr(response.data)
      console.log(response.data)
    })
  },[])
  const table_row = list_sys_mnhr.map((manhr)=>{
    return(
      <tr>
        <td className='col_id_no'>{manhr.product_name}</td>
        <td className='textright'>{manhr.batch_size}</td>
        <td className='textright'>{manhr.batch}</td>
       
        <td className='textright'>{manhr.rndFixedlabor.toLocaleString("ko-KR")}</td>
        <td className='textright'>{manhr.rndlabor_cost_variation.toLocaleString("ko-KR",{minimumFractionDigits:2})}</td>
        <td className='textright'>{manhr.business_fixed_costs.toLocaleString("ko-KR",{minimumFractionDigits:2})}</td>
        <td className='textright'>{manhr.common_fixed_cost.toLocaleString("ko-KR")}</td>
        <td className='textright'>{manhr.fixed_ratio_sum.toLocaleString("ko-KR",{minimumFractionDigits:2})}</td>
        <td className='textright'>{manhr.variable_sum.toLocaleString("ko-KR",{minimumFractionDigits:2})}</td>
        <td className='textright'>{manhr.rnd_sum.toLocaleString("ko-KR")}</td>

        <td className='textright'>{manhr.depreciation_by_business_sale.toLocaleString("ko-KR",{minimumFractionDigits:2})}</td>
        <td className='textright'>{manhr.depreciation_by_product_direct.toLocaleString("ko-KR",{minimumFractionDigits:2})}</td>
        <td className='textright'>{manhr.depreciation_common_by_sale.toLocaleString("ko-KR")}</td>
        <td className='textright'>{manhr.depreciation_sum.toLocaleString("ko-KR",{minimumFractionDigits:2})}</td>
        
        <td className='textright'>{manhr.waste_liquid_direct.toLocaleString("ko-KR",{minimumFractionDigits:2})}</td> 
        <td className='textright'>{manhr.activated_carbon_earth_usage.toLocaleString("ko-KR")}</td>
        <td className='textright'>{manhr.activate_carbon_item_direct.toLocaleString("ko-KR",{minimumFractionDigits:2})}</td>
        <td className='textright'>{manhr.common_waste_organic.toLocaleString("ko-KR",{minimumFractionDigits:2})}</td>
        <td className='textright'>{manhr.water_waste_plant.toLocaleString("ko-KR")}</td>
        <td className='textright'>{manhr.gelatin_fp.toLocaleString("ko-KR",{minimumFractionDigits:2})}</td>
        <td className='textright'>{manhr.general_garbage.toLocaleString("ko-KR",{minimumFractionDigits:2})}</td>
        <td className='textright'>{manhr.wastewater_batch.toLocaleString("ko-KR")}</td>
        <td className='textright'>{manhr.wastewater.toLocaleString("ko-KR",{minimumFractionDigits:2})}</td> 
        <td className='textright'>{manhr.wastewater_perc.toLocaleString("ko-KR",{minimumFractionDigits:2})}</td>
        <td className='textright'>{manhr.ww_treat_prod_amt.toLocaleString("ko-KR")}</td>
        <td className='textright'>{manhr.indus_park_basic_fixed_ratio_sum.toLocaleString("ko-KR",{minimumFractionDigits:2})}</td>
        <td className='textright'>{manhr.indus_ww_prod_amt.toLocaleString("ko-KR",{minimumFractionDigits:2})}</td>
        <td className='textright'>{manhr.waste_disposal_var_cost_sum.toLocaleString("ko-KR",{minimumFractionDigits:2})}</td> 
        <td className='textright'>{manhr.total_fix_var_waste_disposal_cost.toLocaleString("ko-KR",{minimumFractionDigits:2})}</td>
        <td className='textright'>{manhr.electric_cost_by_business_fix.toLocaleString("ko-KR")}</td>
        <td className='textright'>{manhr.elec_cost_three_fact_fix.toLocaleString("ko-KR",{minimumFractionDigits:2})}</td>
        <td className='textright'>{manhr.elec_power_usage.toLocaleString("ko-KR",{minimumFractionDigits:2})}</td>
       
        <td className='textright'>{manhr.electric_cost_amt.toLocaleString("ko-KR",{minimumFractionDigits:2})}</td> 
        <td className='textright'>{manhr.elec_cost_amt_per.toLocaleString("ko-KR",{minimumFractionDigits:2})}</td>
        <td className='textright'>{manhr.elec_costprod_amt.toLocaleString("ko-KR")}</td>
        <td className='textright'>{manhr.elec_cost_cmmn_var.toLocaleString("ko-KR",{minimumFractionDigits:2})}</td>
        <td className='textright'>{manhr.elec_cost_fix_ratio_sum.toLocaleString("ko-KR",{minimumFractionDigits:2})}</td>
        <td className='textright'>{manhr.elec_var_cost.toLocaleString("ko-KR",{minimumFractionDigits:2})}</td> 
        <td className='textright'>{manhr.elec_fix_var_tot_cost.toLocaleString("ko-KR",{minimumFractionDigits:2})}</td>
        <td className='textright'>{manhr.pur_wastewatr_batch.toLocaleString("ko-KR")}</td>
        <td className='textright'>{manhr.pur_wastewatr_vol.toLocaleString("ko-KR",{minimumFractionDigits:2})}</td>
        <td className='textright'>{manhr.pur_wastewatr_vol_per.toLocaleString("ko-KR",{minimumFractionDigits:2})}</td>
        <td className='textright'>{manhr.waste_utility_dir.toLocaleString("ko-KR",{minimumFractionDigits:2})}</td> 
        <td className='textright'>{manhr.waste_utility_comn_expense.toLocaleString("ko-KR",{minimumFractionDigits:2})}</td>
        <td className='textright'>{manhr.water_utility_tot.toLocaleString("ko-KR")}</td>
        <td className='textright'>{manhr.tot_manu_fix_cost.toLocaleString("ko-KR",{minimumFractionDigits:2})}</td>
        <td className='textright'>{manhr.tot_manu_var_cost.toLocaleString("ko-KR",{minimumFractionDigits:2})}</td>
       
      </tr>
    )
  })
  return (
    <>
    <br></br><br></br>
    <div className='scrollmenu section container'>
      <div className='container'>
      <table id='empTable' className='container-fluid table-responsive'>
        <thead className='mainlink_title'>
            <tr className='rounded'>
            <th className='col_id_no'>Product_name</th>
            <th className=''>Batch Size batch_size</th>
            <th className=''>Batch</th>

            <th className='q1'>연구개발노무비_고정</th>
            <th className='q1'>연구개발노무비_변동</th>
            <th className='q1'>사업별_고정비</th>
            <th className='q1'>공통_고정비</th>
            <th className='q1'>고정비합계</th>
            <th className='q1'>변동비합계</th>
            <th className='q1'>합계</th>

            <th className='q2'>사업별(매출기준)</th>
            <th className='q2'>제품별(직접)</th>
            <th className='q2'>공통(매출기준)</th>
            <th className='q2'>합계</th>

            <th className='q3'>폐액(품목_직접)</th>
            <th className='q3'>활성탄_규조토사용량</th>
            <th className='q3'>활성탄外(품목_직접)</th>
            <th className='q3'>폐유기용제 공통 (생산금액)</th>
            <th className='q3'>폐수장 오니슬러지 (생산금액)</th>
            <th className='q3'>젤라틴/천연물(변동) (생산금액기준)</th>
            <th className='q3'>일반쓰레기(변동)(매출기준)</th>
            <th className='q3'>폐수량/batch</th>
            <th className='q3'>폐수량</th>
            <th className='q3'>wastewater%</th>
            <th className='q3'>폐수처리약품(변동)(생산금액기준)</th>
            <th className='q3'>공단_기본_(고정)(매출기준)</th>
            <th className='q3'>공단폐수(변동)(생산금액기준)</th>
            <th className='q3'>변동비합계</th>
            <th className='q3'>합계</th>

            <th className='q3'>폐수량/batch</th>
            <th className='q3'>폐수량</th>
            <th className='q3'>wastewater%</th>
           
           
            </tr>  
        </thead>
        <tbody className='table_str q1'>
          {table_row}

          </tbody>
      </table>
      </div>

    </div>
    </>
  )
}

export default SysManu
