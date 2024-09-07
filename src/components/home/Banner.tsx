import banner from "../../assets/banner-bg.jpg";

const Banner = () => {
  return (
    <section className="">
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(${banner})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">
              Best Sports Facility In Your Town
            </h1>
            <p className="mb-5 ">
              No more hassle with phone calls and back-and-forth emails to
              schedule dates. Your customers can check the online calendar for
              availability and submit booking requests.
            </p>
            <button className="btn btn-primary">Book Now</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
