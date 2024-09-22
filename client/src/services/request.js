import axios from "axios";

export default function getAutorization() {
  return axios
    .get(`${import.meta.env.VITE_API_URL}/api/checkAuth`, {
      withCredentials: true,
    })
    .then((response) => response)
    .catch((error) => {
      throw new Error(error);
    });
}
