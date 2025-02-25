import React, { useEffect, useState } from "react";
import Swal from "sweetalert2"; // Import SweetAlert2
import UseAxiosPublic from "../../Hook/UseAxiosPublic";
import UseAuth from "../../Hook/UseAuth";

const UserApplications = () => {
  const [showReviewModal, setShowReviewModal] = useState(false);
  const axiosPublic = UseAxiosPublic();
  const { user } = UseAuth();
  const [applications, setApplications] = useState([]);
  const [selectedApplication, setSelectedApplication] = useState(null);
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");

  useEffect(() => {
    axiosPublic.get(`/applications/${user.id}`).then((res) => {
      setApplications(res.data);
    });
  }, []);

  const handleEdit = (status) => {
    if (status !== "pending") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "You cannot edit this application as it is not pending.",
      });
    } else {
      // Handle Edit (Show form to edit the application)
      alert("Edit functionality goes here!");
    }
  };

  const handleCancel = (id) => {
    // Call API or perform logic to cancel application
    alert(`Application with ID ${id} has been canceled.`);
  };

  const handleAddReview = (application) => {
    setSelectedApplication(application);
    setShowReviewModal(true);
  };

  const handleSubmitReview = () => {
    // Submit review (API call logic)
    console.log({
      scholarshipName: selectedApplication.scholarshipName,
      universityName: selectedApplication.universityName,
      universityId: selectedApplication.universityId,
      userName: selectedApplication.userName,
      userEmail: selectedApplication.userEmail,
      rating,
      review,
      reviewDate: new Date(),
    });
    setShowReviewModal(false); // Close the modal after submission
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">My Applications</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>University Name</th>
              <th>University Address</th>
              <th>Application Feedback</th>
              <th>Subject Name</th>
              <th>Applied Degree</th>
              <th>Application Fees</th>
              <th>Service Charge</th>
              <th>Application Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((app) => (
              <tr key={app._id}>
                <td>{app.university_name}</td>
                <td>{app.universityAddress}</td>
                <td>{app.feedback}</td>
                <td>{app.subject_name}</td>
                <td>{app.appliedDegree}</td>
                <td>{app.applicationFees}</td>
                <td>{app.serviceCharge}</td>
                <td>{app.status}</td>
                <td>
                  <button
                    className="btn btn-primary mr-2"
                    onClick={() => alert("Details")}
                  >
                    Details
                  </button>
                  <button
                    className="btn btn-secondary mr-2"
                    onClick={() => handleEdit(app.status)}
                    disabled={app.status !== "pending"}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger mr-2"
                    onClick={() => handleCancel(app.id)}
                  >
                    Cancel
                  </button>
                  <button
                    className="btn btn-info"
                    onClick={() => handleAddReview(app)}
                  >
                    Add Review
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showReviewModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-lg font-semibold mb-4">Add Review</h3>
            <div>
              <label className="block mb-2">Rating:</label>
              <input
                type="number"
                min="1"
                max="5"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
                className="input input-bordered w-full mb-4"
              />
            </div>
            <div>
              <label className="block mb-2">Review:</label>
              <textarea
                value={review}
                onChange={(e) => setReview(e.target.value)}
                className="textarea textarea-bordered w-full mb-4"
              ></textarea>
            </div>
            <div className="flex justify-end">
              <button
                onClick={handleSubmitReview}
                className="btn btn-primary mr-2"
              >
                Submit
              </button>
              <button
                onClick={() => setShowReviewModal(false)}
                className="btn btn-secondary"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserApplications;
