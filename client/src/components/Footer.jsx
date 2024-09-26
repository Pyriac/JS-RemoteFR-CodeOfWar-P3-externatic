import { useContext } from "react";
import { Link } from "react-router-dom";
import Facebook from "../assets/images/facebook.svg";
import Instagram from "../assets/images/instagram.svg";
import LinkedIn from "../assets/images/linkedin.svg";
import Twitter from "../assets/images/twitter.svg";
import { authCompanyContext } from "../context/AuthContext";

function Footer() {
  const { authCompany } = useContext(authCompanyContext);
  return (
    <section className="Footer">
      <div className="Footer_top_div">
        <div className="Footer_title_social_div">
          <Link to="/">
            EXTERNA<span className="Tech_Style">TECH</span>
          </Link>
          <div>
            <Link to="https://www.facebook.com" target="blank">
              <img src={Facebook} alt="Facebook" />
            </Link>
            <Link to="https://www.instagram.com" target="blank">
              <img src={Instagram} alt="Instagram" />
            </Link>
            <Link to="https://www.linkedin.com" target="blank">
              <img src={LinkedIn} alt="LinkedIn" />
            </Link>
            <Link to="https://x.com" target="blank">
              <img src={Twitter} alt="Twitter" />
            </Link>
          </div>
        </div>
        {!authCompany ? (
          <div>
            <Link to="/announce?contract=" className="Footer_announce_link">
              <h3>Offres d'emploi</h3>
            </Link>
            <Link to="login/company" className="Footer_company_link">
              <h3>Mon espace employeur</h3>
            </Link>
          </div>
        ) : (
          <div>
            <Link to="/announce/add" className="Footer_announce_link">
              <h3>Créer une nouvelle offre</h3>
            </Link>
            <Link
              to={`/company/${authCompany}/announce`}
              className="Footer_company_link"
            >
              <h3>Mon espace employeur</h3>
            </Link>
          </div>
        )}
      </div>
      <ul>
        <Link to="pages/legal">
          {" "}
          <li>Mentions légales</li>
        </Link>
        <Link to="pages/CGU">
          <li>CGU</li>
        </Link>
        <Link to="pages/privacy-policy">
          <li>Politique de confidentialité</li>
        </Link>
        <Link to="pages/charter">
          <li>Charte Externatech</li>
        </Link>
        <Link to="pages/cookies-policy">
          <li>Politique cookies</li>
        </Link>
      </ul>
    </section>
  );
}

export default Footer;
