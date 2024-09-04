import PropTypes from 'prop-types'; 


export default function AnnounceList({ announce }) {
  return (
   
        <ul key={announce.id}>
          <h2>{announce.job_title}</h2>
          <li>Ville: {announce.location}</li>
          <li>Description: {announce.description}</li>
          <li>Fourchette de salaire: {announce.min_salary} - {announce.max_salary}</li>
          <li>Avantages: {announce.benefits}</li>
          <li>Emploi: {announce.job_type}</li>
          <li>{announce.telework}</li>
        </ul>
    
  );
}


AnnounceList.propTypes = {
  announce: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      job_title: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      min_salary: PropTypes.number.isRequired,
      max_salary: PropTypes.number.isRequired,
      benefits: PropTypes.string.isRequired,
      job_type: PropTypes.string.isRequired,
      telework: PropTypes.string.isRequired,
    })
  ).isRequired,
};
