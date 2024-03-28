import React from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import Sys_qc_manhr23 from './Sys_qc_manhr23';
import Pilot_qc_mnhr23 from './Pilot_qc_mnhr23';
import Prod_qc_mnhr23 from './Prod_qc_mnhr23';
import Herb_qc_manhr23 from './Herb_qc_manhr23';
import Nat_qc_manhr23 from './Nat_qc_manhr23';
function QcMnhr23() {
  return (
    <div className='container'>
    <div className='row'>
     <Tabs  defaultActiveKey="Sys_Api"
                id="uncontrolled-tab-example"
                className="tabs">
          <Tab eventKey="Sys_Api" title="합성API">
              <Sys_qc_manhr23/></Tab> 
          <Tab eventKey="pilot" title="Pilot">
              <Pilot_qc_mnhr23/>
            </Tab> 
            <Tab eventKey="product_api" title="조품API">
                <Prod_qc_mnhr23/>
            </Tab>
            <Tab eventKey="herbel_api" title="생약원료의약품">
                <Herb_qc_manhr23/>
            </Tab>
            <Tab eventKey="finish_drug" title="완제의약품">
                <Nat_qc_manhr23/>  
            </Tab>  
     </Tabs>
    </div>
  </div>
  )
}

export default QcMnhr23
