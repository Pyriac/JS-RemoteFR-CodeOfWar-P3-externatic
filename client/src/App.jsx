import { Outlet } from "react-router-dom";
import "./assets/styles/App.css";
import "./assets/styles/EditAnnounce.css";
import NavBar from "./components/NavBar";

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
