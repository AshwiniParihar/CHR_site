import Section from "./Section";
import Faq from "./Faq";
import PricingList from "./PricingList";
import { LeftLine, RightLine } from "./design/Pricing";
import gradiant_image from "../assets/gradiant.png";
import { useNavigate } from "react-router-dom";
import CreditsComponent from "../components/CreditComponent";
import Heading from "./Heading";
import Calculator from "./Calculator";

const Pricing = () => {
  const navigate = useNavigate();
  const handleRequestDemo = () => {
    navigate("/request-demo"); // Navigate to the Request Demo page
  };
  return (
    <Section className=" relative z-2" id="pricing">
      <div className="absolute top-0 right-0 z-[-1]  h-auto">
        <img
          src={gradiant_image}
          alt="Gradient Background"
          className=" h-auto transform scale-x-[-1]"
        />
      </div>
      {/* <div className="absolute bottom-0 left-0 z-[1] w-full">
        <img
          src={gradiant_image}
          alt="Gradient Background"
          className=" h-auto transform scale-x-[1]"
        />
      </div> */}
      <div className="container ">
        {/* <h1 className="text-center text-3xl lg:text-5xl font-semibold lg:p-20">
          Get started with{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7076F2] to-[#AEECF9]">
            CandidHR.ai
          </span>
        </h1>
        <p className="text-center text-gray-400 mb-4">Choose the Plan that Fits Your Hiring Needs and Budget</p> */}

        <h1 className="text-center text-3xl lg:text-5xl font-semibold">
          Get started with{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7076F2] to-[#AEECF9]">
            CandidHR
          </span>
        </h1>
        <Heading
          className="font-semibold text-center px-2"
          text="Choose the Plan that fits Your Hiring Needs and Budget"
        />

        <div className="text-center mb-10">
          <button
            onClick={handleRequestDemo}
            className="bg-gradient-to-r from-[#5459b9] to-[#AEECF9] text-black hover:text-white py-2 px-4 rounded-full shadow-md hover:shadow-lg"
          >
            Contact Us
          </button>
        </div>

        {
          <div className="relative">
            <PricingList />
            <LeftLine />
            <RightLine />
          </div>
        }

        <div>
          <CreditsComponent />
        </div>
        <div>
          <Calculator/>
        </div>
        <div>
          <Faq />
        </div>
      </div>
    </Section>
  );
};

export default Pricing;
