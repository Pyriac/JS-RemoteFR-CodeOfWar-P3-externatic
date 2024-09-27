import { useLoaderData } from "react-router-dom";

function AnswerCompany() {
  const myAnswers = useLoaderData();
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
          </ul>
        ))}
      </div>
    </div>
  );
}
export default AnswerCompany;
