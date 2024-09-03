import { useLoaderData } from "react-router-dom";

export default function Announce() {
  const loaderData = useLoaderData();
 
  return (
    <div>
      <h1>Trouver un job</h1>
        {loaderData.map((announce) => (
          <ul key={announce.id}> 
            <h2>{announce.job_title}</h2>
            <li>Location: {announce.location}</li>
            <li>Description: {announce.description}</li>
            <li>Min_Salary: {announce.min_salary}</li>
            <li>Max_Salary: {announce.max_salary}</li>
            <li>Benefits: {announce.benefits}</li>
            <li>Job_Type: {announce.job_type}</li>
            <li>Telework: {announce.telework}</li>
          </ul>
        ))}
    </div>
  );
}


