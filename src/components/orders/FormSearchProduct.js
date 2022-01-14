import React from "react";

const FormSearchProduct = ({ searchProducts, handleChangeProduct }) => {
  return (
    <form onSubmit={searchProducts}>
      <div className="campo">
        <label>Products:</label>
        <input
          type="text"
          placeholder="Product Name"
          name="products"
          onChange={handleChangeProduct}
        />
      </div>
      <div className="enviar">

        <button type="submit" className="btn btn-blue" value="Search Order" >
          <i className="fas fa-search"></i>
          Search Order</button>
      </div>
    </form>
  );
};

export default FormSearchProduct;
