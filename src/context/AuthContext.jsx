// import React, { createContext, useState, useEffect } from "react";

// // Create context
// export const AuthContext = createContext();

// // Provider component
// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(() => {
//     const savedUser = localStorage.getItem("rms_user");
//     return savedUser ? JSON.parse(savedUser) : null;
//   });

//   const [proposals, setProposals] = useState([
//     // Dummy data
//     {
//       id: 1,
//       title: "Water Pollution Study",
//       type: "Thesis",
//       status: "Approved",
//       date: "2025-09-01",
//       description: "Study on water pollution in coastal areas",
//       finalReport: true,
//     },
//     {
//       id: 2,
//       title: "Mangrove Conservation",
//       type: "Article",
//       status: "Rejected",
//       date: "2025-09-05",
//       description: "Conservation of mangroves in Zanzibar",
//       finalReport: false,
//     },
//   ]);

//   const [notifications, setNotifications] = useState([
//     // Dummy notification
//     {
//       id: 1,
//       title: "Water Pollution Study",
//       type: "Thesis",
//       comment: "New proposal submitted",
//       time: "2025-09-01 10:00",
//       read: false,
//     },
//   ]);

//   // --- DEMO LOGIN ---
//   const login = ({ username, password }) => {
//     const users = [
//       { username: "researcher", password: "123", role: "researcher" },
//       { username: "divisionhead", password: "123", role: "headOfDivision" },
//       { username: "headofdepartment", password: "123", role: "headOfDepartment" },
//       { username: "director", password: "123", role: "director" },
//       { username: "admin", password: "123", role: "admin" }, // new admin user
//     ];

//     const found = users.find(
//       (u) =>
//         u.username.toLowerCase() === username.trim().toLowerCase() &&
//         u.password === password
//     );

//     if (found) {
//       setUser(found);
//       localStorage.setItem("rms_user", JSON.stringify(found));
//       return { ok: true, user: found };
//     }

//     return { ok: false, message: "Username au password si sahihi" };
//   };

//   const logout = () => {
//     setUser(null);
//     localStorage.removeItem("rms_user");
//   };

//   const addProposal = (proposal) => {
//     const proposalId = Date.now();
//     const newProposal = { id: proposalId, ...proposal, status: "Pending" };
//     setProposals((prev) => [...prev, newProposal]);

//     const notificationId = Date.now() + 1;
//     setNotifications((prev) => [
//       ...prev,
//       {
//         id: notificationId,
//         title: proposal.title,
//         type: proposal.type,
//         comment: "New proposal submitted by Division Head",
//         time: new Date().toLocaleString(),
//         read: false,
//       },
//     ]);
//   };

//   const markAsRead = (id) => {
//     setNotifications((prev) =>
//       prev.map((n) => (n.id === id ? { ...n, read: true } : n))
//     );
//   };

//   // Load from localStorage
//   useEffect(() => {
//     const savedProposals = localStorage.getItem("rms_proposals");
//     if (savedProposals) setProposals(JSON.parse(savedProposals));

//     const savedNotifications = localStorage.getItem("rms_notifications");
//     if (savedNotifications) setNotifications(JSON.parse(savedNotifications));
//   }, []);

//   // Save to localStorage
//   useEffect(() => {
//     localStorage.setItem("rms_proposals", JSON.stringify(proposals));
//   }, [proposals]);

//   useEffect(() => {
//     localStorage.setItem("rms_notifications", JSON.stringify(notifications));
//   }, [notifications]);

//   return (
//     <AuthContext.Provider
//       value={{
//         user,
//         login,
//         logout,
//         proposals,
//         addProposal,
//         notifications,
//         markAsRead,
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };




















// import React, { createContext, useState, useEffect } from "react";

// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(() => {
//     const savedUser = localStorage.getItem("rms_user");
//     return savedUser ? JSON.parse(savedUser) : null;
//   });

//   const [proposals, setProposals] = useState([]);
//   const [notifications, setNotifications] = useState([]);

//   // -----------------------------
//   // Login via backend JWT
//   // -----------------------------
//   const login = async ({ username, password }) => {
//     try {
//       const res = await fetch("http://localhost:8000/api/token/", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ username, password }),
//       });

//       const data = await res.json();

//       if (res.ok) {
//         const loggedUser = { username, role: data.role };

//         // Hifadhi token na user info
//         localStorage.setItem("rms_access_token", data.access);
//         localStorage.setItem("rms_refresh_token", data.refresh);
//         localStorage.setItem("rms_user", JSON.stringify(loggedUser));

//         setUser(loggedUser);
//         return { ok: true, user: loggedUser };
//       } else {
//         return { ok: false, message: data.detail || "Login failed" };
//       }
//     } catch (err) {
//       return { ok: false, message: err.message };
//     }
//   };

//   // -----------------------------
//   // Logout
//   // -----------------------------
//   const logout = () => {
//     setUser(null);
//     localStorage.removeItem("rms_user");
//     localStorage.removeItem("rms_access_token");
//     localStorage.removeItem("rms_refresh_token");
//   };

//   // -----------------------------
//   // Fetch Proposals from backend
//   // -----------------------------
//   const fetchProposals = async () => {
//     if (!user) return;
//     try {
//       const res = await fetch("http://localhost:8000/api/proposals/", {
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem("rms_access_token")}`,
//         },
//       });
//       if (res.ok) {
//         const data = await res.json();
//         setProposals(data);
//       }
//     } catch (err) {
//       console.error("Failed to fetch proposals:", err);
//     }
//   };

//   // -----------------------------
//   // Fetch Notifications
//   // -----------------------------
//   const fetchNotifications = async () => {
//     if (!user) return;
//     try {
//       const res = await fetch("http://localhost:8000/api/notifications/", {
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem("rms_access_token")}`,
//         },
//       });
//       if (res.ok) {
//         const data = await res.json();
//         setNotifications(data);
//       }
//     } catch (err) {
//       console.error("Failed to fetch notifications:", err);
//     }
//   };

//   // -----------------------------
//   // Mark Notification as Read
//   // -----------------------------
//   const markAsRead = async (id) => {
//     try {
//       const res = await fetch(`http://localhost:8000/api/notifications/${id}/`, {
//         method: "PATCH",
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem("rms_access_token")}`,
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ read: true }),
//       });
//       if (res.ok) {
//         setNotifications((prev) =>
//           prev.map((n) => (n.id === id ? { ...n, read: true } : n))
//         );
//       }
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   // Auto fetch proposals & notifications when user changes
//   useEffect(() => {
//     fetchProposals();
//     fetchNotifications();
//   }, [user]);

//   return (
//     <AuthContext.Provider
//       value={{
//         user,
//         login,
//         logout,
//         proposals,
//         fetchProposals,
//         notifications,
//         fetchNotifications,
//         markAsRead,
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };



import React, { createContext, useState, useEffect } from "react";

// Create context
export const AuthContext = createContext();

// Provider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    try {
      const savedUser = localStorage.getItem("rms_user");
      return savedUser ? JSON.parse(savedUser) : null;
    } catch (e) {
      console.error("Invalid rms_user in localStorage", e);
      return null;
    }
  });

  const [proposals, setProposals] = useState([
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
      { username: "admin", password: "123", role: "admin" },
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
    try {
      const savedProposals = localStorage.getItem("rms_proposals");
      if (savedProposals) setProposals(JSON.parse(savedProposals));

      const savedNotifications = localStorage.getItem("rms_notifications");
      if (savedNotifications) setNotifications(JSON.parse(savedNotifications));
    } catch (e) {
      console.error("Error reading localStorage", e);
    }
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
