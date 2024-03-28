import React from 'react'
import ImportExcel from './ImportExcel'
import ImportMaterialCosts from './ImportMaterialCosts'
import Import_excel_waste_overall from './Import_excel_waste_overall'

function Waste_usage_by_products() {
  return (

    <div className=''>
        <h1 className='App'>Import Files</h1>
        <p className='text-center'>Import waste by product excel file</p>
      <ImportExcel/>
      <p className='text-center'>Import waste overall excel file</p>
      <Import_excel_waste_overall/>
      <p className='text-center'>Import Material Cost excel file</p>
      <ImportMaterialCosts/>

    </div>
  )
}

export default Waste_usage_by_products
