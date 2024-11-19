// import Heading from "./Heading";
// import Section from "./Section";

// import { roadmap } from "../constants";
// import { grid } from "../assets";
// import { Gradient } from "./design/Roadmap";
// import gradiant_image from "../assets/gradiant.png";

// const Features = () => (
//   <Section className="overflow-hidden relative z-0" id="features">
//     <div className="absolute top-0 right-0 z-[-1] w-1/3  h-auto">
//       <img
//         src={gradiant_image}
//         alt="Gradient Background"
//         className="w-full h-auto transform scale-x-[-1]"
//       />
//     </div>
//     <div className="container md:pb-10 font-semibold ">
//       <Heading title=" Our Key Features" />

//       <div className="relative grid gap-4 sm:grid-cols-1 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
//         {roadmap.map((item) => {
//           return (
//             <div
//               className={`md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem] ${
//                 item.colorful
//                   ? "bg-gradient-to-b from-[#7076F2] to-[#ba83ece8]"
//                   : "bg-n-6"
//               }`}
//               key={item.id}
//             >
//               <div className="relative p-4 sm:p-6 md:p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-15">
//                 <div className="absolute top-0 left-0 w-full h-full max-w-full">
//                   {/* <img className="w-full" src={grid} alt="Grid" /> */}
//                   <img
//                     className="w-full"
//                     src={grid}
//                     width={550}
//                     height={550}
//                     alt="Grid"
//                   />
//                 </div>
//                 <div className="relative z-1">
//                   <div className="flex items-center justify-between mb-4 md:mb-20 max-w-full"></div>

//                   {/* <div className="mb-2 -my-10 -mx-15">
//               <img
//                 className={`ml-8 md:ml-32 ${item.id === "2" || item.id === "3" ? "" : "w-64 h-64 md:w-96 md:h-96"}`}
//                 src={item.imageUrl}
//                 alt={item.title}
//                 style={
//                   item.id === "2"
//                     ? { width: "100%", maxWidth: "400px", height: "auto", marginLeft: "0" }
//                     : item.id === "3"
//                     ? { width: "100%", maxWidth: "400px", height: "auto", marginLeft: "" }
//                     : {}
//                 }
//               />
//             </div> */}

//                   <div className=" -my-10 -mx-15">
//                     <img
//                       // className="w-64 h-64 md:w-96 md:h-96 ml-8 md:ml-32"
//                       style={{width: '450px', height: '450px', marginLeft: '2rem'}}
//                       src={item.imageUrl}
//                       alt={item.title}
//                     />
//                   </div>

//                   <h4 className="h5 mb-3 sm:mb-4">{item.title}</h4>
//                   <p className="body-2 mb-6 text-n-3">{item.text}</p>
//                 </div>
//               </div>
//             </div>
//           );
//         })}

//         <Gradient />
//       </div>
//     </div>
//   </Section>
// );

// export default Features;

import Heading from "./Heading";
import Section from "./Section";

import { roadmap } from "../constants";
import { grid } from "../assets";
import { Gradient } from "./design/Roadmap";
import gradiant_image from "../assets/gradiant.png";

const Features = () => (
  <Section className="overflow-hidden relative z-0" id="features">
    <div className="absolute top-0 right-0 z-[-1] w-1/3  h-auto">
      <img
        src={gradiant_image}
        alt="Gradient Background"
        className="w-full h-auto transform scale-x-[-1]"
      />
    </div>
    <div className="container md:pb-10 font-semibold ">
      <Heading title=" Our Key Features" />

      <div className="relative grid gap-4 sm:grid-cols-1 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
        {roadmap.map((item) => {
          return (
            <div
              className={`md:flex even:md:translate-y-[5rem] p-0.5 rounded-[1.5rem] ${
                item.colorful
                  ? "bg-gradient-to-b from-[#7076F2] to-[#ba83ece8]"
                  : "bg-n-6"
              }`}
              key={item.id}
            >
              <div className="relative p-3 sm:p-4 md:p-5 bg-n-8 rounded-[1.5rem] overflow-hidden xl:p-8">
                <div className="absolute top-0 left-0 w-full h-full max-w-full">
                  <img
                    className="w-full"
                    src={grid}
                    width={450}
                    height={450}
                    alt="Grid"
                  />
                </div>
                <div className="relative z-1">
                  <div className="flex items-center justify-between mb-4 md:mb-12 max-w-full"></div>

                  <div className=" -my-10 -mx-15">
                    <img
                      style={{ width: '400px', height: '400px', marginLeft: '2rem' }}
                      src={item.imageUrl}
                      alt={item.title}
                    />
                  </div>

                  <h4 className="h5 mb-3 sm:mb-4">{item.title}</h4>
                  <p className="body-2 mb-6 text-n-3">{item.text}</p>
                </div>
              </div>
            </div>
          );
        })}

        <Gradient />
      </div>
    </div>
  </Section>
);

export default Features;

