import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

function Herb_sale() {
  const[list_sys_mnhr,setlist_sys_mnhr] = useState([])

  useEffect(()=>{
    axios.get("http://localhost:3001/man_hrs_p/ph_mnhrs22").then((response)=>{
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
       
        <td className='textright'>{manhr.Sales_qty.toLocaleString("ko-KR")}</td>
        <td className='textright'>{manhr.sales_amt.toLocaleString("ko-KR",{minimumFractionDigits:2})}</td>
        <td className='textright'>{manhr.sales_product.toLocaleString("ko-KR",{minimumFractionDigits:2})}</td>
        <td className='textright'>{manhr.sale_by_busins.toLocaleString("ko-KR",{minimumFractionDigits:2})}</td>
        <td className='textright'>{manhr.sale_total.toLocaleString("ko-KR",{minimumFractionDigits:2})}</td>
         
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
            <th className='q1'>Sales qty수량</th>
            <th className='q1'>sales_amt 매출액(생산무관)</th>
            <th className='q1'>sales_product 매출액(생산투입有)</th>
            <th className='q1'>sale_by_busins 사업별%(생산투입有)</th>
            <th className='q1'>sale_total 전체%(생산투입有)</th>
          
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

export default Herb_sale
