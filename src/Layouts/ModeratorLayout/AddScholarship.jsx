import React, { useState } from "react";

const AddScholarship = () => {
  const [formData, setFormData] = useState({
    scholarshipName: "",
    universityName: "",
    universityLogo: "",
    universityCountry: "",
    universityCity: "",
    universityWorldRank: "",
    subjectCategory: "Agriculture",
    scholarshipCategory: "Full fund",
    degree: "Diploma",
    tuitionFees: "",
    applicationFees: "",
    serviceCharge: "",
    applicationDeadline: "",
    scholarshipPostDate: "",
    postedUserEmail: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prevData) => ({
        ...prevData,
        universityLogo: URL.createObjectURL(file),
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="max-w-7xl mx-auto p-6 bg-white rounded-lg shadow-xl">
      <h2 className="text-3xl font-semibold text-center mb-6 text-blue-600">
        Add Scholarship
      </h2>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 sm:grid-cols-2 gap-6"
      >
        {/* Left Column */}
        <div className="space-y-4">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Scholarship Name
            </label>
            <input
              type="text"
              name="scholarshipName"
              value={formData.scholarshipName}
              onChange={handleInputChange}
              className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              University Name
            </label>
            <input
              type="text"
              name="universityName"
              value={formData.universityName}
              onChange={handleInputChange}
              className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              University Country
            </label>
            <input
              type="text"
              name="universityCountry"
              value={formData.universityCountry}
              onChange={handleInputChange}
              className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              University City
            </label>
            <input
              type="text"
              name="universityCity"
              value={formData.universityCity}
              onChange={handleInputChange}
              className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              University World Rank
            </label>
            <input
              type="text"
              name="universityWorldRank"
              value={formData.universityWorldRank}
              onChange={handleInputChange}
              className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-4">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Subject Category
            </label>
            <select
              name="subjectCategory"
              value={formData.subjectCategory}
              onChange={handleInputChange}
              className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="Agriculture">Agriculture</option>
              <option value="Engineering">Engineering</option>
              <option value="Doctor">Doctor</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Scholarship Category
            </label>
            <select
              name="scholarshipCategory"
              value={formData.scholarshipCategory}
              onChange={handleInputChange}
              className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="Full fund">Full fund</option>
              <option value="Partial">Partial</option>
              <option value="Self-fund">Self-fund</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Degree
            </label>
            <select
              name="degree"
              value={formData.degree}
              onChange={handleInputChange}
              className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="Diploma">Diploma</option>
              <option value="Bachelor">Bachelor</option>
              <option value="Masters">Masters</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Application Fees
            </label>
            <input
              type="text"
              name="applicationFees"
              value={formData.applicationFees}
              onChange={handleInputChange}
              className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Application Deadline
            </label>
            <input
              type="date"
              name="applicationDeadline"
              value={formData.applicationDeadline}
              onChange={handleInputChange}
              className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Full Width Fields */}
        <div className="col-span-2 space-y-4">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              University Logo
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {formData.universityLogo && (
              <img
                src={formData.universityLogo}
                alt="University Logo"
                className="mt-4 w-32 h-32 object-cover mx-auto rounded-lg"
              />
            )}
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Tuition Fees
            </label>
            <input
              type="text"
              name="tuitionFees"
              value={formData.tuitionFees}
              onChange={handleInputChange}
              className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Service Charge
            </label>
            <input
              type="text"
              name="serviceCharge"
              value={formData.serviceCharge}
              onChange={handleInputChange}
              className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Scholarship Post Date
            </label>
            <input
              type="date"
              name="scholarshipPostDate"
              value={formData.scholarshipPostDate}
              onChange={handleInputChange}
              className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Posted User Email
            </label>
            <input
              type="email"
              name="postedUserEmail"
              value={formData.postedUserEmail}
              onChange={handleInputChange}
              className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="col-span-2 mt-6">
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
          >
            Add Scholarship
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddScholarship;
