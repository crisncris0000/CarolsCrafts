import axios from 'axios';
import React, { useState } from 'react';

const ResetForm = () => {
    const [email, setEmail] = useState('');
    const [token, setToken] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [tokenSent, setTokenSent] = useState(false);

    const handleSendToken = (e) => {
        e.preventDefault();
        
        axios.post('http://localhost:8080/api/users/send-token', {email}).then((response) => {
            console.log(response.data);
            setTokenSent(true);
        }
        ).catch ((error) => {
            console.log(error);
        })
    };

    const handleResetPassword = (e) => {
        e.preventDefault();
        // Logic to reset the password using the token goes here.
    };

    if (!tokenSent) {
        return (
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
                    <button type="submit">Send Token</button>
                </form>
            </div>
        );
    } else {
        return (
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
        );
    }
};

export default ResetForm;
