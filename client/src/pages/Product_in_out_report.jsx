import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';

function Product_in_out_report() {
  const [listP_in_out,setP_in_out] = useState([]);
  let navigate = useNavigate();
  useEffect(()=>{
      axios.get("http://localhost:3001/p_in_out_report").then((response)=>{
          setP_in_out(response.data)
      })
  },[])

  /*Total Calculations */
  var sum_in_stk = listP_in_out.map(sum_in_s=>sum_in_s.remaining_qty).reduce((a,b)=>a+b,0)
  var sum_inqty = listP_in_out.map(sum_in_q =>sum_in_q.sum_in_qty).reduce((a,b)=>a+b,0);
  var sum_divp = listP_in_out.map(sum_div_p=>sum_div_p.div_in_price).reduce((a,b)=>a+b,0);
  var sum_inq_o_cost = listP_in_out.map(sum_inq_cost =>sum_inq_cost.sum_in_qty_price_into_cost).reduce((a,b)=>a+b,0);
  var sum_o_qty = listP_in_out.map(sum_outq =>sum_outq.sum_out_qty).reduce((a,b)=>a+b,0);
  var sum_out_p  = listP_in_out.map(sum_divp=>sum_divp.div_out_price).reduce((a,b)=>a+b,0);
  var sum_out_p_cost = listP_in_out.map(sum_out_p=>sum_out_p.sum_out_qty_price_into_cost).reduce((a,b)=>a+b,0)
  
  const tableRow = listP_in_out.map((p_i_out)=>{
    return(
      <tr onClick={()=>{navigate(`/inouttogetherp/getById/${p_i_out.code_id}`)}}>
        <td  className='' key={p_i_out}> {p_i_out.code_id}</td>
          <td  className=''> {p_i_out.product_name}</td>
          <td  className=''> {p_i_out.out_date}</td> 
          <td  className=''> {p_i_out.remaining_qty}</td>
          <td  className=''> {p_i_out.sum_in_qty.toLocaleString("ko-KR",{minimumFractionDigits:3})}</td>
          <td  className=''> {p_i_out.div_in_price.toLocaleString("ko-KR",{minimumFractionDigits:2})}</td>
          <td  className=''> {p_i_out.sum_in_qty_price_into_cost.toLocaleString("ko-KR",{minimumFractionDigits:0})}</td>
          <td  className=''> {p_i_out.sum_out_qty.toLocaleString("ko-KR",{minimumFractionDigits:3})}</td>
          <td  className=''> {p_i_out.div_out_price.toLocaleString("ko-KR",{minimumFractionDigits:2})}</td>
          <td  className=''> {p_i_out.sum_out_qty_price_into_cost.toLocaleString("ko-KR",{minimumFractionDigits:0})}</td>
          <td className=''>{((p_i_out.remaining_qty+p_i_out.sum_in_qty)-p_i_out.sum_out_qty).toLocaleString("ko-KR")}</td>
          </tr>

     
    )
  })
  return (
    <div className='App'>
      <h1>Product In and Out Report</h1>
      <span class="border"></span>
      <p className='text-center'>This is for whole first and second quarter 2022 summary </p>
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
               <tr className='sec_row'>
                   <th  className=''>Code</th>             
                   <th  className=''>Name</th>
                   <th  className=''>Date</th>
                   <th  className=''>In Stock</th>
                   <th  className='q1'>Quantity</th>
                   <th  className='q1'> Avg Price</th>
                   <th  className='q1'> Amount</th>
                   <th  className='q2'> Quantity</th>
                   <th  className='q2'>Avg Price</th>
                   <th  className='q2'> Amount</th>
                   <th className=''>Out Stock</th>
               </tr>
           </thead>
           <tbody className='table_str q1'>
             
            {tableRow}
           </tbody>
           <tr>
            <th></th>
            <th></th>
            <th>Total</th>
            <th></th>
            <th>{sum_inqty.toLocaleString("ko-KR",{minimumFractionDigits:2})}</th>
            <th>{sum_divp.toLocaleString("ko-KR",{minimumFractionDigits:2})}</th>
            <th>{sum_inq_o_cost.toLocaleString("ko-KR",{minimumFractionDigits:2})}</th>
            <th>{sum_o_qty.toLocaleString("ko-KR",{minimumFractionDigits:2})}</th>
            <th>{sum_out_p.toLocaleString("ko-KR",{minimumFractionDigits:2})}</th>
            <th>{sum_out_p_cost.toLocaleString("ko-KR",{minimumFractionDigits:2})}</th>
            <th></th>
           </tr>
       </table>

    </div>
  )
}

export default Product_in_out_report
