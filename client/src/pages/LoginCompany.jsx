import axios from "axios";
import { useState } from "react";

export default function LoginCompany() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const sendCredentials = (event) => {
    event.preventDefault();
    axios
      .post(
        `${import.meta.env.VITE_API_URL}/api/loginCompany`,
        { email, password },
        { withCredentials: true }
      )
      .then((response) => console.info(response))
      .catch((error) => console.error(error));
  };

  return (
    <form onSubmit={sendCredentials}>
      <h2>Connectez-vous</h2>

      <div>
        <label htmlFor="email">Email :</label>
        <input
          id="email"
          name="email"
          type="email"
          required
          onChange={handleChangeEmail}
        />
      </div>
      <div>
        <label htmlFor="password">Mot de Passe :</label>
        <input
          id="password"
          name="password"
          type="password"
          required
          onChange={handleChangePassword}
        />
      </div>

      <input type="submit" value="connexion" />
    </form>
  );
}
