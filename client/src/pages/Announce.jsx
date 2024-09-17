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
      <h1>Trouver un job</h1>

      <select onChange={handleChangeSelect}>
        <option value="">Tous les contrats</option>
        {contracts.map((contract) => (
          <option key={contract.id} value={contract.name}>
            {contract.name}
          </option>
        ))}
      </select>
      {announces.map((announce) => (
        <AnnounceCard announce={announce} key={announce.id} />
      ))}
    </>
  );
}
