import AboutUs from "../../components/AboutUs/AboutUs";
import Client from "../../components/Clients/Client";
import ContactUs from "../../components/contactUs/ContactUs";
import Project from "../../components/projects/Project";
import Services from "../../components/services/Services";
import Company from "../../components/TheCompany/Company";

const Home = () => {
  return (
    <>
      <AboutUs />
      <Company/>
      <Services />
      <Project />
      <Client/>
      <ContactUs />
    </>
  );
};

export default Home;
