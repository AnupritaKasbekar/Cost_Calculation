import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

function HerbStk23() {
  const[list_sys_mnhr,setlist_sys_mnhr] = useState([])

  useEffect(()=>{
    axios.get("http://localhost:3001/man_hrs_p/ph_mnhrs23").then((response)=>{
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

        <td className='textright'>{manhr.carryovr_qty}</td>
        <td className='textright'>{manhr.opening_stk_qty.toLocaleString("ko-KR")}</td>
        <td className='textright'>{manhr.opening_st_amt.toLocaleString("ko-KR",{minimumFractionDigits:2})}</td>
        <td className='textright'>{manhr.opening_wip_qty.toLocaleString("ko-KR",{minimumFractionDigits:2})}</td>
        <td className='textright'>{manhr.opening_wip_fix_amt.toLocaleString("ko-KR",{minimumFractionDigits:2})}</td>
        <td className='textright'>{manhr.opening_wip_variable_amt.toLocaleString("ko-KR",{minimumFractionDigits:2})}</td>
        <td className='textright'>{manhr.opening_wip_amt.toLocaleString("ko-KR")}</td>
        <td className='textright'>{manhr.carry_ovr_stk_qty.toLocaleString("ko-KR",{minimumFractionDigits:2})}</td>
        <td className='textright'>{manhr.carry_ovr_stk_amt.toLocaleString("ko-KR",{minimumFractionDigits:2})}</td>
        <td className='textright'>{manhr.carry_ovr_mat_fix_cost.toLocaleString("ko-KR",{minimumFractionDigits:2})}</td>
        <td className='textright'>{manhr.carry_ovr_mat_var.toLocaleString("ko-KR")}</td>
        <td className='textright'>{manhr.carry_ovr_mat_var.toLocaleString("ko-KR",{minimumFractionDigits:2})}</td>
        <td className='textright'>{manhr.carryovr_mat_tot.toLocaleString("ko-KR")}</td>

      </tr>
    )
  })
  return (
    <>
    <div className='scrollmenu section container'>
      <div className='container'>
      <table id='empTable' className='container-fluid table-responsive'>
        <thead className='mainlink_title'>
            <tr className='rounded'>
            <th className='col_id_no'>Product_name</th>
            <th className=''>Batch Size batch_size</th>
            <th className=''>Batch</th>
            <th className='q1'>Carry_ovr qty</th>
            <th className='q1'>수량 opening_stk_qty</th>
            <th className='q1'>금액 opening_st_amt</th>
            <th className='q1'>수량opening_wip_qty</th>
            <th className='q1'>고정비opening_wip_fix_amt</th>
            <th className='q1'>변동비opening_wip_variable_amt</th>
            <th className='q1'>금액opening_wip_amt</th>
            <th className='q1'> 수량 carry_ovr_stk_qty</th>
            <th className='q1'> 금액 carry_ovr_stk_amt</th>
            <th className='q1'> carryovr_qty수량</th>
            <th className='q1'> 고정비carry_ovr_mat_fix_cost</th>

            <th className='q1'>변동비carry_ovr_mat_var</th>
            <th className='q1'>합계carryovr_mat_tot</th>
           
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

export default HerbStk23
