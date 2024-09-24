import { useLoaderData } from "react-router-dom";
import AnnounceCard from "../components/AnnounceCard";

export default function CompanyAnnounce() {
  const announceData = useLoaderData();
  return (
    <section className="AnnounceDetail_background">
      <h2 className="CompanyAnnounce_title">
        Vous avez actuellement {announceData.length}{" "}
        {announceData.length === 1 ? "annonce publiée" : "annonces publiées"}
      </h2>
      {announceData.map((announce) => (
        <div key={announce.id}>
          <AnnounceCard key={announce.id} announce={announce} />
        </div>
      ))}
    </section>
  );
}
