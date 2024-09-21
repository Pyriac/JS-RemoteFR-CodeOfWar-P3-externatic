import { Form, useActionData, useLoaderData } from "react-router-dom";
import FormCandidat from "../components/FormCandidat";

function EditCandidate() {
  const candidateData = useLoaderData();
  const formError = useActionData();

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

export default EditCandidate;
