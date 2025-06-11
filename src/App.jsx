import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AboutUs from './components/AboutUs/AboutUs';
import Banner from './components/Banner/Banner';
import Client from './components/Clients/Client';
import ContactUs from './components/contactUs/ContactUs';
import Footer from './components/Footer/Footer';
import Navbar from './components/NavBar/NavBar';
import Project from './components/projects/Project';
import Services from './components/services/Services';
import ServiceDetail from './components/services/ServiceDetail';
import ProjectDetail from './components/projects/ProjectDetail';
import Home from './pages/Home/Home';
import ChatBotComponent from './components/ChatBot'; 
<link href="https://fonts.googleapis.com/css2?family=Tajawal:wght@400;700&display=swap" rel="stylesheet"></link>
function App() {
  return (
    <Router>
      <Navbar />
      <Banner />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:id" element={<ServiceDetail />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
        <Route path="/clients" element={<Client />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <ChatBotComponent /> 
      <Footer />
    </Router>
  );
}

export default App;