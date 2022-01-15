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

  const [total, setTotal] = useState(0)

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
    updateTotal()
  }, [foundProducts]);


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
  // ------ THIS FUNCTION DELETES A PRODUCT FROM ORDERLIST ---------

  const deleteProductOrder = (id) => {
    console.log("delete")
    const allProducts = foundProducts.filter(product => product._id !== id)
    setFoundProducts(allProducts)
  }


  // ------ THIS FUNCTION UPDATES TOTAL ---------
  const updateTotal = () => {
    if (foundProducts.length === 0) {
      setTotal(0)
      return
    }

    let newTotal = 0;

    foundProducts.map(product => newTotal += (product.units * product.price))
    setTotal(newTotal)

  }



  return (
    <>
      <h2>Nuevo Pedido</h2>

      <div className="card-client">
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
      <ul className="resume">
        {foundProducts.map((product, index) => (
          <FoundProducts
            key={product.product}
            product={product}
            deleteProductOrder={deleteProductOrder}
            changeProductUnits={changeProductUnits}
            index={index}
          />
        ))}
      </ul>
      <div className="field">
        <label>Total:</label>
        <p className="total">Total: <span>{total} €</span></p>
      </div>
      {total > 0 ? (
        <form>
          <input type="submit" className="btn btn-green btn-block" value="Complete Order" />
        </form>
      ) : null}

    </>
  );
};

export default NewOrder;
