import React from "react";
import { Route, Navigate, Outlet } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

function PrivateRoute({ children, ...rest }) {
  let { isLogged } = useAuth();
  return (
    isLogged ? (
      // children
      <Outlet />
    ) : (
      <Navigate
        to={{
          pathname: "/login",
        }}
      />
    )
  );
}

export default PrivateRoute;
