import React from "react";

const Order = (props) => {

  const { client, order, total, _id } = props.order
  console.log(props.order)
  return (
    <>
      <li className="order">
        <div className="info-order">
          <p className="id">{_id}</p>
          <p className="name">{client.name} {client.lastName}</p>

          <div className="products-order">
            <p className="products">Artículos order: </p>
            <ul>

              {order.map((o) => (
                <li key={o.product._id} className="d-flex align-items-center ">
                  {o.product.image ? (
                    <div >
                      <img className="img-product me-4" src={`http://localhost:4000/${o.product.image}`}></img>

                    </div>
                  ) : (null)}
                  <div>
                    <p>{o.product.name}</p>
                    <p>Precio: {o.product.price} €</p>
                    <p>Cantidad: {o.units}</p>
                  </div>


                </li>
              ))}


            </ul>
          </div>
          <p className="total">Total: {total} €</p>
        </div>
        <div className="actions">
          <a href="#" className="btn btn-blue">
            <i className="fas fa-edit"></i>
            Edit order
          </a>

          <button type="button" className="btn btn-red btn-delete">
            <i className="fas fa-times"></i>
            Delete order
          </button>
        </div>
      </li>
    </>
  );
};

export default Order;
