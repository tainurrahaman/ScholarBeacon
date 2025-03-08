import React, { useEffect, useState } from "react";
import UseAxiosPublic from "../../Hook/UseAxiosPublic";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Shared/Navbar";

const AllScholarships = () => {
  const axiosPublic = UseAxiosPublic();
  const navigate = useNavigate();
  const [scholarships, setScholarships] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredScholarships, setFilteredScholarships] = useState([]);

  useEffect(() => {
    axiosPublic.get("/scholarships").then((result) => {
      setScholarships(result.data);
      setFilteredScholarships(result.data);
    });
  }, []);

  const handleSearch = () => {
    const lowerCaseTerm = searchTerm.toLowerCase();

    const filtered = scholarships.filter(
      (scholarship) =>
        scholarship.university_name.toLowerCase().includes(lowerCaseTerm) ||
        scholarship.scholarship_category
          .toLowerCase()
          .includes(lowerCaseTerm) ||
        scholarship.subject_name.toLowerCase().includes(lowerCaseTerm)
    );

    setFilteredScholarships(filtered);
  };

  return (
    <div className="all-scholarships-container max-w-7xl mx-auto font-mulish">
      <Navbar></Navbar>
      <h2 className="text-2xl font-bold text-start mt-0 md:mt-10 mb-4">
        All Scholarships
      </h2>

      {/* Search Box */}
      <div className="flex justify-start mb-6">
        <input
          type="text"
          placeholder="Search by Scholarship Name, University, or Degree..."
          className="border p-2 rounded-lg w-96"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          onClick={handleSearch}
          className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Search
        </button>
      </div>

      {filteredScholarships.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredScholarships.map((scholarship, index) => (
            <div
              key={index}
              className="scholarship-card border p-4 rounded-lg shadow-lg"
            >
              <div className="flex justify-evenly gap-5">
                {" "}
                <div>
                  {" "}
                  <img
                    src={scholarship.university_logo}
                    alt={`${scholarship.university_name} logo`}
                    className="w-20 md:w-28 h-20 md:h-28 mx-auto mb-2"
                  />
                </div>
                <div>
                  {" "}
                  <h3 className="text-lg font-semibold text-start">
                    {scholarship.university_name}
                  </h3>
                  <p className="text-sm text-gray-700 text-start">
                    <strong>Category:</strong>{" "}
                    {scholarship.scholarship_category}
                  </p>
                  <p className="text-sm text-gray-700 text-start">
                    <strong>Degree:</strong> {scholarship.subject_name}
                  </p>
                  <p className="text-sm text-gray-700 text-start">
                    <strong>Location:</strong> {scholarship.university_city},{" "}
                    {scholarship.university_country}
                  </p>
                  <p className="text-sm text-gray-700 text-start">
                    <strong>Deadline:</strong>{" "}
                    {scholarship.application_deadline}
                  </p>
                  <p className="text-sm text-gray-700 text-start">
                    <strong>Application Fees:</strong> $
                    {scholarship.application_fees}
                  </p>
                  <p className="text-sm text-gray-700 text-start">
                    <strong>Posted:</strong> {scholarship.post_date}
                  </p>
                  <div className="text-center w-full mt-3">
                    <button
                      onClick={() => {
                        navigate(`/scholarships/${scholarship._id}`, {
                          state: { scholarship },
                        });
                      }}
                      className="px-4 py-2 w-full btn btn-success border-none text-white rounded-lg hover:bg-slate-800"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center mt-6">
          <img
            src="https://example.com/no-scholarship.png"
            alt="No Scholarships"
            className="w-48 mx-auto"
          />
          <p className="text-lg font-semibold text-gray-600 mt-4">
            No scholarships available. Try a different search!
          </p>
        </div>
      )}
    </div>
  );
};

export default AllScholarships;
