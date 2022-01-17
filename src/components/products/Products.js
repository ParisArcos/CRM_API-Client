import React, { useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { clientAxios, authHeader } from "../../config/axios.js";
import Product from "./Product";
import { CRMContext } from "../../context/CRMContext";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [auth, setAuth] = useContext(CRMContext);

  const navigate = useNavigate();

  !auth.auth ? navigate("/login") : console.log();

  const APIcall = async () => {
    try {
      const req = await clientAxios.get("/products", authHeader(localStorage.getItem("token")));
      // console.log(req.data)

      setProducts(req.data);
    } catch (error) {
      error.response.status === 500 ? navigate("/login") : console.log(error);
    }
  };

  useEffect(() => {
    if (auth.token !== "") {
      APIcall();
    } else {
      navigate("/login");
    }
  }, []);

  return (
    <div>
      <h2>Products List</h2>

      <Link className="btn btn-green" to="/Products/new">
        <i className="fas fa-plus"></i>Add New Product
      </Link>

      <ul className="listado-products">
        {products.map((product) => {
          return <Product key={product._id} product={product} />;
        })}
      </ul>
    </div>
  );
};

export default Products;
