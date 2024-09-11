import { Form } from "react-router-dom";
import FormAnnounce from "../components/FormAnnounce";

function AddAnnounce() {
  return (
    <main className="EditAnnounce_main">
      <Form className="AnnounceForm" method="post">
        <FormAnnounce />
        <h3>Votre annonce est prête ?</h3>
        <button type="submit">Publier</button>
      </Form>
    </main>
  );
}
export default AddAnnounce;

