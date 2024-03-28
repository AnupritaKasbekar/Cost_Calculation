import React from 'react'
import {Formik,Form,ErrorMessage,Field} from 'formik'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function Depreciation_alls() {
    let navigate = useNavigate()
 const initialValues={
    category:"",
    date_from:"",
    date_to:"",
    Syn_team:"",
    np_team:"",
    fp_team:"",
    common:"",
    sales_adv:""
    }

    const onSubmit=(data)=>{
       axios.post("http://localhost:3001/deoreciationAll",data).then((response)=>{
        navigate("/BomsTables")
       }) 
    }
  return (
    <div>
       
      <div className='createPostPage'>
       
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
            <Form className='formContainer'>
                <div className='fw-bold fs-4 text-center text-decoration-underline'>감가상각비 전체 form</div>
                <div className='row'>
                    <div className='col'> <label className='textLabel'> Category:</label></div>
                    <div className='col-9'> <Field 
                        autocomplete="off"
                        id="inputCreatePost" 
                        name="category" 
                        placeholder=""/></div>
                </div>
                <div className='row'>
                    <div className='col'> <label className='textLabel'> Date From :</label></div>
                    <div className='col-9'> <Field 
                        autocomplete="off"
                        id="inputCreatePost" 
                        name="date_from" 
                        placeholder="yyyy.mm  "/></div>
                </div>

                <div className='row'>
                    <div className='col'> <label className='textLabel'> Date to :</label></div>
                    <div className='col-9'> <Field 
                        autocomplete="off"
                        id="inputCreatePost" 
                        name="date_to" 
                        placeholder="yyyy.mm  "/></div>
                </div>
                <div className='row'>
                    <div className='col'> <label className='textLabel'>합성팀 (Synthesis_team):</label></div>
                    <div className='col-9'> <Field 
                        autocomplete="off"
                        id="inputCreatePost" 
                        name="Syn_team" 
                        placeholder=""/></div>
                </div>
                <div className='row'>
                    <div className='col'> <label className='textLabel'>천연물사업팀 np:</label></div>
                    <div className='col-9'> <Field 
                        autocomplete="off"
                        id="inputCreatePost" 
                        name="np_team" 
                        placeholder=""/></div>
                </div>
                <div className='row'>
                    <div className='col'> <label className='textLabel'>완제의약품 FP:</label></div>
                    <div className='col-9'> <Field 
                        autocomplete="off"
                        id="inputCreatePost" 
                        name="fp_team" 
                        placeholder=""/></div>
                </div>
                <div className='row'>
                    <div className='col'> <label className='textLabel'>공통 Common:</label></div>
                    <div className='col-9'> <Field 
                        autocomplete="off"
                        id="inputCreatePost" 
                        name="common" 
                        placeholder=""/></div>
                </div>
                <div className='row'>
                    <div className='col'> <label className='textLabel'>판매관리비:</label></div>
                    <div className='col-9'> <Field 
                        autocomplete="off"
                        id="inputCreatePost" 
                        name="sales_adv" 
                        placeholder=""/></div>
                </div>
                <button type='submit'>Submit</button>
            </Form>
        </Formik>
      </div>
    </div>
  )
}

export default Depreciation_alls
