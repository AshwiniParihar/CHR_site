import Section from "./Section";
import Heading from "./Heading";
import {  check } from "../assets";
import flow0 from '../assets/flow0.png';
import flow1 from '../assets/flow1.png';
import flow2 from '../assets/Flow2.png';
import { brainwaveServices } from "../constants";
import {
 
  Gradient,
 
 
} from "./design/Services";
 
import Generating from "./Generating";
import FlowChart from "./FlowChart";
 
const InfoPage = () => {
  return (
    <Section id="how-to-use">
      <FlowChart/>
      <div className="container">
      <h1 className="text-center text-3xl lg:text-5xl font-semibold">
  What is <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7076F2] to-[#AEECF9]">CandidHR?</span>
</h1>
<Heading className="font-semibold text-center px-2"
         
          text="CandidHR.ai unlocks the potential of AI-powered applications"
        />
 
        <div className="relative">
          <div className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none hidden md:block md:w-3/5 xl:w-auto">
  <img
    className="object-cover md:object-right mt-16 ml-10 rounded-lg"
    width={750}
    alt="AI powered"
    height={730}
    src={flow0}
  />
</div>
 
            <div className="relative z-1 max-w-[17rem] ml-auto">
              <h4 className="h4 mb-4">AI-powered hiring platform</h4>
              <p className="body-2 mb-[3rem] text-n-3">
              It revolutionizes the recruitment process by leveraging advanced AI technology to streamline hiring, making it faster.
              </p>
              <ul className="body-2">
                {brainwaveServices.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start py-4 border-t border-n-6"
                  >
                    <img width={24} height={24} src={check} />
                    <p className="ml-4">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
 
            <Generating className="absolute left-4 right-4 bottom-4 border-n-1/10 border lg:left-1/2 lg-right-auto lg:bottom-8 lg:-translate-x-1/2" />
          </div>
 
          <div className="relative z-1 grid gap-5 lg:grid-cols-2">
            <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden">
              <div className="absolute inset-0 mt-20 mx-10">
                <img
                  src={flow1}
                  className=" object-cover rounded-lg"
                  width={630}
                  height={750}
                  alt="robot"
                />
              </div>
 
              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
                <h4 className="h4 mb-4">Streamlines recruitment process</h4>
                <p className="body-2 mb-[3rem] text-n-3">
                By simplifying each step of the hiring journey, the platform effectively streamlines the recruitment process.
                </p>
              </div>
 
             
            </div>
 
            <div className="p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[46rem]">
              <div className="py-12 px-4 xl:px-8">
                <h4 className="h4 mb-4">Enhances candidate assessments</h4>
                <p className="body-2 mb-[2rem] text-n-3">
                Advanced AI algorithms that analyze skills and competencies, providing deeper insights into each applicants qualification.
                </p>
 
               
              </div>
 
              <div className="relative h-[20rem] rounded-xl overflow-hidden md:h-[25rem] pb-10 md:flex justify-center">
                <img
                  src={flow2}
                  className="object-cover rounded-lg "
                  width={520}
                  height={400}
                  alt="Scary robot"
                />
 
               
               
              </div>
            </div>
          </div>
 
          <Gradient />
        </div>
      </div>
    </Section>
  );
};
 
export default InfoPage;