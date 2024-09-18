import { Form, useActionData } from "react-router-dom";
import FormCompany from "../components/FormCompany";

function RegisterCompany() {
  const companyData = useActionData();

  return (
    <>
      <h2>Inscrivez vous en remplissant le formulaire !</h2>
      <div>{companyData}</div>
      <Form method="post" encType="multipart/form-data">
        <FormCompany />
        <button type="submit"> Inscrire </button>
      </Form>
    </>
  );
}

export default RegisterCompany;
