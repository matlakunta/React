import React from 'react';
import useForm from './useForm';
import validate from './validateInfo';
import './Form.css';

const FormSignin = () => {
    return (
        <div>
            <div className="form-container">
            <h1 className="signin1">SIGN IN</h1>
            <form className="signin-form" id="signin-form">
                <div className="form-group">
                    <label htmlFor="name"></label>
                    <input type="email" name="name" id="name" autoComplete="off"  className="form-input1" placeholder="Email Address"/>
                </div>
                <div className="form-group">
                    <label htmlFor="name"></label>
                    <input type="Password" name="name" id="name" autoComplete="off" className="form-input1" placeholder="Password"/>
                </div>
                <h4>Forgot Password ?</h4>
                <p>By signing in you are accepting <span>Sample's Privacy Policy</span>and <span>Terms of Service</span></p>
                <button className="signin">SIGN IN </button>
                <h5>Create Account?<button className="signupfree">SIGN UP FREE</button></h5>
            </form>
            </div>
            
        </div>
    )
}

export default FormSignin
