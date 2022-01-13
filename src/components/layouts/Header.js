import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bar">
      <div className="container">
        <h1>PalaPlaya FlipFlops</h1>
        <Link className="" to="#">Log Out</Link>
      </div>
    </header>
  );
};

export default Header;
