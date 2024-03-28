
import React from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Sys_qc_manhr from './Sys_qc_manhr';
import Pilot_qc_mnhr from './Pilot_qc_mnhr';
import Prod_qc_mnhe from './Prod_qc_mnhe';
import Herb_qc_manhr from './Herb_qc_manhr';
import Nat_qc_manhr from './Nat_qc_manhr';

function QcMnhr22() {
  return (
    <div className='container'>
    <div className='row'>
     <Tabs  defaultActiveKey="Sys_Api"
                id="uncontrolled-tab-example"
                className="tabs">
             <Tab eventKey="Sys_Api" title="합성API">
              <Sys_qc_manhr/>
              </Tab>  
             <Tab eventKey="pilot" title="Pilot">
              <Pilot_qc_mnhr/>
            </Tab>

            <Tab eventKey="product_api" title="조품API">
                <Prod_qc_mnhe/>
            </Tab>
            <Tab eventKey="herbel_api" title="생약원료의약품">
                <Herb_qc_manhr/>
            </Tab>
            <Tab eventKey="finish_drug" title="완제의약품">
                <Nat_qc_manhr/>  
            </Tab>     
     </Tabs>
    </div>
  </div>
  )
}

export default QcMnhr22
