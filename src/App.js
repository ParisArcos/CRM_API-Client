import React from "react";

//!Routing
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//! Layout
import Header from "./components/layouts/Header";
import Nav from "./components/layouts/Nav";
import Clients from "./components/clients/Clients";
import Products from "./components/products/Products";
import Orders from "./components/orders/Orders";

function App() {
  return (
    <Router>
      <>
        <Header />
        <div className="grid contenedor contenido-principal">
          <Nav />
          <main className="caja-contenido col-9">
            <Routes>
              <Route exact path="/" element={<Clients />} />
              <Route exact path="/products" element={<Products />} />
              <Route exact path="/orders" element={<Orders />} />
            </Routes>
          </main>
        </div>

        <h1> This is app</h1>
      </>
    </Router>
  );
}

export default App;
