import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import clientAxios from "../../config/axios";

const NewProduct = () => {
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
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", newProduct.name);
    formData.append("description", newProduct.description);
    formData.append("price", newProduct.price);
    formData.append("image", newFile);
    try {
      clientAxios
        .post("/products", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          if (res.status === 200) {
            Swal.fire("New product Added!", res.data.message, "success");
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
        <div className="campo">
          <label>Name:</label>
          <input
            type="text"
            placeholder="Product Name"
            name="name"
            onChange={handleChange}
          />
        </div>

        <div className="campo">
          <label>Description:</label>
          <input
            type="text"
            placeholder="Description"
            name="description"
            onChange={handleChange}
          />
        </div>

        <div className="campo">
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

        <div className="campo">
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
