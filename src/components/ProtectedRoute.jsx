// src/components/ProtectedRoute.jsx
import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const ProtectedRoute = ({ allowedRoles } = {}) => {
  const { user } = useContext(AuthContext);

  // hapana user -> rudisha /login
  if (!user) return <Navigate to="/login" replace />;

  // kama allowedRoles imepewa na role ya user siyo ndani -> unauthorized
  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return <Navigate to="/unauthorized" replace />;
  }

  // otherwise, kuruhusu watoto (Outlet)
  return <Outlet />;
};

export default ProtectedRoute;
