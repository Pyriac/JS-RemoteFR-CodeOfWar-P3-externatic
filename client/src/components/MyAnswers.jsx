import PropTypes from "prop-types";

function MyAnswers({ myAnswer }) {
  return (
    <ul className="Card_Answer">
      <li>{myAnswer.companyName}</li>
      <li className="Job_Title">
        {myAnswer.job_title} en {myAnswer.contractName}
      </li>
      <li>{myAnswer.description}</li>
      <li>📍{myAnswer.location}</li>
    </ul>
  );
}

MyAnswers.propTypes = {
  myAnswer: PropTypes.shape({
    companyName: PropTypes.string,
    job_title: PropTypes.string,
    contractName: PropTypes.string,
    description: PropTypes.string,
    location: PropTypes.string,
  }).isRequired,
};

export default MyAnswers;
