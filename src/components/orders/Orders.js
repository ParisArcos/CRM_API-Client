import React, { useState, useEffect } from "react";
<<<<<<< Updated upstream
import { Link } from "react-router-dom";
=======
>>>>>>> Stashed changes
import clientAxios from "../../config/axios";
import Order from "./Order";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  const APIcall = async () => {
    const ordersReq = await clientAxios.get("/orders");
    // console.log(clientsReq.data)

    setOrders(ordersReq.data);
  };

  useEffect(() => {
    APIcall();
  }, []);
  return (
    <div>
      <h2>Orders List</h2>
      <Link className="btn btn-green" to="NewOrder">
        <i className="fas fa-plus"></i>Add New Order
      </Link>

      <ul>
        {orders.map((order) => {
          return <Order key={order._id} order={order} />;
        })}
      </ul>
    </div>
  );
};

export default Orders;
