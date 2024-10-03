import React, { useEffect, useState } from "react";
import football from "../assets/football.jpg";
import FacilityCard from "../components/home/FacilityCard";
import { TFacility } from "../types/common";

const Facilities = () => {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [searchText, setSearchText] = useState("");
  const [filteredFacilities, setfilteredFacilities] = useState<TFacility[]>([]);

  console.log(priceRange);

  const handleMinPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMinPrice(Number(e.target.value));
    setPriceRange([Number(e.target.value), maxPrice]);
  };

  const handleMaxPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMaxPrice(Number(e.target.value));
    setPriceRange([minPrice, Number(e.target.value)]);
  };

  useEffect(() => {
    const facilities = [
      {
        id: "1",
        name: "Football Field",
        image: football,
        description: "",
        pricePerHour: 20,
        location: "Chittagong",
        isDeleted: false,
      },
      {
        id: "2",
        name: "Basketball court",
        image: football,
        description: "",
        pricePerHour: 30,
        location: "Dhaka",
        isDeleted: false,
      },
      {
        id: "3",
        name: "Tennis court",
        image: football,
        description: "",
        pricePerHour: 50,
        location: "Khulna",
        isDeleted: false,
      },
      {
        id: "4",
        name: "Cricket field",
        image: football,
        description: "",
        pricePerHour: 100,
        location: "Khulna",
        isDeleted: false,
      },
      {
        id: "5",
        name: "Badminton field",
        image: football,
        description: "",
        pricePerHour: 150,
        location: "Barishal",
        isDeleted: false,
      },
    ];

    const data = facilities.filter((facility) => {
      const regex = new RegExp(searchText, "i");
      return regex.test(facility.name) || regex.test(facility.location);
    });
    setfilteredFacilities(data);

    if (minPrice > 1 || maxPrice < 1000) {
      const filteredData = filteredFacilities.filter((facility) => {
        if (minPrice > 1) {
          return facility.pricePerHour > minPrice;
        }
        if (maxPrice < 1000) {
          return facility.pricePerHour < maxPrice;
        }
      });

      setfilteredFacilities(filteredData);
    }
  }, [searchText, minPrice, maxPrice]);

  return (
    <section className="container mx-auto mt-10">
      <div className="grid grid-cols-12">
        <div className="col-span-2 border shadow-lg p-3 rounded-2xl h-full">
          <label className="input input-bordered flex items-center gap-2 mb-4">
            <input
              type="text"
              onChange={(e) => setSearchText(e.target.value)}
              className="grow"
              placeholder="Search"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>

          <h2 className="text-medium font-bold mb-4">Price Range</h2>
          <div className="flex justify-between mb-4">
            <span className="text-sm font-medium">Min : ${minPrice}</span>
            <span className="text-sm font-medium">Max : ${maxPrice}</span>
          </div>
          <div className="flex justify-between">
            <input
              type="range"
              min="0"
              max="1000"
              value={minPrice}
              onChange={handleMinPriceChange}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
            <input
              type="range"
              min="0"
              max="1000"
              value={maxPrice}
              onChange={handleMaxPriceChange}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
          </div>
        </div>
        <div className="col-span-10 ml-5">
          <div className="lg:grid grid-cols-3 gap-5">
            {filteredFacilities.map((facility) => (
              <FacilityCard key={facility.id} facility={facility} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facilities;
