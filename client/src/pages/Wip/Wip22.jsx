import React from 'react'

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import SysWip from './SysWip'
import HerbWip from './HerbWip';
import NatWip from './NatWip';
import PilotWip from './PilotWip';
import ProdWip from './ProdWip';
function Wip22() {
  return (
    <div className='Container'>
      <div className='row'>
      <Tabs defaultActiveKey="Sys_Api"
              id="uncontrolled-tab-example"
              className="tabs">
          <Tab eventKey="Sys_Api" title="합성API">
              <SysWip/>
          </Tab> 
          <Tab eventKey="pilot" title="Pilot">
              <PilotWip/>  
          </Tab>  
          <Tab eventKey="product_api" title="조품API">
              <ProdWip/>
          </Tab>  
          <Tab eventKey="herbel_api" title="생약원료의약품">
              <HerbWip/>
          </Tab>
          <Tab eventKey="finish_drug" title="완제의약품">
             <NatWip/>
          </Tab>   
      </Tabs>
      </div>
    </div>
  )
}

export default Wip22
