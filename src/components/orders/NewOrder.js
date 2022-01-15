import React, { useState, useEffect, Fragment } from "react";
import { useLocation } from "react-router-dom";
import clientAxios from "../../config/axios";
import FormSearchProduct from "./FormSearchProduct";
import FoundProducts from "./FoundProducts";
import Swal from "sweetalert2";

const NewOrder = () => {
  /**
   *  This function sets initial state
   *  state , setState
   */
  const [orderClient, setOrderClient] = useState({});
  const [foundProducts, setFoundProducts] = useState([]);
  const [productSearch, setProductSearch] = useState("");
  const [total, setTotal] = useState("");

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
    updateTotal();
  }, [foundProducts]);

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

      setFoundProducts([...foundProducts, resProduct]);
      //TODO implements-> show more than one products
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

  /**
   *  This function delete products from state
   */
  const deleteProductOrder = (id) => {
    const allProducts = foundProducts.filter(
      (product) => product.product !== id
    );
    setFoundProducts(allProducts);
  };

  /**
   *
   */
  const changeProductUnits = (symbol, index) => {
    const allProducts = [...foundProducts];
    if (symbol === "+") {
      allProducts[index].units++;
    } else {
      if (allProducts[index].units !== 0) {
        allProducts[index].units--;
      } else {
        return;
      }
    }
    return setFoundProducts(allProducts);
  };

  const updateTotal = () => {
    if (foundProducts.length === 0) {
      setTotal(0);
      return;
    }
    let newTotal = 0;
    foundProducts.map((product) => (newTotal += product.units * product.price));
    setTotal(newTotal);
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
      <ul className="resume">
        {foundProducts.map((product, index) => (
          <FoundProducts
            key={product.product}
            product={product}
            changeProductUnits={changeProductUnits}
            index={index}
            deleteProductOrder={deleteProductOrder}
          />
        ))}
      </ul>
      <div className="field">
        <p className="total">
          Total: <span>{total}€</span>
        </p>
      </div>
      <div className="sen">
        <input type="submit" className="btn btn-blue" value="Agregar Pedido" />
      </div>
      {total > 0 ? (
        <form>
          <input
            type="submit"
            className="btn btn-green btn-block"
            value="Complete Order"
          />
        </form>
      ) : null}
    </>
  );
};

export default NewOrder;
