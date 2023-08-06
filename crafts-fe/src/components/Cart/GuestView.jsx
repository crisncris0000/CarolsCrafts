import React from 'react';
import { CTableRow, CTableHeaderCell, CTableDataCell } from '@coreui/react';
import { useDispatch } from 'react-redux';
import { removeItemFromCart } from '../../features/cart';

export default function GuestView( {guestCart} ) {
    const dispatch = useDispatch();

    const handleRemove = (itemToRemove) => {
        dispatch(removeItemFromCart(itemToRemove));
    }
    
    return (
        <>
            {guestCart.items.map((item) => (
                <CTableRow active key={item.itemObject.id}>
                <CTableHeaderCell scope="row">
                    <img src={`data:${item.itemObject.mimeType};base64,${item.itemObject.imageData}`} className="cart-img"/>
                </CTableHeaderCell>
                <CTableDataCell>{item.itemObject.itemTitle}</CTableDataCell>
                <CTableDataCell>{`$${item.itemObject.itemPrice}`}</CTableDataCell>
                <CTableDataCell>{item.quantity}</CTableDataCell>
                <CTableDataCell><button onClick={() => handleRemove(item)}>Remove</button></CTableDataCell>
                </CTableRow>
            ))}
        </>
    )
}
