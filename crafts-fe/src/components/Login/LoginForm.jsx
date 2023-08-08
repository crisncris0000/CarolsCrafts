import React, { useEffect, useState } from 'react';
import LoginIcon from '../../images/login-icon.png';
import PasswordIcon from '../../images/password-icon.png';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { useDispatch } from 'react-redux';
import { login } from '../../features/user';
import Error from '../Messages/Error';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [displayError, setDisplayError] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const sendUser = async (user) => {
    try {
      const response = await axios.post("http://localhost:8080/api/users/login", user);
      return response.data;
    } catch (error) {
      setError(error.response.data);
      setDisplayError(true);
    }
  }
  
  const handleLogin = async () => {
    const user = { email, password };
    const jsonToken = await sendUser(user);
    if(jsonToken) {
      const decodedToken = jwtDecode(jsonToken);
      dispatch(login(
        { 
          id: decodedToken.userId,
          email: decodedToken.sub, 
          role: decodedToken.role, 
          firstName: decodedToken.firstName,
          lastName: decodedToken.lastName
        }));
      localStorage.setItem('token', jsonToken);
      localStorage.removeItem('guestId');
      localStorage.removeItem('guestCart');
      navigate('/');
    }
  };

  useEffect(() => {
    if (displayError) {
      const timer = setTimeout(() => {
        setDisplayError(false);
      }, 2000);

      return () => clearTimeout(timer); 
    }
  }, [displayError]);

  return (
    <>
      {displayError ? <Error message={error}/> : null}
      <div className="login-container">
        <div className="header-container">
          <h2>Login here</h2>
        </div>
        <form className="login-form">
          <div className="email-field">
            <label htmlFor="email"><img src={LoginIcon} alt="login icon"/></label>
            <input
              type="email" 
              id="email" 
              required 
              placeholder="Enter your email" 
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="password-field">
            <label htmlFor="password"><img src={PasswordIcon} alt="password icon"/></label>
            <input 
              type="password" 
              id="password" 
              required 
              placeholder="Enter your password" 
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Link to={"/register"}>
            <button type="button" id="register">Register</button>
          </Link>
          <button type="button" id="login" onClick={handleLogin}>Login</button>
        </form>
        <Link to={"/reset-password"} id="pass-reset">Forgot password</Link>
      </div>
    </>
  );
};

export default LoginForm;