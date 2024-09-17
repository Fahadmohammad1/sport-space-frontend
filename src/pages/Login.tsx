import football from "../assets/football.jpg";
import { useForm, SubmitHandler } from "react-hook-form";
import { useUserLoginMutation } from "../redux/api/authApi";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

type Inputs = {
  email: string;
  password: string;
};

const Login = () => {
  const [userLogin] = useUserLoginMutation();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const res = await userLogin({ ...data });

    if (res?.data?.data) {
      toast.success("Login Successfull");
      navigate("/");
    } else {
      toast.error(res?.error?.data?.message && "Login failed");
    }
    console.log(data);
    reset();
  };
  return (
    <section>
      <div className="w-full h-screen flex">
        <img
          src={football}
          alt="background"
          className="object-cover object-center h-screen w-1/2"
        />
        <div className="bg-white flex flex-col justify-center items-center w-1/2 shadow-lg">
          <h1 className="text-3xl font-bold text-ss-primary mb-2">LOGIN</h1>
          <form onSubmit={handleSubmit(onSubmit)} className="w-1/2 text-center">
            <label className="input input-bordered flex items-center gap-2 mb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input
                {...register("email", { required: "Email is required" })}
                type="text"
                className="grow"
                placeholder="Email"
              />
            </label>
            {errors?.email && (
              <p className="text-red-500 text-start">{errors.email.message}</p>
            )}

            <label className="input input-bordered flex items-center gap-2 mb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                {...register("password", { required: "Password is required" })}
                type="password"
                className="grow"
                placeholder="Password"
              />
            </label>
            {errors?.password && (
              <p className="text-red-500 text-start">
                {errors.password.message}
              </p>
            )}
            <button className="btn border-none btn-sm bg-gradient-to-r from-ss-primary to-ss-secondary text-black uppercase">
              Login
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
