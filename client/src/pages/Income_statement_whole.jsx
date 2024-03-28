import React from 'react'
import IncomeStatement from './IncomeStatement'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import IncomeStatement23 from './IncomeStatement23';

function Income_statement_whole() {
  return (
   
       <div>
       <div className=''>
        <h1 className='App'>제조원가명세서 year wise</h1>
        <Tabs
        defaultActiveKey="Y2022"
        id='uncontrolled-tab-example'
        className='tabs'>
        <Tab eventKey="Y2022" title="2022">
           <IncomeStatement/>
        </Tab>
        <Tab eventKey="Y2023" title="2023">
          <IncomeStatement23/>
        </Tab>
        </Tabs>
    </div>
    </div>
    
  )
}

export default Income_statement_whole
