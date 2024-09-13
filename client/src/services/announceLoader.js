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
  const response = await myAxios.get(`/api/announce/${params.id}`);
  return response.data;
};

export const companyLoader = async () => {
  const response = await myAxios.get("/api/company");
  return response.data;
};
