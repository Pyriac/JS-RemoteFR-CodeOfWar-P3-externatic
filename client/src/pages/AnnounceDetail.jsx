import { useLoaderData } from "react-router-dom";
import AnnounceDetailTitle from "../components/AnnounceDetailTitle";
import AnnounceDetailPost from "../components/AnnouncePostDetail";
import AnnounceDetailCompanyDescription from "../components/AnnounceDetailCompanyDescription";
import AnnounceDetailCompanyMore from "../components/AnnounceDetailCompanyMore";

export default function AnnounceDetail() {
  const { announce, contracts } = useLoaderData();
  console.info("depuis announce details", announce);
  console.info("depuis announce details", contracts);

  return (
    <div className="AnnounceDetail_background">
      <div className="AnnounceDetail_general">
        <AnnounceDetailTitle announce={announce} contracts={contracts} />

        <AnnounceDetailPost announce={announce} />

        <AnnounceDetailCompanyDescription announce={announce} />

        <AnnounceDetailCompanyMore announce={announce} />
      </div>
    </div>
  );
}
