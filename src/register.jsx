
import React from "react";

function Register({ onToggleRegister }) {
  return (
    <div className="container">
      <form>
        <input type="text" className="form-control" placeholder="Enter First Name" />
        <input type="text" className="form-control" placeholder="Enter Last Name" />
        <input type="text" className="form-control" placeholder="Enter Username" />
        <input type="password" className="form-control" placeholder="Enter Password" />
        <button onClick={onToggleRegister} className="btn btn-success">Login</button>
        <button type="submit" className="btn btn-primary">Submit</button>
        
      </form>
    </div>
   
  );
}

export default Register;
