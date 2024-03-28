import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

function Sys_prod_manhr23() {
  const[list_sys_mnhr,setlist_sys_mnhr] = useState([])

  useEffect(()=>{
    axios.get("http://localhost:3001/man_hrs_p/p_mnhrs23").then((response)=>{
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
        <td className='textright'>{manhr.synthesis_mn_hr}</td>
        <td className='textright'>{manhr.syn_mn_into_batch.toLocaleString("ko-KR")}</td>
        <td className='textright'>{manhr.sec_qc_percen.toLocaleString("ko-KR",{minimumFractionDigits:2})}</td>
        <td className='textright'>{manhr.syn_pilot_perc.toLocaleString("ko-KR",{minimumFractionDigits:2})}</td>
        <td className='textright'>{manhr.syn_art_perc.toLocaleString("ko-KR",{minimumFractionDigits:2})}</td>
        <td className='textright'>{manhr.by_busi_perc.toLocaleString("ko-KR",{minimumFractionDigits:2})}</td>
        <td className='textright'>{manhr.syn_total.toLocaleString("ko-KR")}</td>

      </tr>
    )
  })
  return (
    <>
    <br></br>
    <br></br>
    <div className='scrollmenu section container'>
      <div className='container'>
      <table id='empTable' className='container-fluid table-responsive'>
        <thead className='mainlink_title'>
            <tr className='rounded'>
            <th className='col_id_no'>Product_name</th>
            <th className=''>Batch Size batch_size</th>
            <th className=''>Batch</th>
            <th className='q1'>Man hour synthesis_mn_hr</th>
            <th className='q1'>ManHour*batch syn_mn_into_batch</th>
            <th className='q1'>부문별% sec_qc_percen</th>
            <th className='q1'>합성+PILOT% syn_pilot_perc</th>
            <th className='q1'>합성+조품% syn_art_perc</th>
            <th className='q1'>사업별% by_busi_perc</th>
            <th className='q1'>전체% syn_total</th>
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

export default Sys_prod_manhr23
