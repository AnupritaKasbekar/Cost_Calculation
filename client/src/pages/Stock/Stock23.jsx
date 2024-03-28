import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import SysStk23 from './SysStk23';
import PilotStk23 from './PilotStk23';
import ProdStk23 from './ProdStk23';
import HerbStk23 from './HerbStk23';
import NatStk23 from './NatStk23';

function Stock23() {
  return (
    <div className='Container'>
    <div className='row'>
      <Tabs defaultActiveKey="Sys_Api"
            id="uncontrolled-tab-example"
            className="tabs">
               <Tab eventKey="Sys_Api" title="합성API">
            <SysStk23/>
        </Tab>   
        <Tab eventKey="pilot" title="Pilot">
            <PilotStk23/>  
        </Tab>   
        <Tab eventKey="product_api" title="조품API">
            <ProdStk23/>
        </Tab> 
        <Tab eventKey="herbel_api" title="생약원료의약품">
            <HerbStk23/>
        </Tab>
        <Tab eventKey="finish_drug" title="완제의약품">
           <NatStk23/>
        </Tab> 
            </Tabs>
    </div>
  </div>
  )
}

export default Stock23
