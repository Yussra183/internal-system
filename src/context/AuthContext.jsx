import React, { createContext, useState, useEffect } from "react";

// Create context
export const AuthContext = createContext();

// Provider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("rms_user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const [proposals, setProposals] = useState([
    // Dummy data
    {
      id: 1,
      title: "Water Pollution Study",
      type: "Thesis",
      status: "Approved",
      date: "2025-09-01",
      description: "Study on water pollution in coastal areas",
      finalReport: true,
    },
    {
      id: 2,
      title: "Mangrove Conservation",
      type: "Article",
      status: "Rejected",
      date: "2025-09-05",
      description: "Conservation of mangroves in Zanzibar",
      finalReport: false,
    },
  ]);

  const [notifications, setNotifications] = useState([
    // Dummy notification
    {
      id: 1,
      title: "Water Pollution Study",
      type: "Thesis",
      comment: "New proposal submitted",
      time: "2025-09-01 10:00",
      read: false,
    },
  ]);

  // --- DEMO LOGIN ---
  const login = ({ username, password }) => {
    const users = [
      { username: "researcher", password: "123", role: "researcher" },
      { username: "divisionhead", password: "123", role: "headOfDivision" },
      { username: "headofdepartment", password: "123", role: "headOfDepartment" },
      { username: "director", password: "123", role: "director" },
      { username: "admin", password: "123", role: "admin" }, // new admin user
    ];

    const found = users.find(
      (u) =>
        u.username.toLowerCase() === username.trim().toLowerCase() &&
        u.password === password
    );

    if (found) {
      setUser(found);
      localStorage.setItem("rms_user", JSON.stringify(found));
      return { ok: true, user: found };
    }

    return { ok: false, message: "Username au password si sahihi" };
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("rms_user");
  };

  const addProposal = (proposal) => {
    const proposalId = Date.now();
    const newProposal = { id: proposalId, ...proposal, status: "Pending" };
    setProposals((prev) => [...prev, newProposal]);

    const notificationId = Date.now() + 1;
    setNotifications((prev) => [
      ...prev,
      {
        id: notificationId,
        title: proposal.title,
        type: proposal.type,
        comment: "New proposal submitted by Division Head",
        time: new Date().toLocaleString(),
        read: false,
      },
    ]);
  };

  const markAsRead = (id) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n))
    );
  };

  // Load from localStorage
  useEffect(() => {
    const savedProposals = localStorage.getItem("rms_proposals");
    if (savedProposals) setProposals(JSON.parse(savedProposals));

    const savedNotifications = localStorage.getItem("rms_notifications");
    if (savedNotifications) setNotifications(JSON.parse(savedNotifications));
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("rms_proposals", JSON.stringify(proposals));
  }, [proposals]);

  useEffect(() => {
    localStorage.setItem("rms_notifications", JSON.stringify(notifications));
  }, [notifications]);

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        proposals,
        addProposal,
        notifications,
        markAsRead,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};























// // src/context/AuthContext.jsx
// import React, { createContext, useState, useEffect } from "react";

// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(() => {
//     const saved = localStorage.getItem("rms_user");
//     return saved ? JSON.parse(saved) : null;
//   });
//   const [tokens, setTokens] = useState(() => {
//     const saved = localStorage.getItem("rms_tokens");
//     return saved ? JSON.parse(saved) : null;
//   });

//   // ---- LOGIN ----
//   const login = async (username, password) => {
//     try {
//       const res = await fetch("http://127.0.0.1:8000/api/login/", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ username, password }),
//       });

//       const data = await res.json();

//       if (res.ok) {
//         setUser(data.user);
//         setTokens({ access: data.access, refresh: data.refresh });
//         localStorage.setItem("rms_user", JSON.stringify(data.user));
//         localStorage.setItem("rms_tokens", JSON.stringify({ access: data.access, refresh: data.refresh }));
//         return { ok: true, user: data.user };
//       } else {
//         return { ok: false, message: data.error || "Login failed" };
//       }
//     } catch (err) {
//       console.error(err);
//       return { ok: false, message: "Server error" };
//     }
//   };

//   // ---- LOGOUT ----
//   const logout = () => {
//     setUser(null);
//     setTokens(null);
//     localStorage.removeItem("rms_user");
//     localStorage.removeItem("rms_tokens");
//   };

//   return (
//     <AuthContext.Provider value={{ user, tokens, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };
