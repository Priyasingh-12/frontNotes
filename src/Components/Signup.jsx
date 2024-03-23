import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import "./register.css";

const Signup = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
   name: "", email: "", password: "", cpassword: ""
});

const [errors, setErrors] = useState({});
// =========================onchnge=====================
const handleInput = (event) => {
  console.log(event);
  const { name, value } = event.target;
  setUser((preval) => (
      { ...preval, [name]: value, }
  ));
};
// ==================VALIDATE===================
const validateForm = () => {
  
  const { name, email, password,cpassword } = user;
  const errors = {};
// Validate name
if (!name.trim()) {
  errors.name = 'Name is required';
}
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
  // Validate confirm password
  if (!password.trim()) {
    errors.password = 'Password is required';
  } 
 else  if (password !== cpassword) {
    errors.cpassword = 'Passwords do not match';
  }
  setErrors(errors);

  return Object.keys(errors).length === 0;
};
// ================================
const signupUser =  async (e) => {
  e.preventDefault();
   // Access the user registration data from user state object
   const { name, email, password, cpassword } = user;
   if (validateForm()) {
    // Perform registration logic here
    console.log('Registration successful');
  }
  //========================================api===============================
  const res = await fetch("http://localhost:8000/api/auth/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name, email,password, cpassword

    }),
  });
  const data = await res.json();
  console.log(data.status); // it returns the user success message

if(data.status === 201){
alert("user registration successfully");
setUser({...user,name:"",email:"",password:"",cpassword:""})
}

if(res.status=== 400 || !data) {
  window.alert("invalid Credential")
}else{
  
  console.log('successfull');
  navigate("/Login");
}    

}

  return (
    <>
      <div className="container">
        <div className="box">
          <form method="POST" id="signup" className="inputs">
            <h3>Account Register</h3>

            <div className=" inputbx col-lg-12 col-md-12 col-xs-12">
              {errors.name && <span>{errors.name}</span>}
            </div>
            <div className="bx">
              <input
                type="text"
                className="field"
                placeholder="Name"
                name="name"
                id="name"
                onChange={handleInput}
                value={user.name}
                required={true}
              />
              {errors.name && <span>{errors.name}</span>}
            </div>

            <div className="bx">
              <input
                type="email"
                className="field"
                placeholder="Email"
                name="email"
                id="email"
                value={user.email}
                onChange={handleInput}
                required={true}
              />
              {errors.email && <span>{errors.email}</span>}
            </div>

            <div className="bx">
              <input
                type="Password"
                className="field"
                placeholder="Password"
                name="password"
                id="Password"
                value={user.password}
                onChange={handleInput}
                required={true}
              />
              {errors.password && <span>{errors.password}</span>}
            </div>

            <div className="bx">
              <input
                type="Password"
                className="field"
                placeholder=" Confirm Password"
                name="cpassword"
                id="cpassword"
                value={user.cpassword}
                onChange={handleInput}
                required={true}
              />
              {errors.cpassword && <span>{errors.cpassword}</span>}
            </div>

            <button type="submit" className="submit-btn" onClick={signupUser}>
              Signup
            </button>
            <p className="text-center ">
              Already Have an Account?
              <a href="/Login" className="text-info">
                Login
              </a>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
