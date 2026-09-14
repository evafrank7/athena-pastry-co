import AnnouncementBar from "./Components/AnnouncementBar";
import NavBar from "./Components/NavBar";
import Introduction from "./Components/Introduction";
import Offerings from "./Components/Offerings";
import Story from "./Components/Story";
import Footer from "./Components/Footer";


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
        <Footer />
      </div>
    </>
  );
}

export default App;
