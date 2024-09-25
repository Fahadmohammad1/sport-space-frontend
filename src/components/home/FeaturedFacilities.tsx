import FacilityCard from "./FacilityCard";
import football from "../../assets/football.jpg";

const FeaturedFacilities = () => {
  const facilities = [
    {
      id: "1",
      name: "",
      image: football,
      description: "",
      pricePerHour: "",
      location: "",
      isDeleted: "",
    },
    {
      id: "2",
      name: "",
      image: football,
      description: "",
      pricePerHour: "",
      location: "",
      isDeleted: "",
    },
    {
      id: "3",
      name: "",
      image: football,
      description: "",
      pricePerHour: "",
      location: "",
      isDeleted: "",
    },
  ];
  return (
    <section className="mt-12">
      {/* <h3 className="text-center lg:text-3xl text-xl font-bold">
        Featured Facilites
      </h3> */}
      <div className="lg:grid grid-cols-3 mt-5 gap-5">
        {facilities.map((facility) => (
          <FacilityCard key={facility.id} facility={facility} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedFacilities;
