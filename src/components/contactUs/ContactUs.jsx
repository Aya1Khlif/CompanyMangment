import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import KSA from "../../assets/contact/KSA.png";
import jordan from "../../assets/contact/UAE.png";
import UAE from "../../assets/contact/jordan.png";
import "./contact.css";
const ContactUs = () => {
  return (
    <>
      <div id="contact" className="Contact flex flex-col items-center p-6 mt-20">
        <div className="contact-background"></div>
        <h1 className="text-3xl font-bold mb-4 text-center">Contact Us</h1>
        <div className="flex flex-col md:flex-row md:justify-between w-full max-w-4xl mb-8">
          <div className="contact  flex-1 p-4 m-4">
            <h2 className="text-xl font-semibold mb-4">Get In Touch</h2>
            <ul className="space-y-7">
              <li className="">
                <span className=" flex gap-2">
                  {" "}
                  <FaMapMarkerAlt className="w-4" /> Address:{" "}
                </span>
                <p>Lorem ipsum dolor sit amet, consectetur</p>
              </li>
              <li className="">
                <span className=" flex gap-2">
                  {" "}
                  <FaPhone className="w-4" /> Phone Number:{" "}
                </span>
                <p> Lorem ipsum dolor sit amet, consectetur</p>
              </li>
              <li className="">
                <span className=" flex gap-2">
                  {" "}
                  <FaEnvelope className="w-4" /> E-Mail:{" "}
                </span>
             
                Lorem ipsum dolor sit amet, consectetur
              </li>
            </ul>
            <div className="mt-4">
              <h3 className="font-bold">Our Branches:</h3>
              <div className="flex mt-3 items-center">
                <img src={KSA} alt="Jordan Flag" className="w-15 h-9 mr-2" />
                <img src={jordan} alt="UAE Flag" className="w-15 h-9 mr-2" />
                <img src={UAE} alt="Germany Flag" className="w-15 h-9" />
              </div>
            </div>
          </div>
          <div className="flex-1 bg-white shadow-lg rounded-lg p-4 m-2">
            <h2 className="text-xl font-semibold mb-4">Send a Message</h2>
            <form>
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full p-2  rounded"
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  placeholder="E-mail address"
                  className="w-full p-2  rounded"
                />
              </div>
              <div className="mb-4">
                <textarea
                  placeholder="Message"
                 className="w-full p-2 rounded h-24 no-resize"
                ></textarea>
              </div>
              <button
                type="submit"
                className=" btn py-2 px-4 rounded- "
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
