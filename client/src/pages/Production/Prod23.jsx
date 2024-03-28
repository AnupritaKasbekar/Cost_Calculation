import React from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import SysProd23 from './SysProd23';
import PilotProd23 from './PilotProd23';
import ProdProduction23 from './ProdProduction23'
import HerbProd23 from './HerbProd23'
import NatProd23 from './NatProd23'

function Prod23() {
  return (
    <div className='Container'>
     <Tabs  defaultActiveKey="Sys_Api"
                id="uncontrolled-tab-example"
                className="tabs">
        <Tab eventKey="Sys_Api" title="합성API">
            <SysProd23/></Tab>    
        <Tab eventKey="pilot" title="Pilot">
                <PilotProd23/> </Tab>
        <Tab eventKey="product_api" title="조품API">
            <ProdProduction23/></Tab>   
          <Tab eventKey="herbel_api" title="생약원료의약품">
                <HerbProd23/>
            </Tab>
            <Tab eventKey="finish_drug" title="완제의약품">
               <NatProd23/>
            </Tab>                  
     </Tabs>
    </div>
  )
}

export default Prod23
