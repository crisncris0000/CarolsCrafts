import React from 'react'
import { CTable, CTableRow, CTableHeaderCell, CTableHead, CTableBody } from '@coreui/react';
import GuestView from './GuestView';

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
                    <GuestView />
                  </CTableBody>
                </CTable>
                </div>
              </div>
        </div>
  )
}
