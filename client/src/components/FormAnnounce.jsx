import PropTypes from "prop-types";

function FormAnnounce({ announce }) {
  console.info(announce);
  return (
    <>
      <div className="EditAnnounce_div">
        <h2>Informations générales</h2>
        <label htmlFor="job_title">Titre de l'annonce :</label>
        <input
          id="EditAnnounce_job_title"
          name="job_title"
          type="text"
          defaultValue={(announce && announce.job_title) || ""}
        />
        <label htmlFor="location">Localisation :</label>
        <input
          id="EditAnnounce_location"
          name="location"
          type="text"
          defaultValue={(announce && announce.location) || ""}
        />
        <label htmlFor="job_type">Type de contrat</label>{" "}
        <select name="job_type" id="job_type">
          <option value="CDI">CDI</option>
          <option value="CDD">CDD</option>
          <option value="STAGE">STAGE</option>
          <option value="ALTERNANCE">ALTERNANCE</option>
        </select>
        <label htmlFor="telework">Télétravail</label>{" "}
        <select name="telework" id="telework">
          <option value="presentiel">Présentiel</option>
          <option value="distentiel">Distenciel</option>
          <option value="hybride">Hybride</option>
        </select>
      </div>
      <div className="EditAnnounce_div">
        <h2>Description</h2>
        <label htmlFor="description" className="EditAnnounce_display_none">
          Description :
        </label>
        <textarea
          id="EditAnnounce_description"
          name="description"
          defaultValue={(announce && announce.description) || ""}
          rows={5}
        />
      </div>
      <div className="EditAnnounce_div">
        <h2>Détail rémunération</h2>
        <label htmlFor="benefits">Avantages :</label>
        <textarea
          id="EditAnnounce_benefits"
          name="benefits"
          defaultValue={(announce && announce.benefits) || ""}
        />
        <p>Salaire :</p>
        <div className="EditAnnounce_fork">
          <div>
            <p className="EditAnnounce_mobile_display">Min:</p>
            <p className="EditAnnounce_desktop_display">Minimum :</p>
            <label htmlFor="min_salary" className="EditAnnounce_display_none">
              Salaire minimum :
            </label>
            <input
              id="EditAnnounce_min_salary"
              name="min_salary"
              type="number"
              step="0.01"
              defaultValue={(announce && announce.min_salary) || ""}
            />
          </div>
          <div>
            <p className="EditAnnounce_mobile_display">Max:</p>
            <p className="EditAnnounce_desktop_display">Maximum</p>
            <label htmlFor="max_salary" className="EditAnnounce_display_none">
              {" "}
              Salaire maximum:
            </label>
            <input
              id="EditAnnounce_max_salary"
              name="max_salary"
              type="number"
              step="0.01"
              defaultValue={(announce && announce.max_salary) || ""}
            />
          </div>
        </div>
      </div>
    </>
  );
}

FormAnnounce.propTypes = {
  announce: PropTypes.shape({
    job_title: PropTypes.string,
    location: PropTypes.string,
    job_type: PropTypes.string,
    description: PropTypes.string,
    benefits: PropTypes.string,
    min_salary: PropTypes.number,
    max_salary: PropTypes.number,
  }).isRequired,
};

export default FormAnnounce;
