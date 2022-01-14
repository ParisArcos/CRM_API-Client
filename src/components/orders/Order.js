import React from "react";

const Order = (order) => {

  const { name, price, units, total } = order;
  return (
    <>
      <li className="order">
        <div className="info-order">
          <p className="id">ID: 0192019201291201</p>
          <p className="name">Cliente: Juan Pablo De la torre</p>

          <div className="products-order">
            <p className="products">Artículos order: </p>
            <ul>
              <li>
                <p>{name}</p>
                <p>Precio: ${price}</p>
                <p>Cantidad: 4</p>
              </li>
              <li>
                <p>Macbook Pro</p>
                <p>Precio: $3000</p>
                <p>Cantidad: 4</p>
              </li>
              <li>
                <p>Macbook Pro</p>
                <p>Precio: $3000</p>
                <p>Cantidad: 4</p>
              </li>
            </ul>
          </div>
          <p className="total">Total: $3,500 </p>
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
