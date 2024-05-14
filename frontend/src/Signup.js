// Signup.js
import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Validation from './SignupValidation'; // Import the validation function
import  '../src/component/component.css'

function Signup() {
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: ''
    });
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const err = Validation(values); // Validate the form fields
        setErrors(err); // Set errors

        // Check if there are any errors
        if (Object.values(err).every(error => error === '')) {
            // If no errors, submit the form
            axios.post('http://localhost:8081/signup', values)
                .then(res => {
                    console.log('Signup Response:', res.data); // Log the response from the server
                    navigate('/login');
                })
                .catch(err => {
                    console.log(err.response.data);
                    // Handle error from the server
                });
        }
    };

    return (
        <div className='d-flex vh-100 bg-gray justify-content-center align-items-center'>
            <div className='bg-white p-3 rounded w-25'>
                <h2>Sign-Up</h2>
                <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor='name'><strong>Name</strong></label>
                        <input type='text' placeholder='Enter Name' name='name'
                            className='form-control rounded-0' value={values.name} onChange={handleChange} />
                        {errors.name && <span className='text-danger'>{errors.name}</span>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='email'><strong>Email</strong></label>
                        <input type='email' placeholder='Enter Email' name='email'
                            className='form-control rounded-0' value={values.email} onChange={handleChange} />
                        {errors.email && <span className='text-danger'>{errors.email}</span>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='password'><strong>Password</strong></label>
                        <input type='password' placeholder='Enter Password' name='password'
                            className='form-control rounded-0' value={values.password} onChange={handleChange} />
                        {errors.password && <span className='text-danger'>{errors.password}</span>}
                    </div>
                    {/* <button type='submit' className=' btn-purple btn btn-success w-100 rounded-0'>Sign up</button> */}
                    <button type='submit' className='btn   btn-success w-100   rounded-0'>Sign up</button>
                    <p>You agree to our terms and policies</p>
                    <Link to="/login" className='  btn btn-default border w-100  rounded-0 text-decoration-none'>Login</Link>
                </form>
            </div>
        </div>
    );
}

export default Signup;
