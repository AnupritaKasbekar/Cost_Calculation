import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import Sys_api_report from './Sys_api_report';
import Pilot_report from './Pilot_report';
import Product_api_report from './Product_api_report';
import Herbel_api_Report from './Herbel_api_Report';
import Finish_drug_report from './Finish_drug_report';
import Alerts from './Alerts';
import Import_to_excel from './Import_to_excel';
import { useCSVReader } from 'react-papaparse';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import ImportExcel from './ImportExcel';
import Depreciation_expenses from './Depreciation_expenses';
import BatchNSalesYes from './BatchNSalesYes';

function Man_hrs_product_main_table() {
  const { CSVReader } = useCSVReader();

  return (
    <div className=''>
     
    { 
    <>
    <h1 className='App'>Cost calculation (Only 2023)</h1>
      <p className='text-center'>2022 tab I will add it till tomorrow</p></>
    }
      
   
    <ImportExcel/>
    <div className='container'>
      <div className='row'>
        {/*<div className='col'>*/  <Alerts/>}
       
        {/*</div>
        <div className='col-sm'>
        <BatchNSalesYes/>*/}
       {/*} </div>*/}
      </div>
    </div>
    
    
    <Tabs
      defaultActiveKey="Sys_Api"
      id="uncontrolled-tab-example"
      className="tabs"
    >
      <Tab eventKey="Sys_Api" title="합성API">
      <Sys_api_report/>
      </Tab>
      <Tab eventKey="pilot" title="Pilot">
      <Pilot_report/> 
      </Tab>
      <Tab eventKey="product_api" title="조품API">
      <Product_api_report/>
      </Tab>
      <Tab eventKey="herbel_api" title="생약원료의약품">
      <Herbel_api_Report/>
      </Tab>
      <Tab eventKey="finish_drug" title="완제의약품">
      <Finish_drug_report/>
      </Tab>
     
    </Tabs>
   
       
        
       
        
        

        
      
    </div>
  )
}

export default Man_hrs_product_main_table
