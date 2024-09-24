import { createContext, useState, useEffect, useMemo } from "react";
import PropTypes from "prop-types";
import myAxios from "../services/myAxios";

const authCompanyContext = createContext();

function AuthCompanyProvider({ children }) {
  const [authCompany, setAuthCompany] = useState(null);
  const [update, setUpdate] = useState(true);

  useEffect(() => {
    const company = localStorage.getItem("authToken"); 
    if (company) {
      setAuthCompany(company);
    }
    setUpdate(false);
  }, []);

  const login = (company) => {
    localStorage.setItem("authToken", company);
    setAuthCompany(company);
  };

  const logoutCompany = async () => {
    try {
      const response = await myAxios.get("/api/logout", {
        withCredentials: true,
      });
      if (response.status === 200) {
        localStorage.removeItem("authToken");
        setAuthCompany(null);
      }
    } catch (error) {
      console.error("Erreur de déconnexion:", error);
    }
  };

  const value = useMemo(
    () => ({ authCompany, login, logoutCompany, update }),
    [authCompany, update]
  );
  return <authCompanyContext.Provider value={value}>{children}</authCompanyContext.Provider>;
}

export { authCompanyContext, AuthCompanyProvider };

AuthCompanyProvider.propTypes = {
  children: PropTypes.node.isRequired,
};