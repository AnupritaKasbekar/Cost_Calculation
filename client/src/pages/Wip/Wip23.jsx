import React from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import SysWip23 from './SysWip23'
import HerbWip23 from './HerbWip23';
import NatWip23 from './NatWip23';
import PilotWip23 from './PilotWip23';
import ProdWip23 from './ProdWip23';

function Wip23() {
  return (
    <div className='Container'>
      <div className='row'>
      <Tabs defaultActiveKey="Sys_Api"
              id="uncontrolled-tab-example"
              className="tabs">
          <Tab eventKey="Sys_Api" title="합성API">
              <SysWip23/>
          </Tab>   
          <Tab eventKey="pilot" title="Pilot">
              <PilotWip23/>  
          </Tab>   
          <Tab eventKey="product_api" title="조품API">
              <ProdWip23/>
          </Tab> 
          <Tab eventKey="herbel_api" title="생약원료의약품">
              <HerbWip23/>
          </Tab>
          <Tab eventKey="finish_drug" title="완제의약품">
             <NatWip23/>
          </Tab>      
      </Tabs>
      </div>
    </div>
  )
}

export default Wip23
