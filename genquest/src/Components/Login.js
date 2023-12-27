import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import logo from './Assets/logo.png';
import googleLogo from './Assets/google.png';
import FacebookLogo from './Assets/facebook.png'
import './Styles/Login.css';

function Login() {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="Container MontserratFont">
            <div>
                <img className='logo' src={logo} alt="Logo" />
            </div>
            <div className='Form'>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Enter your email" />

                <label htmlFor="password">Password</label>

                <div className="PasswordInputContainer">
                    <input
                        type={showPassword ? 'text' : 'password'}
                        id="password"
                        placeholder="Enter your password"
                        className="PasswordInput"
                    />
                    <span
                        className="TogglePasswordButton"
                        onClick={togglePasswordVisibility}
                    >
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </span>
                </div>
                <div className="ForgotPassword">
                    <span className="ClickableText">
                        Forgot Password?
                    </span>
                </div>
                <div className="HorizontalLines">
                    <hr className="HorizontalLine" />
                    <span className="Divider">OR With</span>
                    <hr className="HorizontalLine" />
                </div>

                <button type="submit" >Login</button>
                <div className="SocialLogin">
                    <div className="SocialLoginBox">
                        <img src={googleLogo} alt="Google Logo" className="SocialLoginLogo" />
                        <span>Google</span>
                    </div>
                    <div className="SocialLoginBox">
                        <img src={FacebookLogo} id='facebook' alt="Google Logo" className="SocialLoginLogo" />
                        <span>Facebook</span>
                    </div>
                    
                </div>
                <div className='footer'>
                        <span>Not a member?</span>
                        <a href="/Signup">SignUp</a>
                    </div>
            </div>
        </div>

    );
}

export default Login;
