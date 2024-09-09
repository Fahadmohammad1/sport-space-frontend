const Testimonials = () => {
  return (
    <section className="mt-12 px-5 lg:px-0">
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <div className="w-full flex flex-col gap-5 lg:px-24 justify-center items-center">
            <h6 className="text-ss-primary font-bold lg:text-3xl">
              Wahid Ahmed
            </h6>
            <p className="text-justify font-mono text-2xl text-black">
              " Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
              amet ex esse fugit labore quod dignissimos quis culpa suscipit
              sunt nam, neque ut voluptatem corporis iure modi tempora veniam
              distinctio reiciendis ducimus natus deleniti! Cum qui eum nihil
              ipsam cupiditate incidunt minima nam mollitia repudiandae
              architecto dolorem fuga, optio excepturi. "
            </p>
            <p className="font-bold">Played at : location</p>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
            className="w-full"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
            className="w-full"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
