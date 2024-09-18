import { redirect } from "react-router-dom";
import myAxios from "./myAxios";

const companyAction = async ({ request, params }) => {
  const formData = await request.formData();
  switch (request.method.toLowerCase()) {
    case "post": {
      try {
        const response = await myAxios.post("/api/company", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          name: formData.get("name"),
          phone: formData.get("phone"),
          size: formData.get("size"),
          image: formData.get("image"),
          logo: formData.get("logo"),
          email: formData.get("email"),
          password: formData.get("password"),
          confirmPassword: formData.get("confirmPassword"),
        });
        if (response.status === 201) {
          return redirect(`/`);
        }
      } catch (err) {
        return err.response.data;
      }
      return new Response("Entreprise créer", { status: 201 });
    }
    case "put": {
      await myAxios.put(`/api/company/${params.id}`, {
        name: formData.get("name"),
        phone: formData.get("phone"),
        size: formData.get("size"),
        image: formData.get("image"),
        logo: formData.get("logo"),
        email: formData.get("email"),
      });
      return redirect("/");
    }
    default:
      throw new Response("", { status: 405 });
  }
};

export default companyAction;
