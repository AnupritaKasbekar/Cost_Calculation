import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from "react-router-dom";

function SummeryReport() {
const[list_man_hr_product, setlist_man_hr_product] = useState([])
//const[raw_material_inout_table,setraw_material_inout_table] = useState([])
const[depatment_expnse, setdepatment_expnse]=useState([])
const[raw_mat,setRaw_expense] = useState([])
const[raw_mat_option,setRaw_expense_inOption] = useState([])
const[sum_purchase_amt,setsum_purchase_amt] = useState([]);
const[all_importmaterialcosts,setimportmaterialcosts] = useState([])
const[out_account_data, setout_acc_data] = useState([]);
const[final_stk,set_final_stk] = useState([]);
const[department_expense_sal_var,setdepartment_expense_sal_var]= useState([]);
const[raw_mat_sum_cal, setraw_mat_sum_cal] = useState([]);
/*importmaterialcosts*/
useEffect(()=>{
    axios.get("http://localhost:3001/import/sum_raw_mat22").then((response)=>{
        setraw_mat_sum_cal(response.data)
    })
},[])

/*departmental expense*/
useEffect(()=>{
    axios.get("http://localhost:3001/department_expense/sum_sal_var22").then((response)=>{
        setdepartment_expense_sal_var(response.data)
    })
},[])

/*importmaterialcosts*/
useEffect(()=>{
    axios.get("http://localhost:3001/import/out_acc22").then((response)=>{
        setout_acc_data(response.data)
    })
},[])

/*importmaterialcosts*/
useEffect(()=>{
    axios.get("http://localhost:3001/import/final_stk22").then((response)=>{
        set_final_stk(response.data)
    })
},[])
/*useEffect(()=>{
    axios.get("http://localhost:3001/import/s").then((response)=>{
        setRaw_expense(response.body)
        console.log(response.body)
    })
},[]);*/

/*importmaterialcosts*/
useEffect(()=>{
    axios.get("http://localhost:3001/import/am22").then((response)=>{
        setsum_purchase_amt(response.data)
        
    })
},[]);

/*Man_hrs_and_product_main_table*/
useEffect(()=>{
    axios.get("http://localhost:3001/man_hrs_p/summery22").then((response)=>{
        setlist_man_hr_product(response.data)
        
    })
},[]);


/*departmental expense*/
useEffect(()=>{
    axios.get("http://localhost:3001/department_expense/22").then((response)=>{
        setdepatment_expnse(response.data)
       
    })
},[]);

/*importmaterialcosts*/
useEffect(()=>{
    axios.get("http://localhost:3001/import/s22").then((response)=>{
        setRaw_expense(response.data)
        
    })
},[]);

/*importmaterialcosts*/
useEffect(()=>{
    axios.get("http://localhost:3001/import/o22").then((response)=>{
        setRaw_expense_inOption(response.data)
        
    })
},[]);

/*Man_hrs_and_product_main_table*/
useEffect(()=>{
    axios.get("http://localhost:3001/man_hrs_p/all22").then((response)=>{
        setimportmaterialcosts(response.data)
        
    })
},[]);


const sum_basic_stock = raw_mat_sum_cal.map(b_stk=>b_stk.basic_stock_sum).reduce((a,b)=>a+b,0);

const sum_in_optn = raw_mat_sum_cal.map(b_in=>b_in.in_option_sum).reduce((a,b)=>a+b,0);
const sum_in_purch = raw_mat_sum_cal.map(in_p=>in_p.in_purchase_sum).reduce((a,b)=>a+b,0);
const sum_out_cst = raw_mat_sum_cal.map(in_p=>in_p.out_cst_sum).reduce((a,b)=>a+b,0);
const sumout_account_sum = raw_mat_sum_cal.map(in_p=>in_p.out_account_sum).reduce((a,b)=>a+b,0);
const disposal_sum = raw_mat_sum_cal.map(in_p=>in_p.disposal_sum).reduce((a,b)=>a+b,0);

const raw_mat_ss = sum_basic_stock+sum_in_optn+sum_in_purch-sum_out_cst-sumout_account_sum-disposal_sum;

const sum_carr_ovr = all_importmaterialcosts.map(b_carr=>b_carr.carryovr_mat_tot).reduce((a,b)=>a+b,0);
const sum_sal_var = department_expense_sal_var.map(b_sal_var=>b_sal_var.sum_sal_var).reduce((a,b)=>a+b,0);
//let sum_basic_sal = depatment_expnse.map(b_sal=>b_sal.basic_sal).reduce((a,b)=>a+b,0);
//let sum_var_expense = depatment_expnse.map(b_sal=>b_sal.var_expense).reduce((a,b)=>a+b,0);
//setRaw_at

let sum_basic_stoc = final_stk.map(b_stk =>b_stk.sum_basic_stk).reduce((a,b)=>a+b,0);
sum_basic_stoc = sum_basic_stoc/2000;


let sum_in_purchas = final_stk.map(p_stk =>p_stk.sum_in_purchase).reduce((a,b)=>a+b,0);
sum_in_purchas = sum_in_purchas / 2000;



let sum_out_cost_ra = final_stk.map(f_stk =>f_stk.sum_out_cost_raw).reduce((a,b)=>a+b,0);
sum_out_cost_ra = sum_out_cost_ra/2000;


let sum_out_accoun = final_stk.map(b_stk =>b_stk.sum_out_account).reduce((a,b)=>a+b,0);
sum_out_accoun = sum_out_accoun/2000

let sumdisposal_sum = final_stk.map(b_stk =>b_stk.disposal_sum).reduce((a,b)=>a+b,0);
sumdisposal_sum = sumdisposal_sum/2000
 

let c_sum = sum_basic_stoc + sum_in_purchas - sum_out_cost_ra -sum_out_accoun-sumdisposal_sum;
c_sum = c_sum*2000

const out_acc = out_account_data.map(out_aacount=>out_aacount.out_account)
const sum_purchase_am = sum_purchase_amt.map(sum_purchase_amt=>sum_purchase_amt.sum_purchaseamt).reduce((a,b)=>a+b,0)


const sum_inpur = raw_mat.map(sum_pruchase=>sum_pruchase.sum_in_purchase).reduce((a,b)=>a+b,0)
const sum_unoption = raw_mat.map(sum_pruchase=>sum_pruchase.sum_in_option).reduce((a,b)=>a+b,0)
const sum_outacc = raw_mat.map(sum_pruchase=>sum_pruchase.sum_out_acc).reduce((a,b)=>a+b,0)

const raw_mat_sum = sum_inpur+sum_unoption-sum_outacc;


const raw_mat_option_sum = raw_mat_option.map(sum_option=>sum_option.sum_in_option).reduce((a,b)=>a+b,0)
const rnd_sum_sum = list_man_hr_product.map(sum_rnd=>sum_rnd.rnd_sum).reduce((a,b)=>a+b,0);
const depreciation_sum_sum = list_man_hr_product.map(depreciation_sum_s=>depreciation_sum_s.depreciation_sum).reduce((a,b)=>a+b,0);
const total_fix_var_waste_disposal_cost_sum = list_man_hr_product.map(waste_dis=>waste_dis.total_fix_var_waste_disposal_cost).reduce((a,b)=>a+b,0);
const elec_fix_var_tot_cost_sum = list_man_hr_product.map(elect=>elect.elec_fix_var_tot_cost).reduce((a,b)=>a+b,0);
const benefit_tot_sum = list_man_hr_product.map(bef_t=>bef_t.benefit_tot).reduce((a,b)=>a+b,0);
const payment_tot_sum = list_man_hr_product.map(pay_t=>pay_t.payment_tot).reduce((a,b)=>a+b,0);
const repair_total_sum = list_man_hr_product.map(rep_t=>rep_t.repair_total).reduce((a,b)=>a+b,0);
const fuel_dir_cost_sum = list_man_hr_product.map(fuel_t=>fuel_t.fuel_dir_cost).reduce((a,b)=>a+b,0);
const consumable_sum_sum = list_man_hr_product.map(consu_t=>consu_t.consumable_sum).reduce((a,b)=>a+b,0);
const tax_total_sum = list_man_hr_product.map(tax_t=>tax_t.tax_total).reduce((a,b)=>a+b,0);
const insurance_tot_sum = list_man_hr_product.map(insu_t=>insu_t.insurance_tot).reduce((a,b)=>a+b,0);
const water_utility_tot_sum = list_man_hr_product.map(waste_u_t=>waste_u_t.water_utility_tot).reduce((a,b)=>a+b,0);
const education_fee_sum = list_man_hr_product.map(edu_t=>edu_t.education_fee).reduce((a,b)=>a+b,0);
const vechicle_maint_cost_sum = list_man_hr_product.map(vech_t=>vech_t.vechicle_maint_cost).reduce((a,b)=>a+b,0);
const book_print_fee_sum =  list_man_hr_product.map(bok_t=>bok_t.book_print_fee).reduce((a,b)=>a+b,0);
const teavel_expense_tot_sum =  list_man_hr_product.map(travel_t=>travel_t.teavel_expense_tot).reduce((a,b)=>a+b,0);
const enteritainment_fee_sum =  list_man_hr_product.map(enter_t=>enter_t.enteritainment_fee).reduce((a,b)=>a+b,0);
const communitaction_cost_sum =  list_man_hr_product.map(enter_t=>enter_t.communitaction_cost).reduce((a,b)=>a+b,0);
const rent_tot_sum =  list_man_hr_product.map(rent_t=>rent_t.rent_tot).reduce((a,b)=>a+b,0);
const transport_tot_sum =  list_man_hr_product.map(trans_t=>trans_t.transport_tot).reduce((a,b)=>a+b,0);

const man_pro_tot= rnd_sum_sum+depreciation_sum_sum+total_fix_var_waste_disposal_cost_sum+elec_fix_var_tot_cost_sum+benefit_tot_sum+payment_tot_sum+repair_total_sum+fuel_dir_cost_sum+consumable_sum_sum+tax_total_sum+insurance_tot_sum+water_utility_tot_sum+education_fee_sum+vechicle_maint_cost_sum+book_print_fee_sum+teavel_expense_tot_sum+enteritainment_fee_sum+communitaction_cost_sum+rent_tot_sum+transport_tot_sum;//

//const basic_sal_sum = depatment_expnse.map(b_sal=>b_sal.basic_sal).reduce((a,b)=>a+b,0);
//const var_ex_over_tot_sum = depatment_expnse.map(var_sum=>var_sum.var_ex_over_tot).reduce((a,b)=>a+b,0);
//const tot = basic_sal_sum+var_ex_over_tot_sum;
const tot = sum_sal_var ; //3571676267;
const rp_expense = depatment_expnse.map(rp_sal=>rp_sal.RP).reduce((a,b)=>a+b,0);
const sal_rp_tot = tot+rp_expense;//
//const tot_manufacturing_cost = sal_rp_tot+man_pro_tot;
const tot_onbe = raw_mat_sum+raw_mat_option_sum+6165914297-raw_mat_ss-134179313;//   //6165914297+raw_mat_sum+raw_mat_option_sum+(-1797873967);
const tot_two = 80143697+sum_purchase_am-out_acc-c_sum;//
const tot_thr = tot+rp_expense;
const tot_all = tot_onbe+tot_two+sal_rp_tot+man_pro_tot;//
 const wip_stk =2801555955+tot_all;//
 const last_row= sum_carr_ovr; 
const l_r = wip_stk-sum_carr_ovr;  //


  return (
    <div className='App'>
        
      <h3>제조원가명세서</h3>

      <table id="empTable" className=''>
      <thead className=''>
            <tr className=''>
              <th className='text-center q3'>과목</th> 
              <th className='text-center q3'>Description
</th> 
               
              <th className='text-center q3'>금액</th>

              <th className='text-center q3'>금액</th>
             {/* <th className='text-center q1 w-20'>Extra</th>*/}
            </tr>
           
            
          </thead>
          <tbody>
          <tr>
            <td className='text-primary'><b><ul>I.원재료비</ul></b></td>
            <td >I. Raw Material cost</td>
            <td className='q2'></td>
            <td className='textright'>{tot_onbe.toLocaleString("ko-KR",{ minimumFractionDigits: 0,maximumFractionDigits: 0} )}</td>
           {/* <td className='textright'>{(32032157879-tot_onbe).toLocaleString("ko-KR",{ minimumFractionDigits: 0,maximumFractionDigits: 0} )}</td>*/}
          </tr>
          <tr>
            <td> 기초재고액</td>
            <td>    Beginning inventory </td>
            <td className='textright'>6,165,914,297</td>
            <td className='textright'></td>
           {/* <td className='textright'>0</td>*/}
          </tr>
          <tr>
            <td>당기원재료매입액 </td>{/* <span className='text-success'></span>Raw_material/material_cost Stock In*/}
            <td>    Purchase </td>
            <td className='textright'> {raw_mat_sum.toLocaleString("ko-KR",{ minimumFractionDigits: 0,maximumFractionDigits: 0} )} </td>
            <td className='textright'></td>
           {/* <td className='textright'>{(23225616171-raw_mat_sum).toLocaleString("ko-KR",{ minimumFractionDigits: 0,maximumFractionDigits: 0} )}</td>*/}
          </tr>
          <tr>
            <td>타계정에서 대체액</td>{/* <span className='text-success'></span> Raw_material/material_cost Option*/}
            <td>    Replace from another accoun</td>
            <td className='textright'> {sum_outacc.toLocaleString("ko-KR",{ minimumFractionDigits: 0,maximumFractionDigits: 0} )}</td>
            <td className='textright'></td>
          {/*  <td className='textright'>{(842753449-raw_mat_option_sum).toLocaleString("ko-KR",{ minimumFractionDigits: 0,maximumFractionDigits: 0} )}</td>*/}
          </tr>
          <tr>
            <td>타계정으로 대체액</td>{/* <span className='text-success'>[(Option)Raw_material/materail_cost]</span>*/}
            <td >    Replace with another accoun</td>
            <td className='textright'>134,179,313</td>
            <td className='textright'></td>
          </tr>
          <tr>
            <td>기말원재료재고액 {/*<span className='text-success'>[(Stock Balance)]</span>*/}</td>
            <td>    Ending inventory </td>
            <td className='textright'>{raw_mat_ss.toLocaleString("ko-KR",{ minimumFractionDigits: 0,maximumFractionDigits: 0} )}</td>
            <td className='textright'></td>
           {/* <td className='textright'>0</td>*/}
          </tr>
          <tr>
            <td className='text-primary'><b><ul>Ⅱ.포장재료비</ul>{/*<span className='text-success'>(Subsidiary material cost)</span>*/}</b></td>
            <td>II. Packing Material cost</td>
            <td className='q2'></td>
            <td className='textright'>{tot_two.toLocaleString("ko-KR",{ minimumFractionDigits: 0,maximumFractionDigits: 0} )}</td>
        {/*    <td className='textright'>{(863857596-tot_two).toLocaleString("ko-KR",{ minimumFractionDigits: 0,maximumFractionDigits: 0} )}</td>*/}
          </tr>
          <tr>
            <td>기초재고액</td>
            <td>    Beginning inventory </td>
            <td className='textright'>80,143,697</td>
            <td className='textright'></td>
         {/*   <td className='textright'>0</td>*/}
          </tr>
          <tr>
            <td>당기매입액{/*Pull-to-face packaging material purchase amount*/}</td>
            <td>    Purchase </td>
            <td className='textright'>{sum_purchase_am.toLocaleString("ko-KR",{ minimumFractionDigits: 0,maximumFractionDigits: 0} )}</td>
            <td className='textright'></td>
           {/* <td className='textright'>{(652658585-sum_purchase_am).toLocaleString("ko-KR",{ minimumFractionDigits: 0,maximumFractionDigits: 0} )}</td>*/}
          </tr>
          <tr>
            <td>타계정으로 대체액{/*Substitution to another account*/}</td>
            <td>    Transfer from other accounts</td>
            <td className='textright'>{out_acc.toLocaleString("ko-KR",{ minimumFractionDigits: 0,maximumFractionDigits: 0} )} </td>
            <td className='textright'></td>
           {/* <td className='textright'>{(1502830-out_acc).toLocaleString("ko-KR",{ minimumFractionDigits: 0,maximumFractionDigits: 0} )}</td>*/}
          </tr>
          <tr>
            <td> 기말재고액{/*End-of-life packaging material inventory*/}</td>
            <td>       Ending inventory </td>
            <td className='textright'> {c_sum.toLocaleString("ko-KR",{ minimumFractionDigits: 0,maximumFractionDigits: 0} )} </td>
            <td className='textright'></td>
         {/*   <td className='textright'>10</td>*/}
          </tr>
        <tr>
            <td className='text-primary '><b><ul>Ⅲ.노무비</ul></b></td>
            <td> III. Labor cost</td>
                <td className='q2'></td>
                <td className='textright'>{tot_thr.toLocaleString("ko-KR",{ minimumFractionDigits: 0,maximumFractionDigits: 0} )}</td>
              {/*  <td className='textright'>{(5509284118-tot_thr).toLocaleString("ko-KR",{ minimumFractionDigits: 0,maximumFractionDigits: 0} )}</td>*/}
        </tr>
        <tr>
            <td>     임금과 급료{/*<span className='text-success'>Salary</span>*/}</td>
            <td>Salary and Wages</td>
            <td className='textright'>{tot.toLocaleString("ko-KR",{ minimumFractionDigits: 0,maximumFractionDigits: 0} )}
            </td>
            <td></td>
           {/* <td className='textright'>{(4914500997-tot).toLocaleString("ko-KR",{ minimumFractionDigits: 0,maximumFractionDigits: 0} )}</td>*/}
        </tr>
        <tr>
            <td>성과금{/*<span className='text-success'>Achievements      Merit pay</span>*/}</td>
            <td>Merit pay</td>
            <td className='textright'>0</td>
            <td className='textright'></td>
         {/*   <td className='textright'>0</td>*/}
        </tr>
        <tr>
            <td>제수당{/*<span className='text-success'>allowance</span>*/}</td>
            <td>Allowance</td>
            <td className='textright'>0</td>
            <td></td>
        {/*    <td className='textright'>0</td>*/}
        </tr>
        <tr>
            <td>잡급{/*<span className='text-success'>Miscellaneous  /Sundries</span>*/}</td>
            <td>     Sundries</td>
            <td className='textright'>0</td>
            <td></td>
       {/*     <td className='textright'>0</td>*/}
        </tr> 
        <tr>
            <td>퇴직급여{/*<span className='text-success'>RP</span>*/}</td>
            <td>     Severance pay</td>
            <td className='textright'>{rp_expense.toLocaleString("ko-KR",{ minimumFractionDigits: 0,maximumFractionDigits: 0} )}</td>
            <td></td>
       {/*     <td className='textright'>{(594783121-rp_expense).toLocaleString("ko-KR",{ minimumFractionDigits: 0,maximumFractionDigits: 0} )}</td>*/}
        </tr>
        <tr className='rounded'>
            <td className='text-primary '><b><ul>Ⅳ.경비</ul></b></td>
            <td>Ⅳ. Cost</td>
            <td className='q2'></td>
           <td className='textright'>{man_pro_tot.toLocaleString("ko-KR",{ minimumFractionDigits: 0,maximumFractionDigits: 0})}</td> 
           
        </tr>
        
        <tr>
            <td>연구개발비{/*} <span className='text-success'>(R&D expenses)</span>*/}</td>
            <td>R&D</td>
            <td className='textright'>{rnd_sum_sum.toLocaleString("ko-KR",{ minimumFractionDigits: 0,maximumFractionDigits: 0})}</td>
            <td></td>
        {/*    <td className='textright'>{(3207408441-rnd_sum_sum).toLocaleString("ko-KR",{ minimumFractionDigits: 0,maximumFractionDigits: 0})}</td>*/}
        </tr>
        <tr>
            <td>감가상각비 {/*<span className='text-success'>(Depreciation)</span>*/}</td>
            <td> Depreciation</td>
            <td className='textright'>{depreciation_sum_sum.toLocaleString("ko-KR",{ minimumFractionDigits: 0,maximumFractionDigits: 0})}</td>
            <td></td>
       {/*     <td className='textright'>{(3562086744-depreciation_sum_sum).toLocaleString("ko-KR",{ minimumFractionDigits: 0,maximumFractionDigits: 0})}</td>    */}
        </tr>
        <tr>
            <td>폐기물처리비 {/*<span className='text-success'>(Waste disposal fee)</span>*/}</td>
            <td>Waste disposal</td>
            <td className='textright'>{total_fix_var_waste_disposal_cost_sum.toLocaleString("ko-KR",{ minimumFractionDigits: 0,maximumFractionDigits: 0})}</td>
            <td></td>
         {/*   <td className='textright'>{(1385226143-total_fix_var_waste_disposal_cost_sum).toLocaleString("ko-KR",{ minimumFractionDigits: 0,maximumFractionDigits: 0})}</td>*/}
        </tr>    
        <tr>
            <td>전력비 {/*<span className='text-success'>(Electricity cost)</span>*/}</td>
            <td>      Electricity</td>
            <td className='textright'>{elec_fix_var_tot_cost_sum.toLocaleString("ko-KR",{ minimumFractionDigits: 0,maximumFractionDigits: 0})}</td>
            <td></td>
        {/*    <td  className='textright'>{(1155812583-elec_fix_var_tot_cost_sum).toLocaleString("ko-KR",{ minimumFractionDigits: 0,maximumFractionDigits: 0})}</td>*/}
        </tr>    
        <tr>
            <td>복리후생비{/*} <span className='text-success'>(Benefits)</span>*/}</td>
            <td>      Other employee benefits</td>
            <td className='textright'>{benefit_tot_sum.toLocaleString("ko-KR",{ minimumFractionDigits: 0,maximumFractionDigits: 0})}</td>
            <td></td>
        {/*    <td className='textright'>{(920823622-benefit_tot_sum).toLocaleString("ko-KR",{ minimumFractionDigits: 0,maximumFractionDigits: 0})}</td>*/}
        </tr>       
        <tr>
            <td>지급수수료{/*} <span className='text-success'>(Payment Fees)</span>*/}</td>
            <td>Fees</td>
            <td className='textright'>{payment_tot_sum.toLocaleString("ko-KR",{ minimumFractionDigits: 0,maximumFractionDigits: 0} )}</td>
            <td></td>
        {/*    <td className='textright'>{(732812268-payment_tot_sum).toLocaleString("ko-KR",{ minimumFractionDigits: 0,maximumFractionDigits: 0} )}</td>*/}
        </tr>
        <tr>
            <td>수선비 {/*<span className='text-success'>(Repair fee)</span>*/}</td>
            <td>Repairs and maintenance</td>
            <td className='textright'>{repair_total_sum.toLocaleString("ko-KR",{ minimumFractionDigits: 0,maximumFractionDigits: 0} )}</td>
            <td></td>
        {/*    <td className='textright'>{(504740327-repair_total_sum).toLocaleString("ko-KR",{ minimumFractionDigits: 0,maximumFractionDigits: 0} )}</td>*/}
        </tr>   
        <tr>
            <td>연료비{/*} <span className='text-success'>(Annual fee)</span>*/}</td>
            <td>Fuel</td>
            <td className='textright'>{fuel_dir_cost_sum.toLocaleString("ko-KR",{ minimumFractionDigits: 0,maximumFractionDigits: 0} )}</td>
            <td></td>
        {/*    <td className='textright'>{(645859475-fuel_dir_cost_sum).toLocaleString("ko-KR",{ minimumFractionDigits: 0,maximumFractionDigits: 0} )}</td>*/}
        </tr>  
        <tr>
            <td>소모품비 {/*<span className='text-success'>(Consumables cost)</span>*/} </td>
            <td> Operating supplies & equipment</td>
            <td className='textright'>{consumable_sum_sum.toLocaleString("ko-KR",{ minimumFractionDigits: 0,maximumFractionDigits: 0} )}</td>
            <td></td>
        {/*    <td className='textright'>{(244578955-consumable_sum_sum).toLocaleString("ko-KR",{ minimumFractionDigits: 0,maximumFractionDigits: 0} )}</td>*/}
        </tr>  
        <tr>
            <td>세금과 공과 {/*<span className='text-success'>(Taxes and utilities)</span>*/}</td>
            <td> Taxes and dues</td>
            <td className='textright'>{tax_total_sum.toLocaleString("ko-KR",{ minimumFractionDigits: 0,maximumFractionDigits: 0} )}</td>
            <td></td>
        {/*    <td className='textright'>{(108783080-tax_total_sum).toLocaleString("ko-KR",{ minimumFractionDigits: 0,maximumFractionDigits: 0} )}</td>*/}
        </tr>  
        <tr>
            <td>보험료 {/*<span className='text-success'>(Insurance premium)</span>*/}</td>
            <td>Insurance</td>
            <td className='textright'>{insurance_tot_sum.toLocaleString("ko-KR",{ minimumFractionDigits: 0,maximumFractionDigits: 0} )}</td>
            <td></td>
        {/*    <td className='textright'>{(76192937-insurance_tot_sum).toLocaleString("ko-KR",{ minimumFractionDigits: 0,maximumFractionDigits: 0} )}</td>*/}
        </tr> 
        <tr>
            <td>수도광열비 {/*} <span className='text-success'>(Water and utilities )</span>*/}</td>
            <td>Water and gas</td>
            <td className='textright'>{water_utility_tot_sum.toLocaleString("ko-KR",{ minimumFractionDigits: 0,maximumFractionDigits: 0} )}</td>
            <td></td>
         {/*   <td className='textright'>{(85733257-water_utility_tot_sum).toLocaleString("ko-KR",{ minimumFractionDigits: 0,maximumFractionDigits: 0} )}</td>*/}
        </tr> 
        <tr>
            <td>교육훈련비 {/*<span className='text-success'>(Education and Training Expenses )</span>*/}</td>
            <td> Education and training</td>
            <td className='textright'>{education_fee_sum.toLocaleString("ko-KR",{ minimumFractionDigits: 0,maximumFractionDigits: 0} )}</td>
            <td></td>
        {/*    <td className='textright'>{(9897601-education_fee_sum).toLocaleString("ko-KR",{ minimumFractionDigits: 0,maximumFractionDigits: 0} )}</td>*/}
        </tr>  
        <tr>
            <td>차량유지비{/*} <span className='text-success'>(Vehicle maintenance fee)</span>*/}</td>
            <td>Maintenance of cars</td>
            <td className='textright'>{vechicle_maint_cost_sum.toLocaleString("ko-KR",{ minimumFractionDigits: 0,maximumFractionDigits: 0} )}</td>
            <td></td>
        {/*    <td className='textright'>{(38419342-vechicle_maint_cost_sum).toLocaleString("ko-KR",{ minimumFractionDigits: 0,maximumFractionDigits: 0} )}</td>*/}
          
        </tr> 
        <tr>
            <td>도서인쇄비 {/*<span className='text-success'>(Book printing fee)</span>*/}</td>
            <td> Book and print</td>
            <td className='textright'>{book_print_fee_sum.toLocaleString("ko-KR",{ minimumFractionDigits: 0,maximumFractionDigits: 0} )}</td>
            <td></td>
         {/*   <td className='textright'>{(11931307-book_print_fee_sum).toLocaleString("ko-KR",{ minimumFractionDigits: 0,maximumFractionDigits: 0} )}</td>*/}
           
        </tr>  
        <tr>
            <td>여비교통비 {/*<span className='text-success'>( Travel expenses)</span>*/}</td>
            <td>      Travel expenses
</td>
            <td className='textright'>{teavel_expense_tot_sum.toLocaleString("ko-KR",{ minimumFractionDigits: 0,maximumFractionDigits: 0} )}</td>
            <td></td>
        {/*    <td className='textright'>{(23216328-teavel_expense_tot_sum).toLocaleString("ko-KR",{ minimumFractionDigits: 0,maximumFractionDigits: 0} )}</td>*/}
          
        </tr>  
        <tr>
            <td>접대비 {/*<span className='text-success'>(Hospitality)</span>*/}</td>
            <td>Reception expenses</td>
            <td className='textright'>{enteritainment_fee_sum.toLocaleString("ko-KR",{ minimumFractionDigits: 0,maximumFractionDigits: 0} )}</td>
            <td></td>
        {/*    <td className='textright'>{(31451150-enteritainment_fee_sum).toLocaleString("ko-KR",{ minimumFractionDigits: 0,maximumFractionDigits: 0} )}</td>*/}
           
        </tr>
        <tr>
            <td>통신비 {/*<span className='text-success'>(Communication Costs)</span>*/}</td>
            <td>Communications</td>
            <td className='textright'>{communitaction_cost_sum.toLocaleString("ko-KR",{ minimumFractionDigits: 0,maximumFractionDigits: 0} )}</td>
            <td></td>
        {/*    <td className='textright'>{(12382776-communitaction_cost_sum).toLocaleString("ko-KR",{ minimumFractionDigits: 0,maximumFractionDigits: 0} )}</td>*/}
          
        </tr>  
        <tr>
            <td>지급임차료{/*} <span className='text-success'>(Rent paid)</span>*/}</td>
            <td>Rent</td>
            <td className='textright'>{rent_tot_sum.toLocaleString("ko-KR",{ minimumFractionDigits: 0,maximumFractionDigits: 0} )}</td>
            <td></td>
        {/*    <td className='textright'>{(10800000-rent_tot_sum).toLocaleString("ko-KR",{ minimumFractionDigits: 0,maximumFractionDigits: 0} )}</td>*/}
           
        </tr>  
        <tr>
            <td>운반비 {/*<span className='text-success'>(Transport cost)</span>*/}</td>
            <td>Transport</td>
            <td className='textright'>{transport_tot_sum.toLocaleString("ko-KR",{ minimumFractionDigits: 0,maximumFractionDigits: 0} )}</td>
            <td></td>
        {/*    <td className='textright'>{(1845950-transport_tot_sum).toLocaleString("ko-KR",{ minimumFractionDigits: 0,maximumFractionDigits: 0} )}</td>*/}
          
        </tr>
        {/*<tr>
            <td className="p-3 mb-2 bg-secondary text-white">Extra</td>
            <td className="p-3 mb-2 bg-secondary text-white"></td>
            <td className='textright p-3 mb-2 bg-secondary text-white'>{(12777801739-man_pro_tot).toLocaleString("ko-KR",{ minimumFractionDigits: 0,maximumFractionDigits: 0})}</td>
            
        </tr>*/}
        <tr>
            <td className='text-primary'><b><ul>Ⅴ.당기총제조비용</ul></b></td> {/*V. Total manufacturing costs for the year*/}
            <td>V. Total manufacturing costs for the year</td>
            <td className='q2'></td>
            <td className='textright'>{tot_all.toLocaleString("ko-KR",{ minimumFractionDigits: 0,maximumFractionDigits: 0} )}</td>
        {/*    <td className='textright'>{(51183101337-tot_all).toLocaleString("ko-KR",{ minimumFractionDigits: 0,maximumFractionDigits: 0} )}</td>*/}
        </tr>  
        <tr>
            <td className='text-primary'><b><ul>Ⅵ.기초재공품재고액</ul></b></td>
            <td>VI. Beginning work in process</td>
            <td className='q2'></td>
            <td className='textright'>2,801,555,955</td>
        {/*    <td className='textright'>0</td>*/}
        </tr>  
       
        <tr>
            <td className='text-primary'><b><ul>Ⅶ.합계</ul></b></td>
            <td>Ⅶ. Total </td>
            <td className='q2'></td>
            <td className='textright'>{wip_stk.toLocaleString("ko-KR",{ minimumFractionDigits: 0,maximumFractionDigits: 0} )}</td>
           {/*<td className='textright'>{(53984657292-wip_stk).toLocaleString("ko-KR",{ minimumFractionDigits: 0,maximumFractionDigits: 0} )}</td>*/}
        </tr>  
        <tr>
            <td className='text-primary'><b><ul>Ⅷ.기말재공품재고액</ul></b></td>
            <td>Ⅷ. Ending work in process  
</td>
            <td className='q2'></td>
            <td className='textright'>{sum_carr_ovr.toLocaleString("ko-KR",{ minimumFractionDigits: 0,maximumFractionDigits: 0} )}</td>
           {/*<td className='textright'>{( 3273688697-sum_carr_ovr).toLocaleString("ko-KR",{ minimumFractionDigits: 0,maximumFractionDigits: 0} )}</td>*/}

        </tr>  
      
            
        <tr>
            <td className='text-primary'><b><ul>Ⅸ.타계정으로 대체액</ul></b></td>
            <td>Ⅸ. Transfer to other accounts
</td>
            <td className='q2'></td>
            <td className='textright'>0</td>
        {/*    <td className='textright'>0</td>*/}
     
        </tr>  
        <tr>
            <td className='text-primary'><b><ul>Ⅹ.당기제품제조원가</ul></b></td>
            <td>Ⅹ. Cost of Goods Manufactured for the year for the year</td>
            <td className='q2'></td>
            <td className='textright'>{l_r.toLocaleString("ko-KR",{ minimumFractionDigits: 0,maximumFractionDigits: 0} )}</td>
     
        </tr> 
          </tbody>
          </table>
    </div>
  )
}

export default SummeryReport
