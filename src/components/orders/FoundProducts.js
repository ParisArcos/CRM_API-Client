import React from "react";

const FoundProducts = (props) => {
  const { product, changeProductUnits, index } = props;
  return (
    <li>
      {product.image ? (
        <img
          src={`http://localhost:4000/${product.image}`}
          className="img-product"
          alt="product"
        />
      ) : null}

      <div className="text-product">
        <p className="name">{product.name}</p>
        <p className="description">{product.description}</p>
        <p className="price">{product.price} SMC</p>
      </div>
      <div className="actions">
        <div className="d-flex justify-content-around container">
          <i
            className="fas fa-minus "
            onClick={() => changeProductUnits("-", index)}
          ></i>
          <p className="units ">{product.units} </p>
          <i
            className="fas fa-plus"
            onClick={() => changeProductUnits("+", index)}
          ></i>
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
