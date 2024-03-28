import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function BatchNSalesYes() {
    const[listbatchNSalesOut,setlistbatchNSalesOut] = useState([]);
    let navigate = useNavigate();
    useEffect(()=>{
        axios.get("http://localhost:3001/man_hrs_p/batchNoSaleY").then((response)=>{
            setlistbatchNSalesOut(response.data)
        })
    },[])
    const tableRows = listbatchNSalesOut.map((batch_in)=>{
        return(
            <tr>
            <td>{batch_in.product_name}</td>
            <td><button className='update_btn' onClick={(()=>{
      navigate('/specialProductEdit',{state:{product_id:`${batch_in.product_id}`,product_name:`${batch_in.product_name}`}})
     })}>Update</button></td>
           
        </tr>
        )
        
    })
  return (
    <div className='App'>
      <div className='title_p'>
        <p>
        <b>Edit Special Product</b>
        </p>
      </div>
     
     
      <table id='empTable1' className=''>
        <thead className='mainlink_title'>
        <tr className=''>
            <td className='q1'></td>
            <td className=''></td>
          
        </tr>
        </thead>
        <tbody>
            {tableRows}
        </tbody>
      </table>
    </div>
  )
}

export default BatchNSalesYes
