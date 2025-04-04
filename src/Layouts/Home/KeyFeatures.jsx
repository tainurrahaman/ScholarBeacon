import { Fade } from "react-awesome-reveal";
import { FaArrowRight, FaCheck } from "react-icons/fa";

const KeyFeatures = () => {
  return (
    <div className="my-10 px-5 md:px-10 lg:my-24">
      <div className="flex flex-col md:flex-row gap-10">
        <div className="flex-1 space-y-3">
          <Fade cascade duration={200} direction="up">
            {" "}
            <h2 className="text-2xl md:text-4xl font-bold font-oswald pb-2 md:pb-5 text-transparent bg-gradient-to-r from-[#333E50] to-[#05f3d7] bg-clip-text ">
              Key Features
            </h2>
            {[
              "Easy Scholarship management",
              "Application Workflows",
              "Commitment and disbursement tracking",
              "Scholar engagement tools",
              "Events",
              "Service Desk",
              "Communities",
              "Polls & Surveys",
              "Scholar 360 View",
              "Reports & Dashboards",
            ].map((feature, index) => (
              <p
                key={index}
                className="flex items-center gap-2 text-base md:text-lg font-semibold"
              >
                <FaCheck /> {feature}
              </p>
            ))}
          </Fade>
        </div>
        <div className="flex-1 flex items-center justify-center transition-transform duration-300 hover:scale-110">
          <img
            className="max-w-full h-auto "
            src="https://i.ibb.co.com/VWR6xL4s/award-software.png"
            alt=""
          />
        </div>
      </div>
      <div className="flex flex-col-reverse md:flex-row mt-16 gap-10">
        <div className="flex-1 flex items-center justify-center transition-transform duration-300 hover:scale-110">
          <img
            className="max-w-full h-auto"
            src="https://i.ibb.co.com/hxVB3gcJ/scholarship-software.png"
            alt=""
          />
        </div>
        <div className="flex-1 flex flex-col justify-center">
          <Fade cascade delay={100} direction="right">
            {" "}
            <h2 className="text-2xl md:text-4xl font-bold font-oswald pb-5 text-transparent bg-gradient-to-r from-[#333E50] to-[#08ecd2] bg-clip-text">
              Your Challenges
            </h2>
            <p className="text-base md:text-lg">
              Scholarship organizations currently struggle with managing
              information across multiple platforms, leading to duplicate
              effort, inconsistent data, siloed information, and limited
              visibility into scholar progress. This makes communication,
              reporting, and decision-making inefficient. There is a great need
              for a single platform that centralizes all scholarship data,
              offering real-time insights, streamlined communication, and
              advanced analytics, ultimately simplifying scholarship management
              and enhancing decision-making and tracking capabilities for
              scholarship organizations.
            </p>
          </Fade>
        </div>
      </div>
      <div className="flex flex-col md:flex-row mt-16 gap-10">
        <div className="flex-1 flex flex-col justify-center">
          <Fade cascade delay={100} direction="left">
            {" "}
            <h2 className="text-2xl md:text-4xl font-bold font-oswald pb-5 text-transparent bg-gradient-to-r from-[#333E50] to-[#05e2c8] bg-clip-text">
              Our Solution
            </h2>
            <p className="text-base md:text-lg">
              ScholarBeacon offers a centralized platform with functionalities
              such as scholarship application management, scholarship data,
              commitment tracking, disbursement administration, and
              comprehensive academic progress monitoring.
            </p>
            <div className="pt-5 flex items-center gap-2 font-pacifico text-md md:text-xl ">
              <a
                href="https://www.kshp.com/scholarship-solutions-500-1-scholarship-research-p.html"
                target="_blank"
                className="text-transparent bg-gradient-to-r from-[#333E50] to-[#09c4ae] bg-clip-text"
              >
                Learn More{" "}
              </a>
              <FaArrowRight />
            </div>
          </Fade>
        </div>
        <div className="flex-1 flex items-center justify-center transition-transform duration-300 hover:scale-110">
          <img
            className="h-[250px] md:h-[300px] rounded-xl"
            src="https://i.ibb.co.com/3mbLQ12j/family-buying-car-dealer-1303-13702.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="pt-10">
        <Fade cascade delay={50} direction="up">
          {" "}
          <p className="text-base md:text-lg">
            ScholarBeacon is a one-of-a-kind solution that manages all aspects
            of a scholarship program in one central platform, including
            application processing, disbursement, bursaries and one-time grants,
            performance tracking, communication, and reporting. This simplifies
            operations, reduces administrative burden, and eliminates data
            silos.
          </p>
        </Fade>
      </div>
    </div>
  );
};

export default KeyFeatures;
