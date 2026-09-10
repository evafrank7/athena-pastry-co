import { FaInstagram } from "react-icons/fa6";
import logo from "../Assets/images/main-logo.png";

const NavBar = () => {
  return (
    <nav className="grid min-h-25 grid-cols-[1fr_auto_1fr] items-center gap-8 bg-cream-dark px-16 text-navy">
      <ul className="flex items-center gap-10 justify-self-start">
        <li><a href="/" className="text-lg">Home</a></li>
        <li><a href="/menu" className="text-lg">Menu</a></li>
        <li><a href="/custom-orders" className="text-lg">Custom Orders</a></li>
      </ul>

      <a href="/" aria-label="Athena's Pastry Co." className="relative z-10">
        <img src={logo} alt="Athena's Pastry Co." className="h-32 w-32" />
      </a>

      <ul className="flex items-center gap-10 justify-self-end">
        <li><a href="/about" className="text-lg">About</a></li>
        <li><a href="/contact" className="text-lg">Contact</a></li>
        <li>
          <a href="https://www.instagram.com/athenapastryco/" aria-label="Instagram">
            <FaInstagram className="text-xl" />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
