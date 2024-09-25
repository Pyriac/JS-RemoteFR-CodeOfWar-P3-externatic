import axios from "axios";
import myAxios from "./myAxios";

export const announceLoader = async () => {
  try {
    const response = await myAxios.get(`/api/announce`);
    return response.data;
  } catch (error) {
    throw new Response("", { status: 405 });
  }
};

export const announceDetailLoader = async ({ params }) => {
  try {
    const response = await myAxios.get(`/api/announce/${params.id}`);
    return response.data;
  } catch (error) {
    throw new Response("", { status: 405 });
  }
};

export const announceIdLoader = async ({ params }) => {
  const response = await myAxios.get(`/api/announce/${params}`);
  return response.data;
};

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

export const getAnnouncesByCompany = async ({ params }) => {
  console.info(params.id);
  const response = await myAxios.get(`/api/announce/company/${params.id}`);
  return response.data;
};
