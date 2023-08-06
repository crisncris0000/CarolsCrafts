import React from 'react';
import { CTableRow, CTableHeaderCell, CTableDataCell } from '@coreui/react';
import axios from 'axios';

export default function UserView( {userCart} ) {
    const handleRemove = (cart) => {
        axios.delete(`http://localhost:8080/api/users/cart/remove-cart?id=${cart.id}`)
            .then((response) => {
                console.log(response.data);
            }).catch((error) => console.log(error));
        }

    return (
        <>
            {userCart.map((cart) => (
                <CTableRow active key={cart.item.id}>
                <CTableHeaderCell scope="row">
                    <img src={`data:${cart.item.mimeType};base64,${cart.item.imageData}`} className="cart-img"/>
                </CTableHeaderCell>
                <CTableDataCell>{cart.item.itemTitle}</CTableDataCell>
                <CTableDataCell>{`$${cart.item.itemPrice}`}</CTableDataCell>
                <CTableDataCell>{cart.quantity}</CTableDataCell>
                <CTableDataCell><button type="button" onClick={() => handleRemove(cart)}>Remove</button></CTableDataCell>
                </CTableRow>
            ))}
        </>
    )
}