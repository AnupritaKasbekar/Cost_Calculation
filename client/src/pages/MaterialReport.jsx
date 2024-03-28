import React from 'react'
import axios from 'axios';
import CalenderComp from './CalenderComp';
import { useEffect, useState } from 'react';
import DateRangeComp from './DateRangeComp';
import { useNavigate, useParams } from 'react-router-dom';
import {Col,Row,Container} from 'react-bootstrap';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import {DateRange} from 'react-date-range';
import 'rsuite/dist/rsuite.min.css';

import {addDays} from 'date-fns';

//import { Calendar, DateRangePicker } from 'react-date-range';
//import 'react-date-range/dist/styles.css'; // main style file
//import 'react-date-range/dist/theme/default.css'; // theme css file

function MaterialReport() {

    let navigate = useNavigate()
    const [listMaterialList,setlistMaterialList]= useState([])
    const [range,setRange]=useState([
      {
          startDate:new Date(),
          endDate: addDays(new Date(),7),
          key:'selection'
      }
    ]);
   useEffect(()=>{
        axios.get("http://localhost:3001/material/report").then((response)=>{
            setlistMaterialList(response.data)
        })
      },[])
     
    
      const tableRows =listMaterialList.map((materiallist)=>{
        return(
        
          <tr onClick={()=>{
          //  navigate(`/MaterialReport/getById/${materiallist.code_id}`)
          navigate(`/inouttogether/getById/${materiallist.code_id}`)
          }}>

          <td  className='' key={materiallist}> {materiallist.code_id}</td>
          <td  className=''> {materiallist.material_name}</td>
          <td  className=''> {materiallist.purchase_date}</td>
          <td  className=''> {materiallist.sale_date}</td>
          <td  className=''> {materiallist.remaining_qty}</td>
          
          <td  className=''> {materiallist.sum_in_qty.toLocaleString("ko-KR")}</td>
          <td  className=''> {materiallist.div_in_price.toLocaleString("ko-KR")}</td>
          
           <td  className=''> {materiallist.sum_in_qty_price_into_cost.toLocaleString("ko-KR")}</td>
           <td  className=''> {materiallist.sum_out_qty.toLocaleString("ko-KR")}</td>
          <td  className=''> {materiallist.div_out_price.toLocaleString("ko-KR")}</td>
          
           <td  className=''> {materiallist.sum_out_qty_price_into_cost.toLocaleString("ko-KR")}</td>
           <td className=''>{((materiallist.remaining_qty+materiallist.sum_in_qty)-materiallist.sum_out_qty).toLocaleString("ko-KR")}</td>
      </tr>
        )
    
    });   


 return (
    <div className='App'>
      <div className='container-fluid'>
      <h1 className='text-center'>In And Out Material Costs</h1>
      <p className='text-center'>This is for whole first and second quarter 2022 summary </p>
      <hr></hr>
      </div>
     
      <br></br>
      <div>
      <Container>
        <Row>
          <Col>
          <DateRangeComp/>
          </Col>
          <Col className='excel_btn'>
          
          <ReactHTMLTableToExcel
                    id="test-table-xls-button"
                    className="download-table-xls-button"
                    table="empTable"
                    filename="MaterialList"
                    sheet="MaterialList"
                    buttonText="Download as XLS"/>
          </Col>
        </Row>
      </Container>
      </div>
      
      
      <table id='empTable'>
           <thead className='mainlink_title'>
            <tr className='new_title'>
              <td className='border-0'></td>
              <td className='border-0'></td>
              <td className='border-0'></td>
              <td className='border-0'></td>
              <td className='border-0'></td>
              <td className='border-0'>Purchase</td>
              <td className='border-0'>Data</td>
              <td className='border-0'></td>
              <td className='border-0'>Sales</td>
              <td className='border-0'>Data</td>
              <td className='border-0'></td>
              <td className='border-0'></td>
              
            </tr>
               <tr>
                   <th  className=''>Code</th> 
                           
                   <th  className=''>Name</th>
                   <th  className=''>Purchase Date</th>
                   <th  className=''>Sale Date</th>
                   <th  className=''>last year Remaining Stock</th>
                   <th  className=''>whole Purchase Qty</th>
                   <th  className=''> Avg Price</th>
                   <th  className=''>In Supply Value</th>
                   <th  className=''>whole Sale Qty</th>
                   <th  className=''>Avg Price</th>
                   <th  className=''>Out Supply Value</th>
                   <th className=''>Left Stock</th>
               </tr>
           </thead>
           <tbody className='table_str q1'>
             
           {tableRows}
           </tbody>
           
       </table>
       <br /><br /><br /><br /><br />
    </div>
  )
}

export default MaterialReport
