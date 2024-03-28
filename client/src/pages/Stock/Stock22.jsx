import React from 'react'

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import SysStk from './SysStk';
import PilotStk from './PilotStk';
import ProdStk from './ProdStk';
import HerbStk from './HerbStk';
import NatStk from './NatStk';


function Stock22() {
  return (
    <div className='Container'>
      <div className='row'>
        <Tabs defaultActiveKey="Sys_Api"
              id="uncontrolled-tab-example"
              className="tabs">
                 <Tab eventKey="Sys_Api" title="합성API">
              <SysStk/>
          </Tab>   
          <Tab eventKey="pilot" title="Pilot">
              <PilotStk/>  
          </Tab>   
          <Tab eventKey="product_api" title="조품API">
              <ProdStk/>
          </Tab> 
          <Tab eventKey="herbel_api" title="생약원료의약품">
              <HerbStk/>
          </Tab>
          <Tab eventKey="finish_drug" title="완제의약품">
             <NatStk/>
          </Tab> 
              </Tabs>
      </div>
    </div>
  )
}

export default Stock22
