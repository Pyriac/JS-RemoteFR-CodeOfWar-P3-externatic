import { redirect } from "react-router-dom";
import myAxios from "./myAxios";

const companyAction = async ({ request}) => {
  const formData = await request.formData();
  switch (request.method.toLowerCase()) {
    case "post": {
      await myAxios.post("/api/company", {
        name: formData.get("name"),
        phone: formData.get("phone"),
        size: formData.get("size"),
        email: formData.get("email"),
        password: formData.get("password"),
        confirmPassword: formData.get("confirmPassword")
      });
      return redirect(`/`);
    }
    default:
      throw new Response("", { status: 405 });
  }
};

export default companyAction;
