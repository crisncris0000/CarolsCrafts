import React, { useEffect, useState } from 'react';
import { CCard, CCardImage, CCardTitle, CCardBody} from '@coreui/react';
import Delete from '../../images/delete-icon.png';
import { useSelector } from 'react-redux';
import axios from 'axios';
import ItemInfo from './ItemInfo';
import Error from '../Messages/Error';

export default function ShoppingItems() {
  const user = useSelector((states) => states.user.value);
  const [items, setItems] = useState([]);

  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  function handleDelete(itemId) {
    axios.delete(`https://api.mckcreation.com/api/shop/delete-item?id=${itemId}`)
      .catch((error) => {
        setErrorMessage(error.response ? error.response.data : "Server not active please come back later");
        setError(true);
      })
  }

  useEffect(() => {
    axios.get('https://api.mckcreation.com/api/shop/get-items')
      .then((response) => setItems(response.data))
      .catch(error => {
        setErrorMessage(error.response ? error.response.data : "Server not active please come back later");
        setError(true);
      });

      if (error) {
        const timer = setTimeout(() => {
          setError(false);
        }, 1500);
        return () => clearTimeout(timer); 
      }

  }, [items, error]);

  return (
    <>
      {error ? <Error message={errorMessage}/> : null}
    
      <div className="shopping-items">
        {items.map((item) => (
          <CCard style={{ width: '15rem' }} key={item.id}>
          <CCardImage orientation="top" src={`data:${item.mimeType};base64,${item.imageData}`} className="card-img" alt={item.title}/>
          <CCardBody>
            <CCardTitle>{item.itemTitle}</CCardTitle>
            <ItemInfo itemObject={item}/>
            {user.role === 'ADMIN' ? <button type="button" className='delete-btn' onClick={() => handleDelete(item.id)}><img src={Delete} alt="delete icon" id="delete"/></button> : null}
          </CCardBody>
        </CCard>
        ))}
      </div>
    </>
  )
}
