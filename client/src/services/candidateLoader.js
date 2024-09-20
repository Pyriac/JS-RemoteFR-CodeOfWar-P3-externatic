import myAxios from "./myAxios";

const CandidateDetailLoader = async ({ params }) => {
  try {
    const response = await myAxios.get(`/api/candidate/${params.id}`);
    return response.data;
  } catch (error) {
    throw new Response("", { status: 405 });
  }
};

const candidateLoader = { CandidateDetailLoader };

export default candidateLoader;
