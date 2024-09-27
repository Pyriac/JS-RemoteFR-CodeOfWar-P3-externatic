import { useContext } from "react";
import { Link } from "react-router-dom";

import HeaderPeopleExternatech from "../assets/images/Header_People_Externatech.png";
import HomePageLineYou from "../assets/images/HomePage_soulignement_vous.png";
import HomePageLineTrust from "../assets/images/Line_green_confiance.png";

import CarrouselCompanyHomePage from "../components/CarrouselCompanyHomePage";
import CorporateSponcor from "../components/CorporateSponcor";

import { authCompanyContext } from "../context/AuthContext";
import { AuthContext } from "../context/AuthentificationContext";

export default function HomePage() {
  const { authCompany } = useContext(authCompanyContext);
  const { auth } = useContext(AuthContext);

  return (
    <>
      <div className="HomePage_header_picture">
        <div className="HomePage_phrase_button">
          <p>
            Avec toi jusqu'à
            <br />
            <span className="HomePage_span_white">ton premier jour</span> <br />
            en entreprise !
          </p>
          <div className="HomePage_header_button">
            <button className="HomePage_create_button" type="button">
              {authCompany ? (
                <Link to={`/company/${authCompany}/announce`}>
                  {" "}
                  Créer une nouvelle offre{" "}
                </Link>
              ) : (
                ""
              )}
              {auth ? (
                <Link to={`/edit/candidate/${auth}`}>
                  {" "}
                  Modifier mon profil{" "}
                </Link>
              ) : (
                ""
              )}
              {!auth && !authCompany ? (
                <Link to="/register/candidate">
                  {" "}
                  Cree ton profil en 3 clics{" "}
                </Link>
              ) : (
                ""
              )}
            </button>
            <button className="HomePage_recruit_button" type="button">
              {authCompany ? (
                <Link to={`edit/company/${authCompany}`}>
                  Modifier mon profil{" "}
                </Link>
              ) : (
                ""
              )}
              {auth ? <Link to="candidate/answer">Mes candidatures </Link> : ""}
              {!auth && !authCompany ? (
                <Link to="/register/company">Je recrute </Link>
              ) : (
                ""
              )}
            </button>
          </div>
        </div>
        <img src={HeaderPeopleExternatech} alt="three happy people" />
      </div>
      {authCompany ? (
        <>
          <h2 className="CompanyHomepage">
            Externatech est heureux de vous compter parmis ses collaborateurs
          </h2>
          <div className="Homepage_button_for_company">
            <button className="HomePage_button_list" type="button">
              <Link to={`/company/${authCompany}/announce`}>
                {" "}
                Créer une nouvelle offre{" "}
              </Link>
            </button>
            <button className="HomePage_button_list" type="button">
              <Link to="/announce/add"> Mes recrutements en cours... </Link>
            </button>
            <button className="HomePage_button_list" type="button">
              <Link to={`edit/company/${authCompany}`}>
                Modifier mon profil{" "}
              </Link>
            </button>
            <button className="HomePage_button_list" type="button">
              <Link to={`/company/${authCompany}/announce`}>
                {" "}
                Mon espace employeur{" "}
              </Link>
            </button>
          </div>

          <article className="HomePage_partner_company">
            <div className="HomePage_title_company">
              <h2>Rejoignez nos entreprises partenaires.</h2>
              <img src={HomePageLineTrust} alt="line green" />
            </div>
            <CorporateSponcor />
          </article>
        </>
      ) : (
        <div className="HomePage_background_grey">
          <article className="HomePage_article_carrousel">
            <div className="HomePage_title_carrousel">
              <h2>
                Ces entreprises n'attendent que{" "}
                <span className="HomePage_span_green">vous</span> !
              </h2>
              <img src={HomePageLineYou} alt="line green" />
            </div>
            <CarrouselCompanyHomePage />
            <button className="Homepage_more_company" type="button">
              Examiner plus d'entreprises
            </button>
          </article>
          <article className="HomePage_partner_company">
            <div className="HomePage_title_company">
              <h2>Entreprises partenaires qui nous font confiance.</h2>
              <img src={HomePageLineTrust} alt="line green" />
            </div>
            <CorporateSponcor />
          </article>
        </div>
      )}
    </>
  );
}
