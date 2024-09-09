const Services = () => {
  const services = [
    {
      id: "1",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-16 text-ss-extra"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
      ),
      title: "24/7 availability",
      descripition:
        "We have 24/7 slot available. You can play your favorite sport at any time",
    },
    {
      id: "2",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-16 text-ss-primary"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
      ),
      title: "Cheap pricing",
      descripition:
        "We have 24/7 slot available. You can play your favorite sport at any time",
    },
    {
      id: "3",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-16 text-ss-secondary"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
          />
        </svg>
      ),
      title: "Air Conditioned facility",
      descripition:
        "We have 24/7 slot available. You can play your favorite sport at any time",
    },
  ];
  return (
    <section className="lg:grid grid-cols-3 my-12">
      {services.map((service) => (
        <div
          key={service.id}
          className="rounded-lg bg-base-200 lg:w-96 border-0 mx-auto"
        >
          <div className="text-center px-10 py-14">
            <div className="flex justify-center">{service.icon}</div>
            <h2 className="text-black font-bold">{service.title}</h2>
            <p className="text-gray-500">
              If a dog chews shoes whose shoes does he choose?
            </p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Services;
