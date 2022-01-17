import axios from "axios";


export const clientAxios = axios.create({
  baseURL: "http://localhost:4000/api", headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`
  }
});

export const authHeader = (token) => {
  return {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
}

