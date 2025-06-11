import "./banner.css";
import logo from "../../assets/nav/logo.png";
import logo2 from "../../assets/nav/logo2.png";
import img1 from "../../assets/banner/box1.png";
import img2 from "../../assets/banner/box2.png";
import img3 from "../../assets/banner/box3.png";
import img4 from "../../assets/banner/box4.png";
import { useEffect, useState } from "react";

const Banner = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 444);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="hero flex">
      <div className="text-container">
        <img className="mt-2 sm:mt-5 logo-image" src={logo} alt="logo" />
        <div className="hero-text">
          <span className="top-title"> PROFESSIONALS </span>
          <br />
          <span className="title "> in the security industry</span>
          <p>
            A company approved by Security Industry Regulatory Agency
            <br />
            in the Government of Dubai Security Professionals Association (SPA)
          </p>
        </div>
      </div>
      {!isMobile && (
        <div className="box-img mt-5">
          <img className="img1 animate" src={img1} alt="image1" />
          <img className="img2 animate" src={img2} alt="image2" />
          <img className="img3 animate" src={img3} alt="image3" />
          <img className="img4 animate" src={img4} alt="image4" />
        </div>
      )}
      <div className="hero-section"></div>
    </div>
  );
};
export default Banner;
