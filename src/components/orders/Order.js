import React from "react";
import Swal from "sweetalert2";
import { clientAxios, authHeader } from "../../config/axios";

const Order = (props) => {
  const deleteOrder = (id) => {
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
        clientAxios
          .delete(`/orders/${id}`, authHeader(localStorage.getItem("token")))
          .then((res) => {
            res.status === 200
              ? Swal.fire("Deleted!", "Your order has been deleted.", "success")
              : Swal.fire("Something went wrong!", res.status, "error");
          });
        props.APIcall();
      }
    });
  };

  const { client, order, total, _id } = props.order;
  return (
    <>
      <li className="order">
        <div className="info-order">
          <p className="id">ORDER ID: {_id}</p>
          <p className="name">
            Cliente: {client.name} {client.lastName}
          </p>
          <p className="name">
            Contact: {client.email} {client.phoneNumber}
          </p>
          <div className="products-order">
            <p className="products">Order: </p>
            <ul>
              {order.map((o) =>
                o.product ? (
                  <li key={o.product._id} className="d-flex align-items-center">
                    <div>
                      {o.product.image ? (
                        <img
                          src={`http://localhost:4000/${o.product.image}`}
                          className="img-product me-4"
                          alt="product"
                        />
                      ) : null}
                    </div>
                    <div className="container">
                      <p>{o.product.name}</p>
                      <p>Price: {o.product.price} SMC</p>
                      <p>Units: {o.units}</p>
                    </div>
                  </li>
                ) : (
                  <h3 key={_id}>Product not found!!</h3>
                )
              )}
            </ul>
          </div>
          <p className="total">Total: {total} SMC </p>
        </div>
        <div className="actions">
          <button
            type="button"
            className="btn btn-red btn-delete"
            onClick={() => deleteOrder(_id)}
          >
            <i className="fas fa-times"></i>
            Delete order
          </button>
        </div>
      </li>
    </>
  );
};

export default Order;
