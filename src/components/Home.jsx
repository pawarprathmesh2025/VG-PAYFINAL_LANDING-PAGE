import Hero from "../components/Hero";
import TrustedClients from "../components/TrustedClients";
import Stats from "../components/Stats";
import DevicesSection from "../components/DevicesSection";
import Features from "../components/Features";
import Services from "../components/Services";
import UserSection from "../components/UserSection";
import Security from "../components/Security";

import DownloadFooter from "../components/DownloadFooter";

const Home = () => {
  return (
    <>
      <section id="home">
        <Hero />
      </section>

      <TrustedClients />
      <Stats />

      <section id="OurDevices">
        <DevicesSection />
      </section>

      <section id="features">
        <Features />
      </section>

      <Services />
        <UserSection />
        <Security />


      {/* <section id="Contact"> */}
          
      
        
        {/* Contact component here */}
      {/* </section> */}
        <DownloadFooter />

    </>
  );
};

export default Home;
