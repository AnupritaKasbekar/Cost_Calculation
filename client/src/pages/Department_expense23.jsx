import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

function Department_expense23() {
    const [listDepartment_expense,setlistDepartment_expense] = useState([]);
  


    useEffect(()=>{
        axios.get("http://localhost:3001/department_expense/2023").then((response)=>{
            setlistDepartment_expense(response.data)
        })
    },[])
    /* Total Calculation*/
    var department_tot = listDepartment_expense.map(sum_dept =>sum_dept.dept_tot).reduce((a,b)=>a+b,0);
    var sal_tot = listDepartment_expense.map(sum_sal=>sum_sal.basic_sal).reduce((a,b)=>a+b,0);
    var rp_tot = listDepartment_expense.map(sum_rp=>sum_rp.RP).reduce((a,b)=>a+b,0)
    var rp_sal_tot = listDepartment_expense.map(sum_sal_rp=>sum_sal_rp.sal_rp_tot).reduce((a,b)=>a+b,0);
    var sum_var = listDepartment_expense.map(sum_var_expense=>sum_var_expense.var_expense).reduce((a,b)=>a+b,0);
    var sum_ext = listDepartment_expense.map(sum_var_expense=>sum_var_expense.extension).reduce((a,b)=>a+b,0);
    var sum_var_ex_over_tot = listDepartment_expense.map(sum_var_expense=>sum_var_expense.var_ex_over_tot).reduce((a,b)=>a+b,0);
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
                <td className='textright '>{expense.overtime.toLocaleString("ko-KR")}</td>
                <td className='textright'>{expense.sal_rp_tot.toLocaleString("ko-KR")}</td>

                <td className='textright'>{expense.var_expense.toLocaleString("ko-KR")}</td>
                <td className='textright'>{expense.extension.toLocaleString("ko-KR")}</td>
                <td className='textright'>{expense.var_ex_over_tot.toLocaleString("ko-KR")}</td>
                <td className='textright'>{expense.data_center_total.toLocaleString("ko-KR")}</td>

            </tr>
            
           </>
        )
    })
  return (
    <div className='App'>
      <h1>2023년 노무비(2023년 03월 31일 기준)</h1>
      <table id="empTable" className='custub'>
            <thead className='mainlink_title'>
                <tr className='new_title'>
                    <td className='border-0'></td>
                    <td className='border-0'></td>
                    <td className='border-0'></td>
                    <td className='border-0'></td>
                    <td className='border-0'>고정비(고정급여)</td>
                    <td className='border-0'></td>
                    <td className='border-0'></td>
                    <td className='border-0'>변동비(연장특근)</td>
                    <td className='border-0'></td>
                    <td className='border-0'> </td>
                    <td className='border-0'> </td>

                </tr>
                <tr className='rounded'>
                    <th className=''>Product Group</th>
                    <th className=''>부서 인원</th>
                    <th >부서별합계</th>
                    <th className='q1'>고정급여</th>
                    <th className='q1'>퇴직급여</th>
                    <th className='q1'>overtime</th>
                    <th className='q1'>계</th>
                    <th className='q2'>연장</th>
                    <th className='q2'>특근extension</th>
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
            <th>0</th>
            <th>{rp_sal_tot.toLocaleString("ko-KR")}</th>
            <th>{sum_var.toLocaleString("ko-KR")}</th>
            <th>{sum_ext.toLocaleString("ko-KR")}</th>
            <th>{sum_var_ex_over_tot.toLocaleString("ko-KR")}</th>
            <th>{sum_data_center.toLocaleString("ko-KR")}</th>
            <tr>
                <th className='q5'>diff(database-excel)</th>
                <th className='q5'></th>
                <th className='q5'>{(department_tot- 1804168608).toLocaleString("ko-KR")}</th>
                <th className='q5'>{(sal_tot-1468441706).toLocaleString("ko-KR")}</th>
                <th className='q5'>{(rp_tot-122370142).toLocaleString("ko-KR")}</th>
                <th className='q5'>0</th>
                <th className='q5'>{(rp_sal_tot- 1590811848 ).toLocaleString("ko-KR")}</th>
                <th className='q5'>{(sum_var- 166932690 ).toLocaleString("ko-KR")}</th>
                <th className='q5'>{(sum_ext- 46424070).toLocaleString("ko-KR")}</th>
                <th className='q5'>{(sum_var_ex_over_tot- 213356760).toLocaleString("ko-KR")}</th>
                <th className='q5'>{(sum_data_center- 1804168608).toLocaleString("ko-KR")}</th>
            </tr>
      </table>
    </div>
  )
}

export default Department_expense23
