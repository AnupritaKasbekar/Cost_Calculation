import React from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import {Formik,Form,Field} from 'formik'

function SpecialProduct_edit() {
  let navigate = useNavigate()
  const location = useLocation();
 
 const id = location.state.product_id;
 const initialValues={
  batch_size:"",
  batch:"",
  synthesis_mn_hr:"",
  syn_mn_into_batch:"",
  sales_amt:"",
  sales_product:"",
  qc_man_hr:"",
  qc_man_into_batch:"",
  sale_by_busins:"",
  prod_amt:"",
  opening_wip_fix_amt:"",
  opening_wip_variable_amt:"",
  opening_wip_amt:"",
  product_in:"",
  material_cost:"",
  packing_material:"",
  labor_dir_cost_mn_hr_fix_cost:"",
  labor_dir_cost_mn_hr_var_cost:"",
  labor_cost_qc_mn_hr_fix_cost:"",
  labor_cost_qc_mn_hr_var_cost:"",
  labor_cost_support_dept_fix_cost:"",
  labor_cost_support_dept_var_cost:"",
  rndFixedlabor:"",
  rndlabor_cost_variation:"",
  business_fixed_costs:"",
  common_fixed_cost:"",
  fixed_ratio_sum:"",
  variable_sum:"",
  depreciation_by_business_sale:"",
  depreciation_by_product_direct:"",
  depreciation_common_by_sale:"",
  waste_liquid_direct:"",
  activated_carbon_earth_usage:"",
  activate_carbon_item_direct:"",
  common_waste_organic:"",
  electric_cost_by_business_fix:"",
  elec_cost_three_fact_fix:""
  /*water_waste_plant:"",
  gelatin_fp:"",
  general_garbage:"",
  wastewater_batch:"",
  wastewater:""*/

 }
 console.log("Product_id:"+id)
   
   const onSubmit=(data)=>{
    axios.patch(`http://localhost:3001/man_hrs_p/${location.state.product_id}`,data).then((response)=>{});
    navigate("/man_hr_pr")
   }
   
  return (
    <div className='App app_p'>
      <h4 className='title_p w-100'>업데이트 Product : {id}</h4>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Form className='formContainer'>
          {/*Batch and batch size*/}
          <div className='container sub_con'>
              <div className='row'>
                <div className='col-6'>
                
                  <Field autocomplete="off" name="batch_size" id="inputCreatePost" placeholder="Batch Size"></Field>
                </div>
                <div className='col-6'>
              
                  <Field autocomplete="off" name="batch" id="inputCreatePost" placeholder="투입Batch수 amount in float"></Field>
                </div>
              </div>

          </div>
          
        
         {/*--------------생산Man-Hour------------*/}
          <div className='container sub_con'>
            <p>생산Man-Hour</p>
          <div className='row'>
            <div className='col-6'>
           
            <Field autocomplete="off" name="synthesis_mn_hr" id="inputCreatePost" placeholder="man-hour"></Field>
            </div>
            <div className='col-6'>
           
            <Field autocomplete="off" name="syn_mn_into_batch" id="inputCreatePost" placeholder="man-hour×투입batch"></Field>
            </div>
          </div>
          </div>
         

           {/*-----------------QC팀 man-hour---------------*/}
          <div className='container sub_con'>
            <p>QC팀 man-hour</p>
          <div className='row'>
            <div className='col-6'>
          
            <Field autocomplete="off" name="qc_man_hr" id="inputCreatePost" placeholder="QC man-hour"></Field>
            </div>
            <div className='col-6'>
          
            <Field autocomplete="off" name="qc_man_into_batch" id="inputCreatePost" placeholder="QC man-hour×투입batch"></Field>
            </div>
          </div>
          </div>
          

           {/*-----------------매출---------------*/}
          <div className='container sub_con'>
                <p>매출</p>
              <div className='row'>
                <div className='col-6'>
              
                <Field autocomplete="off" name="sales_amt" id="inputCreatePost" placeholder="매출액(생산무관)"></Field>
                </div>
                <div className='col-6'>
              
                <Field autocomplete="off" name="sales_product" id="inputCreatePost" placeholder="매출액(생산투입有)"></Field>
                </div>

                <div className='col-6'>
              
                <Field autocomplete="off" name="sale_by_busins" id="inputCreatePost" placeholder="사업별%(생산투입有)"></Field>
                </div>

                
              </div>
          </div>
            {/*-----------------product---------------*/}
          <div className='container sub_con'>
            <p>생산투입금액(투입기준)</p>
              <div className='row'>
                <div className='col-6'>
              
                <Field autocomplete="off" name="prod_amt" id="inputCreatePost" placeholder="금액"></Field>
                </div>
                

                
              </div>
          </div>

           {/*-----------------기초재공 work in process---------------*/}
           <div className='container sub_con'>
                <p>기초재공</p>
              <div className='row'>
                <div className='col-6'>
              
                <Field autocomplete="off" name="opening_wip_fix_amt" id="inputCreatePost" placeholder="고정비"></Field>
                </div>
                <div className='col-6'>
              
                <Field autocomplete="off" name="opening_wip_variable_amt" id="inputCreatePost" placeholder="변동비"></Field>
                </div>

                <div className='col-6'>
              
                <Field autocomplete="off" name="opening_wip_amt" id="inputCreatePost" placeholder="금액"></Field>
                </div>

                
              </div>
          </div>

          {/*----------------Product in qty---------------*/}
          <div className='container sub_con'>
            <p>제조수량</p>
            <div className='col-6'>
              
                <Field autocomplete="off" name="product_in" id="inputCreatePost" placeholder="수량"></Field>
                </div>
          </div>

           {/*----------------원부재료비---------------*/}

          <div className='container sub_con'>
            <p>원부재료비</p>
            <div className='row'>
            <div className='col-6'>
              <Field autocomplete="off" name="material_cost" id="inputCreatePost" placeholder="원료비"></Field>
            </div>
            <div className='col-6'>
              <Field autocomplete="off" name="packing_material" id="inputCreatePost" placeholder="재료비"></Field>
            </div>
            </div>
          </div>


        {/*----------------직접비 (직접 노무비 배분 기준)	--------------*/}

        <div className='container sub_con'>
            <p>직접비(man-hour 기준 배분)	</p>
            <div className='row'>
            <div className='col-6'>
              <Field autocomplete="off" name="labor_dir_cost_mn_hr_fix_cost" id="inputCreatePost" placeholder="고정비"></Field>
            </div>
            <div className='col-6'>
              <Field autocomplete="off" name="labor_dir_cost_mn_hr_var_cost" id="inputCreatePost" placeholder="변동비"></Field>
            </div>
            </div>
          </div>

         {/*----------------QC(man-hour 기준 배분)--------------*/}

         <div className='container sub_con'>
            <p>QC(man-hour 기준 배분)	</p>
            <div className='row'>
            <div className='col-6'>
              <Field autocomplete="off" name="labor_cost_qc_mn_hr_fix_cost" id="inputCreatePost" placeholder="고정비"></Field>
            </div>
            <div className='col-6'>
              <Field autocomplete="off" name="labor_cost_qc_mn_hr_var_cost" id="inputCreatePost" placeholder="변동비"></Field>
            </div>
            </div>
          </div>


           {/*----------------지원(공통)(생산금액 기준 배분)	--------------*/}

         <div className='container sub_con'>
            <p>지원(공통)(생산금액 기준 배분)		</p>
            <div className='row'>
            <div className='col-6'>
              <Field autocomplete="off" name="labor_cost_support_dept_fix_cost" id="inputCreatePost" placeholder="고정비"></Field>
            </div>
            <div className='col-6'>
              <Field autocomplete="off" name="labor_cost_support_dept_var_cost" id="inputCreatePost" placeholder="변동비"></Field>
            </div>
            </div>
          </div>


           {/*----------------연구개발비(고정_변동) (매출기준)	--------------*/}

         <div className='container sub_con'>
            <p>연구개발비(고정_변동) (매출기준)</p>
            <div className='row'>
            
                <div className='col-6'>
                  <Field autocomplete="off" name="rndFixedlabor" id="inputCreatePost" placeholder="연구개발노무비_고정"></Field>
                </div>
                
                <div className='col-6'>
                  <Field autocomplete="off" name="rndlabor_cost_variation" id="inputCreatePost" placeholder="연구개발노무비_변동"></Field>
                </div>

                <div className='col-6'>
                  <Field autocomplete="off" name="business_fixed_costs" id="inputCreatePost" placeholder="사업별_고정비"></Field>
                </div>
                
                <div className='col-6'>
                  <Field autocomplete="off" name="common_fixed_cost" id="inputCreatePost" placeholder="공통_고정비"></Field>
                </div>

                <div className='col-6'>
                  <Field autocomplete="off" name="fixed_ratio_sum" id="inputCreatePost" placeholder="고정비합계"></Field>
                </div>

                <div className='col-6'>
                  <Field autocomplete="off" name="variable_sum" id="inputCreatePost" placeholder="변동비합계"></Field>
                </div>
            </div>
          </div>

          {/*----------------depreciation--------------*/}
          <div className='container sub_con'>
            <p>감가상각비(고정)</p>
            <div className='row'>
            
                <div className='col-6'>
                  <Field autocomplete="off" name="depreciation_by_business_sale" id="inputCreatePost" placeholder="사업별(매출기준)"></Field>
                </div>
                
                <div className='col-6'>
                  <Field autocomplete="off" name="depreciation_by_product_direct" id="inputCreatePost" placeholder="제품별(직접) "></Field>
                </div>

                <div className='col-6'>
                  <Field autocomplete="off" name="depreciation_common_by_sale" id="inputCreatePost" placeholder="공통(매출기준)"></Field>
                </div>
                
               
            </div>
          </div>

          {/*----------------폐기물처리비 waste disposal --------------*/}

         <div className='container sub_con'>
            <p>폐기물처리비 waste disposal </p>
            <div className='row'>
            
                <div className='col-6'>
                  <Field autocomplete="off" name="waste_liquid_direct" id="inputCreatePost" placeholder="폐액(품목_직접)"></Field>
                </div>
                
                <div className='col-6'>
                  <Field autocomplete="off" name="activated_carbon_earth_usage" id="inputCreatePost" placeholder="활성탄_규조토사용량"></Field>
                </div>

                <div className='col-6'>
                  <Field autocomplete="off" name="activate_carbon_item_direct" id="inputCreatePost" placeholder="활성탄外(품목_직접)"></Field>
                </div>
                
                <div className='col-6'>
                  <Field autocomplete="off" name=" common_waste_organic" id="inputCreatePost" placeholder="폐유기용제 공통 (생산금액)"></Field>
                </div>

                {/*<div className='col-6'>
                  <Field autocomplete="off" name="water_waste_plant" id="inputCreatePost" placeholder="폐수장 오니슬러지 (생산금액)"></Field>
                </div>

                <div className='col-6'>
                  <Field autocomplete="off" name="gelatin_fp" id="inputCreatePost" placeholder="젤라틴/천연물(변동) (생산금액기준)"></Field>
                </div>

                <div className='col-6'>
                  <Field autocomplete="off" name="general_garbage" id="inputCreatePost" placeholder="일반쓰레기(변동)(매출기준)"></Field>
                </div>

                <div className='col-6'>
                  <Field autocomplete="off" name="wastewater_batch" id="inputCreatePost" placeholder="폐수량/batch"></Field>
                </div>

                <div className='col-6'>
                  <Field autocomplete="off" name="wastewater" id="inputCreatePost" placeholder="폐수량"></Field>
                </div>*/}

                
            </div>
          </div>


                {/*----------------Electricity cost --------------*/}

         <div className='container sub_con'>
            <p>전력비 electricity cost</p>
            <div className='row'>
            
                <div className='col-6'>
                  <Field autocomplete="off" name="electric_cost_by_business_fix" id="inputCreatePost" placeholder="기본료_사업별(고정) (생산기준)"></Field>
                </div>
                
                <div className='col-6'>
                  <Field autocomplete="off" name="elec_cost_three_fact_fix" id="inputCreatePost" placeholder="기본료_사업별(고정) (생산기준)"></Field>
                </div>

               

              
                
            </div>
          </div>
             <button type='update'>업데이트 Product</button>
        </Form>
      </Formik>
    
    </div>
  )
}

export default SpecialProduct_edit
