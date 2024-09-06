import { Form } from "react-router-dom";
import FormAnnounce from "../components/FormAnnounce";

function AddAnnounce() {
  return (
    <main className="EditAnnounce_main">
      <Form className="AnnounceForm" method="post">
        <FormAnnounce />
        <button type="submit">Valider</button>
      </Form>
    </main>
  );
}
export default AddAnnounce;
