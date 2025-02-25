import React, { useEffect, useState } from "react";
import UseAxiosPublic from "../../Hook/UseAxiosPublic";
import { FaStar } from "react-icons/fa";

const AllReview = () => {
  const axiosPublic = UseAxiosPublic();
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    axiosPublic.get("/reviews").then((res) => {
      console.log(res.data);
      setReviews(res.data);
    });
  }, []);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this review?")) {
      setReviews(reviews.filter((review) => review.id !== id));
      alert("Review deleted successfully!");
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">All Reviews</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {reviews.map((review) => (
          <div key={review._id} className="p-4 shadow-lg rounded-lg border">
            <div className="flex items-center gap-4">
              <img
                src={review.reviewerImage}
                alt={review.reviewerName}
                className="w-12 h-12 rounded-full border"
              />
              <div>
                <h3 className="font-semibold">{review.reviewerName}</h3>
                <p className="text-sm text-gray-500">{review.review_date}</p>
              </div>
            </div>
            <div className="mt-3">
              <h4 className="font-semibold">{review.university}</h4>
              <p className="text-sm text-gray-600">{review.subject}</p>
            </div>
            <div className="flex items-center gap-1 mt-2 text-yellow-500">
              <FaStar size={16} /> <span>{review.rating_point}</span>
            </div>
            <p className="text-sm mt-2">{review.reviewer_comments}</p>
            <button
              className="mt-4 w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600"
              onClick={() => handleDelete(review.id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllReview;
