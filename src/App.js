import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

/**
 * Layouts
 */
import Header from "./components/layouts/Header";
import Nav from "./components/layouts/Nav";

/**
 * Clients
 */
import Clients from "./components/clients/Clients";
import NewClient from "./components/clients/NewClient";
import EditClient from "./components/clients/EditClient";

/**
 * Products
 */

import Products from "./components/products/Products";
import NewProduct from "./components/products/NewProduct";
import EditProduct from "./components/products/EditProduct";

/**
 * Orders
 */
import Orders from "./components/orders/Orders";
import NewOrder from "./components/orders/NewOrder";

/**
 * Auth
 */
import Login from "./components/auth/Login";
import { CRMContext, CRMprovider } from "./context/CRMContext";

function App() {
  const [auth, setAuth] = useContext(CRMContext);

  return (
    <Router>
      <>
        <CRMprovider value={[auth, setAuth]}>
          <Header />
          <div className="container d-flex">
            <Nav className="list-clients" />
            <main className="box-content col-9">
              <Routes>
                {/**
                 * clients
                 */}
                <Route exact path="/" element={<Clients />} />
                <Route exact path="/clients/new" element={<NewClient />} />
                <Route
                  exact
                  path="clients/edit/:clientId"
                  element={<EditClient />}
                />
                {/**
                 * products
                 */}
                <Route exact path="/products" element={<Products />} />
                <Route exact path="/products/new" element={<NewProduct />} />
                <Route
                  exact
                  path="/products/edit/:productId"
                  element={<EditProduct />}
                />
                {/**
                 * orders
                 */}
                <Route exact path="/orders" element={<Orders />} />
                <Route
                  exact
                  path="/orders/new/:ordersId"
                  element={<NewOrder />}
                />
                {/**
                 * auth
                 */}
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
