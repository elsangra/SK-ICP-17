import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import "./getin.style.scss"

const SignInPage = () => {
    const [isSignIn, setIsSignIn] = useState(true);
    const [showPassword, setShowPassword] = useState(false);

    const handleSwitchForm = () => {
        setIsSignIn(prevState => !prevState);
    };

    const handleTogglePassword = () => {
        setShowPassword(prevState => !prevState);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Here you can implement the logic to handle form submission
        // For example, sending the data to your backend or performing client-side validation
    };

    return (
        <div className="outer-container" style={{ backgroundColor: '#579668' }}>
            <div className="container">
                <div className="switcher">
                    <span className={isSignIn ? 'active' : ''} onClick={() => setIsSignIn(true)}>Sign In</span>
                    <span className={!isSignIn ? 'active' : ''} onClick={() => setIsSignIn(false)}>Sign Up</span>
                </div>
                <form onSubmit={handleSubmit} className="form">
                    {isSignIn ? (
                        <div className="form-group">
                            <h2>Sign In</h2>
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" required />
                            <label htmlFor="password">Password</label>
                            <div className="password-input">
                                <input type={showPassword ? 'text' : 'password'} id="password" required />
                                <span className="toggle-password" onClick={handleTogglePassword}>
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </span>
                            </div>
                            <button type="submit" className={"signin"}>Sign In</button>
                        </div>
                    ) : (
                        <div className="form-group ">
                            <h2>Sign Up</h2>
                            <div className="name-inputs">
                                <div className="form-group">
                                    <label htmlFor="firstName">First Name</label>
                                    <input type="text" id="firstName" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="lastName">Last Name</label>
                                    <input type="text" id="lastName" required />
                                </div>
                            </div>
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" required />
                            <label htmlFor="phoneNumber">Phone Number</label>
                            <input type="tel" id="phoneNumber" required />
                            <label htmlFor="password">Password</label>
                            <div className="password-input">
                                <input type={showPassword ? 'text' : 'password'} id="password" required />
                                <span className="toggle-password" onClick={handleTogglePassword}>
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </span>
                            </div>
                            <label htmlFor="confirmPassword">Confirm Password:</label>
                            <div className="password-input">
                                <input type={showPassword ? 'text' : 'password'} id="confirmPassword" required />
                                <span className="toggle-password" onClick={handleTogglePassword}>
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </span>
                            </div>
                            <button type="submit">Sign Up</button>
                        </div>
                    )}
                </form>
            </div>
        </div>
    );
};

export default SignInPage;
