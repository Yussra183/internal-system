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



// const registerUser = async (newUser) => {
//   if (!token) return { ok: false, message: "Not authenticated" };

//   const res = await fetch("http://127.0.0.1:8000/api/users/", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       "Authorization": `Bearer ${token.access}`
//     },
//     body: JSON.stringify(newUser),
//   });

//   const data = await res.json();
//   return res.ok ? { ok: true, data } : { ok: false, message: data.error || "Failed" };
// };
