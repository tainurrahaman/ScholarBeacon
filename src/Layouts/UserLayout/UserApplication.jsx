import { useEffect, useState } from "react";
import { FaEye, FaEdit, FaTimes, FaStar } from "react-icons/fa";
import Swal from "sweetalert2";
import UseAxiosPublic from "../../Hook/UseAxiosPublic";
import UseAuth from "../../Hook/UseAuth";
import { Link } from "react-router-dom";

const AppliedScholarships = () => {
  const { user } = UseAuth();
  const axiosPublic = UseAxiosPublic();
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    axiosPublic.get(`/applications/${user.id}`).then((res) => {
      setApplications(res.data);
      console.log(res.data);
    });
  }, []);

  const handleEdit = (status) => {
    if (status !== "pending") {
      Swal.fire({
        icon: "warning",
        title: "Cannot Edit",
        text: "You cannot edit an application that is processing or completed.",
      });
    } else {
      Swal.fire({
        icon: "success",
        title: "Edit Mode",
        text: "You can now edit this application.",
      });
    }
  };

  const handleApplicationCancel = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosPublic.delete(`/applications/${id}`).then((result) => {
          console.log(result);
          if (result.data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Your application has been deleted.",
              icon: "success",
            });
          }

          const remain = applications.filter((app) => app._id !== id);
          setApplications(remain);
        });
      }
    });
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">My Applied Scholarships</h2>
      <div className="overflow-x-auto">
        <table className="w-full table-auto border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">University Name</th>
              <th className="border p-2">Address</th>
              <th className="border p-2">Feedback</th>
              <th className="border p-2">Category</th>
              <th className="border p-2">Degree</th>
              <th className="border p-2">Fees</th>
              <th className="border p-2">Service Charge</th>
              <th className="border p-2">Status</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((app) => (
              <tr key={app._id} className="text-center border">
                <td className="border p-2">{app.university_name}</td>
                <td className="border p-2">{app.university_address}</td>
                <td className="border p-2">{app.application_feedback}</td>

                <td className="border p-2">{app.subject_category}</td>
                <td className="border p-2">{app.applicant_applying_degree}</td>
                <td className="border p-2">{app.application_fees}</td>
                <td className="border p-2">{app.service_charge}</td>
                <td
                  className={`border p-2 font-semibold ${
                    app.status === "pending"
                      ? "text-yellow-500"
                      : app.status === "processing"
                      ? "text-blue-500"
                      : app.status === "completed"
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {app.application_status}
                </td>
                <td className=" p-2 flex justify-center items-center gap-2">
                  <div className="relative group">
                    {" "}
                    <Link
                      to={`/allScholarship`}
                      className="bg-blue-500 text-white px-3 py-1 rounded flex items-center btn"
                    >
                      <FaEye />
                    </Link>
                    <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-1 opacity-0 group-hover:opacity-100 bg-gray-800 text-white text-xs rounded py-1 px-2 transition-opacity">
                      Details
                    </span>
                  </div>
                  <div className="relative group">
                    {" "}
                    <button
                      className="bg-green-500 btn text-white px-3 py-1 rounded flex items-center gap-1"
                      onClick={() => handleEdit(app.status)}
                    >
                      <FaEdit />
                    </button>
                    <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-1 opacity-0 group-hover:opacity-100 bg-gray-800 text-white text-xs rounded py-1 px-2 transition-opacity">
                      Edit
                    </span>
                  </div>
                  <div className="relative group">
                    {" "}
                    <button
                      className="bg-red-500 btn text-white px-3 py-1 rounded flex items-center gap-1"
                      onClick={() => handleApplicationCancel(app._id)}
                    >
                      <FaTimes />
                    </button>
                    <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-1 opacity-0 group-hover:opacity-100 bg-gray-800 text-white text-xs rounded py-1 px-2 transition-opacity">
                      Cancel
                    </span>
                  </div>
                  <div className="relative group">
                    <button className="bg-yellow-500 btn text-white px-3 py-1 rounded flex items-center gap-1">
                      <FaStar />
                    </button>
                    <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-1 opacity-0 group-hover:opacity-100 bg-gray-800 text-white text-xs rounded py-1 px-2 transition-opacity">
                      Review
                    </span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AppliedScholarships;
