import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';


function PilotLabor23() {
  const[list_sys_mnhr,setlist_sys_mnhr] = useState([])

  useEffect(()=>{
    axios.get("http://localhost:3001/man_hrs_p/ppilot_mnhrs23").then((response)=>{
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
        <td className='col_id_no'>{manhr.labor_dir_cost_mn_hr_fix_cost}</td>
        <td className='textright'>{manhr.labor_dir_cost_mn_hr_var_cost}</td>
        <td className='textright'>{manhr.labor_cost_qc_mn_hr_fix_cost}</td>
        <td className='textright'>{manhr.labor_cost_qc_mn_hr_var_cost.toLocaleString("ko-KR")}</td>
        <td className='textright'>{manhr.labor_cost_support_dept_fix_cost.toLocaleString("ko-KR",{minimumFractionDigits:2})}</td>
        <td className='textright'>{manhr.labor_cost_support_dept_var_cost.toLocaleString("ko-KR",{minimumFractionDigits:2})}</td>
        <td className='textright'>{manhr.tot_fix_cost.toLocaleString("ko-KR")}</td>
        <td className='textright'>{manhr.tot_var_cost.toLocaleString("ko-KR",{minimumFractionDigits:2})}</td>
       
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
            <th className='q1'>직접비(man-hour 기준 배분)	고정비</th>
            <th className='q1'>직접비(man-hour 기준 배분)변동비</th>
            <th className='q2'>QC(man-hour 기준 배분) 고정비</th>
            <th className='q2'>QC(man-hour 기준 배분) 변동비</th>
           
            <th className='q1'>지원(공통)(생산금액 기준 배분)	고정비</th>
            <th className='q1'>지원(공통)(생산금액 기준 배분)변동비</th>
            <th className='q3'>합계 고정비</th>
            <th className='q3'>합계 변동비</th>
           
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

export default PilotLabor23
