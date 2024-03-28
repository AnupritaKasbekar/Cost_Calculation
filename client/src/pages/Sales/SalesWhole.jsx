import React from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Sales22 from './Sales22';
import Sales23 from './Sales23';

function SalesWhole() {
  return (
    <div>
      <div className=''>
      <h1 className='App'> Sales year wise</h1>
        <Tabs
        defaultActiveKey="Y2022"
        id='uncontrolled-tab-example'
        className='tabs'>
        <Tab eventKey="Y2022" title="2022">
           <Sales22/>
        </Tab>
        <Tab eventKey="Y2023" title="2023">
           <Sales23/>
        </Tab>
        </Tabs>
    </div>
    </div>
  )
}

export default SalesWhole
