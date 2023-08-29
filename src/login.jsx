import React, { useState } from "react";
import Register from "./register";
import Loggedin from "./loggedin";
import 'bootstrap/dist/css/bootstrap.min.css';


function Login() {
  const [showRegister, setShowRegister] = useState(false);
  const [name, setName] = useState("");
  const [headername, setHeaderName] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Added state for login status

  function addName(event) {
    setName(event.target.value);
    console.log(name);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setHeaderName(name);
    setIsLoggedIn(true); // Set login status to true
    
    // No need to return <Loggedin> here
  }

  function toggleRegister() {
    setShowRegister(!showRegister);
  }

  return (
    <div>
      {isLoggedIn ? (
        <Loggedin givenName={name} />
      ) : (
        <div>
          {showRegister ? (
            <Register onToggleRegister={toggleRegister} />
          ) : (
            <div className="container">
              <form onSubmit={handleSubmit} className="form">
                
                  <input
                    type="text"
                    onChange={addName}
                    placeholder="Enter Username"
                    className = "form-control"
                    required
                  />
                
                  <input
                    type="password"
                    placeholder="Enter Password"
                    className = "form-control"
                    required
                  />
                
                <button onClick={toggleRegister} className="btn btn-success">Register</button>
                <input type="submit" value="Submit" className="btn btn-primary button" />
                
              </form>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Login;
