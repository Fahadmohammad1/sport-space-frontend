import Banner from "./Banner";
import FeaturedFacilities from "./FeaturedFacilities";
import HowItWorks from "./HowItWorks";

const Home = () => {
  return (
    <section>
      <Banner />
      <div className="container mx-auto">
        <FeaturedFacilities />
        <HowItWorks />
      </div>
    </section>
  );
};

export default Home;
