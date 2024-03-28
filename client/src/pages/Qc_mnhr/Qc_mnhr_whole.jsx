import React from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import QcMnhr22 from './QcMnhr22';
import QcMnhr23 from './QcMnhr23';


function Qc_mnhr_whole() {
  return (
    <div>
    <h1 className='App'> QC Team  year wise</h1>
      <Tabs
      defaultActiveKey="Y2022"
      id='uncontrolled-tab-example'
      className='tabs'>
      <Tab eventKey="Y2022" title="2022">
         <QcMnhr22/>
      </Tab>
      <Tab eventKey="Y2023" title="2023">
         <QcMnhr23/>
      </Tab>
      </Tabs>
  </div>
  )
}

export default Qc_mnhr_whole
