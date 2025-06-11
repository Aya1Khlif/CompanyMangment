import { useState, useEffect } from 'react';
import './client.css';
import axios from 'axios';

const Client = () => {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/clients`);
        console.log('Clients data:', response.data);
        setClients(response.data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching clients:', err);
        setError('فشل تحميل العملاء');
        setLoading(false);
      }
    };
    fetchClients();
  }, []);

  if (loading) return <div className="text-center mt-5">جاري التحميل...</div>;
  if (error) return <div className="text-center mt-5 text-red-500">{error}</div>;

  return (
    <div id="clients" className="client-gallery mt-16">
      <h1>Our Clients</h1>
      <div className="client-images-section">
        {clients.map((client) => (
          <img
            key={client.id}
            src={client.logo ? `${import.meta.env.VITE_API_URL.replace('/api', '')}/storage/${client.logo}` : '/default-image.jpg'}
            alt={client.name || 'Client'}
            onError={(e) => { e.target.src = '/default-image.jpg'; }}
          />
        ))}
      </div>
    </div>
  );
};

export default Client;