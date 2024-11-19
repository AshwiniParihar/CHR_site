// Hero.jsx
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Section from "./Section";
import { BackgroundCircles } from "./design/Hero";
import ellipse from "../images/Ellipse 8.png";
import svg_image from "../images/Group.svg";
import Statistics from "./Statistics";

const Hero = () => {
  const navigate = useNavigate();
  const parallaxRef = useRef(null);

  // const scrollToContact = () => {
  //   const contactSection = document.getElementById("contact");
  //   if (contactSection) {
  //     contactSection.scrollIntoView({ behavior: "smooth" });
  //   }
  // };

  const handleRequestDemo = () => {
    navigate("/request-demo"); // Navigate to the Request Demo page
  };

  return (
    <Section
      id="hero"
      className="relative py-15 lg:py-16 xl:py-20 pt-20 pb-32 text-center text-white min-h-screen z-0"
    >
      <div
        style={{
          backgroundImage: `url(${svg_image})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "top center",
          height: "75%",
        }}
        className="absolute inset-0 z-0"
      ></div>

      <div className="absolute inset-0 z-10 flex justify-center items-center">
        <BackgroundCircles />
      </div>

      <div className="absolute top-0 right-0 z-[-1] h-auto rotate-180">
        <img
          src={ellipse}
          alt="Gradient Background"
          className="w-full h-auto transform scale-x-[-1]"
        />
      </div>

      <div ref={parallaxRef} className="container mx-auto relative z-20">
        <div className="mb-8 mt-10">
          <a
            href="/demo"
            className="bg-gray-800 text-white py-3 px-6 rounded-full shadow-md hover:shadow-lg"
          >
            Welcome to
          </a>
        </div>
        <h1 className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#7076F2] to-[#AEECF9]">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7076F2] to-[#AEECF9]">
            CandidHR.ai
          </span>
        </h1>

        <p className="text-3xl md:text-5xl mb-8  md:font-semibold ">
            Revolutionizing the Hiring Process
          </p>
          <p className="text-gray-400 mb-10 px-6  text-sm md:text-lg">
            In today’s fast-paced business world, time is money. HR professionals
            and hiring managers are constantly
            <br /> overwhelmed by a sea of resumes, struggling to sift through
            candidates efficiently. CandidHR.ai is here to change that.
          </p>

          <div className="flex flex-col sm:flex-row justify-center space-x-0 sm:space-x-6 mb-16 mt-14">
          <div>
            <button
              onClick={handleRequestDemo}
              className="bg-gradient-to-r from-[#5459b9] to-[#AEECF9] text-black py-3 px-6 rounded-full shadow-md hover:shadow-lg mb-6 md:m-0"
            >
              Contact Us
            </button>
          </div>

          {/* <div>
            <button
              onClick={scrollToContact}
              className="border border-blue-500 text-white py-3 px-6 rounded-full hover:bg-gradient-to-r from-[#5459b9] to-[#AEECF9] hover:text-black hover:font-semibold"
            >
              Contact Us
            </button>
          </div> */}
        </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl w-60 md:w-full mx-auto">
            <div className=" w-full sm:max-w-xs md:max-w-none p-8 md:p-8 bg-white/10 text-black rounded-2xl shadow-md">
              <h3 className="text-lg md:text-xl font-bold mb-2 text-white">
                Accelerate Recruitment Process by
              </h3>
              <p className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#7076F2] to-[#ba83ece8]">
                4x
              </p>
            </div>
            <div className="p-8 bg-white/10 text-black rounded-2xl shadow-md">
              <h3 className="text-lg md:text-xl font-bold mb-2 text-white">
                Increase Hiring Efficiency by
              </h3>
              <p className="text-4xl md:text-6xl  font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#7076F2] to-[#ba83ece8]">
                80%
              </p>
            </div>
            <div className="p-8 bg-white/10 text-black rounded-xl shadow-md">
              <h3 className="text-lg md:text-xl font-bold mb-2 text-white">
                Improve Quality Hiring by
              </h3>
              <p className="text-4xl md:text-6xl  font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#7076F2] to-[#ba83ece8]">
                99%
              </p>
            </div>
          </div>
        


        

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl w-60 md:w-full mx-auto">
          {/* Statistics Section */}
          {/* Existing Content */}
        </div>
      </div>

      <div className="container mx-auto text-center mt-72">
        <Statistics />
      </div>
    </Section>
  );
};

export default Hero;
