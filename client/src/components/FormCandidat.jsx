import PropTypes from "prop-types";

export default function FormCandidat({ candidate }) {
  return (
    <div className="FormCandidat">
      <h2>Informations candidate</h2>
      <label htmlFor="first_name"> Prénom du candidat *</label>
      <input
        name="first_name"
        type="text"
        defaultValue={(candidate && candidate.first_name) || ""}
        required
      />
      <label htmlFor="last_name">Nom du candidat *</label>
      <input
        name="last_name"
        type="text"
        defaultValue={(candidate && candidate.last_name) || ""}
        required
      />
      <label htmlFor="email">Adresse mail *</label>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="sophie@example.com"
        defaultValue={(candidate && candidate.email) || ""}
        required
      />
      {!candidate && (
        <>
          <label htmlFor="password">Password *</label>
          <input
            type="password"
            id="pass"
            name="password"
            minLength="8"
            required
          />
        </>
      )}

      <label htmlFor="title">Intitulé de poste *</label>
      <input
        name="title"
        type="text"
        defaultValue={(candidate && candidate.title) || ""}
        required
      />
      <label htmlFor="location">Localisation *</label>
      <input
        name="location"
        type="text"
        defaultValue={(candidate && candidate.location) || ""}
        required
      />
      <label htmlFor="birthday">
        Veuillez saisir votre date de naissance :
      </label>
      <input
        name="birthday"
        type="date"
        defaultValue={(candidate && candidate.birthday) || null}
      />
      <label htmlFor="degree">
        Veuillez saisir votre dernier diplôme obtenu
      </label>
      <input
        name="degree"
        type="text"
        defaultValue={(candidate && candidate.degree) || ""}
      />
      <label htmlFor="phone">N° Téléphone:</label>
      <input
        name="phone"
        type="text"
        defaultValue={(candidate && candidate.phone) || ""}
      />
      {candidate && candidate.cv ? (
        <label htmlFor="cv">Vous avez déjà un cv lié, mettre à jour ?</label>
      ) : (
        <label htmlFor="cv">Importer votre C.V</label>
      )}
      <input
        className="FormCandidat_Download"
        name="cv"
        type="file"
        accept=".doc, .docx, .pdf, .jpg, .jpeg, .png"
      />
    </div>
  );
}

FormCandidat.propTypes = {
  candidate: PropTypes.shape({
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    email: PropTypes.string,
    password: PropTypes.string,
    title: PropTypes.string,
    location: PropTypes.string,
    birthday: PropTypes.instanceOf(Date),
    degree: PropTypes.string,
    phone: PropTypes.string,
    cv: PropTypes.string,
  }).isRequired,
};
