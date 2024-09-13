import { useLoaderData } from "react-router-dom";
import AnnounceCard from "../components/AnnounceCard";

export default function Announce() {
  const loaderData = useLoaderData();

  return (
    <>
      <h1>Trouver un job</h1>
      {loaderData.map((announce) => (
        <AnnounceCard key={announce.id} announce={announce} />
      ))}
    </>
  );
}
