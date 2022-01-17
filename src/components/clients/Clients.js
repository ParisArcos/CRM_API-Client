import React, { useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import clientAxios from "../../config/axios";
import Client from "./Client";
import { CRMContext } from "../../context/CRMContext";

const Clients = () => {
  const [clients, setClients] = useState([]);
  const [auth, setAuth] = useContext(CRMContext);

  const navigate = useNavigate();

  const APIcall = async () => {
    try {
      const req = await clientAxios.get("/clients");
      // console.log(req.data)

      setClients(req.data);
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
      <h2>Clients List</h2>

      <Link className="btn btn-green" to="/clients/new">
        <i className="fas fa-plus"></i>Add New Client
      </Link>

      <ul className="list-clients">
        {clients.map((client) => {
          return <Client key={client._id} client={client} />;
        })}
      </ul>
    </div>
  );
};

export default Clients;
