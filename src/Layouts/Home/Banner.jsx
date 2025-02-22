import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const Banner = () => {
  return (
    <div className="my-10">
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="flex w-full gap-10 px-12 mt-16">
            <div className="w-3/5 space-y-5 pr-10">
              <h2 className="uppercase font-semibold text-6xl pb-3 font-oswald text-gray-800">
                Scholarship Management Solution
              </h2>
              <p className="text-[28px] font-semibold text-[#0AA592]">
                Level Up Your Scholarship Management with ScholarBeacon
              </p>
              <p className="font-semibold text-[18px]">
                Streamline your workflows, Centralize your data, Engage your
                scholars, Supercharge your disbursements.
              </p>
            </div>
            <div className="w-2/5 pb-5">
              {" "}
              <img
                className="w-[450px] h-[370px]"
                src="https://i.ibb.co.com/qLYFhTWb/scholarship-management.png"
                alt=""
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex w-full gap-10 px-12 mt-16">
            <div className="w-3/5 space-y-5 ">
              <h2 className="uppercase font-semibold text-6xl pb-3 font-oswald text-gray-800">
                Transform Scholarship Management
              </h2>
              <p className="text-[28px] font-semibold text-[#0AA592]">
                A Smarter Way to Handle Scholarships with ScholarBeacon
              </p>
              <p className="font-semibold text-[18px]">
                Automate applications, simplify approvals, and maximize impact.
              </p>
            </div>
            <div className="w-2/5 pb-5">
              {" "}
              <img
                className="w-[450px] h-[370px]"
                src="https://i.ibb.co.com/5CMfd5k/flat-social-media-promo-template-international-day-education-23-2151059458.jpg"
                alt=""
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex w-full gap-10 px-12 mt-16">
            <div className="w-3/5 space-y-5 pr-10">
              <h2 className="uppercase font-semibold text-6xl pb-3 font-oswald text-gray-800">
                Empowering Scholarship Success
              </h2>
              <p className="text-[28px] font-semibold text-[#0AA592]">
                Your All-in-One Scholarship Management Hub
              </p>
              <p className="font-semibold text-[18px]">
                Seamless applications, efficient tracking, and smarter funding.
              </p>
            </div>
            <div className="w-2/5 pb-5">
              {" "}
              <img
                className="w-[450px] h-[370px]"
                src="https://i.ibb.co.com/FqWjKxhT/8986704.jpg"
                alt=""
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex w-full gap-10 px-12 mt-16">
            <div className="w-3/5 space-y-5 pr-10">
              <h2 className="uppercase font-semibold text-6xl pb-3 font-oswald text-gray-800">
                Unlock Opportunities with Scholarships
              </h2>
              <p className="text-[28px] font-semibold text-[#0AA592]">
                Make Scholarship Distribution Faster & Smarter
              </p>
              <p className="font-semibold text-[18px]">
                Simplify applications, track funds, and support students
                seamlessly
              </p>
            </div>
            <div className="w-2/5 pb-5">
              {" "}
              <img
                className="w-[450px] h-[370px]"
                src="https://i.ibb.co.com/Myq55NqS/DALL-E-2025-02-22-18-22-10-A-vibrant-scholarship-promotional-banner-with-a-motivational-theme-The-im.webp"
                alt=""
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
