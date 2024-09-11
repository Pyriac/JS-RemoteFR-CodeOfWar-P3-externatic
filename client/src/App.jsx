import { Outlet } from "react-router-dom";
import "./assets/styles/App.css";
import "./assets/styles/EditAnnounce.css";
import NavBar from "./components/NavBar";
import "./assets/styles/Homepage.css";
import "./assets/styles/AnnounceDetail.css";


function App() {
  return (
    <>
      <NavBar />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;