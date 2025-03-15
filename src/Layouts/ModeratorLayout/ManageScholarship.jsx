import { useEffect, useState } from "react";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";
import UseAxiosPublic from "../../Hook/UseAxiosPublic";
import { useNavigate } from "react-router-dom";

const ManageScholarships = () => {
  const navigate = useNavigate();
  const axiosPublic = UseAxiosPublic();
  const [scholarships, setScholarships] = useState([]);
  const [selectedScholarship, setSelectedScholarship] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    axiosPublic.get("/scholarships").then((res) => {
      setScholarships(res.data);
    });
  }, []);

  const handleEdit = (scholarship) => {
    setSelectedScholarship(scholarship);
    setIsModalOpen(true);
  };

  const handleDelete = (id) => {
    setScholarships(
      scholarships.filter((scholarship) => scholarship.id !== id)
    );
    alert("Scholarship deleted successfully!");
  };

  const handleUpdate = () => {
    setScholarships((prev) =>
      prev.map((scholarship) =>
        scholarship.id === selectedScholarship.id
          ? selectedScholarship
          : scholarship
      )
    );
    setIsModalOpen(false);
    alert("Scholarship updated successfully!");
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Manage Scholarships</h2>
      <div className="overflow-x-auto">
        <table className="table w-full border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th>Name</th>
              <th>University</th>
              <th>Category</th>
              <th>Degree</th>
              <th>Fees</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {scholarships.map((scholarship) => (
              <tr key={scholarship._id} className="border-b">
                <td>{scholarship.scholarship_name}</td>
                <td>{scholarship.university_name}</td>
                <td>{scholarship.scholarship_category}</td>
                <td>{scholarship.degree}</td>
                <td>${scholarship.application_fees}</td>
                <td className="flex gap-2">
                  <button
                    onClick={() => {
                      navigate(`/scholarships/${scholarship._id}`, {
                        state: { scholarship },
                      });
                    }}
                    className="btn btn-info btn-sm"
                  >
                    <FaEye />
                  </button>
                  <button
                    onClick={() => handleEdit(scholarship)}
                    className="btn btn-warning btn-sm"
                  >
                    <FaEdit />
                  </button>
                  <button
                    onClick={() => handleDelete(scholarship.id)}
                    className="btn btn-error btn-sm"
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-start justify-center bg-black bg-opacity-50 p-4">
          <div className="bg-white p-6 rounded-lg w-full max-w-md md:max-w-2xl lg:max-w-3xl my-10">
            <h3 className="text-xl font-bold mb-4">Edit Scholarship</h3>

            {/* Responsive Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <label className="font-bold">University Name</label>
                <input
                  value={selectedScholarship.university_name}
                  onChange={(e) =>
                    setSelectedScholarship({
                      ...selectedScholarship,
                      university_name: e.target.value,
                    })
                  }
                  placeholder="University Name"
                  className="w-full p-2 border border-gray-300 rounded text-sm"
                />
              </div>
              <div>
                <label className="font-bold">Scholarship Category</label>
                <input
                  value={selectedScholarship.scholarship_category}
                  onChange={(e) =>
                    setSelectedScholarship({
                      ...selectedScholarship,
                      scholarship_category: e.target.value,
                    })
                  }
                  placeholder="Category"
                  className="w-full p-2 border border-gray-300 rounded text-sm"
                />
              </div>
              <div>
                <label className="font-bold">Required Degree</label>
                <input
                  value={selectedScholarship.degree}
                  onChange={(e) =>
                    setSelectedScholarship({
                      ...selectedScholarship,
                      degree: e.target.value,
                    })
                  }
                  placeholder="Degree"
                  className="w-full p-2 border border-gray-300 rounded text-sm"
                />
              </div>
              <div>
                <label className="font-bold">Application Fees</label>
                <input
                  value={`$${selectedScholarship.application_fees}`}
                  onChange={(e) =>
                    setSelectedScholarship({
                      ...selectedScholarship,
                      application_fees: e.target.value,
                    })
                  }
                  placeholder="Application Fees"
                  className="w-full p-2 border border-gray-300 rounded text-sm"
                />
              </div>
              <div>
                <label className="font-bold">Service Charge</label>
                <input
                  value={selectedScholarship.service_charge}
                  onChange={(e) =>
                    setSelectedScholarship({
                      ...selectedScholarship,
                      service_charge: e.target.value,
                    })
                  }
                  placeholder="Service Charge"
                  className="w-full p-2 border border-gray-300 rounded text-sm"
                />
              </div>
              <div>
                <label className="font-bold">Post Date</label>
                <input
                  type="date"
                  value={selectedScholarship.post_date}
                  onChange={(e) =>
                    setSelectedScholarship({
                      ...selectedScholarship,
                      post_date: e.target.value,
                    })
                  }
                  className="w-full p-2 border border-gray-300 rounded text-sm"
                />
              </div>
              <div>
                <label className="font-bold">Stipend</label>
                <input
                  value={selectedScholarship.stipend}
                  onChange={(e) =>
                    setSelectedScholarship({
                      ...selectedScholarship,
                      stipend: e.target.value,
                    })
                  }
                  placeholder="Stipend"
                  className="w-full p-2 border border-gray-300 rounded text-sm"
                />
              </div>
              <div>
                <label className="font-bold">University Logo</label>
                <input
                  type="file"
                  onChange={(e) =>
                    setSelectedScholarship({
                      ...selectedScholarship,
                      university_logo: e.target.files[0],
                    })
                  }
                  className="w-full p-2 border border-gray-300 rounded text-sm"
                />
              </div>
              <div>
                <label className="font-bold">Subject Name</label>
                <input
                  value={selectedScholarship.subject_name}
                  onChange={(e) =>
                    setSelectedScholarship({
                      ...selectedScholarship,
                      subject_name: e.target.value,
                    })
                  }
                  placeholder="Subject Name"
                  className="w-full p-2 border border-gray-300 rounded text-sm"
                />
              </div>
              <div>
                <label className="font-bold">Application Deadline</label>
                <input
                  type="date"
                  value={selectedScholarship.application_deadline}
                  onChange={(e) =>
                    setSelectedScholarship({
                      ...selectedScholarship,
                      application_deadline: e.target.value,
                    })
                  }
                  className="w-full p-2 border border-gray-300 rounded text-sm"
                />
              </div>
              <div>
                <label className="font-bold">University City</label>
                <input
                  value={selectedScholarship.university_city}
                  onChange={(e) =>
                    setSelectedScholarship({
                      ...selectedScholarship,
                      university_city: e.target.value,
                    })
                  }
                  placeholder="University City"
                  className="w-full p-2 border border-gray-300 rounded text-sm"
                />
              </div>
              <div>
                <label className="font-bold">University Country</label>
                <input
                  value={selectedScholarship.university_country}
                  onChange={(e) =>
                    setSelectedScholarship({
                      ...selectedScholarship,
                      university_country: e.target.value,
                    })
                  }
                  placeholder="University Country"
                  className="w-full p-2 border border-gray-300 rounded text-sm"
                />
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col md:flex-row justify-end gap-2 mt-4">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 bg-gray-500 text-white rounded w-full md:w-auto"
              >
                Cancel
              </button>
              <button
                onClick={handleUpdate}
                className="px-4 py-2 bg-blue-500 text-white rounded w-full md:w-auto"
              >
                Update
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageScholarships;
