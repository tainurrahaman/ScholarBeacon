import Lottie from "lottie-react";
import { useForm } from "react-hook-form";
import registerLottieData from "../../assets/lottie/signup.json";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSignUp = (data) => console.log(data);

  return (
    <div className="hero mt-20">
      <div className="hero-content flex-col lg:flex-row-reverse gap-20">
        <div className="max-w-xl">
          <Lottie animationData={registerLottieData}></Lottie>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleSubmit(handleSignUp)} className="card-body">
            <h1 className="text-5xl text-center font-bold pb-5">SignUp Now!</h1>
            <fieldset className="fieldset">
              <label className="fieldset-label font-bold text-slate-600 text-[15px]">
                Name
              </label>
              <input
                {...register("name", { required: "Name is required" })}
                type="text"
                className="input"
                placeholder="Enter your Name"
              />
              {errors.name && (
                <p className="text-red-500">{errors.name.message}</p>
              )}

              <label className="fieldset-label font-bold text-slate-600 text-[15px]">
                Email
              </label>
              <input
                {...register("email", { required: "Email is required" })}
                type="email"
                className="input"
                placeholder="Enter your Email"
              />
              {errors.email && (
                <p className="text-red-500">{errors.email.message}</p>
              )}

              <label className="fieldset-label font-bold text-slate-600 text-[15px]">
                Photo URL
              </label>
              <input
                {...register("photoURL", { required: "Photo URL is required" })}
                type="text"
                className="input"
                placeholder="Enter your Photo URL"
              />
              {errors.photoURL && (
                <p className="text-red-500">{errors.photoURL.message}</p>
              )}

              <label className="fieldset-label font-bold text-slate-600 text-[15px]">
                Password
              </label>
              <input
                {...register("password", { required: "Password is required" })}
                type="password"
                className="input"
                placeholder="Enter your Password"
              />
              {errors.password && (
                <p className="text-red-500">{errors.password.message}</p>
              )}

              <button
                type="submit"
                className="btn text-white bg-[#078f7f] mt-4"
              >
                SignUp
              </button>
            </fieldset>
          </form>
          <div>
            <p className="text-center font-medium text-[18px]">
              Already Registered? Go to{" "}
              <Link to="/login" className="font-bold text-[#078f7f] ">
                Login
              </Link>
              <br />
              <span className="text-[16px]">Or SignUp with</span>
            </p>
            <div className="flex justify-center my-5">
              <p className="flex items-center font-bold text-[16px] gap-2 border px-3 py-1 rounded-3xl btn hover:bg-[#70cac0f8]">
                <FcGoogle></FcGoogle> Google
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
