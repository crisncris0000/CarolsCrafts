import React, { useState } from 'react';
import { CCard, CCardImage, CCardTitle, CCardText, CCardBody, CButton} from '@coreui/react';
import Birthday from '../../images/birthday.png';
import Delete from '../../images/delete-icon.png';
import { useSelector } from 'react-redux';

export default function ShoppingItems() {
  const user = useSelector((states) => states.user.value)

  return (
    <>
      <div className="shopping-items">

          <CCard style={{ width: '15rem' }}>
            <CCardImage orientation="top" src={Birthday} className="card-img"/>
            <CCardBody>
              <CCardTitle>Card title</CCardTitle>
              <CCardText>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </CCardText>
              <CButton href="#">Go somewhere</CButton>
              {user.role === 'ADMIN' ? <img src={Delete} alt="delete icon" id="delete"/> : null}
            </CCardBody>
          </CCard>
      </div>
    </>
  )
}
