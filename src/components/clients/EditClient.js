import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import clientAxios from "../../config/axios";

const EditClient = () => {

  function getIdFromUrl() {
    const pathSplit = pathname.split("/");
    const id = pathSplit[pathSplit.length - 1];
    return id
  }

  /**
 *  This function sets initial state
 *  newClient = state  setNewClient = setState
 */
  const [editClient, setEditClient] = useState({
    name: "",
    lastName: "",
    company: "",
    email: "",
    phoneNumber: "",
  });

  /**
   * API REQ
   *  */

  const { pathname } = useLocation();
  const APIcall = async () => {
    const clientReq = await clientAxios.get(`/clients/${getIdFromUrl()}`)

    setEditClient(clientReq.data)
  }

  /**
 * USE EFFECT
 *  */
  useEffect(() => {
    APIcall()
  }, []);

  /**
   *  This function handle input change
   */
  const handleChange = (e) => {
    setEditClient({
      //* actual state
      ...editClient,
      [e.target.name]: e.target.value,
    });
  };

  /**
   *  This function handle form submit
   */

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    clientAxios.put(`/clients/${getIdFromUrl()}`, editClient).then((res) => {
      if (res.data.code === 11000) {
        Swal.fire("Something went wrong!", "Error in Database", "error");
      } else {
        Swal.fire("New client Added!", res.data.message, "success");
      }
      navigate("/");
    });
  };
  const { name, lastName, company, email, phoneNumber } = editClient;

  /**
   *  This function validate that any input is empty
   */
  const validateForm = () => {
    const { name, lastName, company, email, phoneNumber } = editClient;
    //todo improve function
    let validate =
      !name.length ||
      !lastName.length ||
      !company.length ||
      !email.length ||
      !phoneNumber.length;

    return validate;
  };

  return (
    <div>
      <h2>Add New Client</h2>
      <form onSubmit={handleSubmit}>
        <div className="campo">
          <label>Name:</label>
          <input
            type="text"
            placeholder="Name client"
            name="name"
            value={name}
            onChange={handleChange}
          />
        </div>

        <div className="campo">
          <label>Last Name:</label>
          <input
            type="text"
            placeholder="Apellido client"
            name="lastName"
            value={lastName}
            onChange={handleChange}
          />
        </div>

        <div className="campo">
          <label>Company:</label>
          <input
            type="text"
            placeholder="company client"
            name="company"

            value={company}
            onChange={handleChange}
          />
        </div>

        <div className="campo">
          <label>Email:</label>
          <input
            type="email"
            placeholder="Email client"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </div>

        <div className="campo">
          <label>Phone Number:</label>
          <input
            type="text"
            placeholder="Teléfono client"
            name="phoneNumber"
            value={phoneNumber}
            onChange={handleChange}
          />
        </div>

        <div className="enviar">
          <input
            type="submit"
            className="btn btn-blue"
            value="Add Client"
            disabled={validateForm()}
          />
        </div>
      </form>
    </div>
  );
}

export default EditClient
