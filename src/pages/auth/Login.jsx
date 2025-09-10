import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/zafiri.png";
import "./login.css";
import { AuthContext } from "../../context/AuthContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Trim and lowercase username for robust matching
    const res = login({
      username: username.trim().toLowerCase(),
      password: password,
    });

    if (res.ok) {
      // Redirect based on role
      if (res.user.role === "researcher") navigate("/dashboard");
      else if (res.user.role === "headOfDivision") navigate("/head/dashboard");
      else if (res.user.role === "headOfDepartment") navigate("/hod/dashboard"); // HOD
    } else {
      setError(res.message);
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

        {error && <p style={{ color: "red", marginBottom: "10px" }}>{error}</p>}

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

        <p style={{ fontSize: "12px", marginTop: "10px" }}>
          Demo users: <br />
          researcher / 123 <br />
          divisionhead / 123 <br />
          headofdepartment / 123 {/* added HOD */}
        </p>
      </form>
    </div>
  );
};

export default Login;


