import React, { useEffect, useState } from 'react'
import { CTable, CTableRow, CTableHeaderCell, CTableHead, CTableBody } from '@coreui/react';
import GuestView from './GuestView';
import UserView from './UserView';
import { useSelector } from 'react-redux';
import PriceSummary from './PriceSummary';
import GuestHeader from './GuestHeader';
import axios from 'axios';

export default function ShoppingCart() {
  
  const user = useSelector(state => state.user.value);
  const [userCart, setUserCart] = useState([]);
  const guestCart = useSelector((state) => state.cart);


  useEffect(() => {
    axios.get(`http://localhost:8080/api/users/cart/user-cart?id=${user.id}`)
        .then((response) => {
            setUserCart(response.data);
        }).catch((error) => {
            console.log(error);
        })
    }, [user, userCart, guestCart]);



  const view = {
    userView: <UserView userCart={userCart}/>,
    guestView: <GuestView guestCart={guestCart}/>
  }

  return (
    <div className="cart-container">
        
        <GuestHeader />

        <div className="my-cart">
          <div className="cart-item">
            <div className="cart-body">
              <CTable striped hover style={{width: "100%"}}>
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell scope="col">Item</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Item Name</CTableHeaderCell>
                    <CTableHeaderCell scope="col">More Info</CTableHeaderCell>
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

        <PriceSummary cart={user.isGuest ? guestCart : userCart} user={user}/>
    </div>
  )
}
