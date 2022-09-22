//import './App.css';
import { useNavigate } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from './Navbar.js';

import React, { useState, useEffect } from 'react';


function Login (props) {
  
  const initialUserState = {
    name: "",
    password: "",
  };

  const [user, setUser] = useState(initialUserState);

  const handleInputChange = event => {
    const { name, password, value } = event.target;
    setUser({ ...user, [name]: value , [password]: value});
    console.log(user)
  };

  let navigate = useNavigate();

  function goToAdminPage()  {
    if(user.name == "adham" && user.password =="dodo")
    {
      navigate("../adminpage", { replace: true });
      //window.location.href = "/adminpage"
      console.log("right credentials")
    }
    else{
      console.log("wrong credentials")
    }

  };
  
  return (
    <div >
        <Navbar />
        
        <div className="App-header" >
            <div className="form-group">
                <label htmlFor="InputUsername">Username</label>
                <input type="username" className="form-control" id="name" name="name"  value={user.name} placeholder="Enter username" onChange={handleInputChange}></input>
                
            </div>
            <div className="form-group">
                <label htmlFor="InputPassword1">Password</label>
                <input type="password" className="form-control" id="password" name="password" value={user.password} placeholder="Password" onChange={handleInputChange}></input>
            </div>
  
            <button  className="btn btn-primary" type="reset" onClick={goToAdminPage}>Submit</button>
        </div>
    </div>
    
  );
}

export default Login;