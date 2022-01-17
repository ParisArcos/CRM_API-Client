import axios from "axios";

const clientAxios = axios.create({
  baseURL: "http://localhost:4000/api",
<<<<<<< HEAD

  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`
  }
=======
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
>>>>>>> Paris
});

export default clientAxios;
