import { useLoaderData, Form } from "react-router-dom";

function AnswerCompany() {
  const myAnswers = useLoaderData();
  console.info(myAnswers);

  return (
    <div>
      <h2>Mes retour</h2>
      {myAnswers.map((myAnswer) => (
        <ul key={myAnswer.id}>
          <li>{myAnswer.first_name}</li>
          <li>{myAnswer.last_name}</li>
          <li>{myAnswer.location}</li>
          <li>{myAnswer.phone}</li>
          <li>{myAnswer.cv}</li>
          <p>Statut du candidat</p>
          <Form method="put">
            <input type="hidden" name="id" value={myAnswer.id} />
            <select name="status" id="status" defaultValue={myAnswer.status}>
              <option value={0}>En Attente</option>
              <option value={1}>Reçu</option>
              <option value={2}>Refusé</option>
            </select>
            <button type="submit">Transmettre</button>
          </Form>
        </ul>
      ))}
    </div>
  );
}
export default AnswerCompany;
