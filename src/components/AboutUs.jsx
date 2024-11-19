import { } from "../assets";
import { collabContent } from "../constants";
 
import Section from "./Section";
 
import about_logo from '../assets/about_logo.png';
import gradiant_image from '../assets/gradiant.png';
 
const AboutUs = () => {
  return (
    <Section id='aboutus' className='relative z-0'>
      <div className="absolute left-0 z-[1] w-1/2 h-auto">
        <img
          src={gradiant_image}
          alt="Gradient Background"
          className="h-auto transform scale-x-[1]"
        />
      </div>
     
      {/* Container with responsive flex behavior */}
      <div className="container lg:flex lg:justify-start text-center lg:text-left">
       
        {/* Main content */}
        <div className="max-w-[25rem] mx-auto lg:mx-0">
          <h2 className="h2 mb-12 md:mb-8 font-semibold">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7076F2] to-[#AEECF9]"> CandidHR.ai</span>
          </h2>
         
          {/* Image to be shown in mobile view */}
          <div className="block lg:hidden mb-6">
            <img
              className="opacity-50 mx-auto"
              src={about_logo}
              width={200}
              height={120}
              alt="candidhr"
            />
          </div>
 
          {/* Content List */}
          <ul className="max-w-[22rem] mb-10 md:mb-14 mx-auto lg:mx-0">
            {collabContent.map((item) => (
              <li className="mb-3 py-3" key={item.id}>
                {item.text1 && (
                  <p className="body-2 mt-3 text-n-3">{item.text1}</p>
                )}
                <div className="flex items-center pt-5 justify-center lg:justify-start">
                  <div className="text-3xl">{item.title}</div>
                </div>
                {item.text2 && (
                  <p className="body-2 mt-3 text-n-3">{item.text2}</p>
                )}
              </li>
            ))}
          </ul>
 
          <a
            href="/demo"
            className="bg-gradient-to-r from-[#5459b9] to-[#AEECF9] text-black py-3 px-6 rounded-full shadow-md hover:shadow-lg"
          >
            Try it now
          </a>
        </div>
 
        {/* Image for larger screens */}
        <div className="lg:ml-auto xl:w-[38rem] mt-4 hidden lg:block">
          <img
            className="opacity-50"
            src={about_logo}
            width={450}
            height={200}
            alt="brainwave"
          />
        </div>
      </div>
    </Section>
  );
};
 
export default AboutUs;