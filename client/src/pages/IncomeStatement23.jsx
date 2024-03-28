import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react';
import {Col,Row,Container} from 'react-bootstrap';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';

function IncomeStatement23() {
    const [allproductdata, setallproductdata] = useState([])
    const [invent ,setInvent] = useState([])
    const[list_man_hr_product, setlist_man_hr_product] = useState([])

    useEffect(()=>{
      axios.get("http://localhost:3001/man_hrs_p/summery23").then((response)=>{
          setlist_man_hr_product(response.data)
          
      })
  },[]);

    useEffect(()=>{
      axios.get("http://localhost:3001/invent/23").then((response)=>{
        setInvent(response.data)
      })
    },[])

    useEffect(()=>{
        axios.get("http://localhost:3001/man_hrs_p/all23").then((response)=>{
            setallproductdata(response.data);
           
        })
       
    },[])
    const repair_total_sum = list_man_hr_product.map(rep_t=>rep_t.repair_total).reduce((a,b)=>a+b,0);
    const dispatch_amt_sum = list_man_hr_product.map(rep_t=>rep_t.dispatch_amt).reduce((a,b)=>a+b,0);
    const carry_ovr_stk_amt_sum = list_man_hr_product.map(rep_t=>rep_t. carry_ovr_stk_amt).reduce((a,b)=>a+b,0);
    const sum_othr_sales = invent.map(sum_otr_sale =>sum_otr_sale.othr_sales).reduce((a,b)=>a+b,0)
const sum_sale_total = allproductdata.map(sum_sale=>sum_sale.sales_amt).reduce((a,b)=>a+b,0);
const sum_dispatch_amt = allproductdata.map(sum_dispatch=>sum_dispatch.dispatch_amt).reduce((a,b)=>a+b,0)
const sum_basic_stk = allproductdata.map(sum_opn_stk => sum_opn_stk.opening_st_amt).reduce((a,b)=>a+b,0)
const sum_carry_ovr_stk_amt = allproductdata.map( sumcarry_ovr_stk_amt=>sumcarry_ovr_stk_amt.carry_ovr_stk_amt).reduce((a,b)=>a+b,0)

let tot = 0;
function form_setInventory(){
  window.location.href = "/insert"
}
console.log("sum_dispatch_amt:"+sum_dispatch_amt)
  return (
   
    <div className='App'>
     
       <h1>손익계산서</h1>
       <Container>
         <Row>
             <Col>
             <ReactHTMLTableToExcel
                    id="test-table-xls-button"
                    className="download-table-xls-button"
                    table="empTablesum"
                    filename="제조원가명세서2023"
                    sheet="제조원가명세서"
                    buttonText="Download as XLS"/>
             </Col>
             <Col>
            
             
             </Col>
         </Row>
     </Container>
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
            <td>0 </td>
            <td></td>
            <td>0</td>
            <td></td>
           </tr>
           <tr>
            <td><ul><ul>2.제품매출(2.Goods Manufactured)</ul></ul></td>
            <td>{sum_sale_total.toLocaleString("ko-KR",{ minimumFractionDigits: 0,maximumFractionDigits: 0} )}</td>
            <td></td>
            <td>0</td>
            <td></td>
           </tr>
           <tr>
            <td><ul><ul>3.기타매출(3.Other Sales)(website insertion)</ul> </ul></td>
            <td>{sum_othr_sales.toLocaleString("ko-KR",{ minimumFractionDigits: 0,maximumFractionDigits: 0} )}</td>
            <td></td>
            <td>0</td>
            <td></td>
           </tr>
           <tr>
            <td><b><ul>Ⅱ.매출원가 (Ⅱ.Cost Of Sales)</ul></b></td>
            <td className='q2'></td>
            <td><b>{tot.toLocaleString("ko-KR",{ minimumFractionDigits: 0,maximumFractionDigits: 0} )}</b></td>
            <td className='q2'></td>
            <td><b>0</b></td>
           </tr>
           <tr>
            <td><ul><b>1.상품매출원가</b></ul></td>
            <td>0</td>
            <td></td>
            <td></td>
            <td><b></b></td>
           </tr>
           <tr>
            <td><ul><ul>기초상품재고액</ul></ul></td>
            <td>0</td>
            <td></td>
            <td></td>
            <td><b></b></td>
           </tr>
           
           <tr>
            <td><ul><ul>당기상품매입액</ul></ul></td>
            <td>0</td>
            <td></td>
            <td></td>
            <td><b></b></td>
           </tr>

           <tr>
            <td><ul><ul>기말상품재고액</ul></ul></td>
            <td>0</td>
            <td></td>
            <td></td>
            <td><b></b></td>
           </tr>
           <tr>
            <td><ul><b>2.제품매출원가</b></ul></td>
            <td></td>
            <td><b>{(5692288030+148674510-dispatch_amt_sum).toLocaleString("ko-KR",{ minimumFractionDigits: 0,maximumFractionDigits: 0} )}</b></td>
            <td></td>
            <td><b></b></td>
           </tr>
          { /*<tr>
            <td><b><ul>상품매출원가 (COGS Packed product sales)</ul></b></td>
            <td className='q2'></td>
            <td className=''><b>306,231,250</b></td>
            <td className='q2'></td>
            <td><b>197,248,290</b></td>
            </tr>*/}
           <tr>
            <td><ul><ul>기초상품재고액 (basic packed product) </ul></ul></td>
            <td className=''>5,692,288,030</td>
            <td></td>
            <td>0</td>
            <td></td>
           </tr>
           <tr>
            <td><ul><ul>당기제품제조원가</ul></ul></td>
            <td className=''>148,674,510</td>
            <td></td>
            <td>0</td>
            <td></td>
           </tr>
           <tr>
            <td><ul><ul>타계정으로대체액(dispatch amt)</ul></ul></td> {/*dispatch_amt in man_hrs_and_product_main_tables*/}
            <td>{dispatch_amt_sum.toLocaleString("ko-KR",{ minimumFractionDigits: 0,maximumFractionDigits: 0} )}</td>
            <td></td>
            <td>0</td>
            <td></td>
           </tr>
           <tr>
            <td><b><ul>기타매출원가</ul></b></td>
            <td></td>
            <td>0</td>
            <td>0</td>
            <td></td>
           </tr>   
           <tr>
            <td><ul><ul>기 초 기타재고자산재고액</ul></ul></td> 
            <td>0</td>
            <td></td>
            <td>0</td>
            <td></td>
           </tr>
           <tr>
            <td><ul><ul>당기기타재고자산제조원가</ul></ul></td> 
            <td>0</td>
            <td></td>
            <td>0</td>
            <td></td>
           </tr>
           <tr>
            <td><ul><ul>기 말 기타재고자산재고액</ul></ul></td> 
            <td>0</td>
            <td></td>
            <td>0</td>
            <td></td>
           </tr>
           <tr>
            <td><b><ul>  Ⅲ. 매출총이익</ul></b></td>
            <td></td>
            <td>0</td>
            <td>0</td>
            <td></td>
           </tr> 
           <tr>
            <td><b><ul>  IV.판매비와관리비</ul></b></td>
            <td></td>
            <td>0</td>
            <td>0</td>
            <td></td>
           </tr>
           <tr>
            <td><ul><ul> 급료와임금(서울사무소)</ul></ul></td>
            <td>  5,297,865,407  </td>
            <td></td>
            <td>0</td>
            <td></td>
           </tr>  
           <tr>
            <td> <ul><ul>상여금</ul></ul></td>
            <td> 0</td>
            <td></td>
            <td>0</td>
            <td></td>
           </tr> 
           <tr>
            <td><ul><ul> 제수당</ul></ul></td>
            <td> 0</td>
            <td></td>
            <td>0</td>
            <td></td>
           </tr>  
           <tr>
            <td><ul><ul> 퇴직급여</ul></ul></td>
            <td> 122,370,142  </td>
            <td></td>
            <td>0</td>
            <td></td>
           </tr>      
           <tr>
            <td><ul><ul>복리후생비</ul></ul></td>
            <td></td>
            <td></td>
            <td>0</td>
            <td></td>
           </tr> 
           <tr>
            <td><ul><ul>여비교통비</ul></ul></td>
            <td></td>
            <td></td>
            <td>0</td>
            <td></td>
           </tr> 
           <tr>
            <td><ul><ul>접대비</ul></ul></td>
            <td></td>
            <td></td>
            <td>0</td>
            <td></td>
           </tr> 
           <tr>
            <td><ul><ul> 통신비</ul></ul></td>
            <td></td>
            <td></td>
            <td>0</td>
            <td></td>
           </tr> 
           <tr>
            <td><ul><ul> 수도광열비</ul></ul></td>
            <td></td>
            <td></td>
            <td>0</td>
            <td></td>
           </tr> 
           <tr>
            <td><ul><ul> 전력비</ul></ul></td>
            <td></td>
            <td></td>
            <td>0</td>
            <td></td>
           </tr> 
           <tr>
            <td><ul><ul> 세금과공과금</ul></ul></td>
            <td></td>
            <td></td>
            <td>0</td>
            <td></td>
           </tr> 
           <tr>
            <td><ul><ul>감가상각비</ul></ul></td>
            <td></td>
            <td></td>
            <td>0</td>
            <td></td>
           </tr> 
           <tr>
            <td><ul><ul>지급임차료</ul></ul></td>
            <td></td>
            <td></td>
            <td>0</td>
            <td></td>
           </tr> 
           <tr>
            <td><ul><ul>수선비</ul></ul></td>
            <td></td>
            <td></td>
            <td>0</td>
            <td></td>
           </tr> 
           <tr>
            <td><ul><ul>보험료</ul></ul></td>
            <td></td>
            <td></td>
            <td>0</td>
            <td></td>
           </tr> 
           <tr>
            <td><ul><ul>차량유지비</ul></ul></td>
            <td></td>
            <td></td>
            <td>0</td>
            <td></td>
           </tr> 
           <tr>
            <td><ul><ul>운반비</ul></ul></td>
            <td></td>
            <td></td>
            <td>0</td>
            <td></td>
           </tr> 
           <tr>
            <td><ul><ul>교육훈련비</ul></ul></td>
            <td></td>
            <td></td>
            <td>0</td>
            <td></td>
           </tr> 
           <tr>
            <td><ul><ul>도서인쇄비</ul></ul></td>
            <td></td>
            <td></td>
            <td>0</td>
            <td></td>
           </tr> 
           <tr>
            <td><ul><ul>소모품비</ul></ul></td>
            <td></td>
            <td></td>
            <td>0</td>
            <td></td>
           </tr> 
           <tr>
            <td><ul><ul>지급수수료</ul></ul></td>
            <td></td>
            <td></td>
            <td>0</td>
            <td></td>
           </tr> 
           <tr>
            <td><ul><ul>광고선전비</ul></ul></td>
            <td></td>
            <td></td>
            <td>0</td>
            <td></td>
           </tr> 
           <tr>
            <td><ul><ul>대손상각비</ul></ul></td>
            <td></td>
            <td></td>
            <td>0</td>
            <td></td>
           </tr> 
           <tr>
            <td><ul><ul>수출제비용</ul></ul></td>
            <td></td>
            <td></td>
            <td>0</td>
            <td></td>
           </tr> 
           <tr>
            <td><ul><ul>견본품비용</ul></ul></td>
            <td>{dispatch_amt_sum.toLocaleString("ko-KR",{ minimumFractionDigits: 0,maximumFractionDigits: 0} )}</td>
            <td></td>
            <td>0</td>
            <td></td>
           </tr> 
           <tr>
            <td><ul><ul>무형고정자산상각</ul></ul></td>
            <td></td>
            <td></td>
            <td>0</td>
            <td></td>
           </tr> 
           <tr>
            <td><ul><b>Ⅴ. 영업이익</b></ul></td>
            <td></td>
            <td></td>
            <td>0</td>
            <td></td>
           </tr> 
          
           <tr>
            
            <td>기말상품재고액 (Balance of packed product)</td>
            <td className=''>{sum_carry_ovr_stk_amt.toLocaleString("ko-KR",{ minimumFractionDigits: 0,maximumFractionDigits: 0} )}</td>
            <td></td>
            <td>0</td>
            <td></td>
           </tr>

           <tr>
            <td><b><ul>제품매출원가 (Produced product sales COGS) </ul></b></td>
            <td className='q2'></td>
            <td><b>35,438,843,237</b></td>
            <td className='q2'></td>
            <td><b>34,600,650,417</b></td>
           </tr>
           <tr>
            <td>기초제품재고액 (basic produced product)</td>
            <td>5,692,288,030</td>
            <td></td>
            <td>5,290,101,565</td>
            <td></td>
            
           </tr>
           <tr>
            <td>당기제품제조원가 (produced product)</td>
            <td>{(repair_total_sum+ 1340001).toLocaleString("ko-KR",{ minimumFractionDigits: 0,maximumFractionDigits: 0} )}</td>
            <td></td>
            <td>36,725,307,222</td>
            <td></td>
           </tr>
           
          
           <tr>
            <td>기말제품재고액 (carry over stock amount)</td>
            <td>{carry_ovr_stk_amt_sum.toLocaleString("ko-KR",{ minimumFractionDigits: 0,maximumFractionDigits: 0} )}</td>
            <td></td>
            <td>0</td>
            <td></td>
           </tr>
           <tr>
            <td><b><ul>기타매출원가 (COGS of other product)</ul></b></td>
            <td className='q2'></td>
            <td>0</td>
            <td className='q2'></td>
            <td><b>0</b> </td>
           </tr>
           <tr>
           <td>기초기타재고자산재고액 (Basic other product balance)</td>
            <td>0</td>
            <td></td>
            <td>0</td>
            <td></td>
           </tr>
           <tr>
           <td>당기기타재고자산제조원가 (Basic COGS of other produced product) </td>
            <td>0</td>
            <td></td>
            <td>0</td>
            <td></td>
           </tr>
           <tr>
           <td>기말기타재고자산재고액</td>
            <td>0</td>
            <td></td>
            <td>0</td>
            <td></td>
           </tr>
           <tr>
            <td><b><ul>Ⅲ.매출총이익 (Gross profit)</ul></b></td>
            <td className='q2'></td>
            <td><b>9,431,053,458</b></td>
            <td className='q2'></td>
            <td><b>4,846,074,799</b></td>
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
    </div>
  )
}

export default IncomeStatement23
