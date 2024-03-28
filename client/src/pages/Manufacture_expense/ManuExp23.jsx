import React from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import SysManu23 from './SysManu23';
import PilotManu23 from './PilotManu23';
import ProdManu23 from './ProdManu23';
import HerbManuExp23 from './HerbManuExp23';
import NatManu23 from './NatManu23'
function ManuExp23() {
  return (
    <div className='Container'>
    <div className='row'>
      <Tabs defaultActiveKey="Sys_Api"
              id="uncontrolled-tab-example"
              className="tabs">
          <Tab eventKey="Sys_Api" title="합성API">
              <SysManu23/>
          </Tab>   
          <Tab eventKey="pilot" title="Pilot">
             <PilotManu23/>  
          </Tab>   
          <Tab eventKey="product_api" title="조품API">
              <ProdManu23/>
          </Tab> 
          <Tab eventKey="herbel_api" title="생약원료의약품">
              <HerbManuExp23/>
          </Tab>
          <Tab eventKey="finish_drug" title="완제의약품">
             <NatManu23/>
          </Tab>      
      </Tabs>
    </div>
  </div>
  )
}

export default ManuExp23
