import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import UseAuth from "../Hook/UseAuth";
import UseAxiosPublic from "../Hook/UseAxiosPublic";
import Swal from "sweetalert2";
import { toast, ToastContainer } from "react-toastify";

const SocialLogin = () => {
  const { loginWithGoogle, setUser, updateUserProfile } = UseAuth();
  const axiosPublic = UseAxiosPublic();
  const navigate = useNavigate();

  const handleloginWithGoogle = () => {
    loginWithGoogle()
      .then((result) => {
        updateUserProfile(result.user.name, result.user.photo).then(() => {
          const userInfo = {
            name: result.user.displayName,
            email: result.user.email,
            image: result.user.photoURL,
            role: "user",
          };
          axiosPublic.post("/users", userInfo).then((res) => {
            if (res.data.insertedId) {
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Registration Successful",
                showConfirmButton: false,
                timer: 1500,
              });
              navigate("/");
            }
          });
        });
      })
      .catch((error) => {
        toast(error.message);
      });
  };

  return (
    <div className="flex justify-center my-5">
      <Link
        onClick={handleloginWithGoogle}
        className="flex items-center font-bold text-[16px] gap-2 border px-3 py-1 rounded-3xl btn hover:bg-[#70cac0f8]"
        aria-label="Sign in with Google"
      >
        <FcGoogle /> Google
      </Link>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default SocialLogin;
