import { createContext, useState, useEffect, useMemo } from "react";
import PropTypes from "prop-types";
import myAxios from "../services/myAxios";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [auth, setAuth] = useState(null);
  const [update, setUpdate] = useState(true);

  useEffect(() => {
    const candidate = localStorage.getItem("authToken");
    if (candidate) {
      setAuth(candidate);
    }
    setUpdate(false);
  }, []);

  const login = (candidate) => {
    localStorage.setItem("authToken", candidate);
    setAuth(candidate);
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
