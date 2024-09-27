import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useContext } from "react";
import { AuthContext } from "../context/AuthentificationContext";
import { authCompanyContext } from "../context/AuthContext";
import DefaultImage from "../assets/images/default.png";
import DefaultLogo from "../assets/images/logo_default.png";

export default function CardCompany({ company }) {
  const auth = useContext(AuthContext);
  const authCompany = useContext(authCompanyContext);

  return (
    <div className="CardCompany_body">
      <img
        className="CardCompany_picture_company"
        src={
          company.image
            ? `${import.meta.env.VITE_API_URL}/uploads/${company.image}`
            : DefaultImage
        }
        alt={`Illustration fourni par ${company.name}`}
      />
      <img
        className="CardCompany_logo_company"
        src={
          company.image
            ? `${import.meta.env.VITE_API_URL}/uploads/${company.logo}`
            : DefaultLogo
        }
        alt={`logo fourni par ${company.name}`}
      />
      <section>
        <h2>{company.name}</h2>
        <p>Nombre de salariés: {company.size}</p>
        <div className="CardCompany_num_offre_see_offer">
          <p>17 Offres</p>
          {!auth && !authCompany ? (
            <Link to="announce?contract=">
              <button type="button">Voir l'offre</button>
            </Link>
          ) : (
            ""
          )}
        </div>
      </section>
    </div>
  );
}

CardCompany.propTypes = {
  company: PropTypes.shape({
    name: PropTypes.string,
    size: PropTypes.number,
    image: PropTypes.string,
    logo: PropTypes.string,
  }).isRequired,
};
