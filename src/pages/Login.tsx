import football from "../assets/football.jpg";

const Login = () => {
  return (
    <section>
      <div className="w-full h-screen flex">
        <img
          src={football}
          alt="background"
          className="object-cover object-center h-screen w-1/2"
        />
        <div className="bg-white flex flex-col justify-center items-center w-1/2 shadow-lg">
          <h1 className="text-3xl font-bold text-orange-500 mb-2">LOGIN</h1>
          <div className="w-1/2 text-center">
            <input
              type="text"
              name="username"
              placeholder="username"
              autoComplete="off"
              className="shadow-md border w-full h-10 px-3 py-2 text-orange-500 focus:outline-none focus:border-orange-500 mb-3 rounded"
            />
            <input
              type="password"
              name="password"
              placeholder="password"
              autocomplete="off"
              className="shadow-md border w-full h-10 px-3 py-2 text-orange-500 focus:outline-none focus:border-orange-500 mb-3 rounded"
            />
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-3 py-1 rounded text-lg focus:outline-none shadow">
              Sign In
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
