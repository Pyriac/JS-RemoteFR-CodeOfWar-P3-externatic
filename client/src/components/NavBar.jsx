import { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { AuthContext } from "../context/AuthentificationContext";

import Logo from "../assets/images/Logo.png";
import "../assets/styles/Navbar.css";

function NavBar() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const { auth, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
  };

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="NavBar">
      <div className="Brand_Nav Desktop">
        <ul className="User_Actions">
          {!auth ? (
            <>
              <li className="Register_Link">
                <Link to="/register/candidate">Créer un compte</Link>
              </li>
              <li className="Login_Link">
                <Link to="/login"> Se connecter</Link>
              </li>{" "}
            </>
          ) : (
            <li className="Navbar_disconnected">
              <Link to="/">
                <button onClick={handleLogout} type="button">
                  Se déconnecter
                </button>
              </Link>
            </li>
          )}
        </ul>
      </div>

      <article>
        <Link to="/">
          EXTERNA<span className="Tech_Style">TECH</span>
        </Link>
      </article>

      <div className="Brand_Nav Mobile">
        <ul className="User_Actions">
          <li className="Register_Link">
            <Link to="/register/candidate">Créer un compte</Link>
          </li>
          <li className="Login_Link">
            <Link to="/login">Connexion</Link>
          </li>
        </ul>
      </div>

      <div className="Nav_Link">
        <ul className={isMenuOpen ? "Active" : ""}>
          <li className="Logo">
            <Link to="/">
              <img src={Logo} alt="logo" />
            </Link>
          </li>
          <li className="Home">
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/">Les offres</Link>
          </li>
          <li>
            <Link to="/">Blog</Link>
          </li>
        </ul>
      </div>
      <button type="button" className="Nav_Burger" onClick={toggleMenu}>
        <span className={`Burger_Bar ${isMenuOpen ? "Clicked" : ""} `}>{}</span>
        <span className={`Burger_Bar ${isMenuOpen ? "Clicked" : ""} Second`}>
          {}
        </span>
        <span className={`Burger_Bar ${isMenuOpen ? "Clicked" : ""}`}>{}</span>
      </button>
    </nav>
  );
}

export default NavBar;
