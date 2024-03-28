import React from 'react'
import axios from 'axios';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col,Row,Container} from 'react-bootstrap';

/*import { useNavigate } from 'react-router-dom';*/

function BomsTablesReports() {
    const[searchTerm,setSearchTerm] = useState([])
    const [listOfBoms,setlistOfBoms]= useState([])
   
    useEffect(()=>{
        axios.get("http://localhost:3001/bom").then((response)=>{
            setlistOfBoms(response.data)
        })
      },[])
      const tableRows =listOfBoms.filter((boms)=>{
          if(searchTerm =="")
          {
              return boms;
          }
          else if (boms.product_name.toUpperCase().includes(searchTerm.toUpperCase()))
          {
              return boms;
          }
      }).map((boms)=>{
          return(
            <tr>
            
                
            <td  className=''> {boms.product_name}</td>
            <td  className=''> {boms.batch_size}</td>
           
            <td className=''>{boms.material_name}</td>             
         
            <td className=''>{boms.batch}</td>
            <td className=''>{boms.product_qty.toLocaleString("ko-KR")}</td>
            <td className=''>{boms.kg_batch}</td>
          
          
          
        </tr>
          )
      
      });    
  return (
    <div className='App'>

     <h1>API BOM </h1> 
     <span class="border"></span>
     <Container>
         <Row>
             <Col>
             <ReactHTMLTableToExcel
                    id="test-table-xls-button"
                    className="download-table-xls-button"
                    table="empTable"
                    filename="ProductList"
                    sheet="ProductList"
                    buttonText="Download as XLS"/>
             </Col>
             <Col>
             <input type="text" placeholder='Search by product name...' onChange={event=>{
         setSearchTerm(event.target.value)
         
     }}/>
             
             </Col>
         </Row>
     </Container>
    
    
     <table id='empTable' className='custub'>
           <thead className='mainlink_title'>
               <tr>
              
              
                   <th  className=''>Product Name </th>
                   <th className=''>Batch size</th>
                   
                   <th className=''> Material Names</th>
                   
                   <th className=''>batch</th>
                   <th className=''>Product quantity</th>
                   <th className=''>KG Batch</th>
                  
           
               </tr>
           </thead>
           <tbody className='table_str q1'>
             
               {tableRows}
           </tbody>
           
       </table><br></br><br></br>
    </div>
  )
}

export default BomsTablesReports
