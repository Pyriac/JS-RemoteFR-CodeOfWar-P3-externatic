import { Form, useLoaderData } from "react-router-dom";
import FormCompany from "../components/FormCompany";

function EditCompany() {
  const companyData = useLoaderData();
  return (
    <div className="RegisterCandidat">
      <h2 className="FormTitle">
        Hello, besoin de mettre à jour des données ?
      </h2>
      <Form className="CandidatForm" method="put" encType="multipart/form-data">
        <FormCompany company={companyData} />
        <button type="submit"> Mettre à jour</button>
      </Form>
    </div>
  );
}

export default EditCompany;
