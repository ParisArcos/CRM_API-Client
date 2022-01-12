import React, { useState } from "react";

const NewClient = () => {
  /**
   *  newClient = state  setNewClient = setState
   */
  const [newClient, setNewClient] = useState({
    name: "",
    lastName: "",
    company: "",
    email: "",
    phoneNumber: "",
  });

  // handleChange
  const handleChange = (e) => {
    setNewClient({
      //* actual state
      ...newClient,
      [e.target.name]: e.target.value,
    });
  };

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
      <form>
        <div className="campo">
          <label>Name:</label>
          <input
            type="text"
            placeholder="Name Cliente"
            name="name"
            onChange={handleChange}
          />
        </div>

        <div className="campo">
          <label>Last Name:</label>
          <input
            type="text"
            placeholder="Apellido Cliente"
            name="lastName"
            onChange={handleChange}
          />
        </div>

        <div className="campo">
          <label>Company:</label>
          <input
            type="text"
            placeholder="Empresa Cliente"
            name="company"
            onChange={handleChange}
          />
        </div>

        <div className="campo">
          <label>Email:</label>
          <input
            type="email"
            placeholder="Email Cliente"
            name="email"
            onChange={handleChange}
          />
        </div>

        <div className="campo">
          <label>Phone Number:</label>
          <input
            type="text"
            placeholder="Teléfono Cliente"
            name="phoneNumber"
            onChange={handleChange}
          />
        </div>

        <div className="enviar">
          <input
            type="submit"
            className="btn btn-azul"
            value="Add Client"
            disabled={validateForm()}
          />
        </div>
      </form>
    </div>
  );
};

export default NewClient;
