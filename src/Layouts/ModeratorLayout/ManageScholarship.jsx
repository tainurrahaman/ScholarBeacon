import { useEffect, useState } from "react";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";
import UseAxiosPublic from "../../Hook/UseAxiosPublic";

const ManageScholarships = () => {
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
                  <button className="btn btn-info btn-sm">
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
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg w-96">
            <h3 className="text-lg font-bold mb-4">Edit Scholarship</h3>
            <input
              value={selectedScholarship.name}
              onChange={(e) =>
                setSelectedScholarship({
                  ...selectedScholarship,
                  name: e.target.value,
                })
              }
              placeholder="Scholarship Name"
              className="w-full mb-2 p-2 border border-gray-300 rounded"
            />
            <input
              value={selectedScholarship.university}
              onChange={(e) =>
                setSelectedScholarship({
                  ...selectedScholarship,
                  university: e.target.value,
                })
              }
              placeholder="University Name"
              className="w-full mb-2 p-2 border border-gray-300 rounded"
            />
            <input
              value={selectedScholarship.category}
              onChange={(e) =>
                setSelectedScholarship({
                  ...selectedScholarship,
                  category: e.target.value,
                })
              }
              placeholder="Category"
              className="w-full mb-2 p-2 border border-gray-300 rounded"
            />
            <input
              value={selectedScholarship.degree}
              onChange={(e) =>
                setSelectedScholarship({
                  ...selectedScholarship,
                  degree: e.target.value,
                })
              }
              placeholder="Degree"
              className="w-full mb-2 p-2 border border-gray-300 rounded"
            />
            <input
              value={selectedScholarship.fees}
              onChange={(e) =>
                setSelectedScholarship({
                  ...selectedScholarship,
                  fees: e.target.value,
                })
              }
              placeholder="Application Fees"
              className="w-full mb-2 p-2 border border-gray-300 rounded"
            />
            <div className="flex justify-end gap-2 mt-4">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 bg-gray-500 text-white rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleUpdate}
                className="px-4 py-2 bg-blue-500 text-white rounded"
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
