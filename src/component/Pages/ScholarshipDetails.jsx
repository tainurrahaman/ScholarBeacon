import { useLocation, useNavigate } from "react-router-dom";
import AllReviews from "./Allreview";
import { useEffect, useState } from "react";
import UseAxiosPublic from "../../Hook/UseAxiosPublic";
import UseAuth from "../../Hook/UseAuth";
import Navbar from "../../Shared/Navbar";

const ScholarshipDetails = () => {
  const { user } = UseAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [reviews, setReviews] = useState([]);
  const { scholarship } = location.state || {};
  const axiosPublic = UseAxiosPublic();
  console.log(scholarship);

  useEffect(() => {
    if (scholarship) {
      axiosPublic.get(`/reviews/${scholarship._id}`).then((result) => {
        setReviews(result.data);
      });
    }
  }, [scholarship, axiosPublic]);

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
    <div>
      <Navbar></Navbar>
      <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4 sm:p-6">
        <div className="bg-white shadow-lg rounded-lg p-4 sm:p-6 w-full max-w-3xl">
          {/* University Logo and Details */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            {/* University Logo */}
            <div className="w-full sm:w-2/5 flex flex-col items-center sm:items-start">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 text-center sm:text-left">
                {scholarship.university_name}
              </h2>
              <div className="flex justify-center sm:justify-start p-4">
                <img
                  src={scholarship.university_logo}
                  alt={`${scholarship.university_name} logo`}
                  className="w-24 h-24 sm:w-36 sm:h-36 object-cover"
                />
              </div>
            </div>

            {/* Scholarship Details */}
            <div className="w-full sm:w-3/5 space-y-2 sm:space-y-3 text-gray-700">
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
                <strong>💰 Stipend:</strong> $
                {scholarship.stipend || "Not available"}
              </p>
              <p>
                <strong>💸 Service Charge:</strong> $
                {scholarship.service_charge}
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
          </div>

          {/* Apply Button */}
          <div className="mt-6 text-center flex justify-end">
            {user?.role === "user" ? (
              <button
                onClick={() => {
                  navigate(`/payment`, {
                    state: { scholarship },
                  });
                }}
                className="px-4 py-2 w-full md:w-3/5 bg-[#9CDBFF] text-black text-lg font-semibold rounded-lg hover:bg-slate-800 hover:text-white"
              >
                Apply for Scholarship
              </button>
            ) : (
              ""
            )}
          </div>

          {/* Reviews Section */}
          <AllReviews reviews={reviews}></AllReviews>
        </div>
      </div>
    </div>
  );
};

export default ScholarshipDetails;
