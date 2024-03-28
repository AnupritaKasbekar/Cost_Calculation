import React from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import SysManu from './SysManu';
import PilotManu from './PilotManu';
import ProdManu from './ProdManu';
import HerbManuExp from './HerbManuExp';
import NatManu from './NatManu'

function ManuExp22() {
  return (
    <div className='Container'>
    <div className='row'>
      <Tabs defaultActiveKey="Sys_Api"
              id="uncontrolled-tab-example"
              className="tabs">
          <Tab eventKey="Sys_Api" title="합성API">
              <SysManu/>
          </Tab>   
          <Tab eventKey="pilot" title="Pilot">
             <PilotManu/>  
          </Tab>   
          <Tab eventKey="product_api" title="조품API">
              <ProdManu/>
          </Tab> 
          <Tab eventKey="herbel_api" title="생약원료의약품">
              <HerbManuExp/>
          </Tab>
          <Tab eventKey="finish_drug" title="완제의약품">
             <NatManu/>
          </Tab>      
      </Tabs>
    </div>
  </div>
  )
}

export default ManuExp22
