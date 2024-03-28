const express = require('express');
const app = express();
const cors = require("cors");
//middleware
app.use(express.json());
app.use(cors());
const db = require('./models');


db.Material_names.hasMany(db.Material_costs,{
    onDelete:"cascade",
})
/*db.Man_hrs_and_products.hasMany(db.BomsTablesReports_apis,{
    onDelete:"cascade",
})*/
db.Material_names.hasMany(db.BomsTablesReports_apis,{
    onDelete:"cascade",
})
const bom = require("./routes/BomsTablesReports_apis");
app.use("/bom",bom)

const importS = require("./routes/Importsamples");
app.use("/importS/import_product",importS);

const m_cost = require("./routes/Material_costs");
app.use("/material/cost",m_cost)

const m_nm = require("./routes/Material_names");
app.use("/material/name",m_nm)


const m_report = require("./routes/Material_reports");
app.use("/material/report",m_report)

const in_out_report = require("./routes/Purchase_sale_together");
app.use("/inoutTo/report",in_out_report)

const in_report = require("./routes/Purchases_in_cost");
app.use("/puchaseIn/report",in_report)

const out_report = require("./routes/Sales_out_costs");
app.use("/SalesOut/report",out_report)

const bom_cost = require("./routes/Bom_costs")
app.use("/bomc",bom_cost)

const labor = require("./routes/Man_hrs_and_products");
app.use("/labor",labor);

const utility = require("./routes/Utility_base");
app.use("/utility",utility);

const inout = require("./routes/Purchase_sale_all_data");
app.use("/inout",inout);

const m_in_out_report = require("./routes/Material_in_out_report")
app.use("/m_in_out_report",m_in_out_report);


const p_in_out_report = require("./routes/Product_in_out_report")
app.use("/p_in_out_report",p_in_out_report);


const pack_mat_inout_report = require("./routes/Package_material_in_out_re")
app.use("/pack_mat_inout_report",pack_mat_inout_report);

const mer_mat_inout_report = require("./routes/Merchandise_in_out_re")
app.use("/mer_mat_inout_report",mer_mat_inout_report);

const raw_mat_inout_report = require("./routes/Raw_material_inOut_re")
app.use("/raw_mat_inout_report",raw_mat_inout_report);

const man_hrs_p = require("./routes/Man_hrs_and_product_main_table")
app.use("/man_hrs_p",man_hrs_p);

const department_expense = require("./routes/Department_expenses")
app.use("/department_expense",department_expense);

const raw_package_material_cost = require("./routes/Raw_package_material_cost");
app.use("/raw_pack",raw_package_material_cost);

const manufacturing_costs = require("./routes/Manufacturing_costs");
app.use("/manufacture_cost",manufacturing_costs);

const Depreciation_alls = require("./routes/Depreciation_alls");
app.use("/deoreciationAll",Depreciation_alls);

const waste_d = require("./routes/Waste_usage_by_products");
app.use("/waste",waste_d);

const waste_o = require("./routes/Waste_cost_details");
app.use("/w/overall",waste_o);

const import_material= require("./routes/ImportMaterialCosts");
app.use("/import",import_material);


const material__api= require("./routes/Manufacturing_cost_by_api_reports");
app.use("/md",material__api);

const Inventorybs = require("./routes/InventroyWebs");
app.use("/invent",Inventorybs);

db.sequelize.sync().then(()=>{
    app.listen(3001,()=>{
        console.log("server has started on port 3001")
    });
});
