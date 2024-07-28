import React, { useState } from "react";
import "./Accounts.css";
import { createAccount } from "../Service/ApiService";

function SignUp() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    phoneNum: "",
    type: "",
    name: {
      firstName: "",
      middleName: "",
      lastName: "",
    },
    address: {
      street: "",
      barangay: "",
      city: "",
      province: "",
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Simplify update logic with dynamic key paths
    setFormData((prevFormData) => {
      const newFormData = { ...prevFormData };
      if (name.includes(".")) {
        const keys = name.split(".");
        newFormData[keys[0]] = { ...newFormData[keys[0]], [keys[1]]: value };
      } else {
        newFormData[name] = value;
      }
      return newFormData;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting form with data:", formData);
    try {
      const response = await createAccount(formData);
      alert("Account successfully created");
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.Message
      ) {
        alert(`Account creation failed: ${error.response.data.Message}`);
      } else {
        alert(`Account creation failed: ${error.message}`);
      }
    }
  };

  return (
    <div className="container signup-container">
      <div className="header">
        <div className="text">Sign Up</div>
        <div className="underline"></div>
      </div>
      <form className="inputs" onSubmit={handleSubmit}>
        {/* Account Information Section */}
        <div className="section">
          <h3>Account Information</h3>
          <div className="input">
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              required
            />
          </div>
          <div className="input">
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              required
            />
          </div>
          <div className="input">
            <input
              type="text"
              name="phoneNum"
              placeholder="Phone Number"
              onChange={handleChange}
              required
            />
          </div>
          <div className="input">
            <select name="type" onChange={handleChange} required>
              <option value="">Select Type</option>
              <option value="owner">Owner</option>
              <option value="customer">Customer</option>
            </select>
          </div>
        </div>

        {/* Personal Information Section */}
        <div className="section">
          <h3>Personal Information</h3>
          <div className="input">
            <input
              type="text"
              name="name.firstName"
              placeholder="First Name"
              onChange={handleChange}
              required
            />
          </div>
          <div className="input">
            <input
              type="text"
              name="name.middleName"
              placeholder="Middle Name"
              onChange={handleChange}
            />
          </div>
          <div className="input">
            <input
              type="text"
              name="name.lastName"
              placeholder="Last Name"
              onChange={handleChange}
              required
            />
          </div>
        </div>

        {/* Address Information Section */}
        <div className="section">
          <h3>Address Information</h3>
          <div className="input">
            <input
              type="text"
              name="address.street"
              placeholder="Street"
              onChange={handleChange}
              required
            />
          </div>
          <div className="input">
            <input
              type="text"
              name="address.barangay"
              placeholder="Barangay"
              onChange={handleChange}
              required
            />
          </div>
          <div className="input">
            <input
              type="text"
              name="address.city"
              placeholder="City"
              onChange={handleChange}
              required
            />
          </div>
          <div className="input">
            <input
              type="text"
              name="address.province"
              placeholder="Province"
              onChange={handleChange}
              required
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="submit">
          <button type="submit" className="submit">
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
