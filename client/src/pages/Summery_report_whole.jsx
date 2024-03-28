import React from 'react'
import SummeryReport from './SummeryReport'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import SummeryReport23 from './SummeryReport23';

function Summery_report_whole() {
  return (
    <div>
       <div className=''>
        <h1 className='App'>제조원가명세서 year wise</h1>
        <Tabs
        defaultActiveKey="Y2022"
        id='uncontrolled-tab-example'
        className='tabs'>
        <Tab eventKey="Y2022" title="2022">
           <SummeryReport/>
        </Tab>
        <Tab eventKey="Y2023" title="2023">
           <SummeryReport23/>
        </Tab>
        </Tabs>
    </div>
    </div>
  )
}

export default Summery_report_whole
