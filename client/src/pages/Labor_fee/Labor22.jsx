import React from 'react'

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import SysLabor from './SysLabor';
import PilotLabor from './PilotLabor';
import ProdLabor  from './ProdLabor';
import HerbLabor from './HerbLabor';
import NatLabor from './NatLabor'
function Labor22() {
  return (
    <div className='Container'>
    <div className='row'>
      <Tabs defaultActiveKey="Sys_Api"
              id="uncontrolled-tab-example"
              className="tabs">
          <Tab eventKey="Sys_Api" title="합성API">
              <SysLabor/>
          </Tab>   
          <Tab eventKey="pilot" title="Pilot">
              <PilotLabor/>  
          </Tab>   
          <Tab eventKey="product_api" title="조품API">
              <ProdLabor/>
          </Tab> 
          <Tab eventKey="herbel_api" title="생약원료의약품">
              <HerbLabor/>
          </Tab>
          <Tab eventKey="finish_drug" title="완제의약품">
             <NatLabor/>
          </Tab>      
      </Tabs>
    </div>
  </div>
  )
}

export default Labor22
