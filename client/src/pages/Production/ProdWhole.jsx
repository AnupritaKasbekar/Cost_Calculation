import React from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Prod22 from './Prod22';
import Prod23 from './Prod23';
function ProdWhole() {
  return (
    <div>
    <h1 className='App'> Production year wise</h1>
      <Tabs
      defaultActiveKey="Y2022"
      id='uncontrolled-tab-example'
      className='tabs'>
      <Tab eventKey="Y2022" title="2022">
         <Prod22/>
      </Tab>
      <Tab eventKey="Y2023" title="2023">
         <Prod23/>
      </Tab>
      </Tabs>
  </div>
  )
}

export default ProdWhole
