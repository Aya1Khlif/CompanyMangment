import { FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import logofooter from "../../assets/contact/logofooter.png";
const Footer = () => {
  return (
    <footer className="bg-gray-100 py-6">
      <div className="max-w-7xl mx-auto px-4">
        {/* Grid layout for footer */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6 items-start">
          {/* Left Side: Logo and Approval Text */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <img src={logofooter} alt="Footer Logo" className="w-30 h-30" />
            <p className="text-sm text-gray-600 text-center md:text-left">
              A Company approved by Security Industry regulatory Agency in The
              Dubai
            </p>
          </div>

          <div className="text-center md:text-left lg:mt-20">
            <h4 className="font-semibold mb-2">COMPANY</h4>
            <ul className="text-gray-600 text-sm space-y-1">
              <li>
                <a href="#" className="hover:text-gray-800">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-800">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-800">
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          <div className="text-center md:text-left lg:mt-20">
            <h4 className="font-semibold mb-2">RESOURCES</h4>
            <ul className="text-gray-600 text-sm space-y-1">
              <li>
                <a href="#" className="hover:text-gray-800">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-800">
                  Papers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-800">
                  Press Conferences
                </a>
              </li>
            </ul>
          </div>

          <div className="text-center md:text-left lg:mt-20">
            <h4 className="font-semibold mb-2">LEGAL</h4>
            <ul className="text-gray-600 text-sm space-y-1">
              <li>
                <a href="#" className="hover:text-gray-800">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-800">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-800">
                  Cookies Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-800">
                  Data Processing
                </a>
              </li>
            </ul>
            <div className="flex mt-5 items-center gap-5">
              <a href="#" className="text-gray-600 hover:text-blue-600">
                <FaLinkedin size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-pink-600">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-800">
                <FaFacebook size={20} />
              </a>
            </div>
          </div>
        </div>
        <hr className="border-t border-gray-300 my-6" />
        <div className="text-center text-sm text-gray-600">
          © 2024 Bright Vision Group. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
