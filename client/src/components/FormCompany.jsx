import PropTypes from "prop-types";

function FormCompany({ company }) {
  return (
    <div className="FormCandidat">
      <div className="FormCandidatDiv">
        <label htmlFor="name">Nom de l'entreprise*</label>{" "}
        <input
          id="name"
          name="name"
          type="text"
          defaultValue={(company && company.name) || ""}
          required
        />
        <label htmlFor="phone">Numero de téléphone*</label>{" "}
        <input
          id="phone"
          name="phone"
          type="text"
          defaultValue={(company && company.phone) || ""}
          required
        />
        <label htmlFor="size">Taille de l'entreprise*</label>{" "}
        <input
          id="size"
          name="size"
          type="number"
          defaultValue={(company && company.size) || ""}
          required
        />
        {company && company.image ? (
          <label htmlFor="image">
            Mettre à jour votre photo d'entreprise ?
          </label>
        ) : (
          <label htmlFor="image">Photo de l'entreprise</label>
        )}
        <input id="image" name="image" type="file" />
        {company && company.logo ? (
          <label htmlFor="logo">Mettre à jour votre logo d'entreprise ?</label>
        ) : (
          <label htmlFor="logo">Logo de l'entreprise</label>
        )}
        <input id="logo" name="logo" type="file" />
        <label htmlFor="email">Email*</label>
        <input
          id="email"
          name="email"
          type="email"
          defaultValue={(company && company.email) || ""}
          required
        />
      </div>
      <div
        className={company && company.name ? "displayNone" : "FormCandidatDiv"}
      >
        <label htmlFor="password">Mot de Passe*</label>
        <input id="password" name="password" type="password" />

        <label htmlFor="confirme password">Confirmer le mot de Passe</label>
        <input id="confirmPassword" name="confirmPassword" type="password" />

        <p>
          Le mot de passe doit contenir au moins une majuscule, un caractère
          spécial, minimum 8 caractères.
        </p>
      </div>
    </div>
  );
}

FormCompany.propTypes = {
  company: PropTypes.shape({
    name: PropTypes.string,
    last_name: PropTypes.string,
    email: PropTypes.string,
    password: PropTypes.string,
    title: PropTypes.string,
    phone: PropTypes.string,
    logo: PropTypes.string,
    size: PropTypes.number,
    image: PropTypes.string,
  }).isRequired,
};

export default FormCompany;
