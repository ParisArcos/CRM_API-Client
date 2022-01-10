import axios from "axios";

const clientAxios = axios.create({
  baseUrl: "http://localhost:5000",
});

export default clientAxios;
