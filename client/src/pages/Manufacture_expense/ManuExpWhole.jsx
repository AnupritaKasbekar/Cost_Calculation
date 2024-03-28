import React from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import ManuExp22 from './ManuExp22';
import ManuExp23 from './ManuExp23';

function ManuExpWhole() {
  return (
    <div>
    <h1 className='App'> Sales year wise</h1>
      <Tabs
      defaultActiveKey="Y2022"
      id='uncontrolled-tab-example'
      className='tabs'>
      <Tab eventKey="Y2022" title="2022">
         <ManuExp22/>
      </Tab>
      <Tab eventKey="Y2023" title="2023">
         <ManuExp23/>
      </Tab>
      </Tabs>
  </div>
  )
}

export default ManuExpWhole
