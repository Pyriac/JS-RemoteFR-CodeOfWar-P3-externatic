import { Form, useActionData } from "react-router-dom";
import FormCompany from "../components/FormCompany";

function RegisterCompany() {
  const companyData = useActionData();

  return (
    <div className="RegisterCandidat">
      <h2 className="FormTitle">
        Bienvenue chez EXTERNA<span>TECH</span>
      </h2>
      <h2 className="FormTitle">
        Inscrivez vous en remplissant le formulaire !
      </h2>
      <div>{companyData}</div>
      <Form
        className="CandidatForm"
        method="post"
        encType="multipart/form-data"
      >
        <FormCompany />
        <button type="submit"> S'inscrire </button>
      </Form>
    </div>
  );
}

export default RegisterCompany;
