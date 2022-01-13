import React from "react";
import { Link } from "react-router-dom";

import Swal from "sweetalert2";

import clientAxios from "../../config/axios";

const deleteProduct = (id) => {
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
      clientAxios.delete(`/products/${id}`).then((res) => {
        res.status === 200
          ? Swal.fire("Deleted!", "Your file has been deleted.", "success")
          : Swal.fire("Something went wrong!", res.status, "error");
      });
    }
  });
};

const Product = ({ product }) => {
  const { _id, name, description, price, image } = product;
  return (
    <div>
      <li className="producto">
        <div className="info-producto">
          <p className="nombre">{name}</p>
          <p className="descripcion">{description}</p>
          <p className="precio">{price} </p>
          {image ? (
            <img src={`http://localhost:4000/${image}`} alt="product" />
          ) : null}
        </div>
        <div className="acciones">
          <Link to={`/products/edit/${_id}`} className="btn btn-azul">
            <i className="fas fa-pen-alt"></i>
            Editar Producto
          </Link>

          <button
            type="button"
            className="btn btn-rojo btn-eliminar"
            onClick={() => deleteProduct(_id)}
          >
            <i className="fas fa-times"></i>
            Eliminar Producto
          </button>
        </div>
      </li>
    </div>
  );
};

export default Product;
