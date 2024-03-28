import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

function Department_expense() {
    const [listDepartment_expense,setlistDepartment_expense] = useState([]);
  


    useEffect(()=>{
        axios.get("http://localhost:3001/department_expense/2022").then((response)=>{
            setlistDepartment_expense(response.data)
        })
    },[])
    /* Total Calculation*/
    var department_tot = listDepartment_expense.map(sum_dept =>sum_dept.dept_tot).reduce((a,b)=>a+b,0);
    var sal_tot = listDepartment_expense.map(sum_sal=>sum_sal.basic_sal).reduce((a,b)=>a+b,0);
    var rp_tot = listDepartment_expense.map(sum_rp=>sum_rp.RP).reduce((a,b)=>a+b,0)
    var rp_sal_tot = listDepartment_expense.map(sum_sal_rp=>sum_sal_rp.sal_rp_tot).reduce((a,b)=>a+b,0);
    var sum_var = listDepartment_expense.map(sum_var_expense=>sum_var_expense.var_expense).reduce((a,b)=>a+b,0);
    var sum_data_center = listDepartment_expense.map(sum_data_cntr=>sum_data_cntr.data_center_total).reduce((a,b)=>a+b,0)
    const tablerows = listDepartment_expense.map((expense)=>{
        return(
            <>
            <tr>
                <td className=''>{expense.group_name}</td>
                <td className=''>{expense.department}</td>
                <td className='textright q2'>{expense.dept_tot.toLocaleString("ko-KR")}</td>
                <td className='textright '>{expense.basic_sal.toLocaleString("ko-KR")}</td>
                <td className='textright '>{expense.RP.toLocaleString("ko-KR")}</td>
                <td className='textright'>{expense.sal_rp_tot.toLocaleString("ko-KR")}</td>
                <td className='textright'>{expense.var_expense.toLocaleString("ko-KR")}</td>
                <td className='textright'>{expense.var_expense.toLocaleString("ko-KR")}</td>
                <td className='textright'>{expense.data_center_total.toLocaleString("ko-KR")}</td>

            </tr>
            
           </>
        )
    })
  return (
    <div className='App'>
      <h1>2022년 노무비(2022년 12월 31일 기준)</h1>
      <table id="empTable" className='custub'>
            <thead className='mainlink_title'>
                <tr className='new_title'>
                    <td className='border-0'></td>
                    <td className='border-0'></td>
                    <td className='border-0'></td>
                    <td className='border-0'></td>
                    <td className='border-0'>고정비(고정급여)</td>
                    <td className='border-0'></td>
                    <td className='border-0'>변동비(연장특근)</td>
                    <td className='border-0'></td>
                    <td className='border-0'> </td>

                </tr>
                <tr className='rounded'>
                    <th className=''>Product Group</th>
                    <th className=''>부서 인원</th>
                    <th >부서별합계</th>
                    <th className='q1'>고정급여</th>
                    <th className='q1'>퇴직급여</th>
                    <th className='q1'>계</th>
                    <th className='q2'>연장</th>
                    <th className='q2'>계</th>
                    <th>Total(Cost Center 별)</th>
                </tr>
            </thead>
            <tbody className='table_str q1'>
                {tablerows  }
            </tbody>
            <th>계</th>
            <th></th>
            <th>{department_tot.toLocaleString("ko-KR")}</th>
            <th>{sal_tot.toLocaleString("ko-KR")}</th>
            <th>{rp_tot.toLocaleString("ko-KR")}</th>
            <th>{rp_sal_tot.toLocaleString("ko-KR")}</th>
            <th>{sum_var.toLocaleString("ko-KR")}</th>
            <th>{sum_var.toLocaleString("ko-KR")}</th>
            <th>{sum_data_center.toLocaleString("ko-KR")}</th>
      </table>
    </div>
  )
}

export default Department_expense
