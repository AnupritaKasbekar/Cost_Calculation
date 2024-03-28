import React from 'react'
import { useEffect,useState} from 'react';
import { useParams } from 'react-router-dom'
import axios  from 'axios';
import TableToExcel from './TableToExcel';

import { Axios,Promise } from 'axios';

function DateWiseMaterial() {
    let{purchase_date} = useParams();
   const pur_date = purchase_date;
console.log("Date :",purchase_date);
const [datastate, setData] = useState([])
const [listOfDate,setlistOfDate]= useState([])
const [lastDateStk,setlastDateStk] = useState([])
const [isLoading,setIsLoading] = useState(false)
//combine hook
//const monthdate = purchase_date.toDateString();
//console.log("MonthDate:"+monthdate);
//const longMonth = monthdate.split(' ');
//console.log("longMonth:"+longMonth[1]);

useEffect(()=>{

  axios.get(`http://localhost:3001/inoutTo/report/date/${purchase_date}`).then((response)=>{
    console.log(response.data)
    setlistOfDate(response.data)
    
})
})

useEffect(()=>{
  axios.get(`http://localhost:3001/inoutTo/report/date/stk/${purchase_date}`).then((response)=>{
    console.log(response.data)
    setlastDateStk(response.data)
    
})
})


const tableRows = listOfDate.map((materiallist)=>{
  return(
   
 <tr>
   
     <td  className='' key={materiallist}> {materiallist.code_id}</td>
     <td  className=''> {materiallist.in_date}</td>
     <td  className=''> {materiallist.out_date}</td>
     <td  className=''> {materiallist.in_qty_sum}</td>
     <td  className=''> {materiallist.in_price_savg}</td>
     <td  className=''> {materiallist.out_qty_sum}</td>
    
     <td  className=''> {materiallist.out_price_savg}</td>
     <td  className=''> {materiallist.out_qty_sum - materiallist.in_qty_sum}</td>   
   </tr>
  
   
  )
})
const remaing_stk = lastDateStk.map((onlylaststk)=>{
  return(
    <tr>
      <td className=''></td>
      <td className=''></td>
      <td className=''></td>
      <td className=''></td>
      <td className=''></td>
      <td className=''></td>
      <td className=''></td>
      <td className=''></td>  
      <td  className=''> {onlylaststk.code_id}</td>
    <td  className=''> {onlylaststk.out_qty_sum - onlylaststk.in_qty_sum}</td>
     
  </tr>
  )

})



  return (
    <div className='App'>
      <h1>Date Wise Material Data</h1>
      <span class="border"></span>
     <TableToExcel/>
      <table id = "empTable" className='custub'>
      <thead className='mainlink_title'>
      <tr>
                   <th  className=''>Code</th> 
                   <th  className=''>Purchase Date</th>
                   <th  className=''>Sale Date</th>
                   <th  className=''>whole Purchase Qty</th>
                   <th  className=''> Avg Price</th> 
                   <th  className=''>whole Sale Qty</th>
                   <th  className=''>Avg Price</th>
                   <th  className=''>Current Stock</th>
                              
               </tr>
               </thead>
          <tbody className='table_str q1'>
        
       {tableRows}
      
          </tbody>
      </table>
      <br /><br /><br />
    </div>
  )
}

export default DateWiseMaterial


/**/
/*useEffect(()=>{
  const getData = async()=>{
    try{
      setIsLoading(true);
      const res1 = await Axios.get(`http://localhost:3001/inoutTo/report/date/${purchase_date}`)
      const res2 = await Axios.get(`http://localhost:3001/inoutTo/report/date/stk/${purchase_date}`)
      setIsLoading(false);
      setData({
        listOfDate:res1.data,
        lastDateStk:res2.data.results
      });
    }
    
    catch(error)
    {
      setIsLoading(false);
    }
  }
  getData()
},[])*/

/*const[test,setTest] = useState({
  listOfDate:[],
  lastDateStk:[],
});*/

/*useEffect(()=>{
  setIsLoading(true);
  Promise.all([
    axios.get(`http://localhost:3001/inoutTo/report/${purchase_date}`),
    axios.get(`http://localhost:3001/inoutTo/report/stk/${purchase_date}`)
  ]).then((results)=>{
   setIsLoading(false);
   setTest({
    listOfDate:results[0].data,
    lastDateStk:results[1].data.results
   });
  }).catch((err)=>{
    setIsLoading(false)
    console.log(err)
  });
},[])
console.log("test>>>", test);
const tableRows = test.map((listtemp)=>{
  return(
    <tr>
     <td  className='' key={listtemp.listOfDate}> {listtemp.listOfDate.code_id}</td>
      <td  className=''> {listtemp.listOfDate.in_date}</td>
      
    </tr>
  )
})*/

/*useEffect(()=>{
  axios.get(`http://localhost:3001/inoutTo/report/date/${purchase_date}`)
  .then(res=>{
    setlistOfDate(res.data)
    setIsLoading(false)
  })
  .catch(err=>{
    console.log(err)
  });
  axios.get(`http://localhost:3001/inoutTo/report/date/stk/${purchase_date}`)
  .then(res=>{
    setlastDateStk(res.data.results)
    setIsLoading(false)
  })
  .catch(err=>{
    console.log(err)
  });
},[]);

useEffect(()=>{
  setTest({...test,listOfDate,lastDateStk})
},[listOfDate,lastDateStk])


const tableRows = test.map((list)=>{
  return(
    <tr>
     <td  className='' key={list}> {list.code_id}</td>
      <td  className=''> {list.in_date}</td>
      <td  className=''> {list.out_date}</td>
      <td  className=''> {list.in_qty_sum}</td>
      <td  className=''> {list.in_price_savg}</td>
      <td  className=''> {list.out_qty_sum}</td>
     
      <td  className=''> {list.out_price_savg}</td>
      <td  className=''> {list.out_qty_sum - list.in_qty_sum}</td>  
      <td  className=''> {list.code_id}</td>
    <td  className=''> {list.out_qty_st_sum - list.in_qty_st_sum}</td>
    </tr>
  )
})
*/