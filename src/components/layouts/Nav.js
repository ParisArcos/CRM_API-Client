import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <aside className="sidebar col-3">
      <h2> Administracion</h2>
      <nav className="nav">
        <ul>
          <li>
            {" "}
            <Link to={"/"} className="clientes">
              Clients
            </Link>
          </li>
          <li>
            <Link to={"/products"} className="productos">
              Products
            </Link>
          </li>
          <li>
            <Link to={"/orders"} className="pedidos">
              Orders
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Nav;
