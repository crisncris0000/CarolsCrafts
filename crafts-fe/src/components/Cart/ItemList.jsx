import React from 'react'
import { CTable, CTableRow, CTableHeaderCell, CTableHead, CTableBody } from '@coreui/react';
import GuestView from './GuestView';
import UserView from './UserView';
import { useSelector } from 'react-redux';

export default function ItemList() {

  const view = {
    userView: <UserView />,
    guestView: <GuestView />
  }

  const user = useSelector(state => state.user.value);

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
                    {user.isGuest ? view.guestView : view.userView}
                  </CTableBody>
                </CTable>
                </div>
              </div>
        </div>
  )
}
