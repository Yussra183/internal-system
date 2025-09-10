import React, { createContext, useState, useEffect } from "react";

// Create context
export const AuthContext = createContext();

// Provider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("rms_user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const [proposals, setProposals] = useState([]);
  const [notifications, setNotifications] = useState([]);

  // --- DEMO LOGIN ---
  const login = ({ username, password }) => {
    const users = [
      { username: "researcher", password: "123", role: "researcher" },
      { username: "divisionhead", password: "123", role: "headOfDivision" },
      { username: "headofdepartment", password: "123", role: "headOfDepartment" }, // new HOD user
    ];

    const found = users.find(
      (u) =>
        u.username.toLowerCase() === username.trim().toLowerCase() &&
        u.password === password
    );

    if (found) {
      setUser(found);
      localStorage.setItem("rms_user", JSON.stringify(found));
      return { ok: true, user: found }; // ✅ match login page expectation
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

  useEffect(() => {
    const savedProposals = localStorage.getItem("rms_proposals");
    if (savedProposals) setProposals(JSON.parse(savedProposals));

    const savedNotifications = localStorage.getItem("rms_notifications");
    if (savedNotifications) setNotifications(JSON.parse(savedNotifications));
  }, []);

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
