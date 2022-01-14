import React, { useState, useEffect, Fragment } from "react";
import { useLocation } from "react-router-dom";
import clientAxios from "../../config/axios";
import FormSearchProduct from "./FormSearchProduct";
import FoundProducts from "./FoundProducts";
import Swal from "sweetalert2";

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
  const [foundProducts, setFoundProducts] = useState([]);

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
  }, []);

  /**
   *  This function gets client from the api
   */
  const searchProducts = async (e) => {
    e.preventDefault();
    const resSearch = await clientAxios.post(
      `/products/search/${productSearch}`
    );

    if (resSearch.data[0]) {
      let resProduct = resSearch.data[0];
      resProduct.product = resSearch.data[0]._id;
      resProduct.units = 0;

      setFoundProducts(...foundProducts, resProduct);
      console.log(foundProducts);
    } else {
      Swal.fire("Something went wrong!", "No results", "error");
    }
  };

  /**
   *  This function sets products from the product form
   */
  const handleChangeProduct = (e) => {
    setProductSearch(e.target.value);
  };

  return (
    <>
      <h2>New Order</h2>

      <div className="card-client">
        <h3>Client Info</h3>
        <p>
          Name: {orderClient.name} {orderClient.lastName}
        </p>
        <p>
          Contact: {orderClient.email} {orderClient.phoneNumber}
        </p>
      </div>

      <FormSearchProduct
        searchProducts={searchProducts}
        handleChangeProduct={handleChangeProduct}
      />
      <form>
        <ul className="resume">
          {foundProducts.map((product, index) => (
            <FoundProducts />
          ))}
        </ul>
        <div className="field">
          <label>Total:</label>
          <input
            type="number"
            name="price"
            placeholder="price"
            readOnly="readonly"
          />
        </div>
        <div className="sen">
          <input
            type="submit"
            className="btn btn-blue"
            value="Agregar Pedido"
          />
        </div>
      </form>
    </>
  );
};

export default NewOrder;
