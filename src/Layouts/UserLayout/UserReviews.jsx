import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import UseAxiosPublic from "../../Hook/UseAxiosPublic";
import UseAuth from "../../Hook/UseAuth";

const UserReviews = ({ onDelete, onEdit }) => {
  const { user } = UseAuth();
  const [selectedReview, setSelectedReview] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const axiosPublic = UseAxiosPublic();
  const [formData, setFormData] = useState({});
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axiosPublic.get(`/reviews/r_id/${user.id}`).then((res) => {
      console.log(res.data);
      setReviews(res.data);
    });
  }, []);

  const handleEditClick = (review) => {
    setSelectedReview(review);
    setFormData(review);
    setIsModalOpen(true);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    onEdit(formData);
    setIsModalOpen(false);
    Swal.fire("Success", "Review updated successfully!", "success");
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">My Reviews</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border rounded-lg">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="p-2">Scholarship Name</th>
              <th className="p-2">University Name</th>
              <th className="p-2">Review Comments</th>
              <th className="p-2">Review Date</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {reviews.map((review, index) => (
              <tr key={index} className="border-t">
                <td className="p-2">{review.scholarship_name}</td>
                <td className="p-2">{review.university_name}</td>
                <td className="p-2">{review.review_comments}</td>
                <td className="p-2">{review.review_date}</td>
                <td className="p-2 flex gap-2">
                  <button
                    onClick={() => handleEditClick(review)}
                    className="bg-blue-500 text-white px-2 py-1 rounded"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => onDelete(review.id)}
                    className="bg-red-500 text-white px-2 py-1 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-lg font-bold mb-4">Edit Review</h2>
            <input
              name="scholarshipName"
              value={formData.scholarshipName}
              onChange={handleChange}
              className="w-full p-2 border rounded mb-2"
              placeholder="Scholarship Name"
            />
            <input
              name="universityName"
              value={formData.universityName}
              onChange={handleChange}
              className="w-full p-2 border rounded mb-2"
              placeholder="University Name"
            />
            <textarea
              name="comments"
              value={formData.comments}
              onChange={handleChange}
              className="w-full p-2 border rounded mb-2"
              placeholder="Review Comments"
            />
            <input
              name="date"
              value={formData.date}
              onChange={handleChange}
              type="date"
              className="w-full p-2 border rounded mb-2"
            />
            <button
              onClick={handleSubmit}
              className="bg-green-500 text-white px-4 py-2 rounded"
            >
              Save Changes
            </button>
            <button
              onClick={() => setIsModalOpen(false)}
              className="ml-2 bg-gray-500 text-white px-4 py-2 rounded"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserReviews;
