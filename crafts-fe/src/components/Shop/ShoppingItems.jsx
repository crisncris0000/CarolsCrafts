import React, { useEffect, useState } from 'react';
import { CCard, CCardImage, CCardTitle, CCardBody} from '@coreui/react';
import Delete from '../../images/delete-icon.png';
import { useSelector } from 'react-redux';
import axios from 'axios';
import ItemInfo from './ItemInfo';
import Error from '../Messages/Error';
import Success from '../Messages/Success';

export default function ShoppingItems() {
  const user = useSelector((states) => states.user.value);
  const [items, setItems] = useState([]);
  
  const [success, setSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  function handleDelete(itemId) {
    axios.delete(`http://localhost:8080/api/shop/delete-item?id=${itemId}`)
      .then((response) => {
        setSuccess(true);
        setSuccessMessage(response.data);
      })
      .catch((error) => {
        setError(true);
        setErrorMessage(error.response.data);
      })
  }

  useEffect(() => {
    axios.get('http://localhost:8080/api/shop/get-items')
      .then((response) => setItems(response.data))
      .catch(error => {
        setError(true);
        setErrorMessage(error.response.data);
      });

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

  }, [items, success, error]);

  return (
    <>
    {error ? <Error message={errorMessage}/> : null}
    {success ? <Success message={successMessage}/> : null}
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
