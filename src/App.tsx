import "./index.css";
import { RxDividerVertical } from "react-icons/rx";
import { GiOlive } from "react-icons/gi";
import { FaInstagram } from "react-icons/fa6";

function App() {
  return (
    <>
      <div className="main-application">
        <section className="navbar">
          <nav>
            <section className="nav-message">
              <div className="flex min-h-10 items-center justify-center gap-4 bg-navy px-4 text-white">
                <GiOlive className="text-cream-dark text-md mr-10" />
                <p className="text-xs text-cream-dark">Custom orders open</p>
                <RxDividerVertical className="text-sm text-cream-dark" />
                <p className="text-xs text-cream-dark">
                  Local pickup available
                </p>
                <RxDividerVertical className="text-sm text-cream-dark" />
                <p className="text-xs text-cream-dark">
                  A taste of Greece in every bite
                </p>
                <GiOlive className="text-cream-dark text-md ml-10" />
              </div>
            </section>
            <section className="main-nav">
              <div className="flex min-h-25 items-center justify-center gap-4 bg-cream-dark px-4 text-navy">
                <div className="flex items-start justify-start gap-4">
                  <p className="text-lg text-navy"> Home </p>
                  <p className="text-lg text-navy"> Menu </p>
                  <p className="text-lg text-navy"> Custom Orders </p>
                </div>
                <div className="flex items-center justify-center gap-4">
                  <img src="Assets/images/main-logo.png" alt="Athena's Pastry Co. Logo" className="h-20 w-20" />
                </div>
                <div className="flex items-end justify-end gap-4">
                  <p className="text-lg text-navy"> About </p>
                  <p className="text-lg text-navy"> Contact </p>
                  <FaInstagram className="text-navy text-lg" />
                </div>
              </div>
            </section>
          </nav>
        </section>
      </div>
    </>
  );
}

export default App;
