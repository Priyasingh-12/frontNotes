import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./signup.css";

const Login = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "", password: ""
 });
 
   const [errors, setErrors] = useState({});
 // /=============================ONCHANGE===========================
   const handleInput = (event) => {
     console.log(event);
     const { name, value } = event.target;
     setUser((preval) => (
         { ...preval, [name]: value, }
     ));
 
     }
  // ==================VALIDATE===================
  const validateForm = () => {
    const { email, password, } = user;
    const errors = {};
  // Validate email
  if (!email.trim()) {
    errors.email = 'Email is required';
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    errors.email = 'Invalid email format';
  }
       // Validate password
         if (!password.trim()) {
      errors.password = 'Password is required';
        } else if (password.length < 6) {
        errors.password = 'Password should be at least 6 characters long';
       }    
  
       setErrors(errors);
          return Object.keys(errors).length === 0;
  
       }
       // ================================
const loginUser =  async (e) => {
  e.preventDefault();
   // Access the user registration data from user state object
   const { email, password} = user;

   if (validateForm()) {
    // Perform registration logic here
    console.log('login successful');
  }  
   //========================================api===============================
   const res = await fetch("http://localhost:8000/api/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
       email,password,

    }),
  });
  const data = await res.json();

  console.log(data); // it returns the user success message


  if(res.status=== 400 || !data) {
    window.alert("invalid Credential")
  }else{
     window.alert("Login successful");
     navigate("/Notes")
  }    

}
  return (
    <>
      <br/>
      <div className="contained-box">
        <div className="form-box">
          <div className="button-box" ></div>

          <form method="POST" id="login" className="input-groups" onSubmit={loginUser}>
          <div className=" inputbx col-lg-12 col-md-12 col-xs-12">
                  {errors.email && <span>{errors.email}</span>}
                  {errors.password && <span>{errors.password}</span>}
                </div>
            <h3>Account Login</h3>
        <img src="https://previews.123rf.com/images/valentint/valentint1610/valentint161005108/64476111-login-icon-internet-button-on-black-background.jpg"
       alt="pic"   className="rounded-circle mx-auto d-block logo m-4"
         height="120px" width="120px" />
            <input
              type="email"
              className="input-field"
              placeholder="Email" 
                    name="email"
                    id="email"
                    value={user.email}
                    onChange={handleInput}
                    required={true}
              />

            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>

            <input
              type="Password"
              className="input-field"
              placeholder="Password"
              name="password"
                    required={true}
                    id="Password"
                    value={user.password}
                    onChange={handleInput}
               />

            <input type="checkbox" className="check-box" />
            <span>Remember Password</span>
            <button type="submit" className="btn" onClick={loginUser}>
              Login
            </button>
          </form>
        </div>
      </div>

   
    </>
  );
};

export default Login;
