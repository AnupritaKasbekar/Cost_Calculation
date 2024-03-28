import React from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Raw_package_material_cost from './Raw_package_material_cost';
import Raw_package_material_cost23 from './Raw_package_material_cost23';

function Raw_package_material_cost_whole() {
  return (
    <div>
      <h1 className='App'> 부재료비 year wise</h1>
        <Tabs
        defaultActiveKey="Y2022"
        id='uncontrolled-tab-example'
        className='tabs'>
        <Tab eventKey="Y2022" title="2022">
           <Raw_package_material_cost/>
        </Tab>
        <Tab eventKey="Y2023" title="2023">
           <Raw_package_material_cost23/>
        </Tab>
        </Tabs>
    </div>
  )
}

export default Raw_package_material_cost_whole
