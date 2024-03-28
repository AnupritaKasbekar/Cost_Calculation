import React from 'react'
import {Formik,Form,ErrorMessage,Field} from 'formik'
import * as Yup from 'yup'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Create() {
    let navigate = useNavigate()
    const initialValues ={
        product_id:"",
        product_name:"",
        code:"",
        batch_size:"",
        row_material:"",
        kg_batch:"",
       
    }
    const onSubmit=(data)=>{
        axios.post("http://localhost:3001/bom",data).then((response)=>{
        navigate("/BomsTables")
    });
    }
    const validationSchema= Yup.object().shape({
        product_id:Yup.string().required(),
     
    })
  return (
    <div className='App'>
      <h1>New Product</h1>
      <div className='createPostPage'>
      <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
          <Form className='formContainer'>
          <label className='textLabel'> Id</label>
          <ErrorMessage name='id' component="span"/>
          <Field autocomplete="off" id="inputCreatePost" name="id" placeholder="product ID as 100"/>
                         
          <label className='textLabel'>Product Id</label>
          <ErrorMessage name='product_id' component="span"/>
          <Field autocomplete="off" id="inputCreatePost" name="product_id" placeholder="product ID as 44501"/>
                    
                        <label>Product Name</label>
                        <Field 
                         autocomplete="off"
                        id="inputCreatePost" 
                        name="product_name" 
                        placeholder="prodcut name"
                        />
                         <label>Code</label>
                        <Field 
                         autocomplete="off"
                        id="inputCreatePost" 
                        name="code" 
                        placeholder="product code"/>
                    
                        <label>Raw Material</label>
                        <Field 
                         autocomplete="off"
                        id="inputCreatePost" 
                        name="row_material" 
                        placeholder="Raw Material"/>
                
                        <label>KG/Batch</label>
                        <Field 
                         autocomplete="off"
                        id="inputCreatePost" 
                        name="kg_batch"
                        placeholder=""/>
                         <button type='submit'>Create New Product</button>
          </Form>
          </Formik>
      </div>
    </div>
  )
}

export default Create
