import { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState();

  let { login } = useAuth();

  return (
    <div className="container">
      <div className="login-page">
        <h1>Login Page</h1>
        <form className="form">
          <input
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            type="text"
          />
          <input
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
        </form>
        <div className="footer-form">
          <button className="btn btn-action" onClick={() => login({ email }, { password })}>
            Login
          </button>
          <Link className="btn btn-action" to="/register">Register</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
