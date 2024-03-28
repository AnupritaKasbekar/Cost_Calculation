import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import {useLocation} from  'react-router-dom';
function Product_summary() {
   const location = useLocation();
   const[productDetails,setproductDetails] = useState([]) 
   useEffect(()=>{
    axios.get(`http://localhost:3001/man_hrs_p/${location.state.product_id}`).then((response)=>{
        setproductDetails(response.data);
        console.log(response.data);
    })
   
   },[])
   

   const batch = productDetails.map(bat=>bat.batch_size).reduce((a,b)=>a+b,0);
   const batch_size = productDetails.map(bat=>bat.batch).reduce((a,b)=>a+b,0);

   const batch_into_size = batch*batch_size;

   const rnd_fix = productDetails.map(fix=>fix.fixed_ratio_sum).reduce((a,b)=>a+b,0);

   const dep_fix = productDetails.map(fixa=>fixa.depreciation_sum).reduce((a,b)=>a+b,0);
   const waste_fix = productDetails.map(fixb=>fixb.indus_park_basic_fixed_ratio_sum).reduce((a,b)=>a+b,0);
   const elec_fix = productDetails.map(fixc=>fixc.elec_cost_fix_ratio_sum).reduce((a,b)=>a+b,0);
   const benefit_fix = productDetails.map(fixd=>fixd.benefit_tot).reduce((a,b)=>a+b,0);
   const pay_fee_fix = productDetails.map(fixe=>fixe.payment_tot).reduce((a,b)=>a+b,0);
   const repair_fix = productDetails.map(fixf=>fixf.repair_total).reduce((a,b)=>a+b,0);
   const fuel_fix=0;
   const consumable_fix=0;
   const tax_fix = productDetails.map(fixg=>fixg.tax_total).reduce((a,b)=>a+b,0);
   const insure_fix = productDetails.map(fixh=>fixh.insurance_tot).reduce((a,b)=>a+b,0);
   const water_fix = 0;
   const edu_fix = productDetails.map(fixi=>fixi.education_fee).reduce((a,b)=>a+b,0);
   const vec_fix = productDetails.map(fixj=>fixj.vechicle_maint_cost).reduce((a,b)=>a+b,0);
   const book_fix= productDetails.map(fixk=>fixk.book_print_fee).reduce((a,b)=>a+b,0);
   const travel_fix =0;
   const hosp_fix = productDetails.map(fixl=>fixl.enteritainment_fee).reduce((a,b)=>a+b,0);
   const comm_fix = productDetails.map(fixm=>fixm.communitaction_cost).reduce((a,b)=>a+b,0);
   const rent_fix = productDetails.map(fixn=>fixn.rent_tot).reduce((a,b)=>a+b,0);
   const tran_fix =0;
   const manufacture_fix = rnd_fix+dep_fix+waste_fix+elec_fix+benefit_fix+pay_fee_fix+repair_fix+fuel_fix+consumable_fix+tax_fix+insure_fix+water_fix+edu_fix+vec_fix+book_fix+travel_fix+hosp_fix+comm_fix+rent_fix+tran_fix;

   const rnd_var= productDetails.map(fix=>fix.variable_sum).reduce((a,b)=>a+b,0);
   const dep_var = 0;
   const waste_var = productDetails.map(fixb=>fixb.waste_disposal_var_cost_sum).reduce((a,b)=>a+b,0);
   const elec_var= productDetails.map(fixc=>fixc.elec_var_cost).reduce((a,b)=>a+b,0);
   const benefit_var =0
   const pay_fee_var = 0
   const repair_var = 0
   const fuel_var=productDetails.map(fixg=>fixg.fuel_dir_cost).reduce((a,b)=>a+b,0);;
   const consumable_var=productDetails.map(fixg=>fixg.consumable_sum).reduce((a,b)=>a+b,0);
   const tax_var = 0
   const insure_var = 0;
   const water_var = productDetails.map(fixi=>fixi.water_utility_tot).reduce((a,b)=>a+b,0);
   const edu_var = 0
   const vec_var = 0
   const book_var= 0;
   const travel_var =productDetails.map(fixl=>fixl.teavel_expense_tot).reduce((a,b)=>a+b,0);;
   const hosp_var = 0;
   const comm_var = 0;
   const rent_var = 0;
   const tran_var =productDetails.map(fixl=>fixl.transport_tot).reduce((a,b)=>a+b,0);
   const manufacture_var = rnd_var+dep_var+waste_var+elec_var+benefit_var+pay_fee_var+repair_var+fuel_var+consumable_var+tax_var+insure_var+water_var+edu_var+vec_var+book_var+travel_var+hosp_var+comm_var+rent_var+tran_var;

console.log("Manufacture Var :::"+manufacture_var)

   const rnd_tot = productDetails.map(fix=>fix.rnd_sum).reduce((a,b)=>a+b,0);
   const dep_tot = productDetails.map(fixa=>fixa.depreciation_sum).reduce((a,b)=>a+b,0);
   const waste_tot = productDetails.map(fixb=>fixb.total_fix_var_waste_disposal_cost).reduce((a,b)=>a+b,0);
   const elec_tot = productDetails.map(fixc=>fixc.elec_fix_var_tot_cost).reduce((a,b)=>a+b,0);
   const benefit_tot = productDetails.map(fixd=>fixd.benefit_tot).reduce((a,b)=>a+b,0);
   const pay_fee_tot = productDetails.map(fixe=>fixe.payment_tot).reduce((a,b)=>a+b,0);
   const repair_tot = productDetails.map(fixf=>fixf.repair_total).reduce((a,b)=>a+b,0);
   const fuel_tot=productDetails.map(fixg=>fixg.fuel_dir_cost).reduce((a,b)=>a+b,0);;
   const consumable_tot=productDetails.map(fixg=>fixg.consumable_sum).reduce((a,b)=>a+b,0);
   const tax_tot = productDetails.map(fixg=>fixg.tax_total).reduce((a,b)=>a+b,0);
   const insure_tot = productDetails.map(fixh=>fixh.insurance_tot).reduce((a,b)=>a+b,0);
   const water_tot = productDetails.map(fixi=>fixi.water_utility_tot).reduce((a,b)=>a+b,0);
   const edu_tot = productDetails.map(fixi=>fixi.education_fee).reduce((a,b)=>a+b,0);
   const vec_tot = productDetails.map(fixj=>fixj.vechicle_maint_cost).reduce((a,b)=>a+b,0);
   const book_tot= productDetails.map(fixk=>fixk.book_print_fee).reduce((a,b)=>a+b,0);
   const travel_tot =productDetails.map(fixl=>fixl.teavel_expense_tot).reduce((a,b)=>a+b,0);
   const hosp_tot = productDetails.map(fixl=>fixl.enteritainment_fee).reduce((a,b)=>a+b,0);
   const comm_tot = productDetails.map(fixm=>fixm.communitaction_cost).reduce((a,b)=>a+b,0);
   const rent_tot = productDetails.map(fixn=>fixn.rent_tot).reduce((a,b)=>a+b,0);
   const tran_tot =productDetails.map(fixl=>fixl.transport_tot).reduce((a,b)=>a+b,0);
   const manufacture_tot = rnd_tot+dep_tot+waste_tot+elec_tot+benefit_tot+pay_fee_tot+repair_tot+fuel_tot+consumable_tot+tax_tot+insure_tot+water_tot+edu_tot+vec_tot+book_tot+travel_tot+hosp_tot+comm_tot+rent_tot+tran_tot;

   /* 제조원가 	manufacturing cost*/
   /*fix*/
   const tot_fix_costt = productDetails.map(fix_d=>fix_d.tot_fix_cost).reduce((a,b)=>a+b,0);

   const manufacture_cost_fix = tot_fix_costt+manufacture_fix;

   /*var*/
   const material_pack_var = productDetails.map(fix_d=>fix_d.material_pack_tot).reduce((a,b)=>a+b,0);
   const tot_var_costt = productDetails.map(fix_d=>fix_d.tot_var_cost).reduce((a,b)=>a+b,0);
   const manufacture_cost_var = material_pack_var+tot_var_costt+manufacture_var;

   const total_manu = tot_fix_costt+tot_var_costt;

 
   const unit_price = manufacture_cost_var/batch_into_size;

/*second table calculations*/
const dispatch_amt = productDetails.map(fix_dis=>fix_dis.dispatch_amt).reduce((a,b)=>a+b,0);
const sale_product = productDetails.map(fix_dis=>fix_dis.sales_product).reduce((a,b)=>a+b,0);
   const fix_sold_commisn = (dispatch_amt*manufacture_fix/manufacture_tot)+(sale_product*0.04); /*(product.dispatch_amt*manufacture_fix/manufacture_tot)+(product.sales_product*0.04);*/
   const sale_qty = productDetails.map(fix_sales=>fix_sales.Sales_qty).reduce((a,b)=>a+b,0);
   const sales_amt = productDetails.map(fix_sales=>fix_sales.sales_amt).reduce((a,b)=>a+b,0);
   /*(product.dispatch_amt*manufacture_var/manufacture_tot)*/
const disp_qty = productDetails.map(fix_dis=>fix_dis.dispatch_qty).reduce((a,b)=>a+b,0);
const fix_sold_comm = ((dispatch_amt*manufacture_var)/manufacture_tot);
const turnover_var_cost = ((fix_sold_comm/sale_qty)*sale_qty)-sales_amt;
const break_evn_turnovr = (fix_sold_commisn/(fix_sold_commisn/sales_amt));
const sale_unit_price= (((dispatch_amt)*(manufacture_fix+tot_fix_costt)/(material_pack_var+total_manu+manufacture_tot))+(sale_product*0.04))
const good_sold_var= ((dispatch_amt)*(manufacture_cost_var)/(material_pack_var+total_manu+manufacture_tot))
const good_sold_manag = ((good_sold_var+0)/disp_qty);
   const second_table_row= productDetails.map((product_d)=>{
    return(
        <>
        <tr>
            <td></td>
            <td  className='textright'>{sale_unit_price.toLocaleString("ko-KR",{ minimumFractionDigits: 2,maximumFractionDigits: 2} )}</td>
            <td  className='textright'>{(good_sold_manag*sale_qty).toLocaleString("ko-KR",{ minimumFractionDigits: 2,maximumFractionDigits: 2} )}</td>
            <td></td>
            <td></td>
            
        </tr>
        <tr>
            <td>단위단가/kg</td>
            <td className='textright'>{(sale_unit_price/sale_qty).toLocaleString("ko-KR",{ minimumFractionDigits: 2,maximumFractionDigits: 2} )}</td>
            <td className='textright'>{(good_sold_manag).toLocaleString("ko-KR",{ minimumFractionDigits: 2,maximumFractionDigits: 2} )}</td>
            <td className='textright'>{((fix_sold_commisn/sale_qty)+(fix_sold_comm/sale_qty)).toLocaleString("ko-KR",{ minimumFractionDigits: 2,maximumFractionDigits: 2} )}</td>
            <td></td>
        </tr>
        <tr>
            
            <td>매출액</td>
            <td></td>
            <td className='border-0'>
                <tr>
                    <td>매출액(생산무관)  </td>
                </tr>
                <tr>
                <td> 매출수량 </td>
                </tr>
                <tr>
                <td>  판매단가/kg  </td>
                </tr>
                
            </td>
            <td>
                <tr><td className='textright'>
                {sales_amt.toLocaleString("ko-KR",{ minimumFractionDigits: 0,maximumFractionDigits: 0} )} 
                    </td></tr>
                <tr>
                <td className='textright'> {sale_qty.toLocaleString("ko-KR",{ minimumFractionDigits: 2,maximumFractionDigits: 2} )} </td>
                </tr>
                <tr>
                <td className='textright'>{(sales_amt/sale_qty).toLocaleString("ko-KR",{ minimumFractionDigits: 2,maximumFractionDigits: 2} )}</td>
                </tr>
                
            </td>
            <td></td>
        </tr>
        <tr>
            <td>공헌이익</td>
            <td> 매출액 - 변동비</td> 
            <td></td>
            <td>{(sales_amt-(good_sold_manag*sale_qty)).toLocaleString("ko-KR",{ minimumFractionDigits: 0,maximumFractionDigits: 0} )}</td>
            <td></td>
        </tr>
        <tr>
            <td>영업이익		</td>
            <td> 공헌이익 - 고정비 </td>
            <td></td>
            <td>{((sales_amt-(good_sold_manag*sale_qty))-sale_unit_price).toLocaleString("ko-KR",{ minimumFractionDigits: 0,maximumFractionDigits: 0} )}</td>
            <td></td>
        </tr>
        <tr>
            <td>공헌이익율(%)				</td>
            <td> 공헌이익/매출액 			</td>
            <td></td>
            <td>{(((sales_amt-(good_sold_manag*sale_qty))/sales_amt)*100).toLocaleString("ko-KR",{ minimumFractionDigits: 2,maximumFractionDigits: 2} )}%</td>
            <td></td>
        </tr>

        <tr>
            <td>손익분기점매출액(원)</td>
            <td> 고정비/공헌이익률	</td>
            <td></td>
            <td>{((sale_unit_price/((sales_amt-(good_sold_manag*sale_qty))/sales_amt))).toLocaleString("ko-KR",{ minimumFractionDigits: 0,maximumFractionDigits: 0} )}</td>
            <td>{(sales_amt-((sale_unit_price/((sales_amt-(good_sold_manag*sale_qty))/sales_amt)))).toLocaleString("ko-KR",{ minimumFractionDigits: 0,maximumFractionDigits: 0} )}</td>
        </tr>
        <tr>
            <td>손익분기점매출량(kg)</td>
            <td> 손익분기점매출액/판매단가 or 고정비/단위당공헌이익 </td>
            <td></td>
            <td>{(((sale_unit_price/((sales_amt-(good_sold_manag*sale_qty))/sales_amt)))/(sales_amt/sale_qty)).toLocaleString("ko-KR",{ minimumFractionDigits: 2,maximumFractionDigits: 2} )}</td>
            <td>{(sale_qty-(((sale_unit_price/((sales_amt-(good_sold_manag*sale_qty))/sales_amt)))/(sales_amt/sale_qty))).toLocaleString("ko-KR",{ minimumFractionDigits: 0,maximumFractionDigits: 0} )}</td>
        </tr>

        </>
    )
   })

   const tablerow = productDetails.map((product)=>{
    return(
        <>
        
        <tr>
            <td>원재료비</td>
            <td className='textright'>0</td>
            <td className='textright'>{product.material_pack_tot.toLocaleString("ko-KR",{ minimumFractionDigits: 0,maximumFractionDigits: 0} )}  </td>
            <td className='textright'>{product.material_pack_tot.toLocaleString("ko-KR",{ minimumFractionDigits: 0,maximumFractionDigits: 0} )}  </td>
            <td className='textright'>{(product.material_pack_tot/batch_into_size).toLocaleString("ko-KR",{ minimumFractionDigits: 0,maximumFractionDigits: 0} )} </td>
        </tr>
        <tr>
            <td className='q4'>원재료비 @/kg</td>
            <td className='q2 textright'></td>
            <td className='q2 textright'>{(product.material_pack_tot/batch_into_size).toLocaleString("ko-KR",{ minimumFractionDigits: 2,maximumFractionDigits: 2} )}</td>
            <td className='q2 textright'></td>
            <td className='q2 textright'></td>
        </tr>
        <tr>
            <td>노무비</td>
            <td className='textright'>{(product.tot_fix_cost).toLocaleString("ko-KR",{ minimumFractionDigits: 0,maximumFractionDigits: 0} )}</td>
            <td className='textright'>{(product.tot_var_cost).toLocaleString("ko-KR",{ minimumFractionDigits: 0,maximumFractionDigits: 0} )} </td>
            <td className='textright'>{(product.tot_fix_cost+product.tot_var_cost).toLocaleString("ko-KR",{ minimumFractionDigits: 0,maximumFractionDigits: 0} )}</td>
            <td className='textright'>{((product.tot_fix_cost+product.tot_var_cost)/batch_into_size).toLocaleString("ko-KR",{ minimumFractionDigits: 2,maximumFractionDigits: 2} )}</td>
        </tr>
        <tr>
            <td className='q4'>노무비@/kg</td>
            <td className='q2 textright'>{(product.tot_fix_cost/batch_into_size).toLocaleString("ko-KR",{ minimumFractionDigits: 0,maximumFractionDigits: 0} )}</td>
            <td className='q2 textright'>{(product.tot_var_cost/batch_into_size).toLocaleString("ko-KR",{ minimumFractionDigits: 2,maximumFractionDigits: 2} )}</td>
            <td className='q2 textright'></td>
            <td className='q2 textright'></td>
        </tr>
        <tr>
            <td> 연구개발비</td>{/*R&D*/}
            <td className='textright'>{product.fixed_ratio_sum.toLocaleString("ko-KR",{ minimumFractionDigits: 0,maximumFractionDigits: 0} )} </td>
            <td className='textright'>{product.variable_sum.toLocaleString("ko-KR",{ minimumFractionDigits: 0,maximumFractionDigits: 0} )}</td>
            <td className='textright'>{product.rnd_sum.toLocaleString("ko-KR",{ minimumFractionDigits: 0,maximumFractionDigits: 0} )}</td>
            <td className='textright'>{(product.rnd_sum/batch_into_size).toLocaleString("ko-KR",{ minimumFractionDigits: 2,maximumFractionDigits: 2} )}</td>
        </tr>
        <tr>
            <td>감가상각비</td>{/*Depreciation*/}
            <td className='textright'>{product.depreciation_sum.toLocaleString("ko-KR",{ minimumFractionDigits: 0,maximumFractionDigits: 0} )}</td>
            <td className='textright'></td>
            <td className='textright'>{product.depreciation_sum.toLocaleString("ko-KR",{ minimumFractionDigits: 0,maximumFractionDigits: 0} )}</td>
            <td className='textright'>{(product.depreciation_sum/batch_into_size).toLocaleString("ko-KR",{ minimumFractionDigits: 2,maximumFractionDigits: 2} )}</td>
        </tr>
        <tr>
            <td> 폐기물처리비 </td>{/*waste disposal*/}
            <td className='textright'>{product.indus_park_basic_fixed_ratio_sum.toLocaleString("ko-KR",{ minimumFractionDigits: 0,maximumFractionDigits: 0} )}</td>
            <td className='textright'>{product.waste_disposal_var_cost_sum.toLocaleString("ko-KR",{ minimumFractionDigits: 0,maximumFractionDigits: 0} )}</td>
            <td className='textright'>{product.total_fix_var_waste_disposal_cost.toLocaleString("ko-KR",{ minimumFractionDigits: 0,maximumFractionDigits: 0} )} </td>
            <td className='textright'>{(product. total_fix_var_waste_disposal_cost/batch_into_size).toLocaleString("ko-KR",{ minimumFractionDigits: 2,maximumFractionDigits: 2} )}</td>
        </tr>
        <tr>
            <td>전력비  </td>{/*electricity*/}
            <td className='textright'>{product.elec_cost_fix_ratio_sum.toLocaleString("ko-KR",{ minimumFractionDigits: 0,maximumFractionDigits: 0} )}</td>
            <td className='textright'>{product.elec_var_cost.toLocaleString("ko-KR",{ minimumFractionDigits: 0,maximumFractionDigits: 0} )}</td>
            <td className='textright'>{product.elec_fix_var_tot_cost.toLocaleString("ko-KR",{ minimumFractionDigits: 0,maximumFractionDigits: 0} )} </td>
            <td className='textright'>{(product.elec_fix_var_tot_cost/batch_into_size).toLocaleString("ko-KR",{ minimumFractionDigits: 2,maximumFractionDigits: 2} )}</td>
        </tr>
        <tr>
            <td>복리후생비 </td>{/*benefit*/}  		  	 
            <td className='textright'>{product.benefit_tot.toLocaleString("ko-KR",{ minimumFractionDigits: 0,maximumFractionDigits: 0} )}</td>
            <td className='textright'></td>
            <td className='textright'>{product.benefit_tot.toLocaleString("ko-KR",{ minimumFractionDigits: 0,maximumFractionDigits: 0} )}</td>
            <td className='textright'>{(product.benefit_tot/batch_into_size).toLocaleString("ko-KR",{ minimumFractionDigits: 2,maximumFractionDigits: 2} )}</td>
        </tr>
        <tr>
            <td> 지급수수료 </td>{/*payment fee*/}  		 	 

            <td className='textright'>{product.payment_tot.toLocaleString("ko-KR",{ minimumFractionDigits: 0,maximumFractionDigits: 0} )}</td>
            <td className='textright'></td>
            <td className='textright'>{product.payment_tot.toLocaleString("ko-KR",{ minimumFractionDigits: 0,maximumFractionDigits: 0} )}</td>
            <td className='textright'>{(product.payment_tot/batch_into_size).toLocaleString("ko-KR",{ minimumFractionDigits: 2,maximumFractionDigits: 2} )} </td>
        </tr>
        <tr>
            <td >수선비 </td>{/*repair fee*/}  		  	  


            <td className='textright'>{product.repair_total.toLocaleString("ko-KR",{ minimumFractionDigits: 0,maximumFractionDigits: 0} )}</td>
            <td className='textright'></td>
            <td className='textright'>{product.repair_total.toLocaleString("ko-KR",{ minimumFractionDigits: 0,maximumFractionDigits: 0} )}</td>
            <td className='textright'> {(product.repair_total/batch_into_size).toLocaleString("ko-KR",{ minimumFractionDigits: 2,maximumFractionDigits: 2} )}</td>
        </tr>
        <tr>
            <td> 연료비 </td>{/*fuel*/}	  	  	 

            <td className='textright'></td>
            <td className='textright'>{product.fuel_dir_cost.toLocaleString("ko-KR",{ minimumFractionDigits: 0,maximumFractionDigits: 0} )}</td>
            <td className='textright'>{product.fuel_dir_cost.toLocaleString("ko-KR",{ minimumFractionDigits: 0,maximumFractionDigits: 0} )}</td>
            <td className='textright'>{(product.fuel_dir_cost/batch_into_size).toLocaleString("ko-KR",{ minimumFractionDigits: 2,maximumFractionDigits: 2} )}</td>
        </tr>
        <tr>
            <td> 소모품비 </td>{/*consumable cost*/}  	 	 

            <td className='textright'></td>
            <td className='textright'>{product.consumable_sum.toLocaleString("ko-KR",{ minimumFractionDigits: 0,maximumFractionDigits: 0} )}</td>
            <td className='textright'>{product.consumable_sum.toLocaleString("ko-KR",{ minimumFractionDigits: 0,maximumFractionDigits: 0} )} </td>
            <td className='textright'>{(product.consumable_sum/batch_into_size).toLocaleString("ko-KR",{ minimumFractionDigits: 2,maximumFractionDigits: 2} )} </td>
        </tr>
        <tr>
            <td>세금과공과금 </td>{/*taxes and utilities*/}  		  	  

            <td className='textright'>{product.tax_total.toLocaleString("ko-KR",{ minimumFractionDigits: 0,maximumFractionDigits: 0} )}</td>
            <td className='textright'></td>
            <td className='textright'>{product.tax_total.toLocaleString("ko-KR",{ minimumFractionDigits: 0,maximumFractionDigits: 0} )}</td>
            <td className='textright'>{(product.tax_total/batch_into_size).toLocaleString("ko-KR",{ minimumFractionDigits: 2,maximumFractionDigits: 2} )}</td>
        </tr>
        <tr>
            <td> 보험료 </td>{/* insurance premium*/}  		  	 

            <td className='textright'>{product.insurance_tot.toLocaleString("ko-KR",{ minimumFractionDigits: 0,maximumFractionDigits: 0} )}</td>
            <td className='textright'></td>
            <td className='textright'>{product.insurance_tot.toLocaleString("ko-KR",{ minimumFractionDigits: 0,maximumFractionDigits: 0} )}</td>
            <td className='textright'>{(product.insurance_tot/batch_into_size).toLocaleString("ko-KR",{ minimumFractionDigits: 2,maximumFractionDigits: 2} )}</td>
        </tr>
        <tr>
            <td>수도광열비  </td>{/*Water and utilities*/} 	  	 	  

            <td className='textright'></td>
            <td className='textright'>{product.water_utility_tot.toLocaleString("ko-KR",{ minimumFractionDigits: 0,maximumFractionDigits: 0} )}</td>
            <td className='textright'>{product.water_utility_tot.toLocaleString("ko-KR",{ minimumFractionDigits: 0,maximumFractionDigits: 0} )}</td>
            <td className='textright'>{(product.water_utility_tot/batch_into_size).toLocaleString("ko-KR",{ minimumFractionDigits: 2,maximumFractionDigits: 2} )}</td>
        </tr>
        <tr>
            <td> 교육훈련비 </td>{/* Education and Training Expenses*/}   		  	  

            <td className='textright'>{product.education_fee.toLocaleString("ko-KR",{ minimumFractionDigits: 0,maximumFractionDigits: 0} )}</td>
            <td className='textright'></td>
            <td className='textright'>{product.education_fee.toLocaleString("ko-KR",{ minimumFractionDigits: 0,maximumFractionDigits: 0} )}</td>
            <td className='textright'>{(product.education_fee/batch_into_size).toLocaleString("ko-KR",{ minimumFractionDigits: 2,maximumFractionDigits: 2} )}</td>
        </tr>
        <tr>
            <td>  차량유지비  </td>{/*Vehicle maintenance fee*/}   		 	

            <td className='textright'>{product.vechicle_maint_cost.toLocaleString("ko-KR",{ minimumFractionDigits: 0,maximumFractionDigits: 0} )}</td>
            <td className='textright'></td>
            <td className='textright'> {product.vechicle_maint_cost.toLocaleString("ko-KR",{ minimumFractionDigits: 0,maximumFractionDigits: 0} )}</td>
            <td className='textright'>{(product.vechicle_maint_cost/batch_into_size).toLocaleString("ko-KR",{ minimumFractionDigits: 2,maximumFractionDigits: 2} )}</td>
        </tr>
        <tr>
            <td>  도서인쇄비 </td>{/*Book printing fee*/}  		  	 

            <td className='textright'>{product.book_print_fee.toLocaleString("ko-KR",{ minimumFractionDigits: 0,maximumFractionDigits: 0} )}</td>
            <td className='textright'></td>
            <td className='textright'>{product.book_print_fee.toLocaleString("ko-KR",{ minimumFractionDigits: 0,maximumFractionDigits: 0} )}</td>
            <td className='textright'>{(product.book_print_fee/batch_into_size).toLocaleString("ko-KR",{ minimumFractionDigits: 2,maximumFractionDigits: 2} )}</td>
        </tr>
        <tr>
            <td> 여비교통비 </td>{/* Travel expenses*/} 	  	  	  

            <td className='textright'></td>
            <td className='textright'>{product.teavel_expense_tot.toLocaleString("ko-KR",{ minimumFractionDigits: 0,maximumFractionDigits: 0} )}</td>
            <td className='textright'>{product.teavel_expense_tot.toLocaleString("ko-KR",{ minimumFractionDigits: 0,maximumFractionDigits: 0} )}</td>
            <td className='textright'>{(product.teavel_expense_tot/batch_into_size).toLocaleString("ko-KR",{ minimumFractionDigits: 2,maximumFractionDigits: 2} )}</td>
        </tr>
        <tr>
            <td>   접대비  </td>{/*Hospitality*/}  		  	  

            <td className='textright'>{product.enteritainment_fee.toLocaleString("ko-KR",{ minimumFractionDigits: 0,maximumFractionDigits: 0} )}</td>
            <td className='textright'></td>
            <td className='textright'>{product.enteritainment_fee.toLocaleString("ko-KR",{ minimumFractionDigits: 0,maximumFractionDigits: 0} )}</td>
            <td className='textright'>{(product.enteritainment_fee/batch_into_size).toLocaleString("ko-KR",{ minimumFractionDigits: 2,maximumFractionDigits: 2} )}</td>
        </tr>
        <tr>
            <td> 통신비  </td>{/*Communication Costs*/}   		  	  

            <td className='textright'>{product.communitaction_cost.toLocaleString("ko-KR",{ minimumFractionDigits: 0,maximumFractionDigits: 0} )}</td>
            <td className='textright'></td>
            <td className='textright'>{product.communitaction_cost.toLocaleString("ko-KR",{ minimumFractionDigits: 0,maximumFractionDigits: 0} )}</td>
            <td className='textright'>{(product.communitaction_cost/batch_into_size).toLocaleString("ko-KR",{ minimumFractionDigits: 2,maximumFractionDigits: 2} )}</td>
        </tr>
        <tr>
            <td>  지급임차료  </td>{/*Rent paid*/}   		  	  

            <td className='textright'>{product.rent_tot.toLocaleString("ko-KR",{ minimumFractionDigits: 0,maximumFractionDigits: 0} )}</td>
            <td className='textright'></td>
            <td className='textright'>{product.rent_tot.toLocaleString("ko-KR",{ minimumFractionDigits: 0,maximumFractionDigits: 0} )}</td>
            <td className='textright'>{(product.rent_tot/batch_into_size).toLocaleString("ko-KR",{ minimumFractionDigits: 2,maximumFractionDigits: 2} )}</td>
        </tr>
        <tr>
            <td> 운반비  </td>{/*Transport cost*/} 	  	  	 

            <td className='textright'></td>
            <td className='textright'>{product.transport_tot.toLocaleString("ko-KR",{ minimumFractionDigits: 0,maximumFractionDigits: 0} )}</td>
            <td className='textright'>{product.transport_tot.toLocaleString("ko-KR",{ minimumFractionDigits: 0,maximumFractionDigits: 0} )}</td>
            <td className='textright'>{(product.transport_tot/batch_into_size).toLocaleString("ko-KR",{ minimumFractionDigits: 2,maximumFractionDigits: 2} )}</td>
        </tr>
        <tr className='q5'>   	  	    
 
            <td className='fw-bolder'>제조경비(소계)</td>
            <td className='textright'>{manufacture_fix.toLocaleString("ko-KR",{ minimumFractionDigits: 0,maximumFractionDigits: 0} )}</td>
            <td className='textright'>{manufacture_var.toLocaleString("ko-KR",{ minimumFractionDigits: 0,maximumFractionDigits: 0} )}</td>
            <td className='textright'>{manufacture_tot.toLocaleString("ko-KR",{ minimumFractionDigits: 0,maximumFractionDigits: 0} )}</td>
            <td className='textright border-0'>{((product.rnd_sum/batch_into_size)+(product.depreciation_sum/batch_into_size)+(product.total_fix_var_waste_disposal_cost/batch_into_size)+(product.elec_fix_var_tot_cost/batch_into_size)+(product.benefit_tot/batch_into_size)+(product.payment_tot/batch_into_size)+(product.repair_total/batch_into_size)+(product.fuel_dir_cost/batch_into_size)+(product.consumable_sum/batch_into_size) +(product.tax_total/batch_into_size)+(product.insurance_tot/batch_into_size)+(product.water_utility_tot/batch_into_size)+(product.education_fee/batch_into_size)+(product.vechicle_maint_cost/batch_into_size)+(product.book_print_fee/batch_into_size)+(product.teavel_expense_tot/batch_into_size)+(product.enteritainment_fee/batch_into_size)+(product.communitaction_cost/batch_into_size)+(product.rent_tot/batch_into_size)+(product.transport_tot/batch_into_size)).toLocaleString("ko-KR",{ minimumFractionDigits: 2,maximumFractionDigits: 2} )}</td>
        </tr>
        <tr>
            <td>제조경비(소계) @/kg</td>   	  

            <td className=' textright'>{(manufacture_fix/batch_into_size).toLocaleString("ko-KR",{ minimumFractionDigits: 2,maximumFractionDigits: 2} )}</td>
            <td className=' textright'>{(manufacture_var/batch_into_size).toLocaleString("ko-KR",{ minimumFractionDigits: 2,maximumFractionDigits: 2} )}</td>
            <td className=' textright'></td>
            <td className='textright border-0' style={{backgroundColor: '#B2B2B2'}}></td>
        </tr>
        <tr>
            <td> 제조원가</td>   	  

            <td className=' textright'>{(manufacture_fix+product.tot_fix_cost).toLocaleString("ko-KR",{ minimumFractionDigits: 2,maximumFractionDigits: 2} )}</td>
            <td className=' textright'>{manufacture_cost_var.toLocaleString("ko-KR",{ minimumFractionDigits: 2,maximumFractionDigits: 2} )}</td>
            <td className=' textright'>{(product.material_pack_tot+total_manu+manufacture_tot).toLocaleString("ko-KR",{ minimumFractionDigits: 2,maximumFractionDigits: 2} )}</td>
            <td className='q2 textright border-0'></td>
        </tr>
        
        <tr>
            <td>제조원가(@kg)</td>   	 	
            <td className='textright'> {(manufacture_cost_fix/batch_into_size).toLocaleString("ko-KR",{ minimumFractionDigits: 2,maximumFractionDigits: 2} )}</td>
            <td className='textright'>{(manufacture_cost_var/batch_into_size).toLocaleString("ko-KR",{ minimumFractionDigits: 2,maximumFractionDigits: 2} )} </td>
            <td className='textright'></td>
            <td className='q2 textright border-0'>{((product.rnd_sum/batch_into_size)+(product.depreciation_sum/batch_into_size)+(product.total_fix_var_waste_disposal_cost/batch_into_size)+(product.elec_fix_var_tot_cost/batch_into_size)+(product.benefit_tot/batch_into_size)+(product.payment_tot/batch_into_size)+(product.repair_total/batch_into_size)+(product.fuel_dir_cost/batch_into_size)+(product.consumable_sum/batch_into_size) +(product.tax_total/batch_into_size)+(product.insurance_tot/batch_into_size)+(product.water_utility_tot/batch_into_size)+(product.education_fee/batch_into_size)+(product.vechicle_maint_cost/batch_into_size)+(product.book_print_fee/batch_into_size)+(product.teavel_expense_tot/batch_into_size)+(product.enteritainment_fee/batch_into_size)+(product.communitaction_cost/batch_into_size)+(product.rent_tot/batch_into_size)+(product.transport_tot/batch_into_size)+(product.material_pack_tot/batch_into_size)+((product.tot_fix_cost+product.tot_var_cost)/batch_into_size)).toLocaleString("ko-KR",{minimumFractionDigits:2,maximumFractionDigits:2})}</td>
        </tr>
       
        <tr>
            <td>생산투입량(kg)</td>   			

            <td className='border-0 q3 textright'></td>
            <td className='border-0 q3 textright'></td>
            <td className='border-0 q3 textright'>{batch_into_size.toLocaleString("ko-KR",{ minimumFractionDigits: 0,maximumFractionDigits: 0} )}</td>
            <td></td>

        </tr>
        <tr>
            <td>매출원가</td>  	 	  
            <td className='textright'> {((product.dispatch_amt)*(manufacture_fix+product.tot_fix_cost)/(product.material_pack_tot+total_manu+manufacture_tot)).toLocaleString("ko-KR",{ minimumFractionDigits: 0,maximumFractionDigits: 0} )}</td>
            <td className='textright'> {((product.dispatch_amt)*(manufacture_cost_var)/(product.material_pack_tot+total_manu+manufacture_tot)).toLocaleString("ko-KR",{ minimumFractionDigits: 0,maximumFractionDigits: 0} )}</td>
            <td className='textright'>{product.dispatch_amt.toLocaleString("ko-KR",{ minimumFractionDigits: 0,maximumFractionDigits: 0} )}</td>
            <td className='textright border-0 q2'></td>
        </tr>
        <tr>
            <td>출하량(kg)</td>   		

            <td className='border-0 q3 textright'></td>
            <td className='border-0 q3 textright'></td>
            <td className='border-0 q3 textright'>{product.dispatch_qty.toLocaleString("ko-KR",{ minimumFractionDigits: 0,maximumFractionDigits: 0} )}</td>
            <td className='border-0 q2'></td>
        </tr>
        <tr>
            <td>판매관리비</td>   		  

            <td className='textright'>{(product.sales_product*0.04).toLocaleString("ko-KR",{ minimumFractionDigits: 0,maximumFractionDigits: 0} )}</td>
            <td className='textright'></td>
            <td className='textright'>{(product.sales_product*0.04).toLocaleString("ko-KR",{ minimumFractionDigits: 0,maximumFractionDigits: 0} )}</td>
            <td className='font-weight-light textright border-0 q2'>매출*0.04	</td>
        </tr>
        <tr>
            <td>매출원가+판관비</td>    	  	 

            <td className='textright'>{(((product.dispatch_amt)*(manufacture_fix+product.tot_fix_cost)/(product.material_pack_tot+total_manu+manufacture_tot))+(product.sales_product*0.04)).toLocaleString("ko-KR",{ minimumFractionDigits: 0,maximumFractionDigits: 0} )}</td>
            <td className='textright'>{(good_sold_var+0).toLocaleString("ko-KR",{ minimumFractionDigits: 0,maximumFractionDigits: 0} )}</td>
            <td className='textright'> {(sale_unit_price+good_sold_var+0).toLocaleString("ko-KR",{ minimumFractionDigits: 0,maximumFractionDigits: 0})}</td>
            <td className='border-0 q2'></td>
        </tr>
        <tr>
            <td>(매출원가+판매관리비)/kg</td>   	 	 

            <td  className='textright'>{(sale_unit_price/product.dispatch_qty).toLocaleString("ko-KR",{ minimumFractionDigits: 0,maximumFractionDigits: 0} )}</td>
            <td  className='textright'>{((good_sold_var+0)/product.dispatch_qty).toLocaleString("ko-KR",{ minimumFractionDigits: 0,maximumFractionDigits: 0} )}</td>
            <td  className='textright'>{((sale_unit_price/product.dispatch_qty)+((good_sold_var+0)/product.dispatch_qty)).toLocaleString("ko-KR",{ minimumFractionDigits: 0,maximumFractionDigits: 0} )}</td>
            <td className='border-0 q2'></td>
        </tr>
        </>
    )
   })
  return (
    <div className='App'>
      <h1>{location.state.product_name} 원가표</h1>
      <p>{location.state.id}</p>
      

      <table id="empTable" className=''>
            <thead className=''>
                <tr className=''>
                    <th className='q1'>구분</th>
                    <th className='q1'>고정비 </th>
                    <th className='q1'>변동비</th>
                    <th className='q1'>합계</th>
                    <th className='q1'>단가/kg</th>
                  

                </tr>
                
            </thead>
            <tbody className='table_str q1'>
              {tablerow}
            </tbody>
           
      </table>
      <table  className='simpletable table table-bordered w-50'>
            <thead>
                <tr>
                    <th className='w-20'></th>
                    <th className='text-center'>고정성 매출원가 + 판관비</th>
                    <th className='text-center'>변동성 매출원가	</th>
                    <th className='text-center'>금액</th>
                    <th className='text-center'>비고(손익분기점 초과)</th>
                </tr>
            </thead>
            <tbody>
                {second_table_row}
            </tbody>
            
      </table>
      <br></br><br></br><br></br><br></br><br></br><br></br>
    </div>
  )
}

export default Product_summary
