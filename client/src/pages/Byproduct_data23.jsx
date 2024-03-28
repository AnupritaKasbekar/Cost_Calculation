import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import {Link, useNavigate } from 'react-router-dom';

function Byproduct_data23() {
    const[listOfProducts,setlistOfProducts] = useState([])
    const[searchTerm,setSearchTerm] = useState([])
    let navigate = useNavigate()
    useEffect(()=>{
        axios.get("http://localhost:3001/man_hrs_p/prod_data23").then((response)=>{
            setlistOfProducts(response.data)
            console.log(response.data)
        })
    },[])
    //const material_pack_total = listOfProducts.map(material_pack=>material_pack.material_pack_total);
    //const product_name1 =  listOfProducts.map(product=>product.product_name);


    const tablerow = listOfProducts.filter((pro_nm)=>{
        if (searchTerm == "") {
            return pro_nm;
        } else if(pro_nm.product_name.toUpperCase().includes(searchTerm.toUpperCase())){
            return pro_nm;
        }
    }).map((product)=>{
        return(
            <>
             <tr onClick={()=>{
               
               navigate('/Product_summary',{state:{product_id:`${product.product_id}`,product_name:`${product.product_name}`}})
           }}>
            
              <td className=''>{product.product_name}</td>
              <td className='textright'>{(product.batch*product.batch_size).toLocaleString("ko-KR",{ minimumFractionDigits: 0,maximumFractionDigits: 0} )}</td>
               
               <td className='textright'>{product.material_pack_tot.toLocaleString("ko-KR",{ minimumFractionDigits: 0,maximumFractionDigits: 0} )}</td>
            
               <td className='textright'>{product.tot_fix_cost.toLocaleString("ko-KR",{ minimumFractionDigits: 0,maximumFractionDigits: 0} )}</td>
               <td className='textright'>{product.tot_var_cost.toLocaleString("ko-KR",{ minimumFractionDigits: 0,maximumFractionDigits: 0} )}</td>
               <td className='textright'>{(product.tot_fix_cost+product.tot_var_cost).toLocaleString("ko-KR",{ minimumFractionDigits: 0,maximumFractionDigits: 0} )}</td>
              
               
               <td className='textright'>{(product.depreciation_sum).toLocaleString("ko-KR",{ minimumFractionDigits: 0,maximumFractionDigits: 0} )}</td>
               <td className='textright'>{((product.fixed_ratio_sum+product.depreciation_sum+product.indus_park_basic_fixed_ratio_sum+product.elec_cost_fix_ratio_sum+product.benefit_tot+product.payment_tot+product.repair_total+product.tax_total+product.insurance_tot+product.education_fee+product.vechicle_maint_cost+product.book_print_fee+product.enteritainment_fee+product.communitaction_cost+product.rent_tot)-(product.depreciation_sum)).toLocaleString("ko-KR",{ minimumFractionDigits: 0,maximumFractionDigits: 0} )}</td>   
               <td className='textright'>{((product.depreciation_sum)+((product.fixed_ratio_sum+product.depreciation_sum+product.indus_park_basic_fixed_ratio_sum+product.elec_cost_fix_ratio_sum+product.benefit_tot+product.payment_tot+product.repair_total+product.tax_total+product.insurance_tot+product.education_fee+product.vechicle_maint_cost+product.book_print_fee+product.enteritainment_fee+product.communitaction_cost+product.rent_tot)-(product.depreciation_sum))).toLocaleString("ko-KR",{ minimumFractionDigits: 0,maximumFractionDigits: 0}) }</td>   
               <td>{(product.variable_sum+product.repaire_common+product.waste_disposal_var_cost_sum+product.fuel_dir_cost+product.water_utility_tot+product.teavel_expense_tot+product.transport_tot).toLocaleString("ko-KR",{ minimumFractionDigits: 0,maximumFractionDigits: 0} )}</td>
               <td>{((product.variable_sum+product.repaire_common+product.waste_disposal_var_cost_sum+product.fuel_dir_cost+product.water_utility_tot+product.teavel_expense_tot+product.transport_tot)+(product.depreciation_sum)+((product.fixed_ratio_sum+product.depreciation_sum+product.indus_park_basic_fixed_ratio_sum+product.elec_cost_fix_ratio_sum+product.benefit_tot+product.payment_tot+product.repair_total+product.tax_total+product.insurance_tot+product.education_fee+product.vechicle_maint_cost+product.book_print_fee+product.enteritainment_fee+product.communitaction_cost+product.rent_tot)-(product.depreciation_sum))).toLocaleString("ko-KR",{ minimumFractionDigits: 0,maximumFractionDigits: 0})}</td>
           </tr>
           <tr>
            <td className='q1'></td>
            <td className='q2'></td>
            <td className='text-center border_thick'>직접비</td>
            <td className='text-center border_thick'>직접비</td>
            <td className='text-center border_thick'>간접비</td>
            <td className='text-center border_thick'>합계</td>
            <td className='text-center border_thick'>직접비</td>
            <td className='text-center border_thick'>간접비</td>
            <td className='text-center border_thick'>비고</td>
            <td className='text-center border_thick'>비고</td>
            <td className='text-center border_thick'>합계</td>
            
           </tr>
           <tr>
            <td></td>
            <td className='border_thick'>금액</td>
            <td className='textright'>{product.material_pack_tot.toLocaleString("ko-KR",{ minimumFractionDigits: 0,maximumFractionDigits: 0} )}</td>
         
           <td className='textright'>{(product.labor_dir_cost_mn_hr_fix_cost+product.labor_dir_cost_mn_hr_var_cost+product.labor_cost_qc_mn_hr_fix_cost+product.labor_cost_qc_mn_hr_var_cost).toLocaleString("ko-KR",{ minimumFractionDigits: 0,maximumFractionDigits: 0} )}</td>
           <td className='textright'>{((product.tot_fix_cost+product.tot_var_cost)-(product.labor_dir_cost_mn_hr_fix_cost+product.labor_dir_cost_mn_hr_var_cost+product.labor_cost_qc_mn_hr_fix_cost+product.labor_cost_qc_mn_hr_var_cost)).toLocaleString("ko-KR",{ minimumFractionDigits: 0,maximumFractionDigits: 0} )}</td>
           <td className='textright'>{((product.labor_dir_cost_mn_hr_fix_cost+product.labor_dir_cost_mn_hr_var_cost+product.labor_cost_qc_mn_hr_fix_cost+product.labor_cost_qc_mn_hr_var_cost)+((product.tot_fix_cost+product.tot_var_cost)-(product.labor_dir_cost_mn_hr_fix_cost+product.labor_dir_cost_mn_hr_var_cost+product.labor_cost_qc_mn_hr_fix_cost+product.labor_cost_qc_mn_hr_var_cost))).toLocaleString("ko-KR",{ minimumFractionDigits: 0,maximumFractionDigits: 0} )}</td>
           <td className='textright'>{(product.indus_ww_prod_amt+product.elec_fix_var_tot_cost+product.fuel_dir_cost+product.water_utility_tot).toLocaleString("ko-KR",{ minimumFractionDigits: 0,maximumFractionDigits: 0} )}</td>
           <td className='textright'>{(((product.variable_sum+product.repaire_common+product.waste_disposal_var_cost_sum+product.fuel_dir_cost+product.water_utility_tot+product.teavel_expense_tot+product.transport_tot)+(product.depreciation_sum)+((product.fixed_ratio_sum+product.depreciation_sum+product.indus_park_basic_fixed_ratio_sum+product.elec_cost_fix_ratio_sum+product.benefit_tot+product.payment_tot+product.repair_total+product.tax_total+product.insurance_tot+product.education_fee+product.vechicle_maint_cost+product.book_print_fee+product.enteritainment_fee+product.communitaction_cost+product.rent_tot)-(product.depreciation_sum)))-(product.indus_ww_prod_amt+product.elec_fix_var_tot_cost+product.fuel_dir_cost+product.water_utility_tot)).toLocaleString("ko-KR",{ minimumFractionDigits: 0,maximumFractionDigits: 0})}</td>
           <td></td>
           <td></td>
           <td>{((product.indus_ww_prod_amt+product.elec_fix_var_tot_cost+product.fuel_dir_cost+product.water_utility_tot)+(((product.variable_sum+product.repaire_common+product.waste_disposal_var_cost_sum+product.fuel_dir_cost+product.water_utility_tot+product.teavel_expense_tot+product.transport_tot)+(product.depreciation_sum)+((product.fixed_ratio_sum+product.depreciation_sum+product.indus_park_basic_fixed_ratio_sum+product.elec_cost_fix_ratio_sum+product.benefit_tot+product.payment_tot+product.repair_total+product.tax_total+product.insurance_tot+product.education_fee+product.vechicle_maint_cost+product.book_print_fee+product.enteritainment_fee+product.communitaction_cost+product.rent_tot)-(product.depreciation_sum)))-(product.indus_ww_prod_amt+product.elec_fix_var_tot_cost+product.fuel_dir_cost+product.water_utility_tot))).toLocaleString("ko-KR",{ minimumFractionDigits: 0,maximumFractionDigits: 0})}</td>
           </tr>
           <tr>
           <td></td>
            <td className='border_thick'>@/kg</td>
            <td className='textright'>{(product.material_pack_tot/(product.batch*product.batch_size)).toLocaleString("ko-KR",{ minimumFractionDigits: 0,maximumFractionDigits: 0} )}</td>
        
            <td className='textright'>{((product.labor_dir_cost_mn_hr_fix_cost+product.labor_dir_cost_mn_hr_var_cost+product.labor_cost_qc_mn_hr_fix_cost+product.labor_cost_qc_mn_hr_var_cost)/(product.batch*product.batch_size)).toLocaleString("ko-KR",{ minimumFractionDigits: 0,maximumFractionDigits: 0} )}</td>
            <td className='textright'>{(((product.tot_fix_cost+product.tot_var_cost)-(product.labor_dir_cost_mn_hr_fix_cost+product.labor_dir_cost_mn_hr_var_cost+product.labor_cost_qc_mn_hr_fix_cost+product.labor_cost_qc_mn_hr_var_cost))/(product.batch*product.batch_size)).toLocaleString("ko-KR",{ minimumFractionDigits: 0,maximumFractionDigits: 0} )}</td>
            <td className='textright'>{(((product.labor_dir_cost_mn_hr_fix_cost+product.labor_dir_cost_mn_hr_var_cost+product.labor_cost_qc_mn_hr_fix_cost+product.labor_cost_qc_mn_hr_var_cost)/(product.batch*product.batch_size))+(((product.tot_fix_cost+product.tot_var_cost)-(product.labor_dir_cost_mn_hr_fix_cost+product.labor_dir_cost_mn_hr_var_cost+product.labor_cost_qc_mn_hr_fix_cost+product.labor_cost_qc_mn_hr_var_cost))/(product.batch*product.batch_size))).toLocaleString("ko-KR",{ minimumFractionDigits: 0,maximumFractionDigits: 0} )}</td>
            <td className='textright'>{((product.indus_ww_prod_amt+product.elec_fix_var_tot_cost+product.fuel_dir_cost+product.water_utility_tot)/(product.batch*product.batch_size)).toLocaleString("ko-KR",{ minimumFractionDigits: 0,maximumFractionDigits: 0} )}</td>
            <td className='textright'>{((((product.variable_sum+product.repaire_common+product.waste_disposal_var_cost_sum+product.fuel_dir_cost+product.water_utility_tot+product.teavel_expense_tot+product.transport_tot)+(product.depreciation_sum)+((product.fixed_ratio_sum+product.depreciation_sum+product.indus_park_basic_fixed_ratio_sum+product.elec_cost_fix_ratio_sum+product.benefit_tot+product.payment_tot+product.repair_total+product.tax_total+product.insurance_tot+product.education_fee+product.vechicle_maint_cost+product.book_print_fee+product.enteritainment_fee+product.communitaction_cost+product.rent_tot)-(product.depreciation_sum)))-(product.indus_ww_prod_amt+product.elec_fix_var_tot_cost+product.fuel_dir_cost+product.water_utility_tot))/(product.batch*product.batch_size)).toLocaleString("ko-KR",{ minimumFractionDigits: 0,maximumFractionDigits: 0})}</td>
            <td></td>
            <td></td>
            <td>{(((product.indus_ww_prod_amt+product.elec_fix_var_tot_cost+product.fuel_dir_cost+product.water_utility_tot)/(product.batch*product.batch_size))+((((product.variable_sum+product.repaire_common+product.waste_disposal_var_cost_sum+product.fuel_dir_cost+product.water_utility_tot+product.teavel_expense_tot+product.transport_tot)+(product.depreciation_sum)+((product.fixed_ratio_sum+product.depreciation_sum+product.indus_park_basic_fixed_ratio_sum+product.elec_cost_fix_ratio_sum+product.benefit_tot+product.payment_tot+product.repair_total+product.tax_total+product.insurance_tot+product.education_fee+product.vechicle_maint_cost+product.book_print_fee+product.enteritainment_fee+product.communitaction_cost+product.rent_tot)-(product.depreciation_sum)))-(product.indus_ww_prod_amt+product.elec_fix_var_tot_cost+product.fuel_dir_cost+product.water_utility_tot))/(product.batch*product.batch_size))).toLocaleString("ko-KR",{ minimumFractionDigits: 0,maximumFractionDigits: 0})}</td>
           </tr>
            </>
           
           
        )
    })
  return (
    <div className='App'>
      <h1></h1>
      <input type="text" placeholder='Search by product name...' onChange={event=>{
         setSearchTerm(event.target.value)
         
     }}/>
     <br></br>
      <table id="empTable"  className=' table table-bordered w-50'>
          <thead className=''>
            <tr className='border-0'>
                <td className='border-0'></td> {/*product name*/}

                <td className='border-0'></td> {/*batch*/}

                <td className='border-0'>원재료비</td>
  

                <td className='border-0'></td>
                <td className='border-0'>노무비</td>
                <td className='border-0'></td>
                
               
                <td className='border-0'></td>
                <td className='border-0'>기타제조경비</td>
                <td className='border-0'></td>
                <td className='border-0'></td>
                <td className='border-0'></td>
            </tr>
            <tr className='rounded'>
               
                <th>Product name</th>
               
                <th>생산(투입)량</th>{/*batch*batch_size*/}

                <th className='q1'>원재료비 </th>{/*Material pack total*/}    
               

                <th className='q2'>고정비</th>{/*labor_dir_cost_mn_hr_fix_cost*/}
                <th className='q2'>변동비</th>{/*labor_dir_cost_mn_hr_var_cost*/}
                <th className='q2'>합계</th>
               
              { /* <th className='q2'>고정비 직접비 금액</th>
                <th className='q2'>고정비 직접비 @/kg</th>
                <th className='q2'>변동비 직접비 금액</th>
    <th className='q2'>변동비 직접비 @/kg</th>*/}
                
                <th className='q3'>감가상각비</th>{/*depreciation_sum*/}
               <th className='q3'>기타</th>
               <th className='q3'>소계</th>
              <th className='q3'>변동비</th>
              <th className='q3'>합계</th>
            </tr>
            </thead>
            <tbody>
                {tablerow}
            </tbody>
            </table>
    </div>
  )
}

export default Byproduct_data23
