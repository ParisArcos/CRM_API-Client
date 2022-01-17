import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { clientAxios } from "../../config/axios";
import Swal from "sweetalert2";
import { CRMContext } from "../../context/CRMContext";

const Login = () => {
  const [credentials, setCredentials] = useState({});
  const [auth, setAuth] = useContext(CRMContext);

  const handleChange = (e) => {
    setCredentials({
      //* actual state
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    await clientAxios.post("/users/login", credentials, { headers: "" }).then((res) => {

      if (res.data.status === 401) {
        Swal.fire("Something went wrong!", res.data.message, "error");
      } else {
        Swal.fire("Welcome!", res.data.message, "success");
        const { token } = res.data;

        localStorage.setItem("token", token);
        setAuth({
          token: token,
          auth: true,
        });

        navigate("/");
      }
    });
  };

  return (
    <>
      <div className="login">
        <h2>Login</h2>
        <div className="container-form">
          <form onSubmit={handleSubmit}>
            <div className="field">
              <label>Email</label>
              <input
                type="text"
                name="email"
                placeholder="Insert email"
                required
                onChange={handleChange}
              />
            </div>
            <div className="field">
              <label>Password</label>
              <input
                type="password"
                name="password"
                placeholder="Insert password"
                required
                onChange={handleChange}
              />
            </div>
            <input
              type="submit"
              value="Login"
              className="btn btn-green btn-block"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
