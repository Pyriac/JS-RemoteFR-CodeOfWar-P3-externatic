import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function AnnounceCard({ announce }) {
  return (
    <div className="container-card">
      <div className="announce-card" key={announce.id}>
        <ul>
          <h2>{announce.job_title}</h2>
          <li>Ville: {announce.location}</li>
          <li>Description: {announce.description}</li>
          <li>
            Fourchette de salaire: {announce.min_salary} - {announce.max_salary}
          </li>
          <li>Avantages: {announce.benefits}</li>
          <li>Emploi: {announce.contract_name}</li>
          <li>{announce.telework}</li>
        </ul>
        <Link to={`/announce/${announce.id}`}>
          <button type="submit">Voir</button>
        </Link>
      </div>
    </div>
  );
}

AnnounceCard.propTypes = {
  announce: PropTypes.shape({
    id: PropTypes.number.isRequired,
    job_title: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    min_salary: PropTypes.number.isRequired,
    max_salary: PropTypes.number.isRequired,
    contract_name: PropTypes.string.isRequired,
    benefits: PropTypes.string.isRequired,
    telework: PropTypes.string.isRequired,
  }).isRequired,
};
