import Banner from "./Banner";
import FeaturedFacilities from "./FeaturedFacilities";
import HowItWorks from "./HowItWorks";
import Services from "./Services";
import Testimonials from "./Testimonials";

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
