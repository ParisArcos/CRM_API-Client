import React from "react";
import { Link } from "react-router-dom";
const Client = ({ client }) => {
  const { _id, name, lastName, email, company, phoneNumber } = client;
  return (
    <li className="cliente">
      <div className="info-cliente">
        <p className="nombre">
          {name} {lastName}
        </p>
        <p className="empresa">{company}</p>
        <p>{email}</p>
        <p>{phoneNumber}</p>
      </div>
      <div className="acciones">
        <Link to={`clients/edit/${_id}`} className="btn btn-azul">
          <i className="fas fa-pen-alt"></i>
          Editar Cliente
        </Link>
        <button type="button" className="btn btn-rojo btn-eliminar">
          <i className="fas fa-times"></i>
          Eliminar Cliente
        </button>
      </div>
    </li>
  );
};

export default Client;
