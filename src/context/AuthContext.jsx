// // src/context/AuthContext.jsx
// import React, { createContext, useState, useEffect } from "react";

// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(() => {
//     const saved = localStorage.getItem("rms_user");
//     return saved ? JSON.parse(saved) : null;
//   });

//   // login simple (demo): set role based on credentials (replace with real API later)
//   const login = ({ username, password }) => {
//     // demo credentials mapping (change for production)
//     if (username === "researcher" && password === "123") {
//       const u = { username, role: "researcher" };
//       setUser(u);
//       localStorage.setItem("rms_user", JSON.stringify(u));
//       return { ok: true };
//     }
//     if (username === "divisionhead" && password === "123") {
//       const u = { username, role: "headOfDivision" };
//       setUser(u);
//       localStorage.setItem("rms_user", JSON.stringify(u));
//       return { ok: true };
//     }
//     // fallback
//     return { ok: false, message: "Invalid credentials" };
//   };

//   const logout = () => {
//     setUser(null);
//     localStorage.removeItem("rms_user");
//   };

//   // optional: sync if another tab changes localStorage
//   useEffect(() => {
//     const handler = () => {
//       const saved = localStorage.getItem("rms_user");
//       setUser(saved ? JSON.parse(saved) : null);
//     };
//     window.addEventListener("storage", handler);
//     return () => window.removeEventListener("storage", handler);
//   }, []);

//   return (
//     <AuthContext.Provider value={{ user, login, logout, setUser }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };
// src/context/AuthContext.jsx
import React, { createContext, useState, useEffect } from "react";

// Create context
export const AuthContext = createContext();

// Provider component
export const AuthProvider = ({ children }) => {
  // State ya current user
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem("rms_user");
    return saved ? JSON.parse(saved) : null;
  });

  // Login function
  const login = ({ username, password }) => {
    let u = null;

    // Demo users
    if (username === "researcher" && password === "123") {
      u = { username, role: "researcher" };
    } else if (username === "divisionhead" && password === "123") {
      u = { username, role: "headOfDivision" };
    }

    if (u) {
      setUser(u);
      localStorage.setItem("rms_user", JSON.stringify(u));
      return { ok: true, user: u };
    }

    return { ok: false, message: "Invalid credentials" };
  };

  // Logout function
  const logout = () => {
    setUser(null);
    localStorage.removeItem("rms_user");
  };

  // Sync kati ya tabs
  useEffect(() => {
    const handler = () => {
      const saved = localStorage.getItem("rms_user");
      setUser(saved ? JSON.parse(saved) : null);
    };
    window.addEventListener("storage", handler);
    return () => window.removeEventListener("storage", handler);
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
