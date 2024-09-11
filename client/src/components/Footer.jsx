import { Link } from "react-router-dom";
import Facebook from "../assets/images/facebook.svg";
import Instagram from "../assets/images/instagram.svg";
import LinkedIn from "../assets/images/linkedin.svg";
import Twitter from "../assets/images/twitter.svg";

function Footer() {
  return (
    <>
      <Link to="/">
        <h2>EXTERNATECH</h2>
      </Link>
      <Link to="https://www.facebook.com">
        <img src={Facebook} alt="Facebook" />
      </Link>
      <Link to="https://www.instagram.com">
        <img src={Instagram} alt="Instagram" />
      </Link>
      <Link to="https://www.linkedin.com">
        <img src={LinkedIn} alt="LinkedIn" />
      </Link>
      <Link to="https://x.com">
        <img src={Twitter} alt="Twitter" />
      </Link>
      <Link to="/announce">
        <h3>Offres d'emploi</h3>
      </Link>
      <Link to="/company">
        <h3>Entreprises</h3>
      </Link>
      <ul>
        <li>Mentions légales</li>
        <li>CGU</li>
        <li>Politique de confidentialité</li>
        <li>Charte Externatech</li>
        <li>Politique cookies</li>
        <li>Gestion des cookies</li>
      </ul>
    </>
  );
}

export default Footer;
