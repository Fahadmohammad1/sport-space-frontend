import football from "../assets/football.jpg";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  password: string;
  phone: string;
  address: string;
  confirmPassword: string;
};

const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm<Inputs>();

  const password = watch("password", "");

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    reset();

    console.log(data);
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
          <h1 className="text-3xl font-bold text-ss-primary mb-2">Register</h1>

          <form onSubmit={handleSubmit(onSubmit)} className="w-1/2 text-center">
            {/*name */}
            <label className="input input-bordered flex items-center gap-2 mb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                  clipRule="evenodd"
                />
              </svg>

              <input
                {...register("name", { required: "Name is required" })}
                type="text"
                className="grow"
                placeholder="Name"
              />
            </label>
            {errors?.name && (
              <p className="text-red-500 text-start">{errors.name.message}</p>
            )}

            {/*address */}
            <label className="input input-bordered flex items-center gap-2 mb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                  clipRule="evenodd"
                />
              </svg>

              <input
                {...register("address", { required: "Address is required" })}
                type="text"
                className="grow"
                placeholder="Address"
              />
            </label>
            {errors?.address && (
              <p className="text-red-500 text-start">
                {errors.address.message}
              </p>
            )}

            {/*email */}
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
                type="email"
                className="grow"
                placeholder="Email"
              />
            </label>
            {errors?.email && (
              <p className="text-red-500 text-start">{errors.email.message}</p>
            )}

            {/*Phone */}
            <label className="input input-bordered flex items-center gap-2 mb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                  clipRule="evenodd"
                />
              </svg>

              <input
                {...register("phone", { required: "Phone Number is required" })}
                type="text"
                className="grow"
                placeholder="Phone"
              />
            </label>
            {errors?.phone && (
              <p className="text-red-500 text-start">{errors.phone.message}</p>
            )}

            {/*password */}
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

            {/*confirm password */}
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
                {...register("confirmPassword", {
                  required: "Confirm Password is required",
                  validate: (value) =>
                    value === password || "Password dot not match",
                })}
                type="password"
                className="grow"
                placeholder="Confirm Password"
              />
            </label>
            {errors?.confirmPassword && (
              <p className="text-red-500 text-start">
                {errors.confirmPassword.message}
              </p>
            )}

            <button className="btn border-none btn-sm bg-gradient-to-r from-ss-primary to-ss-secondary text-black uppercase">
              Register
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Register;
