import { useLoaderData, useNavigate } from "react-router-dom";
import AnnounceCard from "../components/AnnounceCard";

export default function Announce() {
  const { announces, contracts } = useLoaderData();

  const navigate = useNavigate();

  const handleChangeSelect = (event) => {
    navigate(`/announce?contract=${event.target.value}`);
  };

  return (
    <>
      <div className="Announce_background">
        <h1 className="announce_title">Trouver un job</h1>

        <div className="Announce_container_input">
          <select className="Filter_announce" onChange={handleChangeSelect}>
            <option value="">Tous les contrats</option>
            {contracts.map((contract) => (
              <option key={contract.id} value={contract.name}>
                {contract.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="Card_map">
        {announces.map((announce) => (
          <AnnounceCard announce={announce} key={announce.id} />
        ))}
      </div>
    </>
  );
}
