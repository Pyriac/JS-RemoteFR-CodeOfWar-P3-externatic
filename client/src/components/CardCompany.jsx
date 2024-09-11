import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import HeaderPeopleExternatech from "../assets/images/Header_People_Externatech.png";

export default function CardCompany({ company }) {
  return (
    <div className="CardCompany_body">
      <img src={HeaderPeopleExternatech} alt="coucou les gens" />
      <section>
        <h2>{company.name}</h2>
        <p>Nombre de salariés: {company.size}</p>
        <div className="CardCompany_num_offre_see_offer">
          <p>17 Offres</p>
          <Link to="announce">
            <button type="button">Voir l'offre</button>
          </Link>
        </div>
      </section>
    </div>
  );
}

CardCompany.propTypes = {
  company: PropTypes.shape({
    name: PropTypes.string,
    size: PropTypes.number,
  }).isRequired,
};
