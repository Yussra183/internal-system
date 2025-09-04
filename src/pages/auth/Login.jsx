// import React, { useState } from "react";
// import Logo from "../../assets/zafiri.png";
// import "./login.css";

// const Login = ({ onLogin }) => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (username.trim() && password.trim()) {
//       onLogin(username); // tumpelekee jina kwa App.jsx
//     } else {
//       alert("Please enter username and password!");
//     }
//   };

//   return (
//     <div className="login-page">
//       <form className="login-form" onSubmit={handleSubmit}>
//         {/* Header (Logo + Text) ndani ya box */}
//         <div className="login-header">
//           <img src={Logo} alt="Zafiri Logo" className="logo" />
//           <p className="portal-text">Research Portal</p>
//         </div>

//         {/* Form Inputs */}
//         <h2>Login</h2>
//         <input
//           type="text"
//           placeholder="Username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default Login;
import React, { useState } from "react";
import Logo from "../../assets/zafiri.png";
import "./login.css";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // kwa sasa tuna simple login tu
    if (username && password) {
      onLogin(username); // tuma username kwa App.jsx
    } else {
      alert("Tafadhali jaza username na password");
    }
  };

  return (
    <div className="login-page">
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="login-header">
          <img src={Logo} alt="Zafiri Logo" className="logo" />
          <p className="portal-text">Research Portal</p>
        </div>
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
