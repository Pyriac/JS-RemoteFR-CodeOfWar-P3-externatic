import { useLoaderData } from "react-router-dom";
import AnnounceCard from "../components/AnnounceCard";

export default function Announce() {
  const announceData = useLoaderData();

  return (
    <>
      <h1>Trouver un job</h1>
      {announceData.map((announce) => (
        <AnnounceCard key={announce.id} announce={announce} />
      ))}
    </>
  );
}
