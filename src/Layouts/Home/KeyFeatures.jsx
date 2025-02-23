import { FaArrowRight, FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";

const KeyFeatures = () => {
  return (
    <div className="my-24 mx-10">
      <div className="flex">
        <div className="flex-1 space-y-3">
          <h2 className="text-4xl font-bold font-oswald pb-5">Key Features</h2>
          <p className="flex items-center gap-2 text-[20px] font-semibold">
            <FaCheck></FaCheck> Easy Scholarship management
          </p>
          <p className="flex items-center gap-2 text-[20px] font-semibold">
            <FaCheck></FaCheck> Application Workflows
          </p>
          <p className="flex items-center gap-2 text-[20px] font-semibold">
            <FaCheck></FaCheck> Commitment and disbursement tracking
          </p>
          <p className="flex items-center gap-2 text-[20px] font-semibold">
            <FaCheck></FaCheck> Scholar engagement tools
          </p>
          <p className="flex items-center gap-2 text-[20px] font-semibold">
            <FaCheck></FaCheck> Events
          </p>
          <p className="flex items-center gap-2 text-[20px] font-semibold">
            <FaCheck></FaCheck> Service Desk
          </p>
          <p className="flex items-center gap-2 text-[20px] font-semibold">
            <FaCheck></FaCheck> Communities
          </p>
          <p className="flex items-center gap-2 text-[20px] font-semibold">
            <FaCheck></FaCheck> Polls & Surveys
          </p>
          <p className="flex items-center gap-2 text-[20px] font-semibold">
            <FaCheck></FaCheck> Scholar 360 View
          </p>
          <p className="flex items-center gap-2 text-[20px] font-semibold">
            <FaCheck></FaCheck> Reports & Dashboards
          </p>
        </div>
        <div className="flex-1 flex items-center">
          <img src="https://i.ibb.co.com/VWR6xL4s/award-software.png" alt="" />
        </div>
      </div>
      <div className="flex mt-16 gap-10">
        <div className="flex-1 flex items-center">
          <img
            src="https://i.ibb.co.com/hxVB3gcJ/scholarship-software.png"
            alt=""
          />
        </div>
        <div className="flex-1 flex flex-col justify-center">
          <h2 className="text-4xl font-bold font-oswald pb-5">
            Your Challenges
          </h2>
          <p className="text-[18px]">
            Scholarship organizations currently struggle with managing
            information across multiple platforms, leading to duplicate effort,
            inconsistent data, siloed information, and limited visibility into
            scholar progress. This makes communication, reporting, and
            decision-making inefficient. There is a great need for a single
            platform that centralizes all scholarship data, offering real-time
            insights, streamlined communication, and advanced analytics,
            ultimately simplifying scholarship management and enhancing
            decision-making and tracking capabilities for scholarship
            organizations.
          </p>
        </div>
      </div>
      <div className="flex mt-16 gap-10">
        <div className="flex-1 flex flex-col justify-center">
          <h2 className="text-4xl font-bold font-oswald pb-5">Our Solution</h2>
          <p className="text-[18px]">
            ScholarBeacon offers a centralized platform with functionalities
            such as scholarship application management, scholarship data,
            commitment tracking, disbursement administration, and comprehensive
            academic progress monitoring.
          </p>
          <div className="pt-5 flex items-center gap-2 font-pacifico text-[20px]">
            <Link>Learn More </Link>
            <FaArrowRight></FaArrowRight>
          </div>
        </div>
        <div className="flex-1 flex items-center pl-10">
          <img
            className="h-[300px] rounded-xl"
            src="https://i.ibb.co.com/3mbLQ12j/family-buying-car-dealer-1303-13702.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="pt-10">
        <p className="text-[18px]">
          ScholarBeacon is a one-of-a-kind solution that manages all aspects of
          a scholarship program in one central platform, including application
          processing, disbursement, bursaries and one-time grants, performance
          tracking, communication, and reporting. This simplifies operations,
          reduces administrative burden, and eliminates data silos.
        </p>
      </div>
    </div>
  );
};

export default KeyFeatures;
