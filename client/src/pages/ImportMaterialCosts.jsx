import React from 'react'
import { useState } from 'react';
import * as XLSX from 'xlsx';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';


function ImportMaterialCosts() {
 //it will contain array of objects 
 const [excelFile,setExcelFile] = useState(null);
 const [excelErrorFile,setExcelFileError] = useState(null);
 const [excelData,setExcelData] = useState(null)
 console.log(excelFile)
 //handle file
 const fileType=['application/vnd.ms-excel'];
 const handleFile=(e)=>{
   let selectedFile = e.target.files[0];
   if(selectedFile)
   {
       //console.log(selectedFile.type)
       if(selectedFile&&fileType.includes(selectedFile.type))
       {
           let reader = new FileReader();
           reader.readAsArrayBuffer(selectedFile);
           reader.onload=(e)=>{
             setExcelFileError(null);
             setExcelFile(e.target.result);
           }
       }
       else
       {
             setExcelFileError('Please select only excel file types')
             setExcelFile(null)
       }
   }
   else{
     console.log('plz select your file');
   }
 }
 //submit function
 const handleSubmit=(e)=>{
   e.preventDefault();
   if(excelFile!==null)
   {
       const workbook = XLSX.readFile(excelFile,{type:'buffer'});
       const workSheetName = workbook.SheetNames[0];
       const worksheet = workbook.Sheets[workSheetName];
       const data = XLSX.utils.sheet_to_json(worksheet);
       setExcelData(data)

       console.log(excelData)
       axios.post("http://localhost:3001/import",excelData)
   }
   else{
     setExcelData(null)
   }
 }
 return (
   <div className='container'>
     {/*Upload file section*/}
     <div className='form'>
       <form className='form-group' method="post" autoComplete="off" onSubmit={handleSubmit}>
           <label><h5>Upload Excel File</h5></label>
           <br></br>
           <input type='file' className='form-control' onChange={handleFile} required></input>
           <button type='submit' className='btn btn-success' style={{marginTop:5+'px'}}>Submit</button>
       </form>
     </div>
   
   </div>
 )
}

export default ImportMaterialCosts
