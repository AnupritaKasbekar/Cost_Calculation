import React from 'react'
import Production_mnhr23 from './Production_mnhr23'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Production_mnhr22 from './Production_mnhr22';

function Production_manhr_whole() {
  return (
   
       <div>
       <div className=''>
        <h1 className='App'>생산 Man-hour year wise</h1>
        <Tabs
        defaultActiveKey="Y2022"
        id='uncontrolled-tab-example'
        className='tabs'>
        <Tab eventKey="Y2022" title="2022">
           <Production_mnhr22/>
        </Tab>
        <Tab eventKey="Y2023" title="2023">
          <Production_mnhr23/>
        </Tab>
        </Tabs>
    </div>
    </div>
    
  )
}

export default Production_manhr_whole
