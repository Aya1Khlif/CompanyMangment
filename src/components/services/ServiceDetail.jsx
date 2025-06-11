import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './services.css';

const ServiceDetail = () => {
  const { id } = useParams();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchService = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/services/${id}`);
        console.log('Service data:', response.data);
        setService(response.data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching service:', err);
        setError('فشل تحميل الخدمة');
        setLoading(false);
      }
    };
    fetchService();
  }, [id]);

  if (loading) return <div className="text-center mt-5">جاري التحميل...</div>;
  if (error) return <div className="text-center mt-5 text-red-500">{error}</div>;

  return (
    <div className="service-detail mt-5">
      <h1>{service.title}</h1>
      <img
        src={service.image ? `${import.meta.env.VITE_API_URL.replace('/api', '')}/storage/${service.image}` : '/default-image.jpg'}
        alt={service.title || 'Service'}
        className="w-full max-w-md mx-auto"
        onError={(e) => { e.target.src = '/default-image.jpg'; }}
      />
      <p>{service.description}</p>
    </div>
  );
};

export default ServiceDetail;