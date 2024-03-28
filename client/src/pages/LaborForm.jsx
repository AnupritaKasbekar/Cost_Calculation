import React from 'react'
import {Formik,Form,ErrorMessage,Field} from 'formik'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function LaborForm() {
    let navigate = useNavigate()
    const initialValues={
        group_name:"",
        date_from:"",
        date_to:"",
        department:"",
        dept_tot:"",
        basic_sal:"",
        RP:"",
        overtime:"",
        var_expense:"",
        extension:"",
        }
    
        const onSubmit=(data)=>{
           axios.post("http://localhost:3001/department_expense/post",data).then((response)=>{
            navigate("/department_expense")
           }) 
        }

  return (
    <div className='App'>
      <div className='createPostPage'>
       
       <Formik initialValues={initialValues} onSubmit={onSubmit}>
           <Form className='formContainer'>
               <div className='fw-bold fs-4 text-center text-decoration-underline'>노무비 form</div>
               <div className='row'>
                   <div className='col'> <label className='textLabel'> ( 부서(인원) )Group Name:</label></div>
                   <div className='col-9'> <Field 
                       autocomplete="off"
                       id="inputCreatePost" 
                       name="group_name" 
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
                   <div className='col'> <label className='textLabel'>department:</label></div>
                   <div className='col-9'> <Field 
                       autocomplete="off"
                       id="inputCreatePost" 
                       name="department" 
                       placeholder=""/></div>
               </div>
               <div className='row'>
                   <div className='col'> <label className='textLabel'>부서별합계 dept_tot</label></div>
                   <div className='col-9'> <Field 
                       autocomplete="off"
                       id="inputCreatePost" 
                       name="dept_tot" 
                       placeholder=""/></div>
               </div>
               <div className='row'>
                   <div className='col'> <label className='textLabel'>고정급여 basic_sal</label></div>
                   <div className='col-9'> <Field 
                       autocomplete="off"
                       id="inputCreatePost" 
                       name="basic_sal" 
                       placeholder=""/></div>
               </div>
               <div className='row'>
                   <div className='col'> <label className='textLabel'>퇴직급여 RP :</label></div>
                   <div className='col-9'> <Field 
                       autocomplete="off"
                       id="inputCreatePost" 
                       name="RP" 
                       placeholder=""/></div>
               </div>
               <div className='row'>
                   <div className='col'> <label className='textLabel'>overtime:</label></div>
                   <div className='col-9'> <Field 
                       autocomplete="off"
                       id="inputCreatePost" 
                       name="overtime" 
                       placeholder=""/></div>
               </div>

               <div className='row'>
                   <div className='col'> <label className='textLabel'>연장var_expense:</label></div>
                   <div className='col-9'> <Field 
                       autocomplete="off"
                       id="inputCreatePost" 
                       name="var_expense" 
                       placeholder=""/></div>
                    
                    
               </div>

               <div className='row'>
                   <div className='col'> <label className='textLabel'>특근 extension :</label></div>
                   <div className='col-9'> <Field 
                       autocomplete="off"
                       id="inputCreatePost" 
                       name="extension" 
                       placeholder=""/></div>
                    
                    
               </div>

              
               <button type='submit'>Submit</button>
           </Form>
       </Formik>
     </div>
    </div>
  )
}

export default LaborForm
