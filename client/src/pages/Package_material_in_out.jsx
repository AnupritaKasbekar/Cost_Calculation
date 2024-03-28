import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

import { useNavigate } from 'react-router-dom';
import TableToExcel from './TableToExcel'

function Package_material_in_out() {
    const [listM_in_out,setM_in_out] = useState([]);
    const navigate = useNavigate();
    useEffect(()=>{
        axios.get("http://localhost:3001/pack_mat_inout_report").then((response)=>{
            setM_in_out(response.data)
        })
    },[])
    const tablerows = listM_in_out.map((m_i_out)=>{
       return(
        <tr onClick={()=>{
          navigate(`/inouttogether/getById/${m_i_out.code_id}`)
        }} >
        <td  className='' key={m_i_out}> {m_i_out.code_id}</td>
          <td  className=''> {m_i_out.material_name}</td>
          <td  className=''> {m_i_out.in_date}</td>
          
          <td  className='textright'> {m_i_out.remaining_qty}</td>
          
          <td  className='textright'> {m_i_out.sum_in_qty.toLocaleString("ko-KR",{
            minimumFractionDigits:3
          })}</td>
          <td  className='textright'> {m_i_out.div_in_price.toLocaleString("ko-KR",{
            minimumFractionDigits:2
          })}</td>
          
           <td  className='textright'> {m_i_out.sum_in_qty_price_into_cost.toLocaleString("ko-KR",{
            minimumFractionDigits:0
           })}</td>
           <td  className='textright'> {m_i_out.sum_out_qty.toLocaleString("ko-KR",{
            minimumFractionDigits:3
           })}</td>
          <td  className='textright'> {m_i_out.div_out_price.toLocaleString("ko-KR",{
            minimumFractionDigits:2
          })}</td>
          
           <td  className='textright'> {m_i_out.sum_out_qty_price_into_cost.toLocaleString("ko-KR",{
            minimumFractionDigits:0
           })}</td>
           <td className='textright'>{((m_i_out.remaining_qty+m_i_out.sum_in_qty)-m_i_out.sum_out_qty).toLocaleString("ko-KR")}</td>


        </tr>
        
       )
       
        
    })
  return (
    <div className='App'>
      <h1>부재료 In Out Report</h1>
      <span class="border"></span>
      <p className='text-center'>This is for whole first and second quarter 2022 summary </p>
      <TableToExcel/>
      <table id='empTable' className='custub'>
           <thead className='mainlink_title'>
            <tr className='new_title'>
              <td className='border-0'></td>
              <td className='border-0'></td>
             
              <td className='border-0'></td>
              <td className='border-0'></td>
              <td className='border-0'>In</td>
              <td className='border-0'>Data</td>
              <td className='border-0'></td>
              <td className='border-0'>Out</td>
              <td className='border-0'>Data</td>
              <td className='border-0'></td>
              <td className='border-0'></td>
              
            </tr>
               <tr className='rounded'>
                   <th  className=''>Code</th> 
                           
                   <th  className=''>Name</th>
                   <th  className=''>Date</th>
                  
                   <th  className=''>last year Remaining Stock</th>
                   <th  className='q1'>Qty</th>
                   <th  className='q1'> Avg Price</th>
                   <th  className='q1'> Supply Value</th>
                   <th  className='q2'> Qty</th>
                   <th  className='q2'>Avg Price</th>
                   <th  className='q2'> Supply Value</th>
                   <th className=''>Left Stock</th>
               </tr>
           </thead>
           <tbody className='table_str q1'>
             
            {tablerows}
           </tbody>
           
       </table>
    
    </div>
  )
}

export default Package_material_in_out
