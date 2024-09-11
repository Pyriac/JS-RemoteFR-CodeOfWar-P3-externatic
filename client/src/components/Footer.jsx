import { Link } from "react-router-dom";
import Facebook from "../assets/images/facebook.svg";
import Instagram from "../assets/images/instagram.svg";
import LinkedIn from "../assets/images/linkedin.svg";
import Twitter from "../assets/images/twitter.svg";

function Footer() {
  return (
    <section className="Footer">
      <div className="Footer_top_div">
        <div className="Footer_title_social_div">
          <Link to="/">
            EXTERNA<span className="Tech_Style">TECH</span>
          </Link>
          <div>
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
          </div>
        </div>
        <Link to="/announce" className="Footer_announce_link">
          <h3>Offres d'emploi</h3>
        </Link>
        <Link to="/company" className="Footer_company_link">
          <h3>Entreprises</h3>
        </Link>
      </div>
      <ul>
        <Link to="pages/legal">
          {" "}
          <li>Mentions légales</li>
        </Link>
        <li>CGU</li>
        <li>Politique de confidentialité</li>
        <li>Charte Externatech</li>
        <li>Politique cookies</li>
        <li>Gestion des cookies</li>
      </ul>
    </section>
  );
}

export default Footer;
