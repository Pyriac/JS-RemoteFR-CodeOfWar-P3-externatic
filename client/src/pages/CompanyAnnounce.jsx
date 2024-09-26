import { useLoaderData, Link } from "react-router-dom";
import AnnounceCard from "../components/AnnounceCard";

export default function CompanyAnnounce() {
  const announceData = useLoaderData();
  console.info(announceData);
  return (
    <section className="AnnounceDetail_background">
      <div className="CompanyAnnounce_header">
        <h2 className="CompanyAnnounce_title">
          Vous avez actuellement {announceData.length}{" "}
          {announceData.length === 1 ? "annonce publiée" : "annonces publiées"}
        </h2>
        <Link to="/announce/add">
          <p className="AddAnnounce">Publier une annonce</p>
        </Link>
      </div>
      {announceData.map((announce) => (
        <div key={announce.id}>
          <AnnounceCard key={announce.id} announce={announce} />
        </div>
      ))}
    </section>
  );
}
