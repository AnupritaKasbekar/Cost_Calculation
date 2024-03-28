import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function BomsNames() {
    const [listBoms,setlistBoms]= useState([])
    let navigate = useNavigate()
    console.log([1,2,3,4].reduce((a,b)=>a+b,0))
    useEffect(()=>{
        axios.get("https://localhost:3001/bom/n").then((response)=>{
            setlistBoms(response.data)
        })
      },[])
      const tableRows =listBoms.map((boms)=>{
        return(
          <tr onClick={()=>{
           /*axios.get(`http://localhost:3001/bom/byId/${boms.product_id}`)*/
          navigate(`/i/${boms.product_id}`)
            console.log(boms.product_id)
        }}>
          <td  className=''> {boms.product_name}</td>
          
      </tr>
        )
    
    });    
  return (
    <div className='App'>
      <h1>Only Product List</h1>
      <table id='empTable'>
           <thead className='mainlink_title'>
               <tr>
                   <th  className=''>Product Name </th>                 
               </tr>
           </thead>
           <tbody className='table_str q1'>
             
               {tableRows}
           </tbody>
           
       </table>
       <br></br>
    </div>
  )
}

export default BomsNames
