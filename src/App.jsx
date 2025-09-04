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
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import Login from "./pages/auth/Login";
import Dashboard from "./pages/researcher/Dashboard";
import SubmitResearch from "./pages/researcher/SubmitResearch";
import MyResearches from "./pages/researcher/MyResearches";
import Notifications from "./pages/researcher/Notifications";
import { useState } from "react";

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (username) => {
    setUser({ username });
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <Router>
      <Routes>
        {/* Login Route */}
        {!user && <Route path="/login" element={<Login onLogin={handleLogin} />} />}

        {/* Protected Routes */}
        {user && (
          <Route path="/" element={<MainLayout username={user.username} onLogout={handleLogout} />}>
            <Route index element={<Dashboard />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="submit-research" element={<SubmitResearch />} />
            <Route path="my-researches" element={<MyResearches />} />
            <Route path="notifications" element={<Notifications />} />
          </Route>
        )}

        {/* Redirect unknown routes */}
        <Route path="*" element={<Navigate to={user ? "/" : "/login"} />} />
      </Routes>
    </Router>
  );
}

export default App;
