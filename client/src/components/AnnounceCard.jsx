import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import CompanyAFAC from "../assets/images/Company_AFAC.png";

export default function AnnounceCard({ announce }) {
  console.info(announce);
  return (
    <div className="Container_announce_card">
      <div>
        <div className="Announces_card" key={announce.id}>
          <img
            className="Announce_picture_company"
            src={CompanyAFAC}
            alt="ilustration de la companie"
          />
          <img
            className="Announce_logo_company"
            src={CompanyAFAC}
            alt="ilustration du logo de la companie"
          />
          <ul>
            <h2>{announce.job_title}</h2>
            <li>{announce.location}</li>
            <li>{announce.description}</li>
            <li>
              {announce.min_salary} - {announce.max_salary}
            </li>
            <li>{announce.benefits}</li>
            <li>{announce.contract_name}</li>
            <li>{announce.telework}</li>
          </ul>
          <Link to={`/announce/${announce.id}`}>
            <button type="submit">Voir</button>
          </Link>
        </div>
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
