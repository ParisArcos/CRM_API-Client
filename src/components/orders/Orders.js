import React, { useState, useEffect, useParams } from "react";
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
      <ul>
        {orders.map((order) => {
          return <Order key={order._id} order={order} />;
        })}
      </ul>
    </div>
  );
};

export default Orders;
