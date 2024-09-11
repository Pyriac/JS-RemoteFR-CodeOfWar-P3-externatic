import { useLoaderData } from 'react-router-dom';
import AnnounceDetailTitle from "../components/AnnounceDetailTitle";
import AnnounceDetailPost from "../components/AnnouncePostDetail";
import AnnounceDetailCompanyDescription from "../components/AnnounceDetailCompanyDescription";

export default function AnnounceDetail() {
  const announce = useLoaderData(); 

  return (
    <div className="AnnounceDetail_general">

      <AnnounceDetailTitle announce={announce}  />
    
      <AnnounceDetailPost announce={announce}  />

      <AnnounceDetailCompanyDescription announce={announce}  />

      <div className="AnnounceDetail_morecompanydescription">
        <img src="path/to/your/image.jpg" alt="Illustration" className="cta-image" />
        <h2>Vous voulez en savoir D'avantage sur Capgemini</h2>
        <p>Et explorer leurs autres offres</p>
        <div className="AnnounceDetail_morecompanydescription_button">
          <button className="AnnounceDetail_discover_button" type="button">
            Découvrir l'entreprise
          </button>
          <button className="AnnounceDetail_morecompanydescription_spontanée_button" type="button">
            Candidature spontanée
          </button>
        </div>
      </div>
    </div>
  );
}