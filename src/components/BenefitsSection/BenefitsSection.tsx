import benefits1 from "../../assets/images/benefits-1.svg";
import benefits2 from "../../assets/images/benefits-2.svg";
import benefits3 from "../../assets/images/benefits-3.svg";

import TypewrittenText from "../TypewrittenText";

const BenefitsSection = () => {
  return (
    <div className="my-14 flex flex-col items-center px-5">
      <TypewrittenText
        text="Benefits"
        className="text-2xl sub-heading font-mono"
      />
      <div className="md:mt-2 md:w-[50%] border-purple-400 border-2 flex items-center rounded-3xl p-5 box-shadow">
        <img src={benefits1} className="w-20 mr-8" />
        <div className="self-start">
          <h3 className="text-lg font-thin mb-2 text-yellow-300">
            Enhance Your Skills
          </h3>
          <p>
            Gain skills that can directly improve employability and earning
            potential.
          </p>
        </div>
      </div>
      <div className="mt-6 md:mt-6 md:w-[50%] border-purple-400 border-2 flex items-center rounded-3xl p-5 box-shadow">
        <img src={benefits2} className="w-20 mr-8" />
        <div className="self-start">
          <h3 className="text-lg font-thin mb-2 text-yellow-300">
            Shareable Participation Certificate
          </h3>
          <p>
            Participants will receive a shareable certificate upon completion of
            the Data Analytics Workshop.
          </p>
        </div>
      </div>
      <div className="mt-6 md:mt-6 md:w-[50%] border-purple-400 border-2 flex items-center rounded-3xl p-5 box-shadow">
        <img src={benefits3} className="w-20 mr-8" />
        <div className="self-start">
          <h3 className="text-lg font-thin mb-2 text-yellow-300">
            Join the Community
          </h3>
          <p>
            Join hands with a community of like-minded peers & mentors who will
            inspire and support your career growth. Automatic subscription to
            future workshops plus the ability to grow your network.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BenefitsSection;
