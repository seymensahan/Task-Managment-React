// Login.js (Parent component)
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from './component/Navbar'; // Import the Navbar component
import Validation from './LoginValidation';
import axios from 'axios';
import  '../src/component/component.css'

function Login() {
  const [values, setValues] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status
  const navigate = useNavigate();

  const handleInput = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleLogin = () => {
    const validationErrors = Validation(values);
    setErrors(validationErrors);
    if (!validationErrors.email && !validationErrors.password) {
      axios.post('http://localhost:8081/login', values)
        .then(res => {
          if (res.data === "Success") {
            setIsLoggedIn(true); // Update isLoggedIn state to true upon successful login
            navigate('/home'); // Redirect to the appropriate page after login
          } else {
            alert("No record existed");
          }
        })
        .catch(err => {
          console.error('Login Error:', err);
          alert("An error occurred during login");
        });
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false); // Update isLoggedIn state to false upon logout
    navigate('/login'); // Redirect to the login page after logout
  };

  return (
    <>
      <Navbar isLoggedIn={isLoggedIn} handleLogout={handleLogout} /> {/* Pass isLoggedIn state and handleLogout function as props to Navbar */}
      <div className='d-flex justify-content-center align-items-center bg-gray vh-100'>
        <div className='bg-white p-3 rounded w-25'>
          <h2>Sign-In</h2>
          <form action="" onSubmit={(e) => e.preventDefault()}>
            <div className='mb-3'>
              <label htmlFor="email"><strong>Email</strong></label>
              <input type="email" placeholder='Enter Email' name='email'
                value={values.email} onChange={handleInput} className='form-control rounded-0' />
              {errors.email && <span className='text-danger'>{errors.email}</span>}
            </div>
            <div className='mb-3'>
              <label htmlFor="password"><strong>Password</strong></label>
              <input type="password" placeholder='Enter Password' name='password'
                value={values.password} onChange={handleInput} className='form-control rounded-0' />
              {errors.password && <span className='text-danger'>{errors.password}</span>}
            </div>
            <button onClick={handleLogin} className='btn btn-success w-100 rounded-0'>Login</button> {/* Call handleLogin on button click */}
            <p>You agree to our terms and policies</p>
            <Link to="/Signup" className=' btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Create Account</Link>
                
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
