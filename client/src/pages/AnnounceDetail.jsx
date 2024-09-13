import { useLoaderData } from 'react-router-dom';
import AnnounceDetailCard from '../components/AnnounceDetailCard';

export default function AnnounceDetail() {
  const announce = useLoaderData(); 

  return (
    <div>
      <AnnounceDetailCard announce={announce} />
    </div>
  );
}