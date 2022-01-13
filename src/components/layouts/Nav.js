import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <aside className="sidebar col-3">
      <h2> Administracion</h2>
      <nav className="nav">
        <ul className="list-clients">
          <li>
            {" "}
            <Link to={"/"} className="clients">
              Clients
            </Link>
          </li>
          <li>
            <Link to={"/products"} className="products">
              Products
            </Link>
          </li>
          <li>
            <Link to={"/orders"} className="orders">
              Orders
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Nav;
