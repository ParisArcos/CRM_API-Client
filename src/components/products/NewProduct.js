import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import clientAxios from "../../config/axios";
import { CRMContext } from "../../context/CRMContext";

const NewProduct = () => {
  const [auth, setAuth] = useContext(CRMContext);

  const navigate = useNavigate();

  !auth.auth ? navigate("/login") : console.log();
  /**
   * newProduct = state | setNewProduct = setState
   */
  const [newProduct, setNewProduct] = useState({
    name: "",
    description: "",
    price: "",
  });

  /**
   * newFile = state | setNewFile = setState
   */
  const [newFile, setNewFile] = useState("");

  /**
   *  This function takes files
   */
  const getFile = (e) => {
    setNewFile(e.target.files[0]);
  };

  /**
   *  This function handle input change
   */
  const handleChange = (e) => {
    setNewProduct({
      //* actual state
      ...newProduct,
      [e.target.name]: e.target.value,
    });
  };

  /**
   *  This function handle form submit
   */
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", newProduct.name);
    formData.append("description", newProduct.description);
    formData.append("price", newProduct.price);
    formData.append("image", newFile);
    try {
      await clientAxios
        .post("/products", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          if (res.status === 200) {
            Swal.fire("New product Added!", res.data.message, "success");
            console.log(res);
          }
          navigate("/products");
        });
    } catch (error) {
      Swal.fire("Something went wrong!", "Error in Database", "error");
    }
  };

  return (
    <>
      <h2>New Product</h2>

      <form onSubmit={handleSubmit}>
        <div className="field">
          <label>Name:</label>
          <input
            type="text"
            placeholder="Product Name"
            name="name"
            onChange={handleChange}
          />
        </div>

        <div className="field">
          <label>Description:</label>
          <input
            type="text"
            placeholder="Description"
            name="description"
            onChange={handleChange}
          />
        </div>

        <div className="field">
          <label>Price:</label>
          <input
            type="number"
            name="price"
            min="0.00"
            step="0.01"
            placeholder="Price"
            onChange={handleChange}
          />
        </div>

        <div className="field">
          <label>Image:</label>
          <input type="file" name="image" onChange={getFile} />
        </div>

        <div className="enviar">
          <input type="submit" className="btn btn-blue" value="Add Product" />
        </div>
      </form>
    </>
  );
};

export default NewProduct;
