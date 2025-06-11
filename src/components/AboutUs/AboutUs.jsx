import { Link } from 'react-router-dom';
import about1 from '../../assets/about/about.png';
import about2 from '../../assets/about/about2.png';
import mask from '../../assets/about/Mask.png';
import mask2 from '../../assets/about/Mask2.png';
import './About.css'
const AboutUs = () => {
  return (
    <div id="about" className="About mt-5">
      <h1 className="text-center about-title">
        About Us
      </h1>
      <div className="about-content">
      <div className="about-images">
          <img src={about1} alt="Security Device" className="about-img img1" />
          <img src={about2} alt="Technology" className="about-img img2" />
          <div className="mask">
            <img src={mask} alt="" className='mask1'/>
            <img src={mask2} alt="" className='mask2' />
          </div>
        </div>
        <div className="about-text">
          <h2 className="text-center">Welcome To Our Company</h2>
          <p className="">
            Bright Vision Group has been established since 1995. It is
            specialized in security devices, surveillance cameras, 
            anti-theft devices, networks, and software. It keeps pace with the latest
            technologies, and our successes have continued to expand globally.
          </p>
          <Link to="/about" className="btn read-more-btn">Read More</Link>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
