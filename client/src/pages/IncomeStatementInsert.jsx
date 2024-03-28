import React from 'react'
import {Formik,Form,ErrorMessage,Field} from 'formik'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';


function IncomeStatementInsert() {
    let navigate = useNavigate()
    const initialValues={
        othr_sales:"",
       date_from:"",
       date_to:"",
       cost_of_good_sold:"",
       basic_prod_inventory_amt:"",
       curr_prod_purchase_amt:"",
       end_prod_inventory:"",
       trans_amt_anthr_acc:"",
       beg_othr_invent_asset_invent_amt:"",
       manu_cst_othr_asset:"",
       othr_invent_eop:""
       }
   
       const onSubmit=(values)=>{
           
          axios.post("http://localhost:3001/invent/q",values)
          .then((response)=>{
           navigate("/incomeStatement")
          })
          .catch((error)=>{
            console.log("Error :  "+error)
          })
       }
  return (
    <div className='App'>
       
      <div className='createPostPage'>
       
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
           
                <Form className='formContainer'>
                    <div className='fw-bold fs-4 text-center text-decoration-underline'>IncomeStatement form</div>
                    <div className='row'>
                        <div className='col-5'> <label className='textLabel'>기타매출 (3. Other Sales)</label></div>
                        <div className='col'> <Field 
                            autocomplete="off"
                            id="inputCreatePost" 
                            name="othr_sales" 
                            placeholder=""/></div>
                    </div>
                    <br></br>
                    <div className='row'>
                        <div className='col-5'> <label className='textLabel'> Date From :</label></div>
                        <div className='col'> <Field 
                            autocomplete="off"
                            id="inputCreatePost" 
                            name="date_from" 
                            placeholder="yyyy.mm  "/></div>
                    </div>
                    <br></br>
                    <div className='row'>
                        <div className='col-5'> <label className='textLabel'> Date to :</label></div>
                        <div className='col'> <Field 
                            autocomplete="off"
                            id="inputCreatePost" 
                            name="date_to" 
                            placeholder="yyyy.mm  "/></div>
                    </div>
                    <br></br>
                    <div className='row'>
                        <div className='col-5'> <label className='textLabel'>   1.상품매출원가 </label></div>
                        <div className='col'> <Field 
                            autocomplete="off"
                            id="inputCreatePost" 
                            name="cost_of_good_sold" 
                            placeholder=""/></div>
                    </div>
                    <br></br>
                    <div className='row'>
                        <div className='col-5'> <label className='textLabel'> 기초상품재고액 (Basic product inventory amount) </label></div>
                        <div className='col'> <Field 
                            autocomplete="off"
                            id="inputCreatePost" 
                            name="basic_prod_inventory_amt" 
                            placeholder=""/></div>
                    </div>
                    <br></br>
                    <div className='row'>
                        <div className='col-5'> <label className='textLabel'>당기상품매입액 (Current product purchase amount)</label></div>
                        <div className='col'> <Field 
                            autocomplete="off"
                            id="inputCreatePost" 
                            name="curr_prod_purchase_amt" 
                            placeholder=""/></div>
                    </div>
                    <br></br>
                    <div className='row'>
                        <div className='col-5'> <label className='textLabel'>기말상품재고액 (end product inventory)</label></div>
                        <div className='col'> <Field 
                            autocomplete="off"
                            id="inputCreatePost" 
                            name="end_prod_inventory" 
                            placeholder=""/></div>
                    </div>
                    <br></br>
                    <div className='row'>
                        <div className='col-5'> <label className='textLabel'>타계정으로대체액 (Transferred from different option)</label></div>
                        <div className='col'> <Field 
                            autocomplete="off"
                            id="inputCreatePost" 
                            name="trans_amt_anthr_acc" 
                            placeholder=""/></div>
                    </div>
                    
                    <br></br>
                    <div className='row'>
                        <div className='col-5'> <label className='textLabel'>기초기타재고자산재고액 (Beg Otr Inven Asset Invent Amt)</label></div>
                        <div className='col'> <Field 
                            autocomplete="off"
                            id="inputCreatePost" 
                            name="beg_othr_invent_asset_invent_amt" 
                            placeholder=""/></div>
                    </div>
                    <br></br>
                    <div className='row'>
                        <div className='col-5'> <label className='textLabel'>당기기타재고자산제조원가 ( Manufacturing cost of other inventory assets for the current period) :</label></div>
                        <div className='col'> <Field 
                            autocomplete="off"
                            id="inputCreatePost" 
                            name="manu_cst_othr_asset" 
                            placeholder=""/></div>
                    </div>
                    <br></br>
                    <div className='row'>
                        <div className='col-5'> <label className='textLabel'>기말기타재고자산재고액(Other inventory assets at the end of the period)</label></div>
                        <div className='col'> <Field 
                            autocomplete="off"
                            id="inputCreatePost" 
                            name="othr_invent_eop" 
                            placeholder=""/></div>
                    </div>
                    <br></br>
                    <button type='submit' >create</button>
                </Form>
           
       
        </Formik>
      </div>
    </div>
  )
}

export default IncomeStatementInsert
