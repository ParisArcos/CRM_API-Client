import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CRMContext } from "../../context/CRMContext";

const Header = () => {
  const [auth, setAuth] = useContext(CRMContext);
  const navigate = useNavigate();

  const logout = () => {
    setAuth({
      token: "",
      auth: false,
    });
    localStorage.setItem("token", "");
    navigate("/login");
  };

  return (
    <header className="bar">
      <div className="container">
        <div className="content-bar">
          <h1>PalaPlaya FlipFlops</h1>
          {auth.auth ? (
            <button type="button" className="btn btn-red" onClick={logout}>
              <i className="far fa-times-circle" />
              Log Out
            </button>
          ) : null}
        </div>
      </div>
    </header>
  );
};

export default Header;
