import React from 'react';
import { CTableRow, CTableHeaderCell, CTableDataCell } from '@coreui/react';
import { useDispatch } from 'react-redux';
import { removeItemFromCart } from '../../features/cart';
import MoreInfo from './MoreInfo';

export default function GuestView( {guestCart} ) {
    const dispatch = useDispatch();

    const handleRemove = (itemToRemove) => {
        dispatch(removeItemFromCart(itemToRemove));
    }
    
    return (
        <>
            {guestCart.items.map((item, index) => (
                <CTableRow active key={`${item.itemObject.id}-${index}`}>
                <CTableHeaderCell scope="row">
                    <img src={`data:${item.itemObject.mimeType};base64,${item.itemObject.imageData}`} className="cart-img"/>
                </CTableHeaderCell>
                <CTableDataCell>{item.itemObject.itemTitle}</CTableDataCell>
                <CTableDataCell><MoreInfo cart={item}/></CTableDataCell>
                <CTableDataCell>{`$${item.itemObject.itemPrice}`}</CTableDataCell>
                <CTableDataCell><button onClick={() => handleRemove(item)}>Remove</button></CTableDataCell>
                </CTableRow>
            ))}
        </>
    )
}
