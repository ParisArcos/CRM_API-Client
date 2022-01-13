import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import clientAxios from "../../config/axios";

const EditProduct = () => {
  /**
   *  This function sets initial state
   *  editProduct = state  setEditProduct = setState
   */
  const [editProduct, setEditProduct] = useState({
    name: "",
    description: "",
    price: "",
    image: "",
  });

  /**
   * editFile = state | setEditFile = setState
   */
  const [editFile, setEditFile] = useState("");

  /**
   *  useEffect
   */
  useEffect(() => {
    APIcall();
  }, []);

  const { pathname } = useLocation();
  const navigate = useNavigate();

  /**
   *  This function takes the id from the  URL
   */
  const getIdFromURL = () => {
    const pathSplit = pathname.split("/");
    return pathSplit[pathSplit.length - 1];
  };

  const APIcall = async () => {
    const productReq = await clientAxios.get(`/products/${getIdFromURL()}`);
    setEditProduct(productReq.data);
  };

  /**
   *  This function takes files
   */
  const getFile = (e) => {
    setEditFile(e.target.files[0]);
  };

  /**
   *  This function handle input change
   */
  const handleChange = (e) => {
    setEditProduct({
      //* actual state
      ...editProduct,
      [e.target.name]: e.target.value,
    });
    console.log("handlechange");
    console.log(editProduct);
  };

  /**
   *  This function handle form submit
   */
  const handleSubmit = async (e) => {
    e.preventDefault();

    const editFormData = new FormData();
    editFormData.append("name", editProduct.name);
    editFormData.append("description", editProduct.description);
    editFormData.append("price", editProduct.price);
    editFormData.append("image", editFile);

    try {
      clientAxios
        .put(`/products/${getIdFromURL()}`, editFormData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          if (res.status === 200) {
            Swal.fire("Product edited!", res.data.message, "success");
          }
          navigate("/products");
        });
    } catch (error) {
      Swal.fire("Something went wrong!", "Error in Database", "error");
    }
  };

  const { name, description, image, price } = editProduct;

  return (
    <>
      <h2>Edit Product</h2>

      <form onSubmit={handleSubmit}>
        <div className="campo">
          <label>Name:</label>
          <input
            type="text"
            placeholder="Product Name"
            name="name"
            value={name}
            onChange={handleChange}
          />
        </div>

        <div className="campo">
          <label>Description:</label>
          <input
            type="text"
            placeholder="Description"
            name="description"
            value={description}
            onChange={handleChange}
          />
        </div>

        <div className="campo">
          <label>Price:</label>
          <input
            type="number"
            name="price"
            value={price}
            min="0.00"
            step="0.01"
            placeholder="Price"
            onChange={handleChange}
          />
        </div>

        <div className="campo">
          <label>Image:</label>
          {image ? (
            <img src={`http://localhost:4000/${image}`} alt="product" />
          ) : null}
          <input type="file" name="image" onChange={getFile} />
        </div>

        <div className="enviar">
          <input type="submit" className="btn btn-blue" value="Edit Product" />
        </div>
      </form>
    </>
  );
};

export default EditProduct;
