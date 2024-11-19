import { benefits } from "../constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the icon component
import Heading from "./Heading";
import Section from "./Section";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";
// import card6 from "../assets/benefits/card-6.svg";


const BenefitCard = ({ item }) => (
  <div
    className="block relative p-0.25 bg-no-repeat bg-[length:100%_100%] max-w-[20rem] sm:max-w-[24rem] md:max-w-[24rem] bg-gradient-to-r from-blue-300 via-blue-400 to-purple-300 rounded-3xl rounded-tr-[60px] "
   
   
  >
    
    <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
      <div className="h-16">
        <h5 className="text-2xl mb-5">{item.title}</h5>
      </div>
      
        <p className="body-2 mb-6 mt-5 text-n-3">{item.text}</p>
     

      <div className="flex items-center mt-auto ">
        {/* Render FontAwesomeIcon */}
        <FontAwesomeIcon
          icon={item.icon}
          className="bg-purple-400 p-3 text-2xl rounded-xl text-black"
        />
      </div>
    </div>

    {item.light && <GradientLight />}

    <div
      className="absolute inset-0.5 bg-n-8"
      style={{ clipPath: "url(#benefits)" }}
    >
      <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-20">
        {item.imageUrl && (
          <img
            src={item.imageUrl[0]}
            width={180}
            height={170}
            alt={item.title}
            className="object-cover absolute bottom-0 right-0 pb-10"
          />
        )}
      </div>
    </div>

    <ClipPath />
  </div>
);




const Benefits = () => {
  return (
    <Section id="benifits" className="relative z-0">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl font-semibold text-center"
          title="All-in-One Solution for Smarter, Faster Hiring"
        />

        {/* Use flex-col on small screens to stack the cards */}
        <div className="flex flex-wrap gap-10 mb-10 justify-center">
          {benefits.map((item) => (
            <BenefitCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Benefits;
