import React from "react";

const FormSearchProduct = ({ searchProducts, handleChangeProduct }) => {
  return (
    <form onSubmit={searchProducts}>
      <div className="field">
        <label>Products:</label>
        <input
          type="text"
          placeholder="Product Name"
          name="products"
          onChange={handleChangeProduct}
        />
      </div>
      <div className="enviar">
        <input
          type="submit"
          className="btn btn-blue btn-block"
          value="Search Products"
        />
      </div>
    </form>
  );
};

export default FormSearchProduct;
