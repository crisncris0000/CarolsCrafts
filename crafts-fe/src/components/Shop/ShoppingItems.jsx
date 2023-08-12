import React, { useEffect, useState } from 'react';
import { CCard, CCardImage, CCardTitle, CCardText, CCardBody} from '@coreui/react';
import Delete from '../../images/delete-icon.png';
import { useSelector } from 'react-redux';
import axios from 'axios';
import ItemInfo from './ItemInfo';

export default function ShoppingItems() {
  const user = useSelector((states) => states.user.value);
  const [items, setItems] = useState([]);

  useEffect(() => {
      axios.get('http://localhost:8080/api/shop/get-items')
        .then((response) => setItems(response.data))
        .catch(error => console.log(error));
  }, [items]);

  function handleDelete(itemId) {
    axios.delete(`http://localhost:8080/api/shop/delete-item?id=${itemId}`)
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error));
  }

  return (
    <>
      <div className="shopping-items">
        {items.map((item) => (
          <CCard style={{ width: '15rem' }} key={item.id}>
          <CCardImage orientation="top" src={`data:${item.mimeType};base64,${item.imageData}`} className="card-img" alt={item.title}/>
          <CCardBody>
            <CCardTitle><h3>{item.itemTitle}</h3></CCardTitle>
            <ItemInfo itemObject={item}/>
            {user.role === 'ADMIN' ? <button type="button" className='delete-btn' onClick={() => handleDelete(item.id)}><img src={Delete} alt="delete icon" id="delete"/></button> : null}
          </CCardBody>
        </CCard>
        ))}
      </div>
    </>
  )
}
