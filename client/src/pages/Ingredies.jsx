
import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {useParams} from 'react-router-dom' ;
function Ingredies() {
    let {product_id} = useParams();
    console.log(product_id);
    const [listOfIngredients,setlistOfIngredients]= useState([])
    const [submitOfIngre,setsubmitOfIngre] = useState([])
    let navigate = useNavigate()
    useEffect(()=>{
      axios.get(`http://localhost:3001/bom/${product_id}`).then((response)=>{
        console.log(response.data)
        setsubmitOfIngre(response.data)
    });
    })
    useEffect(()=>{
        axios.get(`http://localhost:3001/bom/byId/${product_id}`).then((response)=>{
            console.log(response.data)
            setlistOfIngredients(response.data)
        });
        
        
      })
      const sumCosts = submitOfIngre.map((sumcost)=>{
        return(
          <tr>
            <td className=''></td>
            <td className=''></td>
            <td className=''></td>
          
            <td className='title'>Total Cost:</td>
            <td className=''>{sumcost.costofsum}</td>
          </tr>
        )
      })
      const tableRows =listOfIngredients.map((boms)=>{
        return(
          <tr >

          <td  className=''> {boms.product_name}</td>
          <td  className=''> {boms.batch_size}</td>
          <td  className=''> {boms.material_name}</td>
          <td  className=''> {boms.batch}</td>
          <td className=''>{boms.product_qty}</td>
          <td className=''>{boms.batch_into_kg}</td>
          <td className=''>{boms.kg_batch}</td>
          
       

      </tr>
     
        )
    
    });   
   
  return (
    <div className='App'>
          <h1> Product with their Ingredient List</h1>
          <span class="border"></span>
       <table id='empTable' className='custub'>
           <thead className='mainlink_title'>
               <tr>
                   <th  className=''>Product Name </th>
                   <th className=''>Batch size</th>
                 
                   <th className=''> Material Name</th>
                  
                   <th className=''>batch</th>
                   <th className=''>Product Quantity</th>
                   <th className=''>Batch x KG</th>
                   <th className=''>KG batch</th>
                  
               </tr>
           </thead>
           <tbody className='table_str q1'>
             
               {tableRows}
               {sumCosts}
              
           </tbody>
           
       </table>
       <button className="buttonDelete" type='submit'onClick={()=>{
         axios.delete(`http://localhost:3001/bom/byId/${product_id}`)  
         navigate("/BomsTables")
       }}>Delete Product</button>
       
    </div>
  )
}

export default Ingredies
