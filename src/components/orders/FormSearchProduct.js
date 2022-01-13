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
        <input type="submit" className="btn btn-azul" value="Agregar Pedido" />
      </div>
    </form>
  );
};

export default FormSearchProduct;
