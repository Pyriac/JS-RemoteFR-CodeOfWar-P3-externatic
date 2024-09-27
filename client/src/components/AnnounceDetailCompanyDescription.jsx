import PropTypes from "prop-types";

export default function Announcethirdbox({ announce }) {
  return (
    <div className="CompanyDetail_description">
      <div key={announce.id}>
        <h2 className="CompanyDetail_title">• L'entreprise</h2>
        <p className="CompanyDetail_texte">{announce.companyDescription}</p>
      </div>
    </div>
  );
}

Announcethirdbox.propTypes = {
  announce: PropTypes.shape({
    id: PropTypes.number.isRequired,
    companyDescription: PropTypes.string.isRequired,
  }).isRequired,
};
