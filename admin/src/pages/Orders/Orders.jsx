// import React from 'react'
import axios from "axios";
// import ToastContainer from "react-toastify";

import "./Orders.css";
import { useEffect } from "react";
import { useState } from "react";
import { assets } from "../../../../frontend/src/assets/assets";
// import toast from "react-toastify";


export default function Orders(url) {
  const [orders, setorders] = useState([]);
  const fetchallorders = async () => {
    const response = await axios.get(url + "/api/order/list");

    if (response.data.success) {
      setorders(response.data.data);
    } else {
      // ToastContainer.error("error");
    }
  };

  useEffect(() => {
    fetchallorders();
  }, [orders]);

  return (
    <div className="order add">
      <h3>Order page</h3>
      <div className="order-list">
        {orders.map((order, index) => {
          <div className="order-item" key={index}>
            <img src={assets.parcel_icon} alt="" />
            <div>
              <p className="order-item-food">
                {order.items.map((item, index) => {
                  if (index === order.items.length - 1) {
                    return item.name + " x " + item.quantity;
                  } else {
                    return item.name + " x " + item.quantity + "";
                  }
                })}
              </p>
              <p className="order-item-name">
                {order.address.fristname + " " + order.address.lastname}
              </p>
              <div className="order-item-address">
                <p>{order.address.street + ","}</p>
              </div>
            </div>
          </div>;
        })}
      </div>
    </div>
  );
}
