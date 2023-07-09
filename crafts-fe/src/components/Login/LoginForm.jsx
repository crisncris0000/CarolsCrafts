import React from 'react';
import LoginIcon from '../../images/login-icon.png';
import PasswordIcon from '../../images/password-icon.png';
import { Link } from 'react-router-dom';
export default function LoginForm() {
  return (
    <>
      <div className="header-container">
        <h2>Login here</h2>
      </div>
      <div class="login-container">

        <form class="login-form">

            <div class="email-field">
                <label for="email"><img src={LoginIcon} alt="login icon"/></label>
                <input type="email" id="email" required placeholder="Enter your email" name="username" />
            </div>

            <div class="password-field">
                <label for="password"><img src={PasswordIcon} alt="password icon"/></label>
                <input type="password" id="password" required placeholder="Enter your password" name="password" />
            </div>

            <Link to={"/register"}>
            <button type="button" id="login">Register</button>
            </Link>
            <button type="submit" id="login">Login</button>

        </form>

      </div>
    </>
  )
}
