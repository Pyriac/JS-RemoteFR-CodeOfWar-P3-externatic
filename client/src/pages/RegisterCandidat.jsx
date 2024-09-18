import { Form } from "react-router-dom";
import FormCandidat from "../components/FormCandidat";

export default function RegisterCandidat() {
  return (
    <div className="RegisterCandidat">
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
