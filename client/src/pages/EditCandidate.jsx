import { Form, useLoaderData } from "react-router-dom";
import FormCandidat from "../components/FormCandidat";

function EditCandidate() {
  const candidateData = useLoaderData();

  return (
    <>
      <h1>coucou</h1>
      <Form method="put">
        <FormCandidat candidate={candidateData} />
        <button type="submit"> Mettre à jour</button>
      </Form>
    </>
  );
}

export default EditCandidate;
