import React, { useEffect, useState } from 'react'
import clientAxios from '../../config/axios'

const NewClient = () => {

  const [newClient, setNewClient] = useState({})

  const { name, lastName, company, email, phoneNumber } = newClient

  const APIcall = async () => {
    const clientsReq = await clientAxios.post("/api/clients")
    // console.log(clientsReq.data)

    setNewClient(clientsReq.data)
  }

  useEffect(() => {
    APIcall()
  }, []);
  return (
    <div>
      <h2>Add New Client</h2>
      <form action={APIcall()} method="POST">

        <div className="campo">
          <label>Name:</label>
          <input type="text" placeholder="Name Cliente" name={name} />
        </div>

        <div className="campo">
          <label>Last Name:</label>
          <input type="text" placeholder="Apellido Cliente" name={lastName} />
        </div>

        <div className="campo">
          <label>Company:</label>
          <input type="text" placeholder="Empresa Cliente" name={company} />
        </div>

        <div className="campo">
          <label>Email:</label>
          <input type="email" placeholder="Email Cliente" name={email} />
        </div>

        <div className="campo">
          <label>Phone Number:</label>
          <input type="text" placeholder="Teléfono Cliente" name={phoneNumber} />
        </div>

        <div className="enviar">
          <input type="submit" className="btn btn-azul" value="Add Client" />
        </div>

      </form>
    </div>
  )
}

export default NewClient
