import myAxios from "./myAxios";

const AllCompanyLoader = async () => {
  const response = await myAxios.get("/api/company");
  return response.data;
};

const CompanyDetailLoader = async ({ params }) => {
  try {
    const response = await myAxios.get(`/api/company/${params.id}`);
    return response.data;
  } catch (error) {
    throw new Response("", { status: 405 });
  }
};

const companyLoader = { AllCompanyLoader, CompanyDetailLoader };

export default companyLoader;
