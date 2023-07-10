import React from 'react';
import { CForm, CFormLabel, CFormInput, CButton } from '@coreui/react';

export default function RegisterForm() {
  return (
    <>        
        <div className="register-container">

            <div className="header-container">
                <h3>Registration Form</h3>
            </div>
            
            <CForm className="register-form">
                <div className="mb-3">
                    <CFormLabel htmlFor="InputFirstName">First Name</CFormLabel>
                    <CFormInput type="text" id="InputFirstName" aria-describedby="First Name" className="input-field" placeholder="Enter First Name"/>
                </div>
                <div className="mb-3">
                    <CFormLabel htmlFor="InputLastName">Last Name</CFormLabel>
                    <CFormInput type="text" id="InputLastName" className="input-field" placeholder="Enter Last Name"/>
                </div>
                <div className="mb-3">
                    <CFormLabel htmlFor="InputEmail">Email</CFormLabel>
                    <CFormInput type="email" id="InputEmail" aria-describedby="Email" className="input-field" placeholder="Enter Email"/>
                </div>
                <div className="mb-3">
                    <CFormLabel htmlFor="InputPassword">Password</CFormLabel>
                    <CFormInput type="password" id="InputPassword" className="input-field" placeholder="Enter password"/>
                </div>


                <CButton type="submit" color="primary">
                    Submit
                </CButton>
            </CForm>

        </div>
    
    </>
  )
}
