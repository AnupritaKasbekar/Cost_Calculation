import React from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Department_expense from './Department_expense';
import Department_expense23 from './Department_expense23';

function Department_expense_whole() {
  return (
    <div className=''>
        <h1 className='App'>노무비 year wise</h1>
        <Tabs
        defaultActiveKey="Y2022"
        id='uncontrolled-tab-example'
        className='tabs'>
        <Tab eventKey="Y2022" title="2022">
            <Department_expense/>
        </Tab>
        <Tab eventKey="Y2023" title="2023">
            <Department_expense23/>
        </Tab>
        </Tabs>
    </div>
  )
}

export default Department_expense_whole
