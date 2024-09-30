import { redirect } from "react-router-dom";
import myAxios from "./myAxios";

const answerAction = async ({ request, params }) => {
  const formData = await request.formData();
  switch (request.method.toLowerCase()) {
    case "put": {
      try {
        const response = await myAxios.put(`api/answer/${params.id}`, {
          candidate_id: formData.get("id"),
          status: formData.get("status"),
        });
        if (response.status === 201) {
          return redirect("/");
        }
      } catch (error) {
        return error.response.data;
      }
      return new Response("Ton retour au candidat est bien transmis", {
        status: 201,
      });
    }
    default:
      throw new Response("", { status: 405 });
  }
};
export default answerAction;
