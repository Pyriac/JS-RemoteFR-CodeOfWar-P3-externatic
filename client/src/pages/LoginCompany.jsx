import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { authCompanyContext } from "../context/AuthContext";
import myAxios from "../services/myAxios";

export default function LoginCompany() {
  const { login } = useContext(authCompanyContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await myAxios.post(
        "/api/loginCompany",
        { email, password },
        { withCredentials: true }
      );

      const { id } = response.data;

      login(id);
      navigate("/");
    } catch (error) {
      console.error("Erreur de connexion :", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email :</label>

        <input
          type="email"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="password">Mot de passe :</label>

        <input
          type="password"
          id="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
        />
      </div>
      <button type="submit">Se connecter</button>
    </form>
  );
}
