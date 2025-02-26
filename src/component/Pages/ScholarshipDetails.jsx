import { useLocation, useNavigate } from "react-router-dom";
import AllReviews from "./Allreview";
import { useEffect, useState } from "react";
import UseAxiosPublic from "../../Hook/UseAxiosPublic";
import UseAuth from "../../Hook/UseAuth";

const ScholarshipDetails = () => {
  const { user } = UseAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [reviews, setReviews] = useState([]);
  const { scholarship } = location.state || {};

  const axiosPublic = UseAxiosPublic();

  useEffect(() => {
    axiosPublic.get(`/reviews/${scholarship._id}`).then((result) => {
      console.log(result.data);
      setReviews(result.data);
    });
  }, []);

  if (!scholarship) {
    return (
      <div className="text-center mt-20">
        <h2 className="text-2xl font-bold text-gray-700">
          Scholarship Not Found
        </h2>
        <button
          onClick={() => navigate("/")}
          className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Go Back Home
        </button>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-3xl">
        {/* University Logo */}
        <div className="flex items-center space-x-4">
          <img
            src={scholarship.university_logo}
            alt={`${scholarship.university_name} logo`}
            className="w-16 h-16 rounded-full shadow-md"
          />
          <h2 className="text-2xl font-bold text-gray-800">
            {scholarship.university_name}
          </h2>
        </div>

        {/* Scholarship Details */}
        <div className="mt-4 text-gray-700">
          <p>
            <strong>📍 Location:</strong> {scholarship.university_city},{" "}
            {scholarship.university_country}
          </p>
          <p>
            <strong>📚 Category:</strong> {scholarship.scholarship_category}
          </p>
          <p>
            <strong>🎓 Subject:</strong> {scholarship.subject_name}
          </p>
          <p>
            <strong>📅 Deadline:</strong> {scholarship.application_deadline}
          </p>
          <p>
            <strong>📝 Post Date:</strong> {scholarship.post_date}
          </p>
          <p>
            <strong>💰 Stipend:</strong>{" "}
            {scholarship.stipend || "Not available"}
          </p>
          <p>
            <strong>💸 Service Charge:</strong> ${scholarship.service_charge}
          </p>
          <p>
            <strong>💵 Application Fees:</strong> $
            {scholarship.application_fees}
          </p>
          <p className="mt-4">
            <strong>📄 Description:</strong>{" "}
            {scholarship.scholarship_description}
          </p>
        </div>

        {/* Apply Button */}
        <div className="mt-6 text-center">
          {user.role === "user" ? (
            <button
              onClick={() => {
                navigate(`/payment`, {
                  state: { scholarship },
                });
              }}
              className="px-6 py-3 bg-green-500 text-white text-lg font-semibold rounded-lg hover:bg-green-600"
            >
              Apply for Scholarship
            </button>
          ) : (
            ""
          )}
        </div>
        <AllReviews reviews={reviews}></AllReviews>
      </div>
    </div>
  );
};

export default ScholarshipDetails;
