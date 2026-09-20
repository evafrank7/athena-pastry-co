import { FaInstagram } from "react-icons/fa6";
import { Link } from "react-router-dom";
import logo from "../Assets/images/main-logo.png";
import { FaCartShopping } from "react-icons/fa6";

const NavBar = () => {
  return (
    <nav className="grid min-h-25 grid-cols-[1fr_auto_1fr] items-center gap-8 bg-cream px-16 text-navy">
      <ul className="flex items-center gap-10 justify-self-start">
        <li><Link to="/" className="text-lg">Home</Link></li>
        <li><Link to="/menu" className="text-lg">Menu</Link></li>
        <li><Link to="/custom-orders" className="text-lg">Custom Orders</Link></li>
      </ul>

      <Link to="/" aria-label="Athena's Pastry Co." className="relative z-10">
        <img src={logo} alt="Athena's Pastry Co." className="h-32 w-32" />
      </Link>

      <ul className="flex items-center gap-10 justify-self-end">
        <li><Link to="/about" className="text-lg">About</Link></li>
        <li><Link to="/contact" className="text-lg">Contact</Link></li>
        <li>
          <a href="https://www.instagram.com/athenapastryco/" aria-label="Instagram" target="_blank">
            <FaInstagram className="text-3xl" />
          </a>
        </li>
        <li>
          <Link to="/checkout">
            <FaCartShopping className="text-3xl" />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
