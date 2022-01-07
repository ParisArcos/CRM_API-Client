import React from "react";

const Nav = () => {
  return (
    <aside className="sidebar col-3">
      <h2> Administracion</h2>
      <nav className="nav">
        <a href="index.html" className="clientes">
          Clientes
        </a>
        <a href="productos.html" className="productos">
          Productos
        </a>
        <a href="pedidos.html" className="pedidos">
          Pedidos
        </a>
      </nav>
    </aside>
  );
};

export default Nav;
