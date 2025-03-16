import { FaArrowRight, FaBlackTie, FaGgCircle, FaGlobe } from "react-icons/fa";
import { RiDnaFill } from "react-icons/ri";
import { SlBadge } from "react-icons/sl";
import { TbBrandOpenSource } from "react-icons/tb";

const TypesScholarship = () => {
  return (
    <div className="max-w-[350px] md:max-w-3xl lg:max-w-4xl mx-auto mt-10 mb-2 md:mb-7 lg:mb-10">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-8 md:mb-14 text-gray-800 font-oswald">
        Types of Scholarships
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="max-w-sm p-4 bg-white rounded-lg shadow-md border border-gray-300 hover:shadow-xl hover:-translate-1 duration-500">
          <div className="flex items-center space-x-2">
            <FaGlobe className="text-slate-800 text-2xl" />
            <h2 className="font-bold text-lg">
              Scholarships for <br /> International Students
            </h2>
          </div>
          <p className="text-gray-700 mt-2 text-md">
            Scholarships for international students are a golden opportunity to
            turn your dream of studying abroad into reality. These ...
          </p>
          <div className="mt-3 flex items-center justify-between text-[#59B890] text-sm font-medium">
            <span className="px-2 py-1 bg-gray-200 rounded-md text-gray-700 text-xs">
              6.3 min read
            </span>
            <a
              href="https://www.mastersportal.com/articles/3243/scholarships-for-international-students.html"
              target="_blank"
              className="flex items-center space-x-1 hover:underline"
            >
              <span className="text-lg">Learn more</span>
              <span>
                <FaArrowRight></FaArrowRight>
              </span>
            </a>
          </div>
        </div>
        <div className="max-w-sm p-4 bg-white rounded-lg shadow-md border border-gray-300 hover:shadow-xl hover:-translate-1 duration-500">
          <div className="flex items-center space-x-2">
            <FaGgCircle className="text-slate-800 text-2xl" />
            <h2 className="font-bold text-lg">
              Scholarships for <br /> Minority Students
            </h2>
          </div>
          <p className="text-gray-700 mt-2 text-md">
            Scholarships for minority students play a crucial role in promoting
            diversity and inclusion in higher education. These scholarship...
          </p>
          <div className="mt-3 flex items-center justify-between text-[#59B890] text-sm font-medium">
            <span className="px-2 py-1 bg-gray-200 rounded-md text-gray-700 text-xs">
              7.5 min read
            </span>
            <a
              href="https://www.mastersportal.com/articles/3244/scholarships-for-minority-students.html"
              target="_blank"
              className="flex items-center space-x-1 hover:underline"
            >
              <span className="text-lg">Learn more</span>
              <span>
                <FaArrowRight></FaArrowRight>
              </span>
            </a>
          </div>
        </div>
        <div className="max-w-sm p-4 bg-white rounded-lg shadow-md border border-gray-300 hover:shadow-xl hover:-translate-1 duration-500">
          <div className="flex items-center space-x-2">
            <SlBadge className="text-slate-800 text-2xl" />
            <h2 className="font-bold text-lg">Merit-Based Scholarships</h2>
          </div>
          <p className="text-gray-700 mt-2 text-md">
            Merit-based scholarships are highly sought after by students who
            excel academically or possess exceptional talents....
          </p>
          <div className="mt-3 flex items-center justify-between text-[#59B890] text-sm font-medium">
            <span className="px-2 py-1 bg-gray-200 rounded-md text-gray-700 text-xs">
              8.5 min read
            </span>
            <a
              href="https://www.mastersportal.com/articles/3247/merit-based-scholarships.html"
              target="_blank"
              className="flex items-center space-x-1 hover:underline"
            >
              <span className="text-lg">Learn more</span>
              <span>
                <FaArrowRight></FaArrowRight>
              </span>
            </a>
          </div>
        </div>
        <div className="max-w-sm p-4 bg-white rounded-lg shadow-md border border-gray-300 hover:shadow-xl hover:-translate-1 duration-500">
          <div className="flex items-center space-x-2">
            <FaBlackTie className="text-slate-800 text-2xl" />
            <h2 className="font-bold text-lg">Government Scholarships</h2>
          </div>
          <p className="text-gray-700 mt-2 text-md">
            If you decided to study abroad, you probably learned that finances
            are an important factor to consider. That’s where...
          </p>
          <div className="mt-3 flex items-center justify-between text-[#59B890] text-sm font-medium">
            <span className="px-2 py-1 bg-gray-200 rounded-md text-gray-700 text-xs">
              8 min read
            </span>
            <a
              href="https://www.mastersportal.com/articles/3242/government-scholarships.html"
              target="_blank"
              className="flex items-center space-x-1 hover:underline"
            >
              <span className="text-lg">Learn more</span>
              <span>
                <FaArrowRight></FaArrowRight>
              </span>
            </a>
          </div>
        </div>
        <div className="max-w-sm p-4 bg-white rounded-lg shadow-md border border-gray-300 hover:shadow-xl hover:-translate-1 duration-500">
          <div className="flex items-center space-x-2">
            <RiDnaFill className="text-slate-800 text-2xl" />
            <h2 className="font-bold text-lg">
              Scholarships for <br /> Women
            </h2>
          </div>
          <p className="text-gray-700 mt-2 text-md">
            Scholarships for women in STEM are essential for promoting gender
            diversity in these fields. These scholarships ...
          </p>
          <div className="mt-3 flex items-center justify-between text-[#59B890] text-sm font-medium">
            <span className="px-2 py-1 bg-gray-200 rounded-md text-gray-700 text-xs">
              6 min read
            </span>
            <a
              href="https://www.mastersportal.com/articles/3245/scholarships-for-women-in-stem.html"
              target="_blank"
              className="flex items-center space-x-1 hover:underline"
            >
              <span className="text-lg">Learn more</span>
              <span>
                <FaArrowRight></FaArrowRight>
              </span>
            </a>
          </div>
        </div>
        <div className="max-w-sm p-4 bg-white rounded-lg shadow-md border border-gray-300 hover:shadow-xl hover:-translate-1 duration-500">
          <div className="flex items-center space-x-2">
            <TbBrandOpenSource className="text-slate-800 text-2xl" />
            <h2 className="font-bold text-lg">
              No-Essay <br /> Scholarships
            </h2>
          </div>
          <p className="text-gray-700 mt-2 text-md">
            No-essay scholarships are an attractive option for students who want
            to minimise the time and effort involved in securing ...
          </p>
          <div className="mt-3 flex items-center justify-between text-[#59B890] text-sm font-medium">
            <span className="px-2 py-1 bg-gray-200 rounded-md text-gray-700 text-xs">
              7 min read
            </span>
            <a
              href="https://www.mastersportal.com/articles/3246/no-essay-scholarships.html"
              target="_blank"
              className="flex items-center space-x-1 hover:underline"
            >
              <span className="text-lg">Learn more</span>
              <span>
                <FaArrowRight></FaArrowRight>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TypesScholarship;
