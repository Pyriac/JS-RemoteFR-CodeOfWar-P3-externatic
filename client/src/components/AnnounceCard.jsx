import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import DefaultImage from "../assets/images/default.png";
import DefaultLogo from "../assets/images/logo_default.png";

export default function AnnounceCard({ announce }) {
  return (
    <div className="Container_announce_card">
      <div>
        <div className="Announces_card" key={announce.id}>
          <img
            className="Announce_picture_company"
            src={
              announce.company_image !== "../assets/images/default.png"
                ? `${import.meta.env.VITE_API_URL}/uploads/${announce.company_image}`
                : DefaultImage
            }
            alt={`Illustration fourni pour le poste de ${announce.job_title}`}
          />
          <h3 className="Announce_title_company">{announce.company_name}</h3>
          <img
            className="Announce_logo_company"
            src={
              announce.company_logo !== "../assets/images/logo_default.png"
                ? `${import.meta.env.VITE_API_URL}/uploads/${announce.company_logo}`
                : DefaultLogo
            }
            alt={`logo fourni pour le poste de  ${announce.job_title}`}
          />
          <ul>
            <h2>{announce.job_title}</h2>
            <li>{announce.location}</li>
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
        <div>
            <Link to={`/company/answer/${announce.id}`}>
              <button type="submit">Mes retour</button>
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
    min_salary: PropTypes.number.isRequired,
    max_salary: PropTypes.number.isRequired,
    contract_name: PropTypes.string.isRequired,
    benefits: PropTypes.string.isRequired,
    telework: PropTypes.string.isRequired,
    company_name: PropTypes.string.isRequired,
    company_image: PropTypes.string.isRequired,
    company_logo: PropTypes.string.isRequired,
  }).isRequired,
};
