import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mt-8">
      <div className="mx-auto w-full border-t-2 border-secondary px-4 py-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
          {/* Column 1 - About */}
          <div className="space-y-3">
            <Link
              to="https://prabhjot-portfolio.vercel.app"
              className="text-lg font-semibold text-blue-500"
              target="_blank"
            >
              Prabhjot
            </Link>
            <p className="text-sm">
              Building digital experiences with code and creativity.
            </p>
            <div className=""></div>
          </div>

          {/* Column 2 - Quick Links */}
          <div className="space-y-3">
            <h3 className="font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="">
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 - Contact */}
          <div className="space-y-3">
            <h3 className="font-semibold">Contact</h3>
            <p className="text-sm">Have a question or want to work together?</p>
            <Link
              to="mailto:prabhjot1671@gmail.com"
              className="text-sm text-blue-500"
            >
              prabhjot1671@gmail.com
            </Link>
          </div>
        </div>

        {/* Copyright - Bottom */}
        <div className="mt-8 border-t border-secondary pt-8 text-center text-sm">
          <p> {new Date().getFullYear()} Prabhjot</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
