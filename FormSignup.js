import React from 'react';
import useForm from './useForm';
import validate from './validateInfo';
import './Form.css';
const FormSignup = () => {
    const {handleChange, values, handleSubmit, errors} = useForm(validate);
    return (
        <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
                <h2 className="signup">Sign up</h2>
                <div className="form-inputs">
                    <label htmlFor="firstname" className="form-label">
                    </label>
                    <input 
                        id="firstname"
                        type="text" 
                        name="firstname" 
                        className="form-input"
                        placeholder="First Name*"
                        value={values.firstname}
                        onChange={handleChange}
                        />
                        {errors.firstname && <p>{errors.firstname}</p>}
                </div>
                <div className="form-inputs">
                    <label htmlFor="lastname" className="form-label">
                    </label>
                    <input 
                        id="lastname"
                        type="text" 
                        name="lastname" 
                        className="form-input"
                        placeholder="Last Name*"
                        value={values.lastname}
                        onChange={handleChange}
                        />
                        {errors.lastname && <p>{errors.lastname}</p>}
                </div>
                <div className="form-inputs">
                    <label htmlFor="Email Address" className="form-label">
                    </label>
                    <input 
                        id="email"
                        type="email" 
                        name="email" 
                        className="form-input"
                        placeholder="Email Address*"
                        value={values.emailaddress}
                        onChange={handleChange}
                        />
                        {errors.email && <p>{errors.email}</p>}
                </div>
                <div className="form-inputs">
                    <label htmlFor="Password" className="form-label">
                    </label>
                    <input 
                        id="password"
                        type="password" 
                        name="password" 
                        className="form-input"
                        placeholder="Password*"
                        value={values.password}
                        onChange={handleChange}
                        />
                        {errors.password && <p>{errors.password}</p>}
                </div>
                <div className="form-inputs">
                    <label htmlFor="Phone Number" className="form-label">
                    </label>
                    <input 
                        id="phonenumber"
                        type="number" 
                        name="phonenumber" 
                        className="form-input"
                        placeholder="Phone Number*"
                        value={values.phonenumber}
                        onChange={handleChange}
                        />
                        {errors.phonenumber && <p>{errors.phonenumber}</p>}
                </div>
                <button className="form-input-btn1" type="submit">CANCEL</button>
                <button className="form-input-btn2" type="submit">SIGN UP</button>
            </form>
        </div>
    )
}

export default FormSignup
