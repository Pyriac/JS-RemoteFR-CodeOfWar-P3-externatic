import PropTypes from "prop-types";

export default function Announcesecondbox({ announce }) {
  return (
    <div className="AnnounceDetail_post">
      <ul key={announce.id}>
        <h2 className="AnnouceDetail_subtitle">• Le poste en détail</h2>
        <li>{announce.description}</li>
        <li>{announce.benefits}</li>
      </ul>
    </div>
  );
}

Announcesecondbox.propTypes = {
  announce: PropTypes.shape({
    id: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    benefits: PropTypes.string.isRequired,
  }).isRequired,
};
