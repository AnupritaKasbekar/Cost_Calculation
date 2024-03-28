import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

function SysProd() {
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
       
        <td className='textright'>{manhr.prod_amt.toLocaleString("ko-KR")}</td>
        <td className='textright'>{manhr.prod_sec.toLocaleString("ko-KR",{minimumFractionDigits:2})}</td>
        <td className='textright'>{manhr.prod_syn_pilot.toLocaleString("ko-KR",{minimumFractionDigits:2})}</td>
        <td className='textright'>{manhr.prod_tot.toLocaleString("ko-KR",{minimumFractionDigits:2})}</td>
       
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
           
            <th className='q1'>금액 prod_amt</th>
            <th className='q1'>부문% prod_sec</th>
            <th className='q1'>(합성+PILOT)% prod_syn_pilot</th>
            <th className='q1'>전체% prod_tot</th>
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

export default SysProd
