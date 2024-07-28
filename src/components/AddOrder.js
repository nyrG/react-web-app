import React, { useState } from "react";
import { createOrder } from "./Service/ApiService"; // Adjust the import path as needed
import "./Components.css"; // Assuming you're using this for styling

function AddOrder() {
  const [orderData, setOrderData] = useState({
    deliveryAddress: {
      barangay: "",
      city: "",
      province: "",
      street: "",
    },
    deliveryDate: "",
    orderDate: "",
    price: 0,
    quantity: 0,
    stationName: "",
    status: "",
    userId: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.includes("deliveryAddress")) {
      const addressField = name.split(".")[1];
      setOrderData((prevData) => ({
        ...prevData,
        deliveryAddress: {
          ...prevData.deliveryAddress,
          [addressField]: value,
        },
      }));
    } else {
      setOrderData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting order with data:", orderData); // Log data being submitted
    try {
      await createOrder(orderData);
      alert("Order successfully created");
    } catch (error) {
      alert("Failed to create order");
      console.error("Error creating order:", error);
    }
  };

  return (
    <div className="container">
      <div className="header">
        <div className="text">Create New Order</div>
        <div className="underline"></div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="input">
          <label htmlFor="stationName">Station Name:</label>
          <input
            type="text"
            id="stationName"
            name="stationName"
            value={orderData.stationName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input">
          <label htmlFor="quantity">Quantity:</label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={orderData.quantity}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input">
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            id="price"
            name="price"
            value={orderData.price}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input">
          <label htmlFor="status">Status:</label>
          <input
            type="text"
            id="status"
            name="status"
            value={orderData.status}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input">
          <label htmlFor="userId">User ID:</label>
          <input
            type="text"
            id="userId"
            name="userId"
            value={orderData.userId}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input">
          <label htmlFor="street">Street:</label>
          <input
            type="text"
            id="street"
            name="deliveryAddress.street"
            value={orderData.deliveryAddress.street}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input">
          <label htmlFor="barangay">Barangay:</label>
          <input
            type="text"
            id="barangay"
            name="deliveryAddress.barangay"
            value={orderData.deliveryAddress.barangay}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input">
          <label htmlFor="city">City:</label>
          <input
            type="text"
            id="city"
            name="deliveryAddress.city"
            value={orderData.deliveryAddress.city}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input">
          <label htmlFor="province">Province:</label>
          <input
            type="text"
            id="province"
            name="deliveryAddress.province"
            value={orderData.deliveryAddress.province}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="submit">
          Submit Order
        </button>
      </form>
    </div>
  );
}

export default AddOrder;
