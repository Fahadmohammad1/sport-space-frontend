import user from "../../assets/user.png";

const MyAccount = () => {
  return (
    <section>
      <div className="bg-gradient-to-r from-ss-secondary to-ss-primary lg:h-36 lg:w-full"></div>
      <div className="lg:ml-10">
        <img
          className="lg:w-44 lg:-mt-24  rounded-full"
          src={user}
          alt="user"
        />
        <h4 className="text-3xl font-bold mt-4">Kim jon Un</h4>
        <p className="flex gap-2 items-center text-gray-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="size-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
            />
          </svg>
          user934@gmail.com
        </p>
        <p className="mt-7 border-b inline-block border-b-ss-extra">Profile</p>
      </div>
      <div>
        <hr />
        <div className="lg:ml-10 mt-5 w-1/2">
          <p className="flex justify-between items-center">
            <span>Phone</span>
            <input
              type="text"
              defaultValue="12121212121"
              className="py-2 px-5 border rounded-full ml-auto w-full max-w-xs"
              disabled
            />
          </p>

          <p className="flex justify-between items-center mt-8">
            <span>Address</span>
            <input
              type="text"
              defaultValue="Chandgaon, Bahaddarhat, Chattogram, dhaka, bangaladesh"
              className="py-2 px-5 border rounded-full ml-5 w-full max-w-xs"
              disabled
            />
          </p>
          <button className="btn bg-gradient-to-r from-ss-primary to-ss-secondary text-white mt-8 rounded-full px-10">
            Update
          </button>
          <button className="btn bg-gradient-to-r from-red-600 to-red-400 text-white mt-8 rounded-full px-10 ml-3">
            Delete Account
          </button>
        </div>
      </div>
    </section>
  );
};

export default MyAccount;
