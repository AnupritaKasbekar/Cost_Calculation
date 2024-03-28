import React from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Stock22 from './Stock22';
import Stock23 from './Stock23';
function StockWhole() {
  return (
    <div>
      <h1 className='App'>Stock Year Wise</h1>
      <Tabs
       defaultActiveKey="Y2022"
       id='uncontrolled-tab-example'
       className='tabs'
      >
       <Tab eventKey="Y2022" title="2022">
          <Stock22/>
        </Tab> 
        <Tab eventKey="Y2023" title="2023">
          <Stock23/>
          </Tab>
      </Tabs>
    </div>
  )
}

export default StockWhole
