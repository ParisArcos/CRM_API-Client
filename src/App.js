import React, { useContext } from "react";
// import styles from "./App.module.css"
//!Routing
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//! Layout
import Header from "./components/layouts/Header";
import Nav from "./components/layouts/Nav";

import Clients from "./components/clients/Clients";
import NewClient from "./components/clients/NewClient";
import EditClient from "./components/clients/EditClient";

import Products from "./components/products/Products";
import NewProduct from "./components/products/NewProduct";
import EditProduct from "./components/products/EditProduct";

import Orders from "./components/orders/Orders";
import NewOrder from "./components/orders/NewOrder";
import EditOrder from "./components/orders/EditOrder";

// -------------- IMPORT THE CONTEXT --------------

import { CRMContext, CRMprovider } from "../src/context/userContext"
import Login from "./components/auth/Login";

function App() {
  // -------------- USE THE CONTEXT --------------
  const [auth, setAuth] = useContext(CRMContext)
  return (
    <Router>
      <>
        {/*  -------------- WRAP EVERYTHING IN THE APP WITH THE PROVIDER -------------- */}

        <CRMprovider value={[auth, setAuth]}>
          <Header />
          <div className="container d-flex">
            <Nav className="list-clients" />
            <main className="box-content col-9">
              <Routes>
                {
                  //? clients
                }
                <Route exact path="/" element={<Clients />} />
                <Route exact path="/clients/new" element={<NewClient />} />
                <Route
                  exact
                  path="clients/edit/:clientId"
                  element={<EditClient />}
                />
                {
                  //? products
                }
                <Route exact path="/products" element={<Products />} />
                <Route exact path="/products/new" element={<NewProduct />} />
                <Route
                  exact
                  path="/products/edit/:productId"
                  element={<EditProduct />}
                />
                {
                  //? orders
                }
                <Route exact path="/orders" element={<Orders />} />
                <Route exact path="/orders/new/:ordersId" element={<NewOrder />} />
                <Route
                  exact
                  path="/orders/edit/:ordersId"
                  element={<EditOrder />}
                />

                <Route exact path="/login" element={<Login />} />
              </Routes>
            </main>
          </div>

        </CRMprovider>
      </>
    </Router>
  );
}

export default App;
