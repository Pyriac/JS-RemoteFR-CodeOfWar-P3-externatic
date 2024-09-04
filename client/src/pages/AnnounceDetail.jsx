import { useLoaderData } from 'react-router-dom';
import AnnounceCard from '../components/AnnounceCard'; 

export default function AnnounceDetail() {
  const announce = useLoaderData(); 

  return (
    <div>
      <AnnounceCard announce={announce} /> 
    </div>
  );
}