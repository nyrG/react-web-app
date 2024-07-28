import React, { useState } from "react";
import "./Accounts.css";
import { loginAccount } from "../Service/ApiService";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const alertMessage = (message) => {
    alert(message);
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await loginAccount({ email, password });
      const message = response.Message || "Login successful!";
      alertMessage(message);
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.Message
      ) {
        alertMessage(`Login failed: ${error.response.data.Message}`);
      } else {
        alertMessage(`Login failed: ${error.message}`);
      }
    }
  };

  return (
    <div className="container login-container">
      <div className="header">
        <div className="text">Login</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input">
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="submit" onClick={handleLogin}>
          Login
        </div>
      </div>
    </div>
  );
}

export default Login;
