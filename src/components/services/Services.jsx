import { useState, useEffect } from 'react';
import Cart from '../cart/Cart';
import './services.css';
import axios from 'axios';

const Services = () => {
  const [services, setServices] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/services`);
        console.log('Services data:', response.data);
        setServices(response.data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching services:', err);
        setError('فشل تحميل الخدمات');
        setLoading(false);
      }
    };
    fetchServices();
  }, []);

  const handleClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  if (loading) return <div className="text-center mt-5">جاري التحميل...</div>;
  if (error) return <div className="text-center mt-5 text-red-500">{error}</div>;

  return (
    <div id="services" className="services mt-5">
      <h1 className="text-center">Our Services</h1>
      <div className="flex flex-wrap justify-center">
        {services.map((service, index) => (
          <Cart
            key={service.id}
            text={service.title}
            desc={service.description}
            img={`${import.meta.env.VITE_API_URL.replace('/api', '')}/storage/${service.image}`}
            index={index}
            activeIndex={activeIndex}
            handleClick={handleClick}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;