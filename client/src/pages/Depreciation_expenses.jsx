import React from 'react'
import {Formik,Form,ErrorMessage,Field} from 'formik'
import * as Yup from 'yup'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Depreciation_alls from './Depreciation_alls';
import UpdateInMan_hrs_table_depriciation_amt from './UpdateInMan_hrs_table_depriciation_amt';
function Depreciation_expenses() {
  return (
    <div className='App'>
      <h1>depreciation expenses </h1>
     
      <p></p>
        <Depreciation_alls/>
     
      
     
   
    </div>
  )
}

export default Depreciation_expenses
