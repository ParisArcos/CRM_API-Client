import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import clientAxios from "../../config/axios";
import Client from "./Client";

const Clients = () => {
  const [clients, setClients] = useState([]);

  const APIcall = async () => {
    const clientsReq = await clientAxios.get("/clients");
    // console.log(clientsReq.data)

    setClients(clientsReq.data);
  };

  useEffect(() => {
    APIcall();
  }, []);

  return (
    <div>
      <h2>Clients List</h2>

      <Link className="btn btn-green" to="/clients/new"><i className="fas fa-plus"></i>Add New Client</Link>

      <ul className="list-clients">
        {clients.map(client => {
          return <Client key={client._id} client={client} />
        })}
      </ul>
    </div>
  );
};

export default Clients;
