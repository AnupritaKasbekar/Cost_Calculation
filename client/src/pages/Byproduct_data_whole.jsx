import React from 'react'
import Byproduct_data from './Byproduct_data'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Byproduct_data23 from './Byproduct_data23';

function Byproduct_data_whole() {
  return (
    <div>
    <div className=''>
     <h1 className='App'> 주요제품별 원가 year wise</h1>
     <Tabs
     defaultActiveKey="Y2022"
     id='uncontrolled-tab-example'
     className='tabs'>
     <Tab eventKey="Y2022" title="2022">
        <Byproduct_data/>
        
     </Tab>
     <Tab eventKey="Y2023" title="2023">
     <Byproduct_data23/>
     </Tab>
     </Tabs>
 </div>
 </div>
  )
}

export default Byproduct_data_whole
