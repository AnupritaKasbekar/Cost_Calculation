import React from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Labor22 from './Labor22';
import Labor23 from './Labor23';

function LaborWhole() {
  return (
    <div>
       <h1 className='App'> 노무비 year wise</h1>
        <Tabs
        defaultActiveKey="Y2022"
        id='uncontrolled-tab-example'
        className='tabs'>
        <Tab eventKey="Y2022" title="2022">
           <Labor22/>
        </Tab>
        <Tab eventKey="Y2023" title="2023">
           <Labor23/>
        </Tab>
        </Tabs>
    </div>
  )
}

export default LaborWhole
