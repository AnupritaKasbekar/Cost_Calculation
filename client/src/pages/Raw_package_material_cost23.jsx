import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react';
import axios from 'axios';

function Raw_package_material_cost23() {
    const[listRaw_pack_cost, setlistRaw_pack_cost] = useState([])
    useEffect(()=>{
        axios.get("http://localhost:3001/raw_pack/23").then((response)=>{
            setlistRaw_pack_cost(response.data)
        
        })
      },[])
/*Total calculation*/
var raw_mat_cost = listRaw_pack_cost.map(sum_raw_cost=>sum_raw_cost.raw_material_cost).reduce((a,b)=>a+b,0);
var pack_mat_cost = listRaw_pack_cost.map(sum_pack_cost =>sum_pack_cost.package_material_cost).reduce((a,b)=>a+b,0);
var total = listRaw_pack_cost.map(tot =>tot.raw_pack_cost_total).reduce((a,b)=>a+b,0);
var wip_cost = listRaw_pack_cost.map(wip_c =>wip_c.opening_wip_price).reduce((a,b)=>a+b,0);
      const tablerow = listRaw_pack_cost.map((raw_pack)=>{
        return(
            <tr>
                <td className=''>{raw_pack.product_name}</td>
                <td className='textright'>{raw_pack.unit_of_productn_kg.toLocaleString("ko-KR")}</td>
                <td className='textright'>{raw_pack.batch_num_of_inputs.toLocaleString("ko-KR")}</td>
                <td className='textright'>{raw_pack.raw_material_cost.toLocaleString("ko-KR")}</td>
              <td className='textright'>{raw_pack.package_material_cost.toLocaleString("ko-KR")}</td>
              <td className='textright'>{raw_pack.raw_pack_cost_total.toLocaleString("ko-KR")}</td>
              <td className='textright'>{raw_pack.opening_wip_qty.toLocaleString("ko-KR")}</td>
              <td className='textright'>{raw_pack.opening_wip_price.toLocaleString("ko-KR")}</td>
              <td className='textright'>{raw_pack.production_qty.toLocaleString("ko-KR")}</td>
              <td className='textright'>{raw_pack.closing_wip_qty.toLocaleString("ko-KR")}</td>
              
            </tr>
        )
      })
  return (
    <div className='App'>
      <h3>Till 2023년 01월 31일</h3>
      <table id='empTable' className=''>
        <thead className='mainlink_title'>
                <tr className='rounded'>
                    <th className=''>품명(생산단위)</th>
                    <th className=''>생산단위(KG)</th>
                    <th className=''>투입Batch수</th>
                    <th className=''>원료비</th>
                    <th className=''>부재료</th>{/*package material cost*/}
                    <th className=''>원재료비 </th>{/*total*/}
                    <th className=''>기초재공 수량 </th>{/*opening wip qty*/}
                    <th className=''>기초재공 금액</th>{/* opening wip price*/}
                    <th className=''>생산량(기초재공 포함)</th>{/* production qty*/}
                    <th className=''>이월 재공</th>{/* Closing WIP qty*/}
                </tr>
        </thead>
        <tbody className='table_str q1'>
            {tablerow}
        </tbody>
        <th>계</th>
        <th></th>
        <th></th>
        <th>{raw_mat_cost.toLocaleString("ko-KR")}</th>
        <th>{pack_mat_cost.toLocaleString("ko-KR")}</th>
        <th>{total.toLocaleString("ko-KR")}</th>
        <th></th>
        <th>{wip_cost.toLocaleString("ko-KR")}</th>
        <th></th>
        <th></th>
      </table>
    </div>
  )
}

export default Raw_package_material_cost23
