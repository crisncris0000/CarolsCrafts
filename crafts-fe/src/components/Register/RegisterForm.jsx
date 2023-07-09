import React from 'react'

export default function RegisterForm() {
  return (
    <>        
        <div className="register-container">
            <div className="header-container">
            <h2>Register here</h2>
            </div>

            <form className="login-form">

                <div className="first-name-field">
                    <label for="first">First Name</label>
                    <input type="text" id="first-name" required placeholder="Enter your first name" name="first" />
                </div>

                <div className="last-name-field">
                    <label for="last">Last Name</label>
                    <input type="text" id="last-name" required placeholder="Enter your last name" name="last" />
                </div>

                <div className="email-field">
                    <label for="email">Email:</label>
                    <input type="email" id="email" required placeholder="Enter your email" name="username" />
                </div>

                <div class="password-field">
                    <label for="password">Password: </label>
                    <input type="password" id="password" required placeholder="Enter your password" name="password" />
                </div>
                
                <button type="submit" id="login">Login</button>

            </form>

        </div>
    
    </>
  )
}
