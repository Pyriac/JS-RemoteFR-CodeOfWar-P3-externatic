import myAxios from "./myAxios"; 


const announceLoader = async () => {
   
  try {
    const response = await myAxios.get(`/api/announce`);
    return response.data; 
  } catch (error) {
    throw new Response("", { status: 405 });
  }
};

export default announceLoader;
