// import React, { useState } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import Sidebar from "./components/Sidebar";

// // Pages
// import SubmitResearch from "./pages/researcher/SubmitResearch";
// import Dashboard from "./pages/researcher/Dashboard";

// function App() {
//   const [user, setUser] = useState("Researcher1");

//   const handleLogout = () => setUser(null);

//   return (
//     <Router>
//       {user && (
//         <>
//           <Header username={user} onLogout={handleLogout} />
//           <Sidebar />
//         </>
//       )}

//       <main style={{ marginLeft: user ? "300px" : "0", padding: "20px" }}>
//         <Routes>
//           <Route path="/" element={<Dashboard />} />
//           <Route path="/submit-research" element={<SubmitResearch />} />
//         </Routes>
//       </main>

//       {user && <Footer />}
//     </Router>
//   );
// }

// export default App;

import React, { useContext, useState, lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, AuthContext } from "./context/AuthContext";

import MainLayout from "./components/MainLayout";
import HeadLayout from "./components/HeadLayout";
import Login from "./pages/auth/Login";

// Lazy load pages
const Dashboard = lazy(() => import("./pages/researcher/Dashboard"));
const SubmitResearch = lazy(() => import("./pages/researcher/SubmitResearch"));
const MyResearches = lazy(() => import("./pages/researcher/MyResearches"));
const Notifications = lazy(() => import("./pages/researcher/Notifications"));

const HeadDashboard = lazy(() => import("./pages/division/Dashboard"));
const AssignResearcher = lazy(() => import("./pages/division/AssignResearcher"));
const Reports = lazy(() => import("./pages/division/Reports"));

function AppRoutes() {
  const { user } = useContext(AuthContext);

  // Shared state for researcher
  const [myResearches, setMyResearches] = useState([]);
  const [availableProposals, setAvailableProposals] = useState([
    { title: "Proposal A", type: "Thesis", status: "Pending" },
    { title: "Proposal B", type: "Article", status: "Pending" },
  ]);

  const getHomeRoute = () => {
    if (!user) return "/login";
    if (user.role === "researcher") return "/dashboard";
    if (user.role === "headOfDivision") return "/head/dashboard";
    return "/login";
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {!user && <Route path="/login" element={<Login />} />}

        {user?.role === "researcher" && (
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route
              path="submit-research"
              element={
                <SubmitResearch
                  myResearches={myResearches}
                  setMyResearches={setMyResearches}
                  availableProposals={availableProposals}
                  setAvailableProposals={setAvailableProposals}
                />
              }
            />
            <Route
              path="my-researches"
              element={
                <MyResearches
                  myProposals={myResearches}
                  updateProposal={(index, updated) => {
                    const copy = [...myResearches];
                    copy[index] = updated;
                    setMyResearches(copy);
                  }}
                />
              }
            />
            <Route path="notifications" element={<Notifications />} />
          </Route>
        )}

        {user?.role === "headOfDivision" && (
          <Route path="/head" element={<HeadLayout />}>
            <Route index element={<HeadDashboard />} />
            <Route path="dashboard" element={<HeadDashboard />} />
            <Route path="assign-researcher" element={<AssignResearcher />} />
            <Route path="reports" element={<Reports />} />
          </Route>
        )}

        <Route path="*" element={<Navigate to={getHomeRoute()} />} />
      </Routes>
    </Suspense>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <AppRoutes />
      </Router>
    </AuthProvider>
  );
}

export default App;

