import React, { useEffect, useState } from "react";
import { FaInfoCircle, FaCommentAlt, FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import UseAxiosPublic from "../../Hook/UseAxiosPublic";

const AllappliedScholarship = () => {
  const [applications, setApplications] = useState([]);
  const axiosPublic = UseAxiosPublic();
  const [modalData, setModalData] = useState(null);
  const [feedback, setFeedback] = useState("");
  const [activeApplication, setActiveApplication] = useState(null);

  useEffect(() => {
    axiosPublic.get("/applications").then((res) => {
      setApplications(res.data);
    });
  }, []);

  const handleDetailsClick = (application) => {
    setModalData(application);
  };

  const handleFeedbackSubmit = () => {
    if (feedback.trim()) {
      // Update the feedback for the specific application
      setApplications((prev) =>
        prev.map((app) =>
          app.id === activeApplication.id ? { ...app, feedback } : app
        )
      );
      Swal.fire({
        icon: "success",
        title: "Feedback Submitted",
        text: "The feedback has been successfully submitted!",
      });
      setFeedback("");
    } else {
      Swal.fire({
        icon: "error",
        title: "Feedback is Required",
        text: "Please provide feedback before submitting.",
      });
    }
  };

  const handleCancelClick = (applicationId) => {
    setApplications((prev) =>
      prev.map((app) =>
        app.id === applicationId ? { ...app, status: "Rejected" } : app
      )
    );
  };

  return (
    <div className="overflow-x-auto shadow-md sm:rounded-lg">
      <table className="min-w-full text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3">
              Scholarship Name
            </th>
            <th scope="col" className="px-6 py-3">
              Status
            </th>
            <th scope="col" className="px-6 py-3">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {applications.map((application) => (
            <tr
              key={application._id}
              className="bg-white border-b hover:bg-gray-50"
            >
              <td className="px-6 py-4 font-medium text-gray-900">
                {application.scholarship_name}
              </td>
              <td className="px-6 py-4">
                <span
                  className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                    application.status === "Pending"
                      ? "bg-yellow-100 text-yellow-800"
                      : application.status === "Processing"
                      ? "bg-blue-100 text-blue-800"
                      : "bg-green-100 text-green-800"
                  }`}
                >
                  {application.status}
                </span>
              </td>
              <td className="px-6 py-4">
                <button
                  className="text-blue-600 hover:text-blue-900 mr-2"
                  onClick={() => handleDetailsClick(application)}
                  title="Details"
                >
                  <FaInfoCircle />
                </button>
                <button
                  className="text-gray-600 hover:text-gray-900 mr-2"
                  onClick={() => {
                    setActiveApplication(application);
                  }}
                  title="Feedback"
                >
                  <FaCommentAlt />
                </button>
                <button
                  className="text-red-600 hover:text-red-900"
                  onClick={() => handleCancelClick(application.id)}
                  title="Cancel"
                >
                  <FaTrashAlt />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal for Details */}
      {modalData && (
        <div className="fixed inset-0 z-50 flex justify-center items-center bg-gray-700 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg w-96">
            <h2 className="text-xl font-semibold mb-4">Application Details</h2>
            <p>
              <strong>University:</strong> {modalData.university}
            </p>
            <p>
              <strong>Degree:</strong> {modalData.degree}
            </p>
            <p>
              <strong>Scholarship Category:</strong> {modalData.category}
            </p>
            <button
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
              onClick={() => setModalData(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Modal for Feedback */}
      {activeApplication && (
        <div className="fixed inset-0 z-50 flex justify-center items-center bg-gray-700 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg w-96">
            <h2 className="text-xl font-semibold mb-4">Provide Feedback</h2>
            <textarea
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              className="w-full p-2 border rounded mb-4"
              placeholder="Enter feedback"
            />
            <button
              className="px-4 py-2 bg-blue-600 text-white rounded mr-2"
              onClick={handleFeedbackSubmit}
            >
              Submit Feedback
            </button>
            <button
              className="px-4 py-2 bg-gray-600 text-white rounded"
              onClick={() => setActiveApplication(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllappliedScholarship;
