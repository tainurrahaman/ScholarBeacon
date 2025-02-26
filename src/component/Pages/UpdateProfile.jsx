import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import UseAuth from "../../Hook/UseAuth";
import Navbar from "../../Shared/Navbar";
import UseAxiosPublic from "../../Hook/UseAxiosPublic";
import useTanQuery from "../../Hook/UseTanQuery";
import Swal from "sweetalert2";

const UpdateProfile = () => {
  const { updateUserProfile, user } = UseAuth();
  const navigate = useNavigate();
  const axiosPublic = UseAxiosPublic();
  const [, refetch] = useTanQuery();

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get("name");
    const photo = form.get("photo");

    updateUserProfile(name, photo)
      .then(() => {
        const updatedInfo = {
          email: user?.email,
          name: name,
          photo: photo,
        };
        axiosPublic.patch("/users", updatedInfo).then((res) => {
          console.log(res.data);
          if (res.data.modifiedCount > 0) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Your profile updated successfully",
              showConfirmButton: false,
              timer: 1500,
            });
            refetch();
            navigate(`/`);
          }
        });
      })
      .catch((err) => {
        toast(err.message);
      });
  };

  return (
    <div>
      <Navbar></Navbar>
      <div className="flex flex-col justify-center items-center my-5 w-10/12 mx-auto">
        <div className=" border-2 border-gray-400 p-5 md:p-10 rounded-lg mt-10">
          <h2 className="text-3xl md:text-4xl font-bebasNueue text-center mb-5 md:mb-10">
            Update Profile
          </h2>
          <form onSubmit={handleUpdate}>
            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Name
              </label>
              <input
                name="name"
                type="text"
                placeholder="Enter your name"
                className="input input-bordered w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Photo
              </label>
              <input
                name="photo"
                type="text"
                placeholder="Enter your photo URL"
                className="input input-bordered w-full"
              />
            </div>
            <button className="btn bg-[#009286] rounded-md w-full mb-4 text-white">
              Update Profile
            </button>
          </form>
        </div>
        <ToastContainer></ToastContainer>
      </div>
    </div>
  );
};

export default UpdateProfile;
