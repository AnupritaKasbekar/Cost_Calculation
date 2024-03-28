import React,{useEffect,useState} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';


function MaterialById() {
    const[Inlist,setMaterialList]= useState([])
    const[outList,setOutList] = useState([])
   
    let{code_id} = useParams();

    useEffect(()=>{
        axios.get(`http://localhost:3001/puchaseIn/report/${code_id}`).then((response)=>{
            console.log(response.data)
            setMaterialList(response.data)
        })
    })

    useEffect(()=>{
        axios.get(`http://localhost:3001/SalesOut/report/${code_id}`).then((response)=>{
            console.log(response.data)
            setOutList(response.data)
        })
    })


    const tableRowsOutData = outList.map((out_list)=>{
        return(
            
            <tr>
               
                <td className=''>{out_list.code_id}</td>
                <td className=''>{out_list.out_date}</td>
                <td className=''>{out_list.out_qty.toLocaleString("ko-KR")}</td>
                <td className=''>{out_list.out_price.toLocaleString("ko-KR")}</td>
                <td className=''>{out_list.out_qty_into_price.toLocaleString("ko-KR")}</td>
            </tr>
            
        )
    });
const tableRows = Inlist.map((in_list)=>{
    return(
        <tr>
            <td className=''>{in_list.code_id}</td>
            <td className=''>{in_list.in_date}</td>
            <td className=''>{in_list.in_qty.toLocaleString("ko-KR",{
                minimumFractionDigits:3
            })}</td>
            <td className=''>{in_list.in_price.toLocaleString("ko-KR",{
                minimumFractionDigits:2
            })}</td>
            <td className=''>{in_list.in_qty_into_price.toLocaleString("ko-KR",{
                minimumFractionDigits:0
            })}</td>
          
        </tr>
    )
});
  return (
    <div className='App'>
      <h1>Purchase Table</h1>
      <span class="border"></span>
    <table id='empTable' className='custub'>
        <thead className='mainlink_title'>
            <tr>
                <th className=''>Code</th>
                <th className=''>Date</th>
                <th className=''>In Quantity</th>
                <th className=''>In Purchase Quantity</th>
                <th className=''>Total Cost</th>
            </tr>
        </thead>
       <tbody className='table_str q1'>
            {tableRows}
       </tbody>
    </table>
    <h1>Sales Table</h1>
    <table id='empTable'>
        <thead className='mainlink_title'>
            <tr>
                <th className=''>Code</th>
                <th className=''>Date</th>
                <th className=''>out Quantity</th>
                <th className=''>Out Purchase Quantity</th>
                <th className=''>Total Cost</th>
            </tr>
        </thead>
       <tbody className='table_str q1'>
            {tableRowsOutData}
       </tbody>
    </table>
    </div>
  )
}

export default MaterialById
