import PropTypes from "prop-types";

export default function Announcefirstbox({ announce }) {
  return (
    <div className="AnnounceDetail_jobtitle">
      <h1 className="AnnounceDetail_title">{announce.job_title}</h1>
      <p className="AnnounceDetail_bref">L'annonce en Bref</p>
      <ul key={announce.id}>
        <li>{announce.telework}</li>
        <li>{announce.job_type}</li>
        <li>{announce.location}</li>
        <li>
          {announce.min_salary} - {announce.max_salary}
        </li>
      </ul>
      <div className="AnnounceDetail_announcesection_button">
        <button className="AnnounceDetail_postuler_button" type="button">
          Postuler
        </button>
        <button className="AnnounceDetail_spontanée_button" type="button">
          Candidature spontanée
        </button>
      </div>
    </div>
  );
}

Announcefirstbox.propTypes = {
  announce: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      job_title: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      job_type: PropTypes.string.isRequired,
      min_salary: PropTypes.number.isRequired,
      max_salary: PropTypes.number.isRequired,
      telework: PropTypes.string.isRequired,
    })
  ).isRequired,
};
