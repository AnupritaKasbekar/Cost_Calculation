import React from 'react'
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import {Col,Row,Container} from 'react-bootstrap';
function Import_to_excel() {
    <Container>
    <Row>
        <Col>
        <ReactHTMLTableToExcel
               id="test-table-xls-button"
               className="download-table-xls-button"
               table="empTable"
               filename="ProductList"
               sheet="ProductList"
               buttonText="Download as XLS"/>
        </Col>
        <Col>
      
        
        </Col>
    </Row>
</Container>
  return (
    <div>
      
    </div>
  )
}

export default Import_to_excel
