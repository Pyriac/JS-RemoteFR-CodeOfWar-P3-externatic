import { useLoaderData } from 'react-router-dom';
import AnnounceList from '../components/AnnounceList'; 

export default function Announce() {
  const loaderData = useLoaderData(); 
 
  return (
    <>
      <h1>Trouver un job</h1>
      {loaderData.map((announce) => (
        <AnnounceList key={announce.id} announce={announce} />
      ))}
    </>
  );
}