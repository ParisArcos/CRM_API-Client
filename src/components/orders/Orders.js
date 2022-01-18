import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { clientAxios, authHeader } from "../../config/axios";
import Order from "./Order";
import { CRMContext } from "../../context/CRMContext";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [auth, setAuth] = useContext(CRMContext);

  const navigate = useNavigate();

  const APIcall = async () => {
    try {
      const req = await clientAxios.get(
        "/orders",
        authHeader(localStorage.getItem("token"))
      );
      //

      setOrders(req.data);
    } catch (error) {
      error.response.status === 500 ? navigate("/login") : console.log(error);
    }
  };

  useEffect(() => {
    if (auth.token !== "") {
      APIcall();
    } else {
      navigate("/login");
    }
  }, []);

  !auth.auth ? navigate("/login") : console.log();

  return (
    <div>
      <h2>Orders List</h2>

      <ul>
        {orders.map((order) => {
          return <Order key={order._id} order={order} APIcall={APIcall} />;
        })}
      </ul>
    </div>
  );
};

export default Orders;
