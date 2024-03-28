import React from 'react'

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Sys_sale23 from './Sys_sale23';
import Prod_sales23 from './Prod_sales23';
import Pilot_sales23 from './Pilot_sales23';
import Herb_sale23 from './Herb_sale23';
import Nat_sales23 from './Nat_sales23';
function Sales23() {
  return (
    <div className='Container'>
    <div className='row'>
      <Tabs defaultActiveKey="Sys_Api"
              id="uncontrolled-tab-example"
              className="tabs">
          <Tab eventKey="Sys_Api" title="합성API">
              <Sys_sale23/>
          </Tab>   
          <Tab eventKey="pilot" title="Pilot">
              <Pilot_sales23/>  
          </Tab>   
          <Tab eventKey="product_api" title="조품API">
              <Prod_sales23/>
          </Tab> 
          <Tab eventKey="herbel_api" title="생약원료의약품">
              <Herb_sale23/>
          </Tab>
          <Tab eventKey="finish_drug" title="완제의약품">
             <Nat_sales23/>
          </Tab>      
      </Tabs>
    </div>
  </div>
  )
}

export default Sales23
