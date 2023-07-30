import React from 'react'
import CakeTopper from '../../images/cake-topper.png';
import {CTable, CTableRow, CTableHeaderCell, CTableHead, CTableBody, CTableDataCell} from '@coreui/react';

export default function ItemList() {
  return (
        <div className="my-cart">
            <h3>Cart - 0 items</h3>
                
            <div className="cart-item">
              <div className="cart-body">
                <CTable striped hover style={{width: "100%"}}>
                  <CTableHead>
                    <CTableRow>
                      <CTableHeaderCell scope="col">Item</CTableHeaderCell>
                      <CTableHeaderCell scope="col">Item Name</CTableHeaderCell>
                      <CTableHeaderCell scope="col">Price</CTableHeaderCell>
                      <CTableHeaderCell scope="col">Quantity</CTableHeaderCell>
                      <CTableHeaderCell scope="col">Action</CTableHeaderCell>
                    </CTableRow>
                  </CTableHead>
                  <CTableBody>
                    <CTableRow active>
                      <CTableHeaderCell scope="row">
                        <img src={CakeTopper} className="cart-img"/>
                      </CTableHeaderCell>
                      <CTableDataCell>Item Name</CTableDataCell>
                      <CTableDataCell>$55.90</CTableDataCell>
                      <CTableDataCell>3</CTableDataCell>
                      <CTableDataCell><button>Delete</button></CTableDataCell>
                    </CTableRow>
                    <CTableRow active>
                      <CTableHeaderCell scope="row">
                        <img src={CakeTopper} className="cart-img"/>
                      </CTableHeaderCell>
                      <CTableDataCell>Item Name</CTableDataCell>
                      <CTableDataCell>$55.90</CTableDataCell>
                      <CTableDataCell>3</CTableDataCell>
                      <CTableDataCell><button>Delete</button></CTableDataCell>
                    </CTableRow>
                  </CTableBody>
                </CTable>
                </div>
              </div>
        </div>
  )
}
