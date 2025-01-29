import HeroSection from "../components/Hero";
import Features from "../components/Features";
import Services from "../components/Services";
import OurLocation from "../components/OurLocation";
import Team from "../components/Team";
import Insurance from "../components/Insurance";
import FAQs from "../components/FAQs";
import Offers from "../components/offers";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <Services />
      <Features />
      <Team />
      <OurLocation />
      <Offers />
      <FAQs />
      <Insurance />
    </div>
  );
};

export default Home;
