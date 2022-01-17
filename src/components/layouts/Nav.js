import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CRMContext } from "../../context/CRMContext";

const Nav = () => {
  const [auth, setAuth] = useContext(CRMContext);

  if (!auth.auth) return null;

  return (
    <aside className="sidebar col-3">
      <h2>Admin</h2>
      <nav className="nav">
        <ul className="list-clients">
          <li>
            <Link to={"/"} className="clients">
              <i className="fas fa-user"></i>
              Clients
            </Link>
          </li>
          <li>
            <Link to={"/products"} className="products">
              <i className="fas fa-tags"></i>
              Products
            </Link>
          </li>
          <li>
            <Link to={"/orders"} className="orders">
              <i className="fas fa-sort-amount-down"></i>
              Orders
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Nav;
