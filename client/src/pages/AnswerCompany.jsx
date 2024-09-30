import { useLoaderData, Form, useActionData } from "react-router-dom";

function AnswerCompany() {
  const myAnswers = useLoaderData();
  const send = useActionData();
  return (
    <div className="Company_Container">
      <h2>Mes retour pour cette offre{`(${myAnswers.length})`}</h2>
      <div className="Company_Contain">
        {myAnswers.map((myAnswer) => (
          <ul key={myAnswer.id} className="Card_Company">
            <li>{myAnswer.title}</li>
            <li>{myAnswer.first_name}</li>
            <li>{myAnswer.last_name}</li>
            <li>{myAnswer.email}</li>
            <li>📍{myAnswer.location}</li>
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
            <p>{send}</p>
          </ul>
        ))}
      </div>
    </div>
  );
}
export default AnswerCompany;

