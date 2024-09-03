import { useLoaderData } from "react-router-dom";

export default function Announce() {
  const loaderData = useLoaderData();
 
  return (
    <div>
      <h1>Trouver un job</h1>
        {loaderData.map((announce) => (
          <ul key={announce.id}> 
            <h2>{announce.job_title}</h2>
            <li>ville: {announce.location}</li>
            <li>Description: {announce.description}</li>
            <li>Fourchette de salaire: {announce.min_salary} - {announce.max_salary}</li>
            <li>Avantages: {announce.benefits}</li>
            <li>Emploi: {announce.job_type}</li>
            <li>{announce.telework}</li>
          </ul>
        ))}
    </div>
  );
}


