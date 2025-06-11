import axios from 'axios';

const API_URL = 'http://host.docker.internal:8000/api'; 

export const getProducts = () => axios.get(`${API_URL}/products`);
export const getProductById = (id) => axios.get(`${API_URL}/products/${id}`);
export const getServices = () => axios.get(`${API_URL}/services`);
export const getServiceById = (id) => axios.get(`${API_URL}/services/${id}`);
export const getAboutUs = () => axios.get(`${API_URL}/about_us`);
export const getAboutUsById = (id) => axios.get(`${API_URL}/about_us/${id}`);
export const getClients = () => axios.get(`${API_URL}/clients`);
export const getClientById = (id) => axios.get(`${API_URL}/clients/${id}`);