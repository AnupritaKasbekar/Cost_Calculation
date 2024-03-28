import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

function Manufacturing_cost_by_api_reports() {
    const[material_costapi,set_material_costapi]= useState([]);
    useEffect(()=>{
        axios.get("http://localhost:3001/md").then((response)=>{
            set_material_costapi(response.data)
            console.log(response.data);
        })
    },[])
    const table_row = material_costapi.map((product_g)=>{
        return(
            <tr>
                
                <td className=''>{product_g.product_group}</td>
                <td className=''>{product_g.category}</td>

                <td className='textright'>{product_g.manu_cost_fix}</td>
                <td className='textright'>{product_g.manu_cost_var}</td>
                <td className='textright'>{product_g.manu_cost_tot}</td>

                <td className='textright'>{product_g.basic_mat_fix}</td>
                <td className='textright'>{product_g.basic_mat_var}</td>
                <td className='textright'>{product_g.basic_mat_tot}</td>

                <td className='textright'>{product_g.carryovr_fix}</td>
                <td className='textright'>{product_g.carryovr_var}</td>
                <td className='textright'>{product_g.carryovr_tot}</td>

                <td className='textright'>{product_g.tot_manu_fix}</td>
                <td className='textright'>{product_g.tot_manu_var}</td>
                <td className='textright'>{product_g.tot_manu_tot}</td>

                <td className='textright'>{product_g.raw_mat_fix}</td>
                <td className='textright'>{product_g.raw_mat_var}</td>
                <td className='textright'>{product_g.raw_mat_tot}</td>

                <td className='textright'>{product_g.labor_fix}</td>
                <td className='textright'>{product_g.labor_var}</td>
                <td className='textright'>{product_g.labor_tot}</td>

                <td className='textright'>{product_g.manufacture_expense_fix}</td>
                <td className='textright'>{product_g.manufacture_expense_var}</td>
                <td className='textright'>{product_g.manufacture_expense_tot}</td>

            </tr>
        )
    })
  return (
    

    <div className='App'>
      <h1>사업별 제조원가</h1>
      <p>(Manufacturing_cost_by_api_reports)</p>
      <table id="empTable" className='container table-responsive'>
            <thead className='mainlink_title'>
                <tr className='new_title'>
                    <td className='border-0'>구분</td>
                    <td className='border-0'></td>

                    <td className='border-0'></td>
                    <td className='border-0 h6'>총제조비용</td>
                    <td className='border-0'></td>

                    <td className='border-0'></td>
                    <td className='border-0 h6'>기초재공</td>
                    <td className='border-0'></td>

                    <td className='border-0'></td>
                    <td className='border-0 h6'>이월재공</td>
                    <td className='border-0'></td>

                    <td className='border-0'></td>
                    <td className='border-0 h6'>제조원가</td>
                    <td className='border-0'></td>

                    <td className='border-0'></td>
                    <td className='border-0 h6'>원재료비</td>
                    <td className='border-0'></td>

                    <td className='border-0'></td>
                    <td className='border-0 h6'>노무비</td>
                    <td className='border-0'></td>

                    <td className='border-0'></td>
                    <td className='border-0 h6'>제조경비</td>
                    <td className='border-0'></td>

                   

                </tr>
                <tr className='rounded'>
                    <th className=''>Product Group</th>
                    <th className=''>category</th>
                    <th className='q1'>고정비</th>
                    <th className='q1'>변동비</th>
                    <th className='q1'>합계</th>

                    <th className='q2'>고정비</th>
                    <th className='q2'>변동비</th>
                    <th className='q2'>합계</th>

                    <th className='q3'>고정비</th>
                    <th className='q3'>변동비</th>
                    <th className='q3'>합계</th>

                    <th className='q4'>고정비</th>
                    <th className='q4'>변동비</th>
                    <th className='q4'>합계</th>

                    <th className='q5'>고정비</th>
                    <th className='q5'>변동비</th>
                    <th className='q5'>합계</th>

                    <th className='q1'>고정비</th>
                    <th className='q1'>변동비</th>
                    <th className='q1'>합계</th>

                    <th className='q2'>고정비</th>
                    <th className='q2'>변동비</th>
                    <th className='q2'>합계</th>

                   
                  

                    
                </tr>
            </thead>
            <tbody className='table_str q1'>
               {table_row}
            </tbody>
           
      </table>
    </div>
  )
}

export default Manufacturing_cost_by_api_reports
