import myAxios from "./myAxios"; 

const announceLoader = async () => {
  try {
    const response = await myAxios.get("http://localhost:3310/api/announce");
    return response.data; 
  } catch (error) {
 
    throw new Response("", { status: 500 });
  }
};

export default announceLoader;
