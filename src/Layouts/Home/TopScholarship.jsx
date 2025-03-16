import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UseAxiosPublic from "../../Hook/UseAxiosPublic";

const TopScholarship = () => {
  const axiosPublic = UseAxiosPublic();
  const [scholarships, setScholarships] = useState([]);

  useEffect(() => {
    axiosPublic.get("/scholarships").then((result) => {
      setScholarships(result.data);
    });
  }, []);

  const sortedScholarships = [...scholarships].sort((a, b) => {
    if (a.application_fees !== b.application_fees) {
      return a.application_fees - b.application_fees;
    }
    return new Date(b.post_date) - new Date(a.post_date);
  });

  const topScholarships = sortedScholarships.slice(0, 6);
  const navigate = useNavigate();

  return (
    <div className="py-10 px-5  font-mulish">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-2 md:mb-8 text-gray-800 font-oswald">
        <span className="text-[#0F7771]">Top</span> Scholarships
      </h2>
      <p className="text-lg md:text-2xl font-semibold md:font-bold text-center mb-8 md:mb-12 lg:mb-16 text-gray-800">
        Unlocking Opportunities for Academic Excellence
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-10 lg:px-24">
        {topScholarships.map((scholarship, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-5 border border-gray-200 hover:shadow-xl transition duration-300"
          >
            <img
              src={scholarship.university_logo}
              alt={`${scholarship.university_name} logo`}
              className="w-28 lg:w-40 h-28 lg:h-40 object-contain mx-auto mb-4"
            />
            <h3 className="text-xl lg:font-bold font-semibold text-gray-900 text-center">
              {scholarship.university_name}
            </h3>
            <p className="text-sm lg:text-[16px] text-gray-700 mt-2">
              <strong>Category:</strong> {scholarship.scholarship_category}
            </p>
            <p className="text-sm lg:text-[16px] text-gray-700">
              <strong>Location:</strong> {scholarship.university_city},{" "}
              {scholarship.university_country}
            </p>
            <p className="text-sm lg:text-[16px] text-gray-700">
              <strong>Subject:</strong> {scholarship.subject_name}
            </p>
            <p className="text-sm lg:text-[16px] text-gray-700">
              <strong>Deadline:</strong> {scholarship.application_deadline}
            </p>
            <p className="text-sm lg:text-[16px] text-gray-700">
              <strong>Posted:</strong> {scholarship.post_date}
            </p>
            <p className="text-sm lg:text-[16px] text-gray-700">
              <strong>Application Fees:</strong> ${scholarship.application_fees}
            </p>
            <p className="text-sm lg:text-[16px] text-gray-600 mt-2">
              {scholarship.scholarship_description}
            </p>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-6">
        <Link
          to="/allScholarship"
          className="bg-[#0AA592] font-semibold text-white px-6 py-2 rounded-lg shadow-md hover:bg-slate-800 transition"
        >
          All Scholarships
        </Link>
      </div>
    </div>
  );
};

export default TopScholarship;
