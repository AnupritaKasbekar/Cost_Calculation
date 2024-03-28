import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import TableToExcel from './TableToExcel';

function Purchase_sale_all_data_p() {
    const[InOutList, setInOutList] = useState([]);
    const[avgList,setAvgList] = useState([]);
   
   

    let{code_id} = useParams();
    console.log("code:"+code_id)

    useEffect(()=>{
        axios.get(`http://localhost:3001/inout/${code_id}`).then((response)=>{
            console.log(response.data)
            setInOutList(response.data)
        })
    })
    
    useEffect(()=>{
        axios.get(`http://localhost:3001/inout/avg/${code_id}`).then((response)=>{
            console.log(response.data)
            setAvgList(response.data)
        })
    })
const tableRowsAllData = InOutList.map((all_list)=>{
    return(
        <tr>
          
          
            <td className=''>{all_list.out_date}</td>
            <td className=''>{all_list.sale_acc_name}</td>
            <td className=''>{all_list.opening_stk_qty}</td>
            <td className=''>{all_list.opening_stk_amt.toLocaleString("ko-KR",{
                minimumFractionDigits:0
            })}</td>
            <td className=''>{all_list.in_qty.toLocaleString("ko-KR",{
                minimumFractionDigits:3
            })}</td>
            <td className=''>{all_list.in_price.toLocaleString("ko-KR",{
                minimumFractionDigits:2
            })}</td>
            <td className=''>{all_list.out_qty.toLocaleString("ko-KR",{
                minimumFractionDigits:3
            })}</td>
            <td className=''>{all_list.out_price.toLocaleString("ko-KR",{
                minimumFractionDigits:2
            })}</td>
            <td className=''>{all_list.closing_stock_qty.toLocaleString("ko-KR",{
                minimumFractionDigits:3
            })}</td>
            <td className=''>{all_list.closing_stock_amt.toLocaleString("ko-KR",{
                minimumFractionDigits:0
            })}</td>   

        </tr>
    )
})


    
  return (
    <div className='App '>
     
      <div class="title_wrap ">
        {
           avgList.map((namepm)=>{
            return(
                <p>{namepm.pm_name}</p>
            )
           }) 
        }
          <span class="border"></span>
        <h4>{code_id}</h4>
      </div>
      
        
      
      <TableToExcel/>
      <table id='empTable' className='custub'>
        <thead>
            <tr>
                <th className='no_color'></th>
              
                <th className='no_color'></th>
                <th className='color_row text-center borderleft bordertop borderbottom'>Opening</th>
                <th  className='color_row text-center bordertop borderbottom borderright'>Stock</th>
                <th className='color_row text-center borderleft bordertop borderbottom'>In</th>
                <th  className='color_row text-center bordertop borderbottom borderright'>Data</th>
                <th className='color_row text-center borderleft bordertop borderbottom'>Out</th>
                <th  className='color_row text-center bordertop borderbottom borderright'>Data</th>
                <th className='color_row text-center borderleft bordertop borderbottom'>Closing</th>
                <th  className='color_row text-center bordertop borderbottom borderright'>Stock</th>
            </tr>
        <tr>
           
            <th className='mainlink'>Date</th>
            <th className='manlink'>Account Name</th>
            <th className='q1 text-center'>Quantity</th>
            <th className='q1 text-center'> Amount</th>
            <th className='q2 text-center'>Quantity</th>
            <th className='q2 text-center'>Amount</th>
            <th className='q3 text-center'>Quantity</th>
            <th className='q3 text-center'>Amount</th>
            <th className='q4 text-center'>Quantity</th>
            <th className='q4 text-center'>Amount</th>   
        </tr>
    </thead>
    <tbody className='table_str'>
        {tableRowsAllData}
       
    </tbody>
      </table>
    </div>
  )
}

export default Purchase_sale_all_data_p
