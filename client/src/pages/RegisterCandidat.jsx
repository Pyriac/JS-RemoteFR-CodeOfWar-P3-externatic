import { Form, useActionData } from "react-router-dom";
import FormCandidat from "../components/FormCandidat";

export default function RegisterCandidat() {
  const formError = useActionData();
  return (
    <div className="RegisterCandidat">
      <h2 className="FormTitle">
        Bienvenue chez EXTERNA<span>TECH</span>
      </h2>
      <p className="FormTitle">{formError}</p>
      <Form
        className="CandidatForm"
        method="POST"
        encType="multipart/form-data"
      >
        <FormCandidat />
        <button type="submit">Crée Ton compte</button>
      </Form>
    </div>
  );
}
