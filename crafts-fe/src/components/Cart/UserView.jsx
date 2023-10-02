import React, { useEffect, useState } from 'react';
import { CTableRow, CTableHeaderCell, CTableDataCell } from '@coreui/react';
import axios from 'axios';
import MoreInfo from './MoreInfo';
import Error from '../Messages/Error';
import Success from '../Messages/Success';

export default function UserView( {userCart} ) {

    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [success, setSuccess] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');

    const handleRemove = (cart) => {
        axios.delete(`https://api.mckcreation.com/api/users/cart/remove-cart?id=${cart.id}`)
            .then((response) => {
                setSuccessMessage(response.data);
                setSuccess(true);
            }).catch((error) => {
                setErrorMessage(error.response ? error.response.data : "Error deleting");
                setSuccess(true);
            });
        }

        useEffect(() => {
            
            if (success) {
                const timer = setTimeout(() => {
                  setSuccess(false);
                }, 1500);
                return () => clearTimeout(timer); 
            }

            if (error) {
                const timer = setTimeout(() => {
                  setError(false);
                }, 1500);
                return () => clearTimeout(timer); 
            }
        }, [error]);

    return (
        <>
            {error ? <Error message={errorMessage} /> : null}
            {success ? <Success message={successMessage} /> : null}
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
