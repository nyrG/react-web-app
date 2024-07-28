import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Components.css";
import { fetchAllOrders } from "./Service/ApiService"; // Adjust the import path as needed

function DisplayOrders() {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate(); // Use navigate for routing

  const getData = async () => {
    try {
      const fetchedOrders = await fetchAllOrders();
      setOrders(fetchedOrders);
    } catch (error) {
      console.error("Error fetching orders", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container">
      <div className="header">
        <div className="text">All Orders</div>
        <div className="underline"></div>
      </div>
      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th>Station Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Order Date</th>
              <th>Delivery Date</th>
              <th>Status</th>
              <th>Delivery Address</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={index}>
                <td>{order.stationName || "N/A"}</td>
                <td>{order.quantity ?? "N/A"}</td>
                <td>{order.price ?? "N/A"}</td>
                <td>{order.orderDate || "N/A"}</td>
                <td>{order.deliveryDate || "N/A"}</td>
                <td>{order.status || "N/A"}</td>
                <td>
                  {order.deliveryAddress
                    ? `${order.deliveryAddress.street || ""}, ${
                        order.deliveryAddress.barangay || ""
                      }, ${order.deliveryAddress.city || ""}, ${
                        order.deliveryAddress.province || ""
                      }`
                    : "N/A"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="submit" onClick={() => navigate("/add-order")}>
        Add Order
      </div>
    </div>
  );
}

export default DisplayOrders;
