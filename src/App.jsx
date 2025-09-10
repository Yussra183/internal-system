// import React, { useContext, useState, lazy, Suspense } from "react";
// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import { AuthProvider, AuthContext } from "./context/AuthContext";

// import MainLayout from "./components/MainLayout";
// import HeadLayout from "./components/HeadLayout";
// import Login from "./pages/auth/Login";

// // Lazy load pages
// const Dashboard = lazy(() => import("./pages/researcher/Dashboard"));
// const SubmitResearch = lazy(() => import("./pages/researcher/SubmitResearch"));
// const MyResearches = lazy(() => import("./pages/researcher/MyResearches"));
// const Notifications = lazy(() => import("./pages/researcher/Notifications"));

// const HeadDashboard = lazy(() => import("./pages/division/Dashboard"));
// const AssignResearcher = lazy(() => import("./pages/division/AssignResearcher"));
// const Reports = lazy(() => import("./pages/division/Reports"));
// const ReviewResearch = lazy(() => import("./pages/division/ReviewResearch"));

// function AppRoutes() {
//   const { user } = useContext(AuthContext);

//   // Shared state for researcher
//   const [myResearches, setMyResearches] = useState([]);
//   const [availableProposals, setAvailableProposals] = useState([
//     { title: "Proposal A", type: "Thesis", status: "Pending" },
//     { title: "Proposal B", type: "Article", status: "Pending" },
//   ]);

//   const getHomeRoute = () => {
//     if (!user) return "/login";
//     if (user.role === "researcher") return "/dashboard";
//     if (user.role === "headOfDivision") return "/head/dashboard";
//     return "/login";
//   };

//   return (
//     <Suspense fallback={<div>Loading...</div>}>
//       <Routes>
//         {!user && <Route path="/login" element={<Login />} />}

//         {user?.role === "researcher" && (
//           <Route path="/" element={<MainLayout />}>
//             <Route index element={<Dashboard />} />
//             <Route path="dashboard" element={<Dashboard />} />
//             <Route
//               path="submit-research"
//               element={
//                 <SubmitResearch
//                   myResearches={myResearches}
//                   setMyResearches={setMyResearches}
//                   availableProposals={availableProposals}
//                   setAvailableProposals={setAvailableProposals}
//                 />
//               }
//             />
//             <Route
//               path="my-researches"
//               element={
//                 <MyResearches
//                   myProposals={myResearches}
//                   updateProposal={(index, updated) => {
//                     const copy = [...myResearches];
//                     copy[index] = updated;
//                     setMyResearches(copy);
//                   }}
//                 />
//               }
//             />
//             <Route path="notifications" element={<Notifications />} />
//           </Route>
//         )}

//         {user?.role === "headOfDivision" && (
//           <Route path="/head" element={<HeadLayout />}>
//             <Route index element={<HeadDashboard />} />
//             <Route path="dashboard" element={<HeadDashboard />} />
//             <Route path="assign-researcher" element={<AssignResearcher />} />
//             <Route path="review-research" element={<ReviewResearch />} />
//             <Route path="reports" element={<Reports />} />
//           </Route>
//         )}

//         <Route path="*" element={<Navigate to={getHomeRoute()} />} />
//       </Routes>
//     </Suspense>
//   );
// }

// function App() {
//   return (
//     <AuthProvider>
//       <Router>
//         <AppRoutes />
//       </Router>
//     </AuthProvider>
//   );
// }

// export default App;
import React, { useContext, useState, lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, AuthContext } from "./context/AuthContext";

import MainLayout from "./components/MainLayout";
import HeadLayout from "./components/HeadLayout";
import HODLayout from "./components/HODLayout"; // New HOD Layout
import Login from "./pages/auth/Login";

// Lazy load pages
const ResearcherDashboard = lazy(() => import("./pages/researcher/Dashboard"));
const SubmitResearch = lazy(() => import("./pages/researcher/SubmitResearch"));
const MyResearches = lazy(() => import("./pages/researcher/MyResearches"));
const Notifications = lazy(() => import("./pages/researcher/Notifications"));

const HeadDashboard = lazy(() => import("./pages/division/Dashboard"));
const AssignResearcher = lazy(() => import("./pages/division/AssignResearcher"));
const Reports = lazy(() => import("./pages/division/Reports"));
const ReviewResearch = lazy(() => import("./pages/division/ReviewResearch"));

const HODDashboard = lazy(() => import("./pages/HOD/Dashboard"));
const ManageProposals = lazy(() => import("./pages/HOD/ManageProposals"));

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
    if (user.role === "headOfDepartment") return "/hod/dashboard";
    return "/login";
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {/* Public route */}
        {!user && <Route path="/login" element={<Login />} />}

        {/* Researcher routes */}
        {user?.role === "researcher" && (
          <Route path="/" element={<MainLayout />}>
            <Route index element={<ResearcherDashboard />} />
            <Route path="dashboard" element={<ResearcherDashboard />} />
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

        {/* Head of Division routes */}
        {user?.role === "headOfDivision" && (
          <Route path="/head" element={<HeadLayout />}>
            <Route index element={<HeadDashboard />} />
            <Route path="dashboard" element={<HeadDashboard />} />
            <Route path="assign-researcher" element={<AssignResearcher />} />
            <Route path="review-research" element={<ReviewResearch />} />
            <Route path="reports" element={<Reports />} />
          </Route>
        )}

        {/* Head of Department routes */}
        {user?.role === "headOfDepartment" && (
          <Route path="/hod" element={<HODLayout />}>
            <Route index element={<HODDashboard />} />
            <Route path="dashboard" element={<HODDashboard />} />
            <Route path="manage-proposals" element={<ManageProposals />} />
          </Route>
        )}

        {/* Catch all - redirect */}
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
