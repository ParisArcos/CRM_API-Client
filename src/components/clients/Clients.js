import React, { useEffect, useState } from "react";
import clientAxios from "../../config/axios"
import Client from "./Client";



const Clients = () => {

  const [clients, setClients] = useState([])



  const APIcall = async () => {
    const clientsReq = await clientAxios.get("/clients")
    // console.log(clientsReq.data)

    setClients(clientsReq.data)
  }

  useEffect(() => {
    APIcall()
  }, []);

  return (
    <div>
      <h2>This is Clients component</h2>
      <ul className="listado-clientes">
        {clients.map(client => {
          return <Client key={client._id} client={client} />
        })}
      </ul>
    </div>
  );
};

export default Clients;
