import { Fade } from "react-awesome-reveal";

const Process = () => {
  return (
    <div className="mt-16 px-5 md:px-10 lg:mt-24">
      <Fade cascade delay={100} direction="down">
        {" "}
        <h2 className="font-bold font-oswald text-2xl md:text-5xl w-full lg:w-2/3 mx-auto text-center text-transparent bg-gradient-to-r from-[#333E50] to-[#017a6c] bg-clip-text p-0 md:p-5">
          Navigate scholarships with ease. Solutions that make your work easier.
        </h2>
      </Fade>
      <div className="flex justify-center w-full md:w-2/3 mx-auto">
        <img
          className="p-5 md:p-10 max-w-full h-auto"
          src="https://i.ibb.co.com/GfyftF14/image-599-1.png"
          alt="Scholarship lifecycle image"
        />
      </div>
      <Fade cascade delay={100} direction="up">
        <h2 className="font-bold font-oswald text-2xl md:text-3xl w-full md:w-3/4 mx-auto text-center text-transparent bg-gradient-to-r from-[#333E50] to-[#017a6c] bg-clip-text">
          Empowering students and scholarship managers with innovative features.
          Free up time to focus on your mission and maximize your impact.
        </h2>
      </Fade>
      <Fade cascade delay={200} direction="right">
        <div className="my-10 md:my-16 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10">
          {[
            {
              title: "Online applications and scholarship review",
              description:
                "Efficiently create or modify applications without technical support. Leverage an easy-to-use online review system to streamline sorting, scoring, and managing documents for a smoother, user-friendly experience.",
            },
            {
              title: "Impact and outcome measurement",
              description:
                "Collect all types of data and stories from your applicants to leverage in reporting and marketing materials.",
            },
            {
              title: "Focus on applicant experience",
              description:
                "Intuitive scholarship application software allows students to spend less time navigating the submission process.",
            },
            {
              title: "Matching criteria",
              description:
                "With eligibility quizzes, access codes, and universal applications, matching criteria features save valuable time and improve the experience for applicants and administrators.",
            },
            {
              title: "Third-party recommendations",
              description:
                "Applicants can request third-party information, including letters of recommendation and transcripts, in any required format.",
            },
            {
              title: "Reporting on all collected data",
              description:
                "Choose the data you wish to analyze and transfer it to our report builder, where you can customize and dissect it according to your preferences.",
            },
            {
              title: "Customizable forms with table and branching options",
              description:
                "Create specific questions and formats that align with the objectives of different scholarships to ensure the collection of relevant and comprehensive information.",
            },
            {
              title: "Automated communications",
              description:
                "Eliminate the need for manual work with automated emails and notifications to streamline the communication flow.",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="border border-gray-300 p-5 rounded-xl shadow-xl hover:shadow-2xl hover:-translate-1 duration-500"
            >
              <h2 className="font-bold text-lg md:text-[22px]  text-transparent bg-gradient-to-r from-[#333E50] to-[#017a6c] bg-clip-text pb-3">
                {feature.title}
              </h2>
              <p className="text-base md:text-[18px]">{feature.description}</p>
            </div>
          ))}
        </div>
      </Fade>
    </div>
  );
};

export default Process;
