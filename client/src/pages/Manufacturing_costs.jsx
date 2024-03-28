import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

function Manufacturing_costs() {
    const[listManu_cost,setManu_cost]= useState([])
    useEffect(()=>{
        axios.get("http://localhost:3001/manufacture_cost").then((response)=>{
            setManu_cost(response.data)
        })
    },[]);

    /*total calculations*/
    var sum_synthesis = listManu_cost.map(sum_syn=>sum_syn.synthesis).reduce((a,b)=>a+b,0);
    var sum_syn_creations = listManu_cost.map(creatn=>creatn.syn_creations).reduce((a,b)=>a+b,0);
    var sum_syn_PILOT = listManu_cost.map(syn_pi=>syn_pi.syn_PILOT).reduce((a,b)=>a+b,0);
    var sum_synthesis_common = listManu_cost.map(syn_cmn=>syn_cmn.synthesis_common).reduce((a,b)=>a+b,0);
    var sum_syn_fixed_cost = listManu_cost.map(syn_fix=>syn_fix.syn_fixed_cost).reduce((a,b)=>a+b,0);
    var sum_syn_variable_cost = listManu_cost.map(syn_var=>syn_var.syn_variable_cost).reduce((a,b)=>a+b,0);
    var sum_syn_fix_var_tot = listManu_cost.map(syn_tot=>syn_tot.syn_fix_var_tot).reduce((a,b)=>a+b,0);
    var sum_np_fix_cost = listManu_cost.map(np_fix=>np_fix.np_fix_cost).reduce((a,b)=>a+b,0);
    var sum_np_variable_cost = listManu_cost.map(np_var=>np_var.np_variable_cost).reduce((a,b)=>a+b,0);
    var sum_np_tot = listManu_cost.map(np_tot=>np_tot.np_fix_var_tot).reduce((a,b)=>a+b,0);
    var sum_finish_drug_fix_cost = listManu_cost.map(f_fix=>f_fix.finish_drug_fix_cost).reduce((a,b)=>a+b,0);
    var sum_finish_drug_var_cost = listManu_cost.map(f_var=>f_var.finish_drug_var_cost).reduce((a,b)=>a+b,0);
    var sum_finish_fix_var_tot = listManu_cost.map(f_tot=>f_tot.finish_fix_var_tot).reduce((a,b)=>a+b,0);
    var sum_common_fix_cost = listManu_cost.map(c_fix=>c_fix.common_fix_cost).reduce((a,b)=>a+b,0);
    var sum_common_var_cost = listManu_cost.map(c_var=>c_var.common_var_cost).reduce((a,b)=>a+b,0);
    var sum_common_fix_var_tot = listManu_cost.map(c_tot=>c_tot.common_fix_var_tot).reduce((a,b)=>a+b,0);
    var sum_fix_tot = listManu_cost.map(fix_t=>fix_t.fix_tot).reduce((a,b)=>a+b,0);
    var sum_var_tot = listManu_cost.map(var_t=>var_t.var_tot).reduce((a,b)=>a+b,0);
    var sum_tot = listManu_cost.map(tott=>tott.tot).reduce((a,b)=>a+b,0);

    const table_row = listManu_cost.map((menu_cost)=>{
        return(
            <tr>
                <td className='textright'>{menu_cost.acc_subject}</td>
                <td className='textright'>{menu_cost.synthesis.toLocaleString("ko-KR")}</td>
                <td className='textright'>{menu_cost.syn_creations.toLocaleString("ko-KR")}</td>
                <td className='textright'>{menu_cost.syn_PILOT.toLocaleString("ko-KR")}</td>
                <td className='textright'>{menu_cost.synthesis_common.toLocaleString("ko-KR")}</td>
                <td className='textright'>{menu_cost.syn_fixed_cost.toLocaleString("ko-KR")}</td>
                <td className='textright'>{menu_cost.syn_variable_cost.toLocaleString("ko-KR")}</td>
                <td className='textright'>{menu_cost.syn_fix_var_tot.toLocaleString("ko-KR")}</td>
                <td className='textright'>{menu_cost.np_fix_cost.toLocaleString("ko-KR")}</td>
                <td className='textright'>{menu_cost.np_variable_cost.toLocaleString("ko-KR")}</td>
                <td className='textright'>{menu_cost.np_fix_var_tot.toLocaleString("ko-KR")}</td>
                <td className='textright'>{menu_cost.finish_drug_fix_cost.toLocaleString("ko-KR")}</td>
                <td className='textright'>{menu_cost.finish_drug_var_cost.toLocaleString("ko-KR")}</td>
                <td className='textright'>{menu_cost.finish_fix_var_tot.toLocaleString("ko-KR")}</td>
                <td className='textright'>{menu_cost.common_fix_cost.toLocaleString("ko-KR")}</td>
                <td className='textright'>{menu_cost.common_var_cost.toLocaleString("ko-KR")}</td>
                <td className='textright'>{menu_cost.common_fix_var_tot.toLocaleString("ko-KR")}</td>
                <td className='textright'>{menu_cost.fix_tot.toLocaleString("ko-KR")}</td>
                <td className='textright'>{menu_cost.var_tot.toLocaleString("ko-KR")}</td>
                <td className='textright'>{menu_cost.tot.toLocaleString("ko-KR")}</td>
            </tr>
        )
    })
  return (
    <div className='App'>
        <h3>From : 2022년 01월 01일  To : 2022년 12월 31일</h3>
     <table id='empTable' className='container'>
        <thead className='mainlink_title'>
            <tr className='new_title'>
                <td className='border-0'></td>
                <td className='border-0'></td>
                <td className='border-0'></td>
                <td className='border-0'></td>
                <td className='border-0'>합성API</td>
                <td className='border-0'></td>
                <td className='border-0'></td>
                <td className='border-0'></td>

                <td className='border-0'></td>
                <td className='border-0'>천연물사업</td>
                <td className='border-0'></td>

                <td className='border-0'></td>
                <td className='border-0'>완제의약품</td>
                <td className='border-0'></td>

                <td className='border-0'></td>
                <td className='border-0'>공통</td>
                <td className='border-0'></td>

                <td className='border-0'></td>
                <td className='border-0'>합계(원)</td>
                <td className='border-0'></td>
            </tr>
            <tr>
                <th>계정과목</th>

                <th className='q1'>합성</th>
                <th className='q1'>조품</th>
                <th className='q1'>PILOT</th>
                <th className='q1'>합성 공통</th>
                <th className='q1'>고정비</th>
                <th className='q1'>변동비</th>
                <th className='q1'>계</th>
                 
                 <th className='q2'>고정비</th>   
                 <th className='q2'>변동비</th>
                 <th className='q2'>계</th>

                 <th className='q3'>고정비</th>   
                 <th className='q3'>변동비</th>
                 <th className='q3'>계</th>

                 <th className='q4'>고정비</th>   
                 <th className='q4'>변동비</th>
                 <th className='q4'>계</th>

                 <th className='q5'>고정비</th>   
                 <th className='q5'>변동비</th>
                 <th className='q5'>계</th>
            </tr>
        </thead>
        <tbody className='table_str q1'>
            {table_row}
        </tbody>
        <tr>
            <th>total</th>
            <th >{sum_synthesis.toLocaleString("ko-KR")}</th>
            <th>{sum_syn_creations.toLocaleString("ko-KR")}</th>
            <th>{sum_syn_PILOT.toLocaleString("ko-KR")}</th>
            <th>{sum_synthesis_common.toLocaleString("ko-KR")}</th>
            <th>{sum_syn_fixed_cost.toLocaleString("ko-KR")}</th>
            <th>{sum_syn_variable_cost.toLocaleString("ko-KR")}</th>
            <th>{sum_syn_fix_var_tot.toLocaleString("ko-KR")}</th>
            <th>{sum_np_fix_cost.toLocaleString("ko-KR")}</th>
            <th>{sum_np_variable_cost.toLocaleString("ko-KR")}</th>
            <th>{sum_np_tot.toLocaleString("ko-KR")}</th>
            <th>{sum_finish_drug_fix_cost.toLocaleString("ko-KR")}</th>
            <th>{sum_finish_drug_var_cost.toLocaleString("ko-KR")}</th>
            <th>{sum_finish_fix_var_tot.toLocaleString("ko-KR")}</th>
            <th>{sum_common_fix_cost.toLocaleString("ko-KR")}</th>
            <th>{sum_common_var_cost.toLocaleString("ko-KR")}</th>
            <th>{sum_common_fix_var_tot.toLocaleString("ko-KR")}</th>
            <th>{sum_fix_tot.toLocaleString("ko-KR")}</th>
            <th>{sum_var_tot.toLocaleString("ko-KR")}</th>
            <th>{sum_tot.toLocaleString("ko-KR")}</th>
        </tr>
        </table>   
    </div>
  )
}

export default Manufacturing_costs
