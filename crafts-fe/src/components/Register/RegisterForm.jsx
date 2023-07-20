import React, { useState } from 'react';
import { CForm, CFormLabel, CFormInput, CButton } from '@coreui/react';
import axios from 'axios';

export default function RegisterForm() {
    const [firstName, setFirstname] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const sendUser = (user) => {
        axios.post("http://localhost:8080/api/create-user", user)
        .then((response) => {
          console.log(response.data);
        }).catch((error) => {
          console.log(error);
        })
    }

  return (

    <>        
        <div className="register-container">

            <div className="header-container">
                <h3>Registration Form</h3>
            </div>
            
            <CForm className="register-form">
                <div className="mb-3">
                    <CFormLabel htmlFor="InputFirstName">First Name</CFormLabel>
                    <CFormInput type="text" id="InputFirstName" aria-describedby="First Name" className="input-field" placeholder="Enter First Name" onChange={(e) =>{
                        setFirstname(e.target.value);
                    }}/>
                </div>
                <div className="mb-3">
                    <CFormLabel htmlFor="InputLastName">Last Name</CFormLabel>
                    <CFormInput type="text" id="InputLastName" className="input-field" placeholder="Enter Last Name" onChange={(e) =>{
                        setLastName(e.target.value);
                    }}/>
                </div>
                <div className="mb-3">
                    <CFormLabel htmlFor="InputEmail">Email</CFormLabel>
                    <CFormInput type="email" id="InputEmail" aria-describedby="Email" className="input-field" placeholder="Enter Email" onChange={(e) =>{
                        setEmail(e.target.value);
                    }}/>
                </div>
                <div className="mb-3">
                    <CFormLabel htmlFor="InputPassword">Password</CFormLabel>
                    <CFormInput type="password" id="InputPassword" className="input-field" placeholder="Enter password" onChange={(e) =>{
                        setPassword(e.target.value);
                    }}/>
                </div>


                <CButton type="submit" color="primary" onClick={(e) => {
                    const user = {
                        firstName,
                        lastName,
                        email,
                        password
                    }
                    
                    e.preventDefault();
                    sendUser(user);
                }}>
                    Submit
                </CButton>
            </CForm>

        </div>
    
    </>
  )
}
