import "./index.css";
import AnnouncementBar from "./Components/AnnouncementBar";
import NavBar from "./Components/NavBar";


function App() {
  return (
    <>
      <div className="main-application">
        <header>
          <AnnouncementBar />
        </header>
        <section className="navbar">
          <NavBar />
        </section>
      </div>
    </>
  );
}

export default App;
