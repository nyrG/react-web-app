import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import Login from "./components/Accounts/Login";
import SignUp from "./components/Accounts/SignUp";
import Order from "./components/Order";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/order" element={<Order />} />
          <Route path="*" element={<Login />} />{" "}
          {/* Redirect to Login as default */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
