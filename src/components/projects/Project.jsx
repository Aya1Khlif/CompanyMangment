import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';
import './project.css';
import axios from 'axios';

const Project = () => {
  const [products, setProducts] = useState([]);
  const [openCard, setOpenCard] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/products`);
        console.log('Products data:', response.data);
        setProducts(response.data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching products:', err);
        setError('فشل تحميل المنتجات');
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const toggleCard = (id) => {
    setOpenCard((prev) => (prev === id ? null : id));
  };

  if (loading) return <div className="text-center mt-5">جاري التحميل...</div>;
  if (error) return <div className="text-center mt-5 text-red-500">{error}</div>;

  return (
    <div id="projects" className="Project mt-5 mb-28">
      <h1 className="text-center font-bold">Our Projects</h1>
      <div className="card mt-16 flex items-center justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <Card
              key={product.id}
              image={`${import.meta.env.VITE_API_URL.replace('/api', '')}/storage/${product.card_image}`}
              description={product.description}
              btn="Read More"
              isOpen={openCard === product.id}
              toggleOpen={() => toggleCard(product.id)}
            />
          ))}
          <Link to="/projects" className="Btn">
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Project;