import React from 'react'
import Manufacturing_costs from './Manufacturing_costs'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Manufacturing_costs23 from './Manufacturing_costs23';

function Manufacturing_cost_whole() {
  return (
    <div>
          <h1 className='App'>제조경비 year wise</h1>
       <Tabs
        defaultActiveKey="Y2022"
        id='uncontrolled-tab-example'
        className='tabs'>
        <Tab eventKey="Y2022" title="2022">
            <Manufacturing_costs/>
        </Tab>
        <Tab eventKey="Y2023" title="2023">
           <Manufacturing_costs23/>
        </Tab>
        </Tabs>
    </div>
  )
}

export default Manufacturing_cost_whole
