import React from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Herb_prod_manhr23 from './Production_mnhr/Herb_prod_manhr23';
import Nat_prod_manhr23 from './Production_mnhr/Nat_prod_manhr23';
import Pilot_prod_manhr23 from './Production_mnhr/Pilot_prod_manhr23';
import Prodctn_pr_manhr23 from './Production_mnhr/Prodctn_pr_manhr23';
import Sys_prod_manhr23 from './Production_mnhr/Sys_prod_manhr23';
function production_mnhr23() {
  return (
    <div className='container'>
    <div className='row'>
      <Tabs
              defaultActiveKey="Sys_Api"
              id="uncontrolled-tab-example"
              className="tabs">
          <Tab eventKey="Sys_Api" title="합성API">
              <Sys_prod_manhr23/>
          </Tab>
          <Tab eventKey="pilot" title="Pilot">
              <Pilot_prod_manhr23/>
          </Tab>

          <Tab eventKey="product_api" title="조품API">
              <Prodctn_pr_manhr23/>
          </Tab>
          <Tab eventKey="herbel_api" title="생약원료의약품">
              <Herb_prod_manhr23/>
          </Tab>
          <Tab eventKey="finish_drug" title="완제의약품">
              <Nat_prod_manhr23/>
          </Tab>
      </Tabs>
    </div>
  </div>
  )
}

export default production_mnhr23
