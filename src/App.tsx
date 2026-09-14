import AnnouncementBar from "./Components/AnnouncementBar";
import NavBar from "./Components/NavBar";
import Introduction from "./Components/Introduction";
import Offerings from "./Components/Offerings";
import Story from "./Components/Story";


function App() {
  return (
    <>
      <div className="main-application">
        <header>
          <AnnouncementBar />
          <NavBar />
        </header>
        <main>
          <Introduction />
          <Offerings />
          <Story />
        </main>
      </div>
    </>
  );
}

export default App;
