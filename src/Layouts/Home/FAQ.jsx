import React from "react";
import { Fade } from "react-awesome-reveal";

const FAQ = () => {
  return (
    <div className="py-10 px-5 font-mulish my-2 md:my-5 lg:my-10 bg-gray-100 rounded-sm min-h-screen">
      <h2 className="text-2xl md:text-5xl font-bold text-center md:text-start pb-2 md:pb-8  text-transparent bg-gradient-to-r from-[#1b212b] to-[#03b8a3] bg-clip-text font-oswald">
        Frequently Asked Question(FAQ)
      </h2>
      <Fade cascade delay={100}>
        <div className="flex flex-col md:flex-row gap-5 md:gap-14 lg:gap-20 pt-3 md:pt-10">
          <div className="join join-vertical flex-1">
            <div className="collapse collapse-arrow join-item border-b-2 border-gray-400">
              <input type="radio" name="my-accordion-4" defaultChecked />
              <div className="collapse-title font-semibold text-[18px] md:text-[20px] lg:text-[22px] text-transparent bg-gradient-to-r from-[#333E50] to-[#017a6c] bg-clip-text">
                What is ScholarBeacon NinetyOne.com?
              </div>
              <div className="collapse-content text-[16px] font-semibold">
                ScholarBeacon NinetyOne.com is a free college scholarship search
                platform that helps students find scholarships they qualify for.
                As one of the most widely used and trusted scholarship search
                engines, we’ve helped over 26 million students and families
                connect with college scholarship opportunities.
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border-b-2 border-gray-400">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title font-semibold  text-[18px] md:text-[20px] lg:text-[22px] text-transparent bg-gradient-to-r from-[#333E50] to-[#017a6c] bg-clip-text">
                Do I need to create an account to view scholarships on
                ScholarBeacon NinetyOne.com?
              </div>
              <div className="collapse-content text-[16px] font-semibold">
                No, you can browse scholarships on ScholarBeacon NinetyOne.com
                without creating an account by visiting our Scholarship
                Directory. However, registering allows you to receive
                personalized scholarship matches based on your background,
                interests, and eligibility, making it easier to find
                opportunities that are the best fit for you.
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border-b-2 border-gray-400">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title font-semibold  text-[18px] md:text-[20px] lg:text-[22px] text-transparent bg-gradient-to-r from-[#333E50] to-[#017a6c] bg-clip-text">
                Are the scholarships on ScholarBeacon NinetyOne.com legitimate?
              </div>
              <div className="collapse-content text-[16px] font-semibold">
                Yes, ScholarBeacon NinetyOne.com only lists legitimate
                scholarships. Our database is vetted by our expert staff and
                updated daily, and each scholarship is verified to ensure
                accuracy and authenticity. We encourage users to report anything
                they may find suspicious or concerning and take the feedback we
                receive very seriously. ScholarBeacon NinetyOne.com has been a
                trusted resource for students, parents, and educators for over
                25 years.
              </div>
            </div>
          </div>
          <div className="join join-vertical flex-1">
            <div className="collapse collapse-arrow join-item border-b-2 border-gray-400">
              <input type="radio" name="my-accordion-4" defaultChecked />
              <div className="collapse-title font-semibold  text-[18px] md:text-[20px] lg:text-[22px] text-transparent bg-gradient-to-r from-[#333E50] to-[#017a6c] bg-clip-text">
                How does ScholarBeacon NinetyOne.com stand out from other
                scholarship platforms?
              </div>
              <div className="collapse-content text-[16px] font-semibold">
                ScholarBeacon NinetyOne.com is one of the most trusted and
                widely used scholarship search platforms, featuring a verified
                and continuously updated scholarship database. Our comprehensive
                scholarship listings cater to all types of students, ensuring a
                wide range of opportunities. We maintain accuracy by reviewing
                listings, removing expired scholarships, and incorporating user
                feedback. New scholarships are added daily, and 50% of our
                database consists of location-based scholarships, which often
                provide a better chance of winning.
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border-b-2 border-gray-400">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title font-semibold  text-[18px] md:text-[20px] lg:text-[22px] text-transparent bg-gradient-to-r from-[#333E50] to-[#017a6c] bg-clip-text">
                Is ScholarBeacon NinetyOne.com completely free?
              </div>
              <div className="collapse-content text-[16px] font-semibold">
                Yes, ScholarBeacon NinetyOne.com is completely free to use.
                There are no fees to search for scholarships, create an account,
                or access any of our resources. Our goal is to help students
                find and win scholarships without any cost or obligation.
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border-b-2 border-gray-400">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title font-semibold  text-[18px] md:text-[20px] lg:text-[22px] text-transparent bg-gradient-to-r from-[#333E50] to-[#017a6c] bg-clip-text">
                How can I get help with a scholarship question?
              </div>
              <div className="collapse-content text-[16px] font-semibold">
                If you have a question about a scholarship, we recommend
                checking the scholarship listing first for details. Many
                listings include contact information for the provider, who can
                give the most accurate information. If you need further
                assistance or want to report an issue with a scholarship, you
                can contact us for support.
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default FAQ;
