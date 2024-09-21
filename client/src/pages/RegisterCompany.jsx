import { useState } from "react";
import { Form, useActionData } from "react-router-dom";

function RegisterCompany() {
  const companyData = useActionData();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  return (
    <Form method="post" encType="multipart/form-data">
      <h2>Inscrivez vous en remplissant le formulaire !</h2>
      <div>{companyData}</div>
      <div>
        <label htmlFor="name">Nom de l'entreprise :</label>{" "}
        <input id="name" name="name" type="text" required />
      </div>

      <div>
        <label htmlFor="phone">Numero de téléphone :</label>{" "}
        <input id="phone" name="phone" type="text" required />
      </div>

      <div>
        <label htmlFor="size">Taille de l'entrepris :</label>{" "}
        <input id="size" name="size" type="number" required />
      </div>
      <div>
        <label htmlFor="image">Photo de l'entreprise :</label>
        <input id="image" name="image" type="file" />
      </div>
      <div>
        <label htmlFor="logo">Logo de l'entreprise:</label>
        <input id="logo" name="logo" type="file" />
      </div>

      <div>
        <label htmlFor="email">Email :</label>
        <input id="email" name="email" type="email" required />
      </div>
      <div>
        <label htmlFor="password">Mot de Passe :</label>
        <input
          id="password"
          name="password"
          type="password"
          value={password}
          required
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
          required
          onChange={handleConfirmPasswordChange}
        />
        {password === confirmPassword ? "✅" : "❌"}
      </div>

      <button type="submit"> Inscrire </button>
    </Form>
  );
}

export default RegisterCompany;
