import React from 'react';
import LoginIcon from '../../images/login-icon.png';
import PasswordIcon from '../../images/password-icon.png';
import { Link } from 'react-router-dom';
export default function LoginForm() {
  return (
    <>
      <div className="login-container">
        <div className="header-container">
          <h2>Login here</h2>
        </div>

        <form className="login-form">

            <div className="email-field">
                <label for="email"><img src={LoginIcon} alt="login icon"/></label>
                <input type="email" id="email" required placeholder="Enter your email" name="username" />
            </div>

            <div class="password-field">
                <label for="password"><img src={PasswordIcon} alt="password icon"/></label>
                <input type="password" id="password" required placeholder="Enter your password" name="password" />
            </div>

            <Link to={"/register"}>
              <button type="button" id="register">Register</button>
            </Link>
            <button type="submit" id="login">Login</button>

        </form>
        <Link to={"/reset-password"} id="pass-reset">Forgot password</Link>
      </div>
    </>
  )
}
