import React, { useEffect, useState } from 'react';
import { CCard, CCardImage, CCardTitle, CCardText, CCardBody} from '@coreui/react';
import Delete from '../../images/delete-icon.png';
import { useSelector } from 'react-redux';
import axios from 'axios';
import HoverButton from './HoverButton';

export default function ShoppingItems() {
  const user = useSelector((states) => states.user.value);
  const [items, setItems] = useState([]);

  useEffect(() => {
      axios.get('http://localhost:8080/api/shop/get-items')
      .then((response) => setItems(response.data))
      .catch(error => console.log(error));
      
  }, []);

  return (
    <>
      <div className="shopping-items">
        {items.map((item) => (
          <CCard style={{ width: '15rem' }} key={item.id}>
          <CCardImage orientation="top" src={`data:${item.mimeType};base64,${item.imageData}`} className="card-img" alt={item.title}/>
          <CCardBody>
            <CCardTitle>{item.itemTitle}</CCardTitle>
            <CCardText>
              {item.itemDescription}
            </CCardText>
            <HoverButton defaultText={`$${item.itemPrice}`} hoveredText='Add to cart' itemObject={item}/>
            {user.role === 'ADMIN' ? <button className='delete-btn'><img src={Delete} alt="delete icon" id="delete"/></button> : null}
          </CCardBody>
        </CCard>
        ))}
      </div>
    </>
  )
}
