import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import IncomeStatementInsert from './IncomeStatementInsert'
function IncomeStatement() {
    const [allproductdata, setallproductdata] = useState([])
    const [invent ,setInvent] = useState([])
    const [deptsel,setdeptsel] = useState([])
    function form_setInventory(){
      window.location.href = "/insert"
    }

    useEffect(()=>{
      axios.get("http://localhost:3001/invent/22").then((response)=>{
        setInvent(response.data)
      })
    },[])

    useEffect(()=>{
        axios.get("http://localhost:3001/man_hrs_p/all22").then((response)=>{
            setallproductdata(response.data);
           
        })
       
    },[])

    useEffect(()=>{
      axios.get("http://localhost:3001/department_expense/seoulOff").then((response)=>{
        setdeptsel(response.data);
         
      })
     
  },[])
  /*inventory table*/
const sum_othr_sales = invent.map(sum_otr_sale =>sum_otr_sale.othr_sales).reduce((a,b)=>a+b,0)
const sum_cost_of_good_sold = invent.map(sumn=>sumn.cost_of_good_sold).reduce((a,b)=>a+b,0)
const sum_basic_prod_inventory_amt = invent.map(sumn=>sumn.basic_prod_inventory_amt).reduce((a,b)=>a+b,0)
const sum_curr_prod_purchase_amt = invent.map(sumn=>sumn.curr_prod_purchase_amt).reduce((a,b)=>a+b,0)
const sum_end_prod_inventory = invent.map(sumn=>sumn.end_prod_inventory).reduce((a,b)=>a+b,0)
const sum_trans_amt_anthr_acc = invent.map(sumn=>sumn.trans_amt_anthr_acc).reduce((a,b)=>a+b,0)
const sum_beg_othr_invent_asset_invent_amt = invent.map(sumn=>sumn.beg_othr_invent_asset_invent_amt).reduce((a,b)=>a+b,0)
const sum_manu_cst_othr_asset = invent.map(sumn=>sumn.manu_cst_othr_asset).reduce((a,b)=>a+b,0)
const sum_othr_invent_eop = invent.map(sumn=>sumn.othr_invent_eop).reduce((a,b)=>a+b,0)


const sum_sale_total = allproductdata.map(sum_sale=>sum_sale.sales_amt).reduce((a,b)=>a+b,0);
const sum_dispatch_amt = allproductdata.map(sum_dispatch=>sum_dispatch.dispatch_amt).reduce((a,b)=>a+b,0)
let tot = sum_dispatch_amt;
const sum_dispatch_cost_sold = allproductdata.map(sum_dispatch_cost_sold=>sum_dispatch_cost_sold.dispatch_cost_sold).reduce((a,b)=>a+b,0)
const sum_basic_stk = allproductdata.map(sum_opn_stk => sum_opn_stk.opening_st_amt).reduce((a,b)=>a+b,0)
const sum_tot_manu_cost = allproductdata.map(sum_manu_c => sum_manu_c.tot_manu_cost).reduce((a,b)=>a+b,0)
const sum_carry_ovr_stk_amt = allproductdata.map( sumcarry_ovr_stk_amt=>sumcarry_ovr_stk_amt.carry_ovr_stk_amt).reduce((a,b)=>a+b,0)

let sum_basic_sal = deptsel.map( sumsum_basic_sal=>sumsum_basic_sal.basic_sal).reduce((a,b)=>a+b,0)
let sum_rp_seoul = deptsel.map( sumsum_basic_sal=>sumsum_basic_sal.RP).reduce((a,b)=>a+b,0)
console.log("sum_dispatch_amt:"+sum_dispatch_amt)
  return (
   <>
     
       <div className='App'>
      
       <h1>손익계산서</h1>
       <button type="button" class="btn btn-success" onClick={form_setInventory}>Insert 상품매출원가 & 기타매출원가</button>
      <table id='empTable' className='table table-bordered w-50'>
        <thead className=''>
            <tr className=''>
                <th>과목</th>
                <th>금액</th>
                <th></th>
                <th>금액</th>
                <th></th>
                
            </tr>
            <tr>
                <td><b><ul>Ⅰ.매출액 (Total sales)</ul></b></td>
                <td className='q2'></td>
                <td><b>{sum_sale_total.toLocaleString("ko-KR",{ minimumFractionDigits: 0,maximumFractionDigits: 0} )}</b></td>
                <td className='q2'></td>
                <td><b>40,124,921,389</b></td>
            </tr>
            <tr>
            <td><ul><ul>1.상품매출(1.Merchandise)</ul></ul></td>
            <td>0</td>
            <td></td>
            <td>209,601,189</td>
            <td></td>
           </tr>
           <tr>
            <td><ul><ul>2.제품매출(2.Goods Manufactured)</ul></ul></td>
            <td>{sum_sale_total.toLocaleString("ko-KR",{ minimumFractionDigits: 0,maximumFractionDigits: 0} )}</td>
            <td></td>
            <td>38,428,700,016</td>
            <td></td>
           </tr>
           <tr>
            <td className=''><ul><ul>3.기타매출(3.Other Sales)(website insertion)</ul> </ul></td>
            <td className='q3'>{sum_othr_sales.toLocaleString("ko-KR",{ minimumFractionDigits: 0,maximumFractionDigits: 0} )}</td>
            <td></td>
            <td>1,486,620,184</td>
            <td></td>
           </tr>
           <tr>
            <td><b><ul>Ⅱ.매출원가 (Ⅱ.Cost Of Sales)</ul></b></td>
            <td className='q2'></td>
            <td></td>
            <td className='q2'></td>
            <td><b>35,278,846,590</b></td>
           </tr>
           <tr>
            <td><ul><ul>1.상품매출원가(1.cost of goods sold)</ul></ul></td>
            <td className='q2'></td>
            <td className='q3'><b>{sum_cost_of_good_sold.toLocaleString("ko-KR",{ minimumFractionDigits: 0,maximumFractionDigits: 0} )}</b></td>
            <td className='q2'></td>
            <td><b>197,248,290</b></td>
           </tr>
           <tr>
            <td><ul><ul><ul>기초상품재고액(Basic product inventory amount)</ul></ul></ul> </td>{/*basic packed product*/}
            <td className='q3'>{sum_basic_prod_inventory_amt.toLocaleString("ko-KR",{ minimumFractionDigits: 0,maximumFractionDigits: 0} )}</td>
            <td></td>
            <td>0</td>
            <td></td>
           </tr>
           <tr>
            <td><ul><ul><ul>당기상품매입액(Current product purchase amount)</ul></ul></ul></td>{/*packed product In*/}
            <td className='q3'>{sum_curr_prod_purchase_amt.toLocaleString("ko-KR",{ minimumFractionDigits: 0,maximumFractionDigits: 0} )}</td>
            <td></td>
            <td>197,248,290</td>
            <td></td>
           </tr>
           <tr>
            <td><ul><ul><ul>기말상품재고액(end product inventory)</ul></ul></ul></td>{/*Balance of packed product*/}
            <td className='q3'>{sum_end_prod_inventory.toLocaleString("ko-KR",{ minimumFractionDigits: 0,maximumFractionDigits: 0} )}</td>
            <td></td>
            <td>0</td>
            <td></td>
           </tr>
           <tr>
            <td><ul><ul>2.매출원가dispatch_cost_sold</ul></ul></td>{/*Produced product sales COGS*/}
            <td className='q2'></td>
            <td><b>{(sum_basic_stk+ 47433865977+sum_carry_ovr_stk_amt).toLocaleString("ko-KR",{ minimumFractionDigits: 0,maximumFractionDigits: 0} )}</b></td>
            <td className='q2'></td>
            <td><b>34,600,650,417</b></td>
           </tr>
           <tr>
            <td><ul><ul><ul>기초재고 Basic Stock</ul></ul></ul></td>{/*basic produced product*/}
            <td>{sum_basic_stk.toLocaleString("ko-KR",{ minimumFractionDigits: 0,maximumFractionDigits: 0} )}</td>
            <td></td>
            <td>5,290,101,565</td>
            <td></td>
            
           </tr>
           <tr>
            <td><ul><ul><ul>Cost of goods manufactured for the year 당기제품제조원가</ul></ul></ul></td>
            <td>{/*sum_tot_manu_cost.toLocaleString("ko-KR",{ minimumFractionDigits: 0,maximumFractionDigits: 0} )*/}
            47,433,865,977
            </td>
            <td></td>
            <td>36,725,307,222</td>
            <td></td>
           </tr>
           <tr>
            <td><ul><ul><ul>타계정으로대체액 (Transferred from different option)</ul></ul></ul></td>
            <td className='q3'>{sum_trans_amt_anthr_acc.toLocaleString("ko-KR",{ minimumFractionDigits: 0,maximumFractionDigits: 0} )}</td>
            <td></td>
            <td>1,722,470,340</td>
            <td></td>
           </tr>
           <tr>
            <td className=''><ul><ul><ul>기말제품재고액 (Ending inventory)</ul></ul></ul></td>{/*Balance of produced product*/}
            <td className='q2'>{sum_carry_ovr_stk_amt.toLocaleString("ko-KR",{ minimumFractionDigits: 0,maximumFractionDigits: 0} )}</td>
            <td></td>
            <td>5,692,288,030</td>
            <td></td>
           </tr>
           <tr>
            <td className=''><ul><ul>3.기타매출원가 (cost of other Sales)</ul></ul></td>
            <td className='q2'></td>
            <td></td>
            <td className='q2'></td>
            <td><b>480,947,883</b> </td>
           </tr>
           <tr>
           <td className='q2'><ul><ul><ul>기초기타재고자산재고액(Beg Otr Inven Asset Invent Amt)</ul></ul></ul></td>
            <td className='q3'>{sum_beg_othr_invent_asset_invent_amt.toLocaleString("ko-KR",{ minimumFractionDigits: 0,maximumFractionDigits: 0} )}</td>
            <td></td>
            <td>0</td>
            <td></td>
           </tr>
           <tr>
           <td className='q2'><ul><ul><ul>당기기타재고자산제조원가 ( Manufacturing cost of other inventory assets for the current period)</ul></ul></ul> </td>
            <td className='q3'>{sum_manu_cst_othr_asset.toLocaleString("ko-KR",{ minimumFractionDigits: 0,maximumFractionDigits: 0} )}</td>
            <td></td>
            <td>480,947,883</td>
            <td></td>
           </tr>
           <tr>
           <td className='q2'><ul><ul><ul>기말기타재고자산재고액(Other inventory assets at the end of the period)</ul></ul></ul></td>
            <td className='q3'>{sum_othr_invent_eop.toLocaleString("ko-KR",{ minimumFractionDigits: 0,maximumFractionDigits: 0} )}</td>
            <td></td>
            <td className=''>0</td>
            <td></td>
           </tr>
           <tr>
            <td className=''><b><ul>Ⅲ.매출총이익 (Gross profit)</ul></b></td>
            <td className='q2'></td>
            <td className=''><b>{sum_sale_total.toLocaleString("ko-KR",{ minimumFractionDigits: 0,maximumFractionDigits: 0} )}</b></td>
            <td className='q2'></td>
            <td className=''><b>4,846,074,799</b></td>
           </tr>
           <tr>
            <td className=''><b><ul>  Ⅳ.판매비와관리비</ul></b></td>
            <td className='q2'></td>
            <td><b></b></td>
            <td className='q2'></td>
            <td><b></b></td>
           </tr>
           <tr>
            <td className=''><ul><ul><ul>급료와임금(서울사무소)(Salaries(Seoul Office))</ul></ul></ul></td>
            <td className=''>{sum_basic_sal.toLocaleString("ko-KR",{ minimumFractionDigits: 0,maximumFractionDigits: 0} )}</td>
            <td className=''></td>
            <td><b></b></td>
           </tr>
           <tr>
            <td className=''><ul><ul><ul>성과금(Merit pay)</ul></ul></ul></td>
            <td className=''>insert from website</td>
            <td className=''></td>
            <td><b></b></td>
           </tr>
           <tr>
            <td className=''><ul><ul><ul>제수당(Allowance)</ul></ul></ul></td>
            <td className=''>insert from website</td>
            <td className=''></td>
            <td><b></b></td>
           </tr>
           <tr>
              <td className=''><ul><ul><ul>퇴직급여(Severance pay)</ul></ul></ul></td>
              <td className=''>{sum_rp_seoul.toLocaleString("ko-KR",{ minimumFractionDigits: 0,maximumFractionDigits: 0} )}</td>
              <td></td>
              <td className=''></td>
              <td><b></b></td>
           </tr>
           <tr>
              <td className=''><ul><ul><ul>복리후생비(Other employee benefits)</ul></ul></ul></td>
              <td className=''>formula need to be created</td>
              <td></td>
              <td className=''></td>
              <td><b></b></td>
           </tr>
           <tr>
              <td className=''><ul><ul><ul>여비교통비(Travel expenses)</ul></ul></ul></td>
              <td className=''>formula need to be created</td>
              <td></td>
              <td className=''></td>
              <td><b></b></td>
           </tr>
           <tr>
              <td className=''><ul><ul><ul>접대비(Reception expenses)</ul></ul></ul></td>
              <td className=''>formula need to be created</td>
              <td></td>
              <td className=''></td>
              <td><b></b></td>
           </tr>
           <tr>
              <td className=''><ul><ul><ul>통신비(Communication expenses)</ul></ul></ul></td>
              <td className=''>formula need to be created</td>
              <td></td>
              <td className=''></td>
              <td><b></b></td>
           </tr>
           <tr>
              <td className=''><ul><ul><ul>수도광열비(Water and heating expenses)</ul></ul></ul></td>
              <td className=''>formula need to be created</td>
              <td></td>
              <td className=''></td>
              <td><b></b></td>
           </tr>
           <tr>
              <td className=''><ul><ul><ul>전력비(Electricity)</ul></ul></ul></td>
              <td className=''>formula need to be created</td>
              <td></td>
              <td className=''></td>
              <td><b></b></td>
           </tr>
           <tr>
              <td className=''><ul><ul><ul>세금과공과(Taxes and dues)</ul></ul></ul></td>
              <td className=''>formula need to be created</td>
              <td></td>
              <td className=''></td>
              <td><b></b></td>
           </tr>
           <tr>
              <td className=''><ul><ul><ul>감가상각비(Depreciation)</ul></ul></ul></td>
              <td className=''>formula need to be created</td>
              <td></td>
              <td className=''></td>
              <td><b></b></td>
           </tr>
           <tr>
              <td className=''><ul><ul><ul>지급임차료(Rent)</ul></ul></ul></td>
              <td className=''>formula need to be created</td>
              <td></td>
              <td className=''></td>
              <td><b></b></td>
           </tr>
           <tr>
              <td className=''><ul><ul><ul>수선비(Repairing expenses)</ul></ul></ul></td>
              <td className=''>formula need to be created</td>
              <td></td>
              <td className=''></td>
              <td><b></b></td>
           </tr>
           <tr>
              <td className=''><ul><ul><ul>보험료(Insurance Bill)</ul></ul></ul></td>
              <td className=''>formula need to be created</td>
              <td></td>
              <td className=''></td>
              <td><b></b></td>
           </tr>
           <tr>
              <td className=''><ul><ul><ul>차량유지비(Maintenance of cars)</ul></ul></ul></td>
              <td className=''>formula need to be created</td>
              <td></td>
              <td className=''></td>
              <td><b></b></td>
           </tr>
           <tr>
              <td className=''><ul><ul><ul>운송비(Freight expenses)</ul></ul></ul></td>
              <td className=''>formula need to be created</td>
              <td></td>
              <td className=''></td>
              <td><b></b></td>
           </tr>

           <tr>
              <td className=''><ul><ul><ul>교육훈련비(Traning expenses)</ul></ul></ul></td>
              <td className=''>formula need to be created</td>
              <td></td>
              <td className=''></td>
              <td><b></b></td>
           </tr>

           <tr>
              <td className=''><ul><ul><ul>도서인쇄비(Book and print expenses)</ul></ul></ul></td>
              <td className=''>formula need to be created</td>
              <td></td>
              <td className=''></td>
              <td><b></b></td>
           </tr>
           <tr>
              <td className=''><ul><ul><ul>소모품비(Expendable supplies expenses)</ul></ul></ul></td>
              <td className=''>formula need to be created</td>
              <td></td>
              <td className=''></td>
              <td><b></b></td>
           </tr>
           <tr>
              <td className=''><ul><ul><ul>지급수수료(Handling fee)</ul></ul></ul></td>
              <td className=''>formula need to be created</td>
              <td></td>
               <td className=''></td>
              <td><b></b></td>
           </tr>
           <tr>
              <td className=''><ul><ul><ul>광고선전비(Advertising expenses)</ul></ul></ul></td>
              <td className=''>insert from website</td>
              <td></td>
              <td className=''></td>
              <td><b></b></td>
           </tr>
           <tr>
              <td className=''><ul><ul><ul>대손상각비(Bad debt expense)</ul></ul></ul></td>
              <td className=''>insert from website</td>
              <td></td>
              <td className=''></td>
              <td><b></b></td>
           </tr>
           <tr>
              <td className=''><ul><ul><ul>수출제비용(Exporting expenses)</ul></ul></ul></td>
              <td className=''>insert from website</td>
              <td></td>
              <td className=''></td>
              <td><b></b></td>
           </tr>
           <tr>
              <td className=''><ul><ul><ul>무형자산상각비(Amortization on intangible asset)</ul></ul></ul></td>
              <td className=''>insert from website</td>
              <td></td>
              <td className=''></td>
              <td><b></b></td>
           </tr>
           <tr>
              <td className=''><b>Ⅴ.영업이익(Ⅴ.Operating Income)</b></td>
              <td className=''>insert from website</td>
              <td></td>
              <td className=''></td>
              <td><b></b></td>
           </tr>
           <tr>
              <td className=''><b>Ⅵ.영업외 수익(Ⅵ.Non-Operating Income)</b></td>
              <td className=''>insert from website</td>
              <td></td>
              <td className=''></td>
              <td><b></b></td>
           </tr>
           <tr>
              <td className=''><ul><ul><ul>이자수익(Interest income)</ul></ul></ul></td>
              <td className=''>insert from website</td>
              <td></td>
              <td className=''></td>
              <td><b></b></td>
           </tr>

           <tr>
              <td className=''><ul><ul><ul>배당금수익(Dividend income)</ul></ul></ul></td>
              <td className=''>insert from website</td>
              <td></td>
              <td className=''></td>
              <td><b></b></td>
           </tr>

           <tr>
              <td className=''><ul><ul><ul>매도가능증권처분이익(Gain on disposition of Available-for-Sale Securities)</ul></ul></ul></td>
              <td className=''>insert from website</td>
              <td></td>
              <td className=''></td>
              <td><b></b></td>
           </tr>

           <tr>
              <td className=''><ul><ul><ul>외환차익(Gain on foreign currency transaction)</ul></ul></ul></td>
              <td className=''>insert from website</td>
              <td></td>
              <td className=''></td>
              <td><b></b></td>
           </tr>
           <tr>
              <td className=''><ul><ul><ul>외화환산이익(Gain on foreign currency conversion)</ul></ul></ul></td>
              <td className=''>insert from website</td>
              <td></td>
              <td className=''></td>
              <td><b></b></td>
           </tr>
           <tr>
              <td className=''><ul><ul><ul>유형자산처분이익(Gain on disposition of tangible assets)</ul></ul></ul></td>
              <td className=''>insert from website</td>
              <td></td>
              <td className=''></td>
              <td><b></b></td>
           </tr>
           <tr>
              <td className=''><ul><ul><ul>무형자산처분이익(Gain on disposition of intangible assets)</ul></ul></ul></td>
              <td className=''>insert from website</td>
              <td></td>
              <td className=''></td>
              <td><b></b></td>
           </tr>
           <tr>
              <td className=''><ul><ul><ul>잡이익(Miscellaneous revenues)</ul></ul></ul></td>
              <td className=''>insert from website</td>
              <td></td>
              <td className=''></td>
              <td><b></b></td>
           </tr>
           <tr>
              <td className=''><b>Ⅶ.영업외 비용(Non-Operating Expense)</b></td>
              <td className=''>insert from website</td>
              <td></td>
              <td className=''></td>
              <td><b></b></td>
           </tr>
           <tr>
              <td className=''><ul><ul><ul>이자비용 (Interest expense)</ul></ul></ul></td>
              <td className=''>insert from website</td>
              <td></td>
              <td className=''></td>
              <td><b></b></td>
           </tr>
           <tr>
              <td className=''><ul><ul><ul>외환차손 (Loss on foreign currency transactions)</ul></ul></ul></td>
              <td className=''>insert from website</td>
              <td></td>
              <td className=''></td>
              <td><b></b></td>
           </tr>
           <tr>
              <td className=''><ul><ul><ul>외화환산손실 (Loss on foreign currency conversion)</ul></ul></ul></td>
              <td className=''>insert from website</td>
              <td></td>
              <td className=''></td>
              <td><b></b></td>
           </tr>
           <tr>
              <td className=''><ul><ul><ul>매도가능증권처분손실 (Loss on disposition of Available-for-Sale Securities)</ul></ul></ul></td>
              <td className=''>insert from website</td>
              <td></td>
              <td className=''></td>
              <td><b></b></td>
           </tr>
           <tr>
              <td className=''><ul><ul><ul>유형자산처분손실(Loss on disposition of tangible assets)</ul></ul></ul></td>
              <td className=''>insert from website</td>
              <td></td>
              <td className=''></td>
              <td><b></b></td>
           </tr>
           <tr>
              <td className=''><ul><ul><ul>무형자산처분손실(Loss on disposition of intangible assets)</ul></ul></ul></td>
              <td className=''>insert from website</td>
              <td></td>
              <td className=''></td>
              <td><b></b></td>
           </tr>
           <tr>
              <td className=''><ul><ul><ul>제품폐기손실(Loss on product disposal)</ul></ul></ul></td>
              <td className=''>insert from website</td>
              <td></td>
              <td className=''></td>
              <td><b></b></td>
           </tr>
           <tr>
              <td className=''><ul><ul><ul>제품폐기손실(Loss on work in process disposal)</ul></ul></ul></td>
              <td className=''>insert from website</td>
              <td></td>
              <td className=''></td>
              <td><b></b></td>
           </tr>
           <tr>
              <td className=''><ul><ul><ul>원재료폐기손실(Loss on raw material disposal)</ul></ul></ul></td>
              <td className=''>insert from website</td>
              <td></td>
              <td className=''></td>
              <td><b></b></td>
           </tr>
           <tr>
              <td className=''><ul><ul><ul>포장재료폐기손실(Loss on packing material disposal)</ul></ul></ul></td>
              <td className=''>insert from website</td>
              <td></td>
              <td className=''></td>
              <td><b></b></td>
           </tr>
           <tr>
              <td className=''><ul><ul><ul>제품감모손실(Loss on decrease of product)</ul></ul></ul></td>
              <td className=''>insert from website</td>
              <td></td>
              <td className=''></td>
              <td><b></b></td>
           </tr>
           <tr>
              <td className=''><ul><ul><ul>재공품감모손실(Loss on decrease of work in process)</ul></ul></ul></td>
              <td className=''>insert from website</td>
              <td></td>
              <td className=''></td>
              <td><b></b></td>
           </tr>
           <tr>
              <td className=''><ul><ul><ul>잡손실(The others financial loss)</ul></ul></ul></td>
              <td className=''>insert from website</td>
              <td></td>
              <td className=''></td>
              <td><b></b></td>
           </tr>
            <tr>
              <td className=''><ul><ul><ul>기부금(Donations)</ul></ul></ul></td>
              <td className=''>insert from website</td>
              <td></td>
              <td className=''></td>
              <td><b></b></td>
           </tr>
        </thead>
        <tbody>
           {/*<tr>
            <td><b><ul>Ⅰ.매출액 (Total sales)</ul></b></td>
            <td>later</td>
           </tr>
          */}
        </tbody>
      </table>
    </div></>
  )
}

export default IncomeStatement
