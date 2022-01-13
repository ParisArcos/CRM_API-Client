import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import clientAxios from "../../config/axios";

const Client = ({ client }) => {
  const { _id, name, lastName, email, company, phoneNumber } = client;

  /**
   * This function sends request to API for delete clients
   */
  const deleteClient = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        clientAxios.delete(`/clients/${id}`).then((res) => {
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
        });
      }
    });
  };

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

        <Link to={`orders/new/${_id}`} className="btn btn-amarillo">
          <i className="fas fa-pen-alt"></i>
          New Order
        </Link>

        <button
          type="button"
          className="btn btn-rojo btn-eliminar"
          onClick={() => deleteClient(_id)}
        >
          <i className="fas fa-times"></i>
          Eliminar Cliente
        </button>
      </div>
    </li>
  );
};

export default Client;
