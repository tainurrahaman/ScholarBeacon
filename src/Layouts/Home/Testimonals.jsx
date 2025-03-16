import { useEffect, useState } from "react";
import UseAxiosPublic from "../../Hook/UseAxiosPublic";
import Slider from "react-slick";
import axios from "axios";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const Testimonals = () => {
  const axiosPublic = UseAxiosPublic();
  const [testimonals, setTestimonals] = useState([]);

  useEffect(() => {
    // axiosPublic.get("/testimonals")
    axios({
      method: "get",
      url: "http://localhost:5000/testimonals",
    }).then((result) => {
      setTestimonals(result.data);
      console.log(result.data);
    });
  }, []);

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
    <div className="py-10 px-5 font-mulish my-2 md:my-5 lg:my-10">
      <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-center mb-2 md:mb-8 text-gray-800 font-oswald">
        Scholarship <span className="text-[#0F7771]">Winners</span>
      </h2>
      <p className="text-[16px] md:text-2xl font-semibold md:font-bold text-center mb-8 md:mb-12 lg:mb-16 text-gray-800 w-full md:w-3/4 lg:w-2/3 mx-auto">
        ScholarBeacon has helped over 26 million students and families find
        University scholarships. Will you be our next winner?
      </p>
      {/* testimonal Slider for Highlighted Reviews */}
      <div className="max-w-2xl mx-auto mb-8">
        <Slider {...sliderSettings}>
          {testimonals?.map((testimonal) => (
            <div
              key={testimonal._id}
              className="p-6 bg-gray-800 text-white rounded-lg  w-full"
            >
              <FaQuoteLeft className="text-yellow-400 text-2xl mb-3" />
              <p className="text-sm md:text-lg italic">
                "{testimonal.reviewer_comments}"
              </p>
              <div className="flex items-center gap-4 mt-8">
                <img
                  src={testimonal.reviewer_image}
                  alt={testimonal.reviewerName}
                  className="w-16 md:w-24 h-16 md:h-24 rounded-full border-2 border-yellow-400 object-cover"
                />
                <div>
                  <h3 className="text-yellow-400 font-semibold text-2xl">
                    {testimonal.reviewer_name}
                  </h3>
                  <p className="text-sm md:text-xl text-gray-400 flex items-center gap-1">
                    {testimonal.rating_point}{" "}
                    <FaStar className="text-yellow-300"></FaStar>
                  </p>
                  <p className="text-sm md:text-xl text-gray-400">
                    {testimonal.review_date}
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

export default Testimonals;
