import React from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Wip22 from './Wip22';
import Wip23 from './Wip23';

function WipWhole() {
  return (
    <div>
      <h1 className='App'> Sales year wise</h1>
      <Tabs
        defaultActiveKey="Y2022"
        id='uncontrolled-tab-example'
        className='tabs'>
        <Tab eventKey="Y2022" title="2022">
        <Wip22/>
        </Tab>
        <Tab eventKey="Y2023" title="2023">
         <Wip23/>
        </Tab>
        </Tabs>
    </div>
  )
}

export default WipWhole
