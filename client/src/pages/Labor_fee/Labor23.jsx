import React from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import SysLabor23 from './SysLabor23';
import PilotLabor23 from './PilotLabor23';
import ProdLabor23  from './ProdLabor23';
import HerbLabor23 from './HerbLabor23';
import NatLabor23 from './NatLabor23'

function Labor23() {
  return (
    <div className='Container'>
    <div className='row'>
      <Tabs defaultActiveKey="Sys_Api"
              id="uncontrolled-tab-example"
              className="tabs">
          <Tab eventKey="Sys_Api" title="합성API">
              <SysLabor23/>
          </Tab>   
          <Tab eventKey="pilot" title="Pilot">
              <PilotLabor23/>  
          </Tab>   
          <Tab eventKey="product_api" title="조품API">
              <ProdLabor23/>
          </Tab> 
          <Tab eventKey="herbel_api" title="생약원료의약품">
              <HerbLabor23/>
          </Tab>
          <Tab eventKey="finish_drug" title="완제의약품">
             <NatLabor23/>
          </Tab>      
      </Tabs>
    </div>
  </div>
  )
}

export default Labor23
