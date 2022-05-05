import React from "react";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="container">
      <Link className="btn btn-action" to="/register">Register</Link>
    </div>
  );
}

export default Register;
