import React from "react";

const ReviewCard = ({ review }) => {
  return (
    <div className="review-card border p-4 rounded-lg shadow-md mb-4">
      <div className="reviewer-info flex items-center mb-3">
        <img
          src={review.reviewer_image}
          alt={review.reviewer_name}
          className="reviewer-image w-12 h-12 rounded-full mr-3"
        />
        <div>
          <h3 className="text-lg font-semibold">{review.reviewer_name}</h3>
          <p className="text-sm text-gray-500">{review.review_date}</p>
        </div>
      </div>
      <div className=" mb-2">
        <p className="font-semibold">
          Rating:{" "}
          <span className="text-yellow-500">{review.rating_point}⭐</span>
        </p>
      </div>
      <div className="review-comments">
        <p>{review.reviewer_comments}</p>
      </div>
    </div>
  );
};

const AllReviews = ({ reviews }) => {
  return (
    <div className="reviews-container max-w-4xl mx-auto mt-6">
      <h2 className="text-2xl font-semibold mb-4">All Reviews</h2>
      {reviews.map((review) => (
        <ReviewCard key={review._id} review={review} />
      ))}
    </div>
  );
};

export default AllReviews;
