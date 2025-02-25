// import { FcGoogle } from "react-icons/fc";
// import UseAuth from "../Hook/UseAuth";
// import { useNavigate } from "react-router-dom";

// const SocialLogin = () => {
//   const { signInwithGoogle } = UseAuth();
//   const navigate = useNavigate();

//   const loginWithGoogle = () => {
//     signInwithGoogle()
//       .then((result) => {
//         console.log(result.user);
//         navigate("/");
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   return (
//     <div className="flex justify-center my-5">
//       <button
//         onClick={loginWithGoogle}
//         className="flex items-center font-bold text-[16px] gap-2 border px-3 py-1 rounded-3xl btn hover:bg-[#70cac0f8]"
//       >
//         <FcGoogle></FcGoogle> Google
//       </button>
//     </div>
//   );
// };

// export default SocialLogin;

import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import UseAuth from "../Hook/UseAuth";

const SocialLogin = () => {
  const { signInwithGoogle } = UseAuth();
  const navigate = useNavigate();

  const loginWithGoogle = async () => {
    try {
      const result = await signInwithGoogle();
      console.log(result.user);
      navigate("/"); // Navigate to the homepage after successful login
    } catch (error) {
      console.error(error);
      // alert("Failed to log in with Google. Please try again.");
    }
  };

  return (
    <div className="flex justify-center my-5">
      <button
        onClick={loginWithGoogle}
        className="flex items-center font-bold text-[16px] gap-2 border px-3 py-1 rounded-3xl btn hover:bg-[#70cac0f8]"
        aria-label="Sign in with Google"
      >
        <FcGoogle /> Google
      </button>
    </div>
  );
};

export default SocialLogin;
