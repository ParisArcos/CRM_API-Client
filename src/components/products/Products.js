import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import clientAxios from "../../config/axios";

import Product from "./Product";

const Products = () => {
  const [products, setProducts] = useState([]);

  const APIcall = async () => {
    const productsReq = await clientAxios.get("/products");
    // console.log(clientsReq.data)

    setProducts(productsReq.data);
  };

  useEffect(() => {
    APIcall();
  }, [products]);

  return (
    <div>
      <h2>Products List</h2>

      <Link className="btn btn-green" to="/Products/new">Add New Product</Link>

      <ul className="listado-products">
        {products.map((product) => {
          return <Product key={product._id} product={product} />;
        })}
      </ul>
    </div>
  );
};

export default Products;
