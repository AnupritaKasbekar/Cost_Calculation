import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

function Pilot_qc_mnhr() {
  const[list_sys_mnhr,setlist_sys_mnhr] = useState([])

  useEffect(()=>{
    axios.get("http://localhost:3001/man_hrs_p/ppilot_mnhrs22").then((response)=>{
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
       
        <td className='textright'>{manhr.qc_man_hr.toLocaleString("ko-KR")}</td>
        <td className='textright'>{manhr.qc_man_into_batch.toLocaleString("ko-KR",{minimumFractionDigits:2})}</td>
        <td className='textright'>{manhr.qc_total.toLocaleString("ko-KR",{minimumFractionDigits:2})}</td>
        
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
            <th className='q1'>man-hour qc_man_hr</th>
            <th className='q1'>ManHour*batch qc_man_into_batch</th>
            <th className='q1'>전체%qc_total</th>
           
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

export default Pilot_qc_mnhr
