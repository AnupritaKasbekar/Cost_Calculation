import './App.css';
import {BrowserRouter as Router , Route,Routes} from 'react-router-dom'
import IncomeStatementInsert from './pages/IncomeStatementInsert';
import {Navbar, Nav,NavDropdown} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
/*import BomsTables from './pages/BomsTablesReports';*/
import BomsNames from './pages/BomsNames';
//import Ingredies from './pages/Ingredies';
import Create from './pages/Create';
import BomsTablesReports from './pages/BomsTablesReports';
import MaterialReport from './pages/MaterialReport';
import MaterialById from './pages/MaterialById';
//import ManHour from './pages/ManHour';
//import DateWiseMaterial from './pages/DateWiseMaterial';
import Purchase_sale_all_data from './pages/Purchase_sale_all_data';
//import Material_in_out_report from './pages/Material_in_out_report';
import Product_in_out_report from './pages/Product_in_out_report';
/*import Whole_m_in_out from './pages/whole_m_in_out';*/
import Raw_material_inOut from './pages/Raw_material_inOut';
import Package_material_in_out from './pages/Package_material_in_out';
import Merchandise_in_out from './pages/Merchandise_in_out';
import Purchase_sale_all_data_p from './pages/Purchase_sale_all_data_p';
import Man_hrs_product_main_table from './pages/Man_hrs_product_main_table';
import Department_expense from './pages/Department_expense';
import Raw_package_material_cost from './pages/Raw_package_material_cost';
import Manufacturing_costs from './pages/Manufacturing_costs';
import Depreciation_expenses from './pages/Depreciation_expenses';
import Waste_usage_by_products from './pages/Waste_usage_by_products';
import SummeryReport from './pages/SummeryReport';
import Manufacturing_cost_by_api_reports from './pages/Manufacturing_cost_by_api_reports';
import Byproduct_data from './pages/Byproduct_data';
import Product_summary from './pages/Product_summary';
import IncomeStatement from './pages/IncomeStatement';
import SpecialProduct_edit from './pages/SpecialProduct_edit';
import Department_expense_whole from './pages/Department_expense_whole';
import Summery_report_whole from './pages/Summery_report_whole';
import Manufacturing_cost_whole from './pages/Manufacturing_cost_whole';
import Raw_package_material_cost_whole from './pages/Raw_package_material_cost_whole';
import Byproduct_data_whole from './pages/Byproduct_data_whole';
import Income_statement_whole from './pages/Income_statement_whole';
import Production_manhr_whole from './pages/Production_manhr_whole';
import Qc_mnhr_whole from './pages/Qc_mnhr/Qc_mnhr_whole';
import SalesWhole from './pages/Sales/SalesWhole';
import ProdWhole from './pages/Production/ProdWhole';
import StockWhole from './pages/Stock/StockWhole';
import WipWhole from './pages/Wip/WipWhole';
import LaborWhole from './pages/Labor_fee/LaborWhole';
import ManuExpWhole from './pages/Manufacture_expense/ManuExpWhole';
import LaborForm from './pages/LaborForm';
function App() {

  return (
    <div >
    
      <Router>
       
        <Navbar  bg="dark" variant="dark" className='fixed-top'>

            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
               
                    <NavDropdown title="BOM" id="nav-dropdown">
                      <NavDropdown.Item id="dn" href='/Create' value="원재료">Create New Product</NavDropdown.Item>
                      <NavDropdown.Item id="dn1" href="/n">Product Names</NavDropdown.Item>
                      <NavDropdown.Item id="dn1" href="/BomsTablesReports">BOM</NavDropdown.Item>
                      
                    </NavDropdown>
                    <NavDropdown title="Manufacturing Cost" id="nav-dropdown">
                      <NavDropdown.Item id="dn" href='/department_expense' value="원재료">Labor Cost</NavDropdown.Item>
                      <NavDropdown.Item id="dn1" href="/raw_pack">Material Cost</NavDropdown.Item>
                      <NavDropdown.Item id="dn1" href="/man_hr_pr">Cost calculation Product Report</NavDropdown.Item>
                      <NavDropdown.Item id="dn1" href="/manufacturing_cost">Overhead Costs</NavDropdown.Item>
                      
                    </NavDropdown>
                
                 
               
                    <NavDropdown title="In-Out Report" id="nav-dropdown">
                      <NavDropdown.Item id="dn" href='/raw_in_out' value="원재료">Raw Material-원재료</NavDropdown.Item>
                      <NavDropdown.Item id="dn1" href="/pack_in_out">Package Material - 부재료</NavDropdown.Item>
                      <NavDropdown.Item id="dn1" href="/mer_in_out">Merchandise -상품 </NavDropdown.Item>
                      <NavDropdown.Item id="dn1" href="/P_in_out">Product Report </NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Import Data" id="nav-dropdown">
                      <NavDropdown.Item id="dn" href='/depriciation' value="원재료">Depreication Expense Form</NavDropdown.Item>
                      <NavDropdown.Item id="dn1" href="/waste">Waste & usage product wise</NavDropdown.Item>
                      <NavDropdown.Item id="dn1" href="/laborform">Labor 노무비 form</NavDropdown.Item>

                    </NavDropdown>
                    <NavDropdown title="Cost Calculation" id="nav-dropdown">
                      <NavDropdown.Item id="dn" href='/prod_mn_hr' value="원재료">생산 Man-Hour</NavDropdown.Item>
                      <NavDropdown.Item id="dn1" href="/qc_mnhr">Q.C팀 Man-Hour</NavDropdown.Item>
                      <NavDropdown.Item id="dn1" href="/sales">매출(생산투입有) Sales</NavDropdown.Item>
                      <NavDropdown.Item id="dn1" href="/prod">생산투입금액(투입기준) production</NavDropdown.Item>
                      <NavDropdown.Item id="dn1" href="/stock">기초재고 Basic Stock</NavDropdown.Item>
                      <NavDropdown.Item id="dn1" href="/wip">기초재공 원부재료비work in process</NavDropdown.Item>
                     
                      <NavDropdown.Item id="dn1" href="/labor">노무비</NavDropdown.Item>
                      <NavDropdown.Item id="dn1" href="/manuExp">제조경비</NavDropdown.Item>
                     
                    </NavDropdown>
                    <Nav.Link href="/summery">제조원가명세서 Report</Nav.Link>
                    <Nav.Link href="/manufacture_api">사업별 제조원가 Report</Nav.Link>
                    <Nav.Link href="/productwise">주요제품별 원가</Nav.Link>
                    <Nav.Link href="/incomeStatement">손익계산서</Nav.Link>
                    
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        <Routes>
          <Route path='/raw_in_out' element={<Raw_material_inOut/>}></Route>
          <Route path='/laborform' element={<LaborForm/>}></Route>
          <Route path='/pack_in_out' element={<Package_material_in_out/>}></Route>
          <Route path='/mer_in_out' element={<Merchandise_in_out/>}></Route>
          <Route path='/P_In_out' element={<Product_in_out_report/>}></Route>         
          <Route path="/BomsTablesReports" element={<BomsTablesReports/>}></Route>
          <Route path="/n" element={<BomsNames/>}></Route>         
          <Route path="/Create" element={<Create/>}></Route>
          <Route path="/MaterialReport" element={<MaterialReport/>}></Route>
          <Route path="/department_expense/Y22" element={<Department_expense/>}></Route>
          <Route path="/MaterialReport/getById/:code_id" element={<MaterialById/>}></Route>
          <Route path="/inouttogether/getById/:code_id" element={<Purchase_sale_all_data/>}></Route>
          <Route path="/inouttogetherp/getById/:code_id" element={<Purchase_sale_all_data_p/>}></Route>
          <Route path ="/w_m_in_out/:code_id" element={<whole_m_in_out/>}></Route>
          <Route path ="/man_hr_pr" element={<Man_hrs_product_main_table/>}></Route>
          <Route path ="/raw_pack" element={<Raw_package_material_cost_whole/>}></Route>
          <Route path='/manufacturing_cost' element={<Manufacturing_cost_whole/>}></Route>
          <Route path='/depriciation' element={<Depreciation_expenses/>}></Route>
          <Route path='/waste' element={<Waste_usage_by_products/>}></Route>
          <Route path='/summery' element={<Summery_report_whole/>}></Route>
          <Route path='/manufacture_api' element={<Manufacturing_cost_by_api_reports/>}></Route>
          <Route path='/productwise' element={<Byproduct_data_whole/>}></Route>
          <Route path='/Product_summary' element={<Product_summary/>}></Route>
          <Route path='/incomeStatement' element={<Income_statement_whole/>}></Route>
          <Route path="/specialProductEdit" element={<SpecialProduct_edit/>}></Route>
          <Route path="/department_expense" element={<Department_expense_whole/>}></Route>
          <Route path='/prod_mn_hr' element={<Production_manhr_whole/>}></Route>
          <Route path='/qc_mnhr' element={<Qc_mnhr_whole/>}></Route>
          <Route path='/sales' element={<SalesWhole/>}></Route>
          <Route path='/prod' element={<ProdWhole/>}></Route>
          <Route path='/stock' element={<StockWhole/>}></Route>
          <Route path='/wip' element={<WipWhole/>}></Route>
          <Route path='/labor' element={<LaborWhole/>}></Route>
          <Route path='/manuExp' element={<ManuExpWhole/>}></Route>
          <Route path='/insert' element={<IncomeStatementInsert/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
