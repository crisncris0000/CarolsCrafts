import React, { useEffect, useState } from 'react';
import { CTableRow, CTableHeaderCell, CTableDataCell } from '@coreui/react';
import axios from 'axios';
import { useSelector } from 'react-redux';

export default function UserView() {
    const [userCart, setUserCart] = useState([]);
    const user = useSelector((state) => state.user.value);

    useEffect(() => {
        axios.get(`http://localhost:8080/api/users/cart/user-cart?id=${user.id}`)
            .then((response) => {
                setUserCart(response.data);
            }).catch((error) => {
                console.log(error);
            })
        }, [userCart]);

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
                <CTableDataCell><button onClick={() => handleRemove(cart)}>Remove</button></CTableDataCell>
                </CTableRow>
            ))}
        </>
    )
}
