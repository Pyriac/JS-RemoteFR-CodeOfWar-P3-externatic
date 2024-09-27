import axios from "axios";
import { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { authCompanyContext } from "../context/AuthContext";

export default function Announcefirstbox({ announce }) {
  const { id: announceId } = useParams();
  const [validate, setValidate] = useState();
  const { authCompany } = useContext(authCompanyContext);

  const sendAnswer = (event) => {
    event.preventDefault();
    axios
      .post(
        `${import.meta.env.VITE_API_URL}/api/answer`,
        { announceId },
        { withCredentials: true }
      )
      .then((response) => setValidate(response.data.message))
      .catch(
        (error) => console.error(error),
        setValidate("Vous avez déjà postulé à cette annonce")
      );
  };

  return (
    <div className="AnnounceDetail_jobtitle">
      <h1 className="AnnounceDetail_title">{announce.job_title}</h1>
      <p className="AnnounceDetail_bref">L'annonce en Bref</p>
      <ul key={announce.id}>
        <li>{announce.telework}</li>
        <li>{announce.contractName}</li>
        <li>{announce.location}</li>
        <li>
          {announce.min_salary} - {announce.max_salary}
        </li>
      </ul>
      {authCompany ? (
        ""
      ) : (
        <div className="AnnounceDetail_announcesection_button">
          <button
            className="AnnounceDetail_postuler_button"
            type="submit"
            onClick={sendAnswer}
          >
            Postuler
          </button>
          <p className="AnnounceDetail_Validate">{validate}</p>
        </div>
      )}
    </div>
  );
}

Announcefirstbox.propTypes = {
  announce: PropTypes.shape({
    id: PropTypes.number.isRequired,
    job_title: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    contractName: PropTypes.string.isRequired,
    min_salary: PropTypes.number.isRequired,
    max_salary: PropTypes.number.isRequired,
    telework: PropTypes.string.isRequired,
  }).isRequired,
};
