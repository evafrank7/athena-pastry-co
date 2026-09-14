import { FaInstagram } from "react-icons/fa6";
import { GiOlive } from "react-icons/gi";
import logo from "../Assets/images/main-logo.png";
import footerCta from "../Assets/images/footer-greek-island-cta.png";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/menu" },
  { label: "Custom Orders", href: "/custom-orders" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const Footer = () => {
  return (
    <footer>
      <section className="relative overflow-hidden bg-cream px-6 py-14 text-center text-navy sm:py-16">
        <img
          src={footerCta}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover object-left"
        />
        <div className="absolute inset-0 bg-cream/65" aria-hidden="true" />

        <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-navy/65">
            Made for your sweetest moments
          </p>
          <h2 className="mt-3 font-heading text-4xl leading-tight sm:text-5xl">
            Ready to Order?
          </h2>
          <p className="mt-2 text-lg text-navy/75">
            Let&apos;s make something sweet for your next celebration.
          </p>
          <a
            href="/custom-orders"
            className="mt-6 inline-flex items-center gap-4 bg-navy px-8 py-3.5 text-cream transition-colors hover:bg-navy-dark focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-navy"
          >
            Start a Custom Order <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </section>

      <section className="bg-navy px-6 py-12 text-cream-dark sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_1fr_1fr] lg:gap-14">
          <a href="/" className="w-fit" aria-label="Athena Pastry Co. home">
            <img
              src={logo}
              alt="Athena Pastry Co."
              className="h-36 w-36 object-contain"
            />
          </a>

          <nav aria-label="Footer navigation">
            <h2 className="text-xs font-bold uppercase tracking-[0.25em] text-white">
              Quick Links
            </h2>
            <ul className="mt-4 space-y-1.5">
              {quickLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-sm text-cream-dark/80 transition-colors hover:text-white"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.25em] text-white">
              Let&apos;s Connect
            </h2>
            <a
              href="https://www.instagram.com/athenapastryco/"
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center gap-3 text-sm text-cream-dark/80 transition-colors hover:text-white"
            >
              <FaInstagram className="text-xl" aria-hidden="true" />
              <span>@athenapastryco</span>
            </a>
          </div>

          <div className="border-cream-dark/30 lg:border-l lg:pl-12">
            <p className="max-w-[18ch] text-sm font-bold uppercase leading-loose tracking-[0.3em] text-white">
              Good things are baked here.
            </p>
            <GiOlive className="mt-5 text-2xl text-gold" aria-hidden="true" />
          </div>
        </div>

        <p className="mx-auto mt-10 max-w-7xl border-t border-cream-dark/15 pt-6 text-center text-xs text-cream-dark/55">
          &copy; {new Date().getFullYear()} Athena Pastry Co. All rights reserved.
        </p>
      </section>
    </footer>
  );
};

export default Footer;
