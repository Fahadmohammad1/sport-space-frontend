import { TFacility } from "../../types/common";

const FacilityCard = ({ facility }: { facility: TFacility }) => {
  return (
    <div className="card bg-base-100 shadow-xl mx-auto border">
      <figure className="px-5 pt-5">
        <img src={facility.image} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="p-5">
        <h2 className="text-xl text-black">{facility.name}</h2>
        <p className="text-ss-extra">
          ${facility.pricePerHour} per hour, 6:00 AM to 8:00 PM
        </p>
        <p className="mt-3 text-sm text-justify text-gray-500">
          If a dog chews shoes whose shoes does he choose?If a dog chews shoes
          whose shoes does he choose.
        </p>
        <div className="mt-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default FacilityCard;
