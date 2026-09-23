import { Route, Routes } from "react-router-dom";
import AnnouncementBar from "./Components/AnnouncementBar";
import NavBar from "./Components/NavBar";
import Introduction from "./Components/Introduction";
import Offerings from "./Components/Offerings";
import Story from "./Components/Story";
import Footer from "./Components/Footer";
import AboutPage from "./Pages/AboutPage";
import CheckoutPage from "./Pages/CheckoutPage";
import Menu from "./Pages/Menu";
import CustomOrderPage from "./Pages/CustomOrderPage";


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
          <Route path="/menu" element={<Menu />} />
          <Route path="/custom-orders" element={<CustomOrderPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/checkout" element={<CheckoutPage /> }/>
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
