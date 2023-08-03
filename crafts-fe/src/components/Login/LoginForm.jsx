import React, { useState } from 'react';
import LoginIcon from '../../images/login-icon.png';
import PasswordIcon from '../../images/password-icon.png';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { useDispatch } from 'react-redux';
import { login } from '../../features/user';

export default function LoginForm() {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const sendUser = async (user) => {
    try{
      const response = await axios.post("http://localhost:8080/api/users/login", user)
      localStorage.removeItem('guestId');
      localStorage.removeItem('guestCart');
      return response.data;
    } catch(error) {
      console.log(error);
    }
  }
  
  const handleLogin = (jsonToken) => {
    let decodedToken = jwtDecode(jsonToken);
    dispatch(login({email: decodedToken.sub , role: decodedToken.role}));
    localStorage.setItem('token', jsonToken);
    
  }

  return (
    <>
      <div className="login-container">
        <div className="header-container">
          <h2>Login here</h2>
        </div>

        <form className="login-form">

            <div className="email-field">
                <label htmlFor="email"><img src={LoginIcon} alt="login icon"/></label>
                <input type="email" id="email" required placeholder="Enter your email" name="username" onChange={(e) => {
                    setEmail(e.target.value);
                }}/>
            </div>

            <div className="password-field">
                <label htmlFor="password"><img src={PasswordIcon} alt="password icon"/></label>
                <input type="password" id="password" required placeholder="Enter your password" name="password" onChange={(e) => {
                    setPassword(e.target.value);
                }}/>
            </div>

            <Link to={"/register"}>
              <button type="button" id="register">Register</button>
            </Link>
            <button type="button" id="login" onClick={ async () => {
              
              const user = {
                email,
                password
              }

              try {
                const jsonToken = await sendUser(user);
                handleLogin(jsonToken);
                navigate('/');
              } catch (error) {
                console.error('An error occurred:', error);
              }

            }}>Login</button>

        </form>
        <Link to={"/reset-password"} id="pass-reset">Forgot password</Link>
      </div>
    </>
  )
}
