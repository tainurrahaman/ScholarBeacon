import React, { useEffect, useState } from "react";
import UseAxiosPublic from "../../Hook/UseAxiosPublic";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Shared/Navbar";
import UseAuth from "../../Hook/UseAuth";

const AllScholarships = () => {
  const { loading } = UseAuth();
  const axiosPublic = UseAxiosPublic();
  const navigate = useNavigate();
  const [scholarships, setScholarships] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredScholarships, setFilteredScholarships] = useState([]);
  const [sortBy, setSortBy] = useState("");

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

  const handleSort = () => {
    let sortedScholarships = [...filteredScholarships];
    if (sortBy === "deadline") {
      sortedScholarships.sort(
        (a, b) =>
          new Date(b.application_deadline) - new Date(a.application_deadline)
      );
    } else if (sortBy === "fees") {
      sortedScholarships.sort(
        (a, b) => b.application_fees - a.application_fees
      );
    }
    setFilteredScholarships(sortedScholarships);
  };

  return (
    <div className="all-scholarships-container max-w-7xl mx-auto min-h-screen font-mulish py-14 lg:py-20">
      <Navbar></Navbar>
      <div className="mx-10 mt-10">
        <h2 className="text-2xl font-bold text-start mt-0 md:mt-10 mb-4">
          All Scholarships
        </h2>
        {/* Search and Filter Section */}
        <div className="flex flex-col md:flex-row justify-between gap-2 mb-6 max-w-[350px] md:max-w-3xl lg:max-w-4xl mx-auto">
          <div className="flex justify-between items-center gap-2 sm:gap-5">
            {" "}
            <input
              type="text"
              placeholder="Search by Scholarship Name, University, or Degree..."
              className="border p-2 rounded-lg text-sm sm:text-base w-60 lg:w-80"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button
              onClick={handleSearch}
              className="px-4 py-2 bg-[#59b890] text-white rounded-lg hover:bg-[#3b6b57] "
            >
              Search
            </button>
          </div>
          <div className="flex justify-between items-center gap-2 sm:gap-5">
            <select
              className="border p-2 rounded-lg text-sm sm:text-base w-60 lg:w-80"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="">Sort By</option>
              <option value="deadline">Deadline (Descending)</option>
              <option value="fees">Application Fees (Descending)</option>
            </select>
            <button
              onClick={handleSort}
              className="px-4 py-2 bg-[#59b890] text-white rounded-lg hover:bg-[#3b6b57] w-full ml-2 md:ml-0"
            >
              Filter
            </button>
          </div>
        </div>

        {filteredScholarships?.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-[350px] md:max-w-4xl mx-auto">
            {filteredScholarships.map((scholarship, index) => (
              <div
                key={index}
                className="scholarship-card  p-4 rounded-lg shadow-lg bg-white border border-gray-300 hover:shadow-xl hover:-translate-1 duration-800"
              >
                <div className="flex flex-col justify-evenly gap-2 md:gap-3 lg:gap-5 flex-grow ">
                  <div>
                    <img
                      src={scholarship.university_logo}
                      alt={`${scholarship.university_name} logo`}
                      className="w-24 md:w-32 h-24 md:h-32 mx-auto mb-2 object-center"
                    />
                  </div>
                  <div>
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
                        onClick={() =>
                          navigate(`/scholarships/${scholarship._id}`, {
                            state: { scholarship },
                          })
                        }
                        className="px-4 py-2 w-full btn bg-[#0AA592] border-none text-white rounded-lg hover:bg-slate-800"
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
            {loading}
            <p className="text-lg font-semibold text-gray-600 mt-4">
              Please wait some time
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllScholarships;
