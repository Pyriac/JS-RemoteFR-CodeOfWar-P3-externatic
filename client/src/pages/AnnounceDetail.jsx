import { useLoaderData } from "react-router-dom";
import AnnounceDetailTitle from "../components/AnnounceDetailTitle";
import AnnounceDetailPost from "../components/AnnouncePostDetail";
import AnnounceDetailCompanyDescription from "../components/AnnounceDetailCompanyDescription";
import AnnounceDetailCompanyMore from "../components/AnnounceDetailCompanyMore";

export default function AnnounceDetail() {
  const announce = useLoaderData();

  return (
    <div className="AnnounceDetail_background">
      <div className="AnnounceDetail_general">
        <AnnounceDetailTitle announce={announce} />

        <AnnounceDetailPost announce={announce} />

        <AnnounceDetailCompanyDescription announce={announce} />

        <AnnounceDetailCompanyMore announce={announce} />
      </div>
    </div>
  );
}
