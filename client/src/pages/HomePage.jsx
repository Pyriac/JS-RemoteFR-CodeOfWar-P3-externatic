import HeaderPeopleExternatech from "../assets/images/Header_People_Externatech.png";

export default function HomePage() {
  return (
    <>
      <div className="HomePage_navbar">
        <h1>
          Hello EXTERNA<span className="HomePage_span_green">TECH</span>
        </h1>
      </div>
      <div className="HomePage_header_picture">
        <div className="HomePage_phrase_button">
          <p>
            Avec toi jusqu'à
            <br />
            <span className="HomePage_span_white">ton premier jour</span> en
            entreprise !
          </p>
          <div className="HomePage_header_button">
            <button type="button">Cree ton profil en 3 clics</button>
            <button type="button">Je recrute</button>
          </div>
        </div>
        <img src={HeaderPeopleExternatech} alt="three happy people" />
      </div>
      <div>
        <div>
          <h2>
            Ces entreprises n'attendent que{" "}
            <span className="HomePage_span_green">vous</span> !
          </h2>
          <p>carrousel previous entreprises</p>
          <button type="button">Examiner plus d'entreprises</button>
        </div>
        <div>
          <h2>Entreprises partenaires qui nous font confiance.</h2>
          <p>Carrousel logo entreprises</p>
        </div>
      </div>
      <div>
        <p>futur footer</p>
      </div>
    </>
  );
}
