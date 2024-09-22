import { Outlet } from "react-router-dom";

import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import "./assets/styles/Homepage.css";
import "./assets/styles/AnnounceDetail.css";
import "./assets/styles/CarrouselCompanyHomePage.css";
import "./assets/styles/CardCompany.css";
import "./assets/styles/App.css";
import "./assets/styles/EditAnnounce.css";
import "./assets/styles/Footer.css";
import "./assets/styles/LegalPages.css";
import "./assets/styles/CorporateSponcor.css";
import "./assets/styles/RegisterCandidat.css";
import "./assets/styles/Login.css";

function App() {
  return (
    <>
      <NavBar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
