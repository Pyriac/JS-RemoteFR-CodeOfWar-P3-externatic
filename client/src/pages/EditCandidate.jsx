import { Form, useLoaderData } from "react-router-dom";
import FormCandidat from "../components/FormCandidat";

function EditCandidate() {
  const loaderData = useLoaderData;
  return (
    <>
      <h1>coucou</h1>
      <Form>
        <FormCandidat data={loaderData} />
        <button type="submit"> Mettre à jour</button>
      </Form>
    </>
  );
}

export default EditCandidate;
