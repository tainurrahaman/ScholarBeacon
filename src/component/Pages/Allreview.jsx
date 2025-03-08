import { FaQuoteLeft, FaStar } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const AllReview = ({ reviews }) => {
  if (reviews?.length < 1) {
    return (
      <div className="text-center my-10">
        <h2 className="text-2xl font-bold text-gray-700">
          No review available for this Scholarship
        </h2>
      </div>
    );
  }

  // Carousel settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="container mx-auto p-6">
      {/* Section Title */}
      <h2 className="text-2xl text-center font-bold my-4">All Reviews</h2>

      {/* Review Slider for Highlighted Reviews */}
      <div className="max-w-2xl mx-auto mb-8">
        <Slider {...sliderSettings}>
          {reviews?.map((review) => (
            <div
              key={review._id}
              className="p-6 bg-gray-800 text-white rounded-lg shadow-lg w-full"
            >
              <FaQuoteLeft className="text-yellow-400 text-2xl mb-3" />
              <p className="text-sm md:text-lg italic">
                "{review.reviewer_comments}"
              </p>
              <div className="flex items-center gap-4 mt-4">
                <img
                  src={review.reviewerImage}
                  alt={review.reviewerName}
                  className="w-16 md:w-24 h-16 md:h-24 rounded-full border-2 border-yellow-400"
                />
                <div>
                  <h3 className="text-yellow-400 font-semibold text-2xl">
                    {review.reviewer_name}
                  </h3>
                  <p className="text-sm md:text-xl text-gray-400 flex items-center gap-1">
                    {review.rating_point}{" "}
                    <FaStar className="text-yellow-300"></FaStar>
                  </p>
                  <p className="text-sm md:text-xl text-gray-400">
                    {review.review_date}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default AllReview;
