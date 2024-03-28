import React from 'react'
import {Col,Row,Container} from 'react-bootstrap';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';

function TableToExcel() {
  return (
    <div>
       <Container>
         <Row>
             <Col>
             <ReactHTMLTableToExcel
                    id="test-table-xls-button"
                    className="download-table-xls-button"
                    table="empTable"
                    filename="MaterialList"
                    sheet="MaterialList"
                    buttonText="Download as XLS"/>
             </Col>
           
         </Row>
     </Container>
    </div>
  )
}

export default TableToExcel
