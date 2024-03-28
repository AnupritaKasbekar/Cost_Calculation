import React from 'react'

import axios from 'axios';

import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {Col,Row,Container} from 'react-bootstrap';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
function ManHour() {  
  const [listOfManHour,setListOfManHour] = useState([])
  
  useEffect(()=>{
    axios.get("http://localhost:3001/labor").then((response)=>{
      setListOfManHour(response.data)
    })
  },[])

  
  const tableRows = listOfManHour.map((man_hr)=>{
    return(
      <tr>
        <td className=''>{man_hr.product_id}</td>
        <td className=''>{man_hr.product_name}</td>
        <td className=''>API</td>
        <td className=''>{man_hr.standard}</td>
        <td className=''>{man_hr.batch_size}</td>
        <td className=''>{man_hr.synthesis_mn_hr}</td>
        <td className=''>{man_hr.qc_man_hr}</td>
        <td className=''>{man_hr.syn_mn_hr_cal}</td>
        <td className=''>{man_hr.qc_man_hr_cal}</td>
        
      </tr>
    )
  });
  return (
    <div className='App'>
    <h1>Man Hour Table</h1>
    <span class="border"></span>
  <table id='empTable' className='custub'>
      <thead className='mainlink_title'>
          <tr>
              <th className=''>Product Code</th>
              <th className=''>Product Name</th>
              <th className=''>Product Type</th>
              <th className=''>Standard </th>
              <th className=''>Batch Size</th>
              <th className=''>Synthesis Labor Distribution Ratio</th>
              <th className=''>QC Man Hour</th>    
              <th className=''>Synthesis Labor Cost</th>
              <th className=''>QC Labor Distibution Ratio</th>     
          </tr>
      </thead>
     <tbody className='table_str q1'>
          {tableRows}
     </tbody>
  </table>
  <br /><br />
  </div>
  )
}

export default ManHour
