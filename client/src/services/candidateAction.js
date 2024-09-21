import { redirect } from "react-router-dom";
import myAxios from "./myAxios";

const candidateActions = async ({ request, params }) => {
  const formData = await request.formData();
  switch (request.method.toLowerCase()) {
    case "post": {
      try {
        const response = await myAxios.post(`/api/candidate`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          email: formData.get("email"),
          password: formData.get("password"),
          cv: formData.get("cv"),
          location: formData.get("location"),
          first_name: formData.get("first_name"),
          last_name: formData.get("last_name"),
          title: formData.get("title"),
          birthday: formData.get("birthday"),
          degree: formData.get("degree"),
          phone: formData.get("phone"),
        });
        if (response.status === 201) {
          return redirect(`/`);
        }
      } catch (err) {
        return err.response.data;
      }
      return new Response("Ton compte est créé ! Félicitation 🎉", {
        status: 201,
      });
    }
    case "put": {
      try {
        const response = await myAxios.put(
          `/api/candidate/${params.id}`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
            email: formData.get("email"),
            password: formData.get("password"),
            cv: formData.get("cv"),
            location: formData.get("location"),
            first_name: formData.get("first_name"),
            last_name: formData.get("last_name"),
            title: formData.get("title"),
            birthday: formData.get("birthday"),
            degree: formData.get("degree"),
            phone: formData.get("phone"),
          }
        );
        if (response.status === 201) {
          return redirect(`/`);
        }
      } catch (err) {
        return err.response.data;
      }
      return new Response("Ton compte a bien été mis à jour 📝", {
        status: 201,
      });
    }

    default:
      throw new Response("", { status: 405 });
  }
};

export default candidateActions;
