import { createContext, useState, useEffect, useMemo } from "react";
import PropTypes from "prop-types";
import myAxios from "../services/myAxios";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [auth, setAuth] = useState(null);
  const [update, setUpdate] = useState(true);

  useEffect(() => {
    const company = localStorage.getItem("authToken");
    if (company) {
      setAuth(company);
    }
    setUpdate(false);
  }, []);

  const login = (company) => {
    localStorage.setItem("authToken", company);
    setAuth(company);
  };

  const logout = async () => {
    try {
      const response = await myAxios.get("/api/logout", {
        withCredentials: true,
      });
      if (response.status === 200) {
        localStorage.removeItem("authToken");
        setAuth(null);
      }
    } catch (error) {
      console.error("Erreur de déconnexion:", error);
    }
  };

  const value = useMemo(
    () => ({ auth, login, logout, update }),
    [auth, update]
  );
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export { AuthContext, AuthProvider };

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};