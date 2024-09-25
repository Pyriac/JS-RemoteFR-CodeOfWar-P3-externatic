import myAxios from "./myAxios";

const CandidateDetailLoader = async ({ params }) => {
  try {
    const response = await myAxios.get(`/api/candidate/${params.id}`);
    return response.data;
  } catch (error) {
    throw new Response("", { status: 405 });
  }
};

const getAnswerCandidate = async () => {
  try {
    const response = await myAxios.get(`/api/answerCandidate`, {withCredentials: true});
    return response.data;
  } catch (error) {
    throw new Response("", { status: 405 });
  }
}
    
const candidateLoader = { CandidateDetailLoader, getAnswerCandidate};

export default candidateLoader;
