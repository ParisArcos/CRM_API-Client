import React from "react";

const FoundProducts = () => {
  return (
    <li>
      <div className="text-product">
        <p className="name">ALFREDO</p>
        <p className="description">PACO</p>
        <p className="price">$Flaco</p>
      </div>
      <div className="actions">
        <div className="container-units">
          <i className="fas fa-minus"></i>
          <input type="text" name="cantidad" />
          <i className="fas fa-plus"></i>
        </div>
        <button type="button" className="btn btn-red">
          <i className="fas fa-minus-circle"></i>
          Delete product
        </button>
      </div>
    </li>
  );
};

export default FoundProducts;
