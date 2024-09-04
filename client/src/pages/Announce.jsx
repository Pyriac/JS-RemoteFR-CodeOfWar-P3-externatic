
import { useLoaderData } from 'react-router-dom';
import AnnounceList from '../components/AnnounceList'; 

export default function Announce() {
  const loaderData = useLoaderData(); 

  return <AnnounceList loaderData={loaderData} />; 
}



