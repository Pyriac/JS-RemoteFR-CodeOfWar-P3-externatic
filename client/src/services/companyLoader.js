import myAxios from "./myAxios";

const companyLoader = async() => {
    const response = await myAxios.get("/api/company")
      return response.data;
}

export default companyLoader;