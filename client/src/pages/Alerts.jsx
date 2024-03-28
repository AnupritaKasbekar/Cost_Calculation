import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Alert from 'react-bootstrap/Alert';
import { Button } from 'bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTriangleExclamation} from '@fortawesome/free-solid-svg-icons';


function Alerts() {
  const[alert_w,setAlert_w] = useState([]);
  const [show, setShow] = useState(true);
  useEffect(()=>{
    axios.get("http://localhost:3001/man_hrs_p").then((response)=>{
      setAlert_w(response.data)
      console.log(response.data)
  
    })
  },[])
  
  const table_al = alert_w.map((al_st)=>{
    return(
     
      
      <div className=''>
    <p>Product Name : {al_st.product_name}  Product Sales Qty :  {al_st.Sales_qty}  Production : {al_st.prod_tot}</p>
      </div>
      
    )
  })
  if(show){
    return (
     
      <div className="App">
      <Alert variant="danger" onClose={() => setShow(false)} dismissible>
        <Alert.Heading><FontAwesomeIcon icon={faTriangleExclamation}></FontAwesomeIcon> 
        <p className='font_size_alert'>Product whose sales quantity is 0 but production amount is exists.</p> </Alert.Heading>
        <hr />
        {table_al}
      </Alert>
    </div>
    ); 
  }
  return <Button onClick={()=> setShow(true)}>Show Alert</Button>
 
}

export default Alerts
