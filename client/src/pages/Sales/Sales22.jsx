import React from 'react'

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Sys_sale from './Sys_sale';
import Prod_sales from './Prod_sales';
import Pilot_sales from './Pilot_sales';
import Herb_sale from './Herb_sale';
import Nat_sales from './Nat_sales';
function Sales22() {
  return (
    <div className='container'>
      <div className='row'>
        <Tabs defaultActiveKey="Sys_Api"
                id="uncontrolled-tab-example"
                className="tabs">
            <Tab eventKey="Sys_Api" title="합성API">
                <Sys_sale/>
            </Tab>   
            <Tab eventKey="pilot" title="Pilot">
                <Pilot_sales/>  
            </Tab>   
            <Tab eventKey="product_api" title="조품API">
                <Prod_sales/>
            </Tab> 
            <Tab eventKey="herbel_api" title="생약원료의약품">
                <Herb_sale/>
            </Tab>
            <Tab eventKey="finish_drug" title="완제의약품">
               <Nat_sales/>
            </Tab>      
        </Tabs>
      </div>
    </div>
  )
}

export default Sales22
