import { useLoaderData } from 'react-router-dom';
import AnnounceDetailTitle from "../components/AnnounceDetailTitle";
import AnnounceDetailPost from "../components/AnnouncePostDetail";

export default function AnnounceDetail() {
  const announce = useLoaderData(); 

  return (
    <div className="AnnounceDetail_general">

      <AnnounceDetailTitle announce={announce}  />
    
      <AnnounceDetailPost announce={announce}  />

      <div className="AnnounceDetail_companydescription">
        <h2>L'entreprise</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut dolor sed lorem dictum gravida vel et arcu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
      </div>

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