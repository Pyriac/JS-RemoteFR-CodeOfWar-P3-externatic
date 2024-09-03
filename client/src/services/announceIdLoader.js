import myAxios from "./myAxios";

const announceIdLoader = async ({ params }) => {
  const reponse = await myAxios.get(`/api/announce/${params.id}`);

  return reponse.data;
};

export default announceIdLoader;
