import { Form, useActionData, useLoaderData } from "react-router-dom";
import FormCompany from "../components/FormCompany";

function EditCompany() {
  const companyData = useLoaderData();
  const formError = useActionData();

  return (
    <div className="RegisterCandidat">
      <h2 className="FormTitle">
        Hello, besoin de mettre à jour des données ?
      </h2>
      <p className="FormTitle">{formError}</p>
      <Form className="CandidatForm" method="put" encType="multipart/form-data">
        <FormCompany company={companyData} />
        <button type="submit"> Mettre à jour</button>
      </Form>
    </div>
  );
}

export default EditCompany;
