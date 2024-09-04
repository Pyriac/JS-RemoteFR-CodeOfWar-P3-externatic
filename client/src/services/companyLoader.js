import myAxios from "./myAxios";

const companyLoader = async() => {
    const response = await myAxios.get("http://localhost:3310/api//company")
      return response.data;
}

export default companyLoader;