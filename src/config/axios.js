import axios from "axios";

const clientAxios = axios.create({
  baseURL: "http://localhost:4000/api",

  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`
  }
});

export default clientAxios;
