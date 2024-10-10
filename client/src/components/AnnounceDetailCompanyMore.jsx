import { Form } from "react-router-dom";
import { useContext } from "react";
import PropTypes from "prop-types";
import { AuthContext } from "../context/AuthentificationContext";

export default function Announcefourthbox({ announce }) {
  const { auth } = useContext(AuthContext);

  return (
    <div className="Announcedetail_company_more">
      <img
        src="../src/assets/images/photoentreprise23.png"
        alt="company team"
      />
      <div key={announce.id}>
        <h2 className="Announcedetail_quote">Vous voulez en savoir</h2>
        <h2 className="Announcedetail_quote_suit">
          D'avantage sur {announce.companyName}
        </h2>
        <p className="Announcedetail_4_texte">
          Et explorer leurs autres offres
        </p>

        <div className="AnnounceDetail_morecompanydescription_button">
          <button className="AnnounceDetail_discover_button" type="button">
            Découvrir l'entreprise
          </button>
          {auth ? (
            ""
          ) : (
            <Form method="delete">
              <button className="AnnounceDetail_spontanée_button" type="submit">
                Supprimer l'annonce
              </button>
            </Form>
          )}
        </div>
      </div>
    </div>
  );
}

Announcefourthbox.propTypes = {
  announce: PropTypes.shape({
    id: PropTypes.number.isRequired,
    companyName: PropTypes.string.isRequired,
  }).isRequired,
};
