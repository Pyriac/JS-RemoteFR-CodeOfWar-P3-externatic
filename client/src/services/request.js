import axios from "axios";

export function getAnnounces(contract) {
  return axios
    .get(`${import.meta.env.VITE_API_URL}/api/announce?contract=${contract}`)
    .then((response) => response.data.result)
    .catch((error) => console.error(error));
}

export function getContracts() {
  return axios
    .get(`${import.meta.env.VITE_API_URL}/api/contract`)
    .then((response) => response.data)
    .catch((error) => console.error(error));
}