import React from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import SysProd from './SysProd';
import PilotProd from './PilotProd';
import ProdProduction from './ProdProduction'
import HerbProd from './HerbProd'
import NatProd from './NatProd'
function Prod22() {
  return (
    <div className='Container'>
     <Tabs  defaultActiveKey="Sys_Api"
                id="uncontrolled-tab-example"
                className="tabs">
        <Tab eventKey="Sys_Api" title="합성API">
            <SysProd/></Tab>    
        <Tab eventKey="pilot" title="Pilot">
                <PilotProd/> </Tab>
        <Tab eventKey="product_api" title="조품API">
            <ProdProduction/></Tab>   
          <Tab eventKey="herbel_api" title="생약원료의약품">
                <HerbProd/>
            </Tab>
            <Tab eventKey="finish_drug" title="완제의약품">
               <NatProd/>
            </Tab>                  
     </Tabs>
    </div>
  )
}

export default Prod22
