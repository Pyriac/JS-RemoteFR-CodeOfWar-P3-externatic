import { redirect } from "react-router-dom";
import myAxios from "./myAxios";

const candidateActions = async ({ request, params }) => {
  const formCandidateData = await request.formData();
  switch (request.method.toLowerCase()) {
    case "post": {
      await myAxios.post(`/api/candidate`, {
        email: formCandidateData.get("email"),
        password: formCandidateData.get("password"),
        cv: formCandidateData.get("cv"),
        location: formCandidateData.get("location"),
        first_name: formCandidateData.get("first_name"),
        last_name: formCandidateData.get("last_name"),
        title: formCandidateData.get("title"),
        birthday: formCandidateData.get("birthday"),
        degree: formCandidateData.get("degree"),
        phone: formCandidateData.get("phone"),
      });
      return redirect("/");
    }
    case "put": {
      await myAxios.put(`/api/candidate/${params.id}`, {
        email: formCandidateData.get("email"),
        password: formCandidateData.get("password"),
        cv: formCandidateData.get("cv"),
        location: formCandidateData.get("location"),
        first_name: formCandidateData.get("first_name"),
        last_name: formCandidateData.get("last_name"),
        title: formCandidateData.get("title"),
        birthday: formCandidateData.get("birthday"),
        degree: formCandidateData.get("degree"),
        phone: formCandidateData.get("phone"),
      });
      return redirect("/");
    }

    default:
      throw new Response("", { status: 405 });
  }
};

export default candidateActions;
