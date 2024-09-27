import { useState, useEffect } from "react";
import PropTypes, { number } from "prop-types";

function MyAnswers({ myAnswer }) {
  const [answerStatus, setAnswerStatus] = useState("En attente");
  const [answerClassName, setAnswerClassName] = useState("answerPending");

  useEffect(() => {
    switch (Number(myAnswer.status)) {
      case 1:
        setAnswerStatus("Rejetée");
        setAnswerClassName("answerRefused");
        break;
      case 2:
        setAnswerStatus("Acceptée");
        setAnswerClassName("answerValidate");
        break;
      default:
        setAnswerStatus("En attente");
        setAnswerClassName("answerPending");
    }
  }, [myAnswer.status]);

  return (
    <ul className="Card_Answer">
      <li>{myAnswer.companyName}</li>
      <li className={answerClassName}>{answerStatus}</li>
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
    status: number,
  }).isRequired,
};

export default MyAnswers;
