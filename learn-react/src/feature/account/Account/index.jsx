import React from "react";
import useAuth from "../../../hooks/useAuth.jsx";

function Account() {
  const { logout } = useAuth();

  return (
    <div className="container">
      <h1>Account</h1>
      <button className="btn btn-action" onClick={() => logout()}>
        logout
      </button>
    </div>
  );
}

export default Account;
