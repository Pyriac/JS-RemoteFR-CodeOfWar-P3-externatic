import myAxios from "./myAxios"; 


const announceLoader = async () => {
  const apiUrl = import.meta.env.VITE_API_URL; 
  try {
    const response = await myAxios.get(`${apiUrl}/announce`);
    return response.data; 
  } catch (error) {
    throw new Response("", { status: 405 });
  }
};

export default announceLoader;
