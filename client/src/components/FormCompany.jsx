import { useState } from "react";
import PropTypes from "prop-types";

function FormCompany({ company }) {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };
  return (
    <>
      <h2>Besoin de mettre à jour des données ?</h2>
      <div>
        <label htmlFor="name">Nom de l'entreprise :</label>{" "}
        <input
          id="name"
          name="name"
          type="text"
          defaultValue={(company && company.name) || ""}
          required
        />
      </div>

      <div>
        <label htmlFor="phone">Numero de téléphone :</label>{" "}
        <input
          id="phone"
          name="phone"
          type="text"
          defaultValue={(company && company.phone) || ""}
          required
        />
      </div>

      <div>
        <label htmlFor="size">Taille de l'entrepris :</label>{" "}
        <input
          id="size"
          name="size"
          type="number"
          defaultValue={(company && company.size) || ""}
          required
        />
      </div>
      <div>
        <label htmlFor="image">Photo de l'entreprise :</label>
        <img
          src={company && company.image}
          alt={`ilustration de l'entreprise${company.name}`}
        />
        <input id="image" name="image" type="file" />
      </div>
      <div>
        <label htmlFor="logo">Logo de l'entreprise:</label>
        <input id="logo" name="logo" type="file" />
      </div>

      <div>
        <label htmlFor="email">Email :</label>
        <input
          id="email"
          name="email"
          type="email"
          defaultValue={(company && company.email) || ""}
          required
        />
      </div>
      <div>
        <div
          className={
            company && company.password ? "Edit_display" : "Create_display"
          }
        >
          <label htmlFor="password">Mot de Passe :</label>
          <input
            id="password"
            name="password"
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
          {`length: ${password.length} >= 8`}
          <div>
            Le mot de passe doit contenir au moins une majuscule, un caractère
            spécial, minimum 8 caractères.
          </div>
        </div>

        <div>
          <label htmlFor="confirme password">Confirmer le mot de Passe :</label>
          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          />
          {password === confirmPassword ? "✅" : "❌"}
        </div>
      </div>
    </>
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
