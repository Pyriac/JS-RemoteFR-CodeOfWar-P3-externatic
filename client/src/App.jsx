import { Outlet } from "react-router-dom";
import "./assets/styles/App.css";
import "./assets/styles/EditAnnounce.css";
import "./assets/styles/Homepage.css";
import "./assets/styles/CarrouselCompanyHomePage.css";

function App() {
  return (
    <main>
      <Outlet />
    </main>
  );
}

export default App;
