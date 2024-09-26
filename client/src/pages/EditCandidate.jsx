import { useContext } from "react";
import { Form, useActionData, useLoaderData } from "react-router-dom";
import FormCandidat from "../components/FormCandidat";
import { authCompanyContext } from "../context/AuthContext";

function EditCandidate() {
  const candidateData = useLoaderData();
  const formError = useActionData();
  const { authCompany } = useContext(authCompanyContext);

  if (!authCompany) {
    return (
      <div className="RegisterCandidat">
        <h2 className="FormTitle">
          Bienvenue chez EXTERNA<span>TECH</span>
        </h2>
        <p className="FormTitle">{formError}</p>
        <Form className="CandidatForm" method="put">
          <FormCandidat candidate={candidateData} />
          <button type="submit"> Mettre à jour</button>
        </Form>
      </div>
    );
  }
}

export default EditCandidate;
