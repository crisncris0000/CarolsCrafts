import React from 'react';
import { CTableRow, CTableHeaderCell, CTableDataCell } from '@coreui/react';
import axios from 'axios';
import MoreInfo from './MoreInfo';

export default function UserView( {userCart} ) {
    const handleRemove = (cart) => {
        axios.delete(`http://localhost:8080/api/users/cart/remove-cart?id=${cart.id}`)
            .then((response) => {
                console.log(response.data);
            }).catch((error) => console.log(error));
        }

    return (
        <>
            {userCart.map((cart, index) => (
                <CTableRow active key={`${cart.item.id}-${index}`}>
                <CTableHeaderCell scope="row">
                    <img src={`data:${cart.item.mimeType};base64,${cart.item.imageData}`} className="cart-img"/>
                </CTableHeaderCell>
                <CTableDataCell>{cart.item.itemTitle}</CTableDataCell>
                <CTableDataCell><MoreInfo cart={cart}/></CTableDataCell>
                <CTableDataCell>{cart.item.itemPrice * cart.quantity}</CTableDataCell>
                <CTableDataCell><button type="button" onClick={() => handleRemove(cart)}>Remove</button></CTableDataCell>
                </CTableRow>
            ))}
        </>
    )
}
