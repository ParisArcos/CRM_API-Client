import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import clientAxios from "../../config/axios";
import { CRMContext } from "../../context/CRMContext";

const NewClient = ({}) => {
  const [auth, setAuth] = useContext(CRMContext);

  const navigate = useNavigate();

  !auth.auth ? navigate("/login") : console.log();
  /**
   *  This function sets initial state
   *  newClient = state  setNewClient = setState
   */
  const [newClient, setNewClient] = useState({
    name: "",
    lastName: "",
    company: "",
    email: "",
    phoneNumber: "",
  });

  /**
   *  This function handle input change
   */
  const handleChange = (e) => {
    setNewClient({
      //* actual state
      ...newClient,
      [e.target.name]: e.target.value,
    });
  };

  /**
   *  This function handle form submit
   */
  const handleSubmit = (e) => {
    e.preventDefault();

    clientAxios.post("/clients", newClient).then((res) => {
      if (res.data.code === 11000) {
        Swal.fire("Something went wrong!", "Error in Database", "error");
      } else {
        Swal.fire("New client Added!", res.data.message, "success");
      }
      navigate("/");
    });
  };

  /**
   *  This function validate that any input is empty
   */
  const validateForm = () => {
    const { name, lastName, company, email, phoneNumber } = newClient;
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
        <div className="field">
          <label>Name:</label>
          <input
            type="text"
            placeholder="Name client"
            name="name"
            onChange={handleChange}
          />
        </div>

        <div className="field">
          <label>Last Name:</label>
          <input
            type="text"
            placeholder="Apellido client"
            name="lastName"
            onChange={handleChange}
          />
        </div>

        <div className="field">
          <label>Company:</label>
          <input
            type="text"
            placeholder="company client"
            name="company"
            onChange={handleChange}
          />
        </div>

        <div className="field">
          <label>Email:</label>
          <input
            type="email"
            placeholder="Email client"
            name="email"
            onChange={handleChange}
          />
        </div>

        <div className="field">
          <label>Phone Number:</label>
          <input
            type="text"
            placeholder="Teléfono client"
            name="phoneNumber"
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
};

export default NewClient;
