import PropTypes from 'prop-types'; 


export default function Announcefourthbox({ announce }) {
  return (
   <div className="Companydetail_more">
        <div key={announce.id}>
          <h2 className="Companydetail_quote">Vous voulez en savoir</h2>
          <h2 className="Companydetail_quote_suit">D'avantage sur Capgemini</h2>
          <p>Et explorer leurs autres offres</p>
        </div>
        <div className="AnnounceDetail_morecompanydescription_button">
          <button className="AnnounceDetail_discover_button" type="button">
            Découvrir l'entreprise
          </button>
          <button className="AnnounceDetail_morecompanydescription_spontanée_button" type="button">
            Candidature spontanée
          </button>
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