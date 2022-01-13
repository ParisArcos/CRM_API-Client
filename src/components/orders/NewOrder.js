import React, { useState, useEffect, Fragment } from "react";
import { useLocation } from "react-router-dom";
import clientAxios from "../../config/axios";
import FormSearchProduct from "./FormSearchProduct";

const NewOrder = () => {
  /**
   *  This function sets initial state
   *  orderClient = state  setOrderClient = setState
   */
  const [orderClient, setOrderClient] = useState({});

  /**
   *  This function sets initial state
   *  productSearch = state  setProductSearch = setState
   */
  const [productSearch, setProductSearch] = useState("");

  const { pathname } = useLocation();

  /**
   *  This function takes the id from the  URL
   */
  const getIdFromURL = () => {
    const pathSplit = pathname.split("/");
    return pathSplit[pathSplit.length - 1];
  };

  /**
   *  This function gets client from the api
   */
  const APIcall = async () => {
    const clientReq = await clientAxios.get(`/clients/${getIdFromURL()}`);
    setOrderClient(clientReq.data);
  };

  /**
   *  useEffect
   */
  useEffect(() => {
    APIcall();
  });

  /**
   *  This function gets client from the api
   */
  const searchProduct = async (e) => {
    e.preventDefault();
  };

  /**
   *  This function sets products from the product form
   */
  const handleChangeProduct = (e) => {
    setProductSearch(e.target.value);
  };

  return (
    <>
      <h2>Nuevo Pedido</h2>

      <div className="ficha-cliente">
        <h3>Datos de Cliente</h3>
        <p>
          {orderClient.name} {orderClient.lastName}
        </p>
        <p>
          {orderClient.email} {orderClient.phoneNumber}
        </p>
      </div>

      <FormSearchProduct
        searchProduct={searchProduct}
        handleChangeProduct={handleChangeProduct}
      />
      <form>
        <div className="campo">
          <label>Products:</label>
          <input type="text" placeholder="Product Name" name="products" />
        </div>

        <ul className="resumen">
          <li>
            <div className="texto-producto">
              <p className="name">Macbook Pro</p>
              <p className="description">Macbook Pro</p>
              <p className="price">$250</p>
            </div>
            <div className="acciones">
              <div className="contenedor-cantidad">
                <i className="fas fa-minus"></i>
                <input type="text" name="cantidad" />
                <i className="fas fa-plus"></i>
              </div>
              <button type="button" className="btn btn-rojo">
                <i className="fas fa-minus-circle"></i>
                Eliminar Producto
              </button>
            </div>
          </li>
          <li>
            <div className="texto-producto">
              <p className="nombre">Macbook Pro</p>
              <p className="precio">$250</p>
            </div>
            <div className="acciones">
              <div className="contenedor-cantidad">
                <i className="fas fa-minus"></i>
                <input type="text" name="cantidad" />
                <i className="fas fa-plus"></i>
              </div>
              <button type="button" className="btn btn-rojo">
                <i className="fas fa-minus-circle"></i>
                Eliminar Producto
              </button>
            </div>
          </li>
          <li>
            <div className="texto-producto">
              <p className="nombre">Macbook Pro</p>
              <p className="precio">$250</p>
            </div>
            <div className="acciones">
              <div className="contenedor-cantidad">
                <i className="fas fa-minus"></i>
                <input type="text" name="cantidad" />
                <i className="fas fa-plus"></i>
              </div>
              <button type="button" className="btn btn-rojo">
                <i className="fas fa-minus-circle"></i>
                Eliminar Producto
              </button>
            </div>
          </li>
        </ul>
        <div className="campo">
          <label>Total:</label>
          <input
            type="number"
            name="precio"
            placeholder="Precio"
            readonly="readonly"
          />
        </div>
        <div className="enviar">
          <input
            type="submit"
            className="btn btn-azul"
            value="Agregar Pedido"
          />
        </div>
      </form>
    </>
  );
};

export default NewOrder;
