import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Success from '../Messages/Success';
import Error from '../Messages/Error';

const ResetForm = () => {
    const [email, setEmail] = useState('');
    const [token, setToken] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [tokenSent, setTokenSent] = useState(false);
    const [success, setSuccess] = useState(false);
    const [successMsg, setSuccessMsg] = useState('');
    const [error, setError] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');

    const handleSendToken = (e) => {
        e.preventDefault();
        
        axios.post('http://localhost:8080/api/users/send-token', {email}).then((response) => {
            setSuccessMsg(response.data);
            setTokenSent(true);
            setSuccess(true);
        }).catch ((error) => {
            setErrorMsg(error.response.data);
            setError(true);
        })
    };

    const handleResetPassword = (e) => {
        e.preventDefault();

        if(password !== confirmPassword) {
            setErrorMsg('Passwords do not match');
            setError(true);
            return;
        }

        const data = {
            email,
            token,
            password
        }

        axios.post('http://localhost:8080/api/users/reset-password', data).then((response) => {
            setSuccess(true);
            setSuccessMsg(response.data);
        }).catch((error) => {
            setError(true);
            setErrorMsg(error.response.data);
        })
    };

    useEffect(() => {
        if(success) {
          const timer = setTimeout(() => {
            setSuccess(false);
          }, 2000);
    
          return () => clearTimeout(timer); 
        }

        if(error) {
            const timer = setTimeout(() => {
                setError(false);
              }, 2000);
        
              return () => clearTimeout(timer); 
        }
      }, [success, error]);

    if (!tokenSent) {
        return (
            <>
                {error ? <Error message={errorMsg}/> : null}
                <div className="reset-container">
                    <h2>Reset Password</h2>
                    <form onSubmit={handleSendToken}>
                        <div className="input-group">
                            <label>Email</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" className="reset-token">Send Token</button>
                    </form>
                </div>
            </>
        );
    } else {
        return (
            <>
                {error ? <Error message={errorMsg}/> : null}
                {success ? <Success message={successMsg} /> : null}
                <div className="reset-container">
                    <h2>Enter Token and New Password</h2>
                    <form onSubmit={handleResetPassword}>
                        <div className="input-group">
                            <label>Token</label>
                            <input
                                type="text"
                                value={token}
                                onChange={(e) => setToken(e.target.value)}
                                required
                            />
                        </div>
                        <div className="input-group">
                            <label>New Password</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <div className="input-group">
                            <label>Confirm Password</label>
                            <input
                                type="password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit">Reset Password</button>
                    </form>
                </div>
            </>
        );
    }
};

export default ResetForm;
