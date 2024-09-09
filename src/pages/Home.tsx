import Banner from "../components/home/Banner";
import FeaturedFacilities from "../components/home/FeaturedFacilities";
import HowItWorks from "../components/home/HowItWorks";
import Services from "../components/home/Services";
import Testimonials from "../components/home/Testimonials";

const Home = () => {
  return (
    <section>
      <Banner />
      <div className="container mx-auto">
        <FeaturedFacilities />
        <HowItWorks />
        <Testimonials />
        <Services />
      </div>
    </section>
  );
};

export default Home;
