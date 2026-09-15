import { Route, Routes } from "react-router-dom";
import AnnouncementBar from "./Components/AnnouncementBar";
import NavBar from "./Components/NavBar";
import Introduction from "./Components/Introduction";
import Offerings from "./Components/Offerings";
import Story from "./Components/Story";
import Footer from "./Components/Footer";
import AboutPage from "./Pages/AboutPage";


function App() {
  return (
    <>
      <div className="main-application">
        <header>
          <AnnouncementBar />
          <NavBar />
        </header>
        <Routes>
          <Route
            path="/"
            element={
              <main>
                <Introduction />
                <Offerings />
                <Story />
              </main>
            }
          />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
