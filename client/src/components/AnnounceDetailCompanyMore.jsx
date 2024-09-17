import PropTypes from "prop-types";

export default function Announcefourthbox({ announce }) {
  return (
    <div className="Announcedetail_company_more">
      <img
        src="../src/assets/images/photoentreprise23.png"
        alt="company team"
      />
      <div key={announce.id}>
        <h2 className="Announcedetail_quote">Vous voulez en savoir</h2>
        <h2 className="Announcedetail_quote_suit">D'avantage sur Capgemini</h2>
        <p className="Announcedetail_4_texte">
          Et explorer leurs autres offres
        </p>

        <div className="AnnounceDetail_morecompanydescription_button">
          <button className="AnnounceDetail_discover_button" type="button">
            Découvrir l'entreprise
          </button>
          <button className="AnnounceDetail_spontanée_button" type="button">
            Candidature spontanée
          </button>
        </div>
      </div>
    </div>
  );
}

Announcefourthbox.propTypes = {
  announce: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
