import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Company.css';

const Company = () => {
  const [aboutData, setAboutData] = useState([]); 

  useEffect(() => {  
    const fetchAboutData = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/about_us`);
    
        if (response.data && Array.isArray(response.data)) {
          setAboutData(response.data);
        }
      } catch (error) {
        console.error('Error fetching About Us data:', error);
      }
    };

    fetchAboutData();
  }, []);

  return (
    <div id="about" className="About mt-5">
      <h1 className="text-center about-title">My Company</h1>
      
      {aboutData.length === 0 ? (
        <p className="text-center">Loading...</p> 
      ) : (
        <div className="companies-container">
          {aboutData.map((data, index) => (
            <div key={index} className="company-card">
              <h3 className="company-name">{data.company_name}</h3>
              <p className="about-company">{data.about_company}</p>
              
              <div className="company-details">
                <ul>
                  <li><strong>Phone:</strong> {data.phone}</li>
                  <li><strong>Email:</strong> {data.email}</li>
                  <li><strong>Website:</strong> <a href={`http://${data.website}`} target="_blank" rel="noopener noreferrer">{data.website}</a></li>
                  <li><strong>Location:</strong> {data.location || 'Not available'}</li>
                  <li><strong>Established:</strong> {data.established_date}</li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      )}
      
      <div className="text-center mt-5">
        <Link to="/about" className="btn read-more-btn">Read More</Link>
      </div>
    </div>
  );
};

export default Company;
