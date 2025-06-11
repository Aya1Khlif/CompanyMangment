import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './project.css';

const ProjectDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/products/${id}`);
        setProduct(response.data);
        setLoading(false);
      } catch (err) {
        setError('فشل تحميل المنتج');
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) return <div className="text-center mt-5">جاري التحميل...</div>;
  if (error) return <div className="text-center mt-5 text-red-500">{error}</div>;

  return (
    <div className="project-detail mt-5">
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} className="w-full max-w-md mx-auto" />
      <p>{product.description}</p>
    </div>
  );
};

export default ProjectDetail;