import { check } from "../assets";
import { pricing } from "../constants";
import Header from "./Header";


const PricingList = () => {
  return (
    <>
    <Header/>
    <div className="flex gap-[1rem] max-lg:flex-wrap">
      {pricing.map((item) => (
        <div
          key={item.id}
          className="w-[19rem] max-lg:w-full h-full px-6 bg-n-8 border border-n-5 rounded-[2rem] lg:w-auto    "
        >
          <h4 className="h4 mb-4 p-2 mt-3">{item.title}</h4>

          {/* <p className="body-2 min-h-[4rem] mb-3 text-n-1/50">
            {item.description}
          </p> */}

          <div className="flex items-center h-[5.5rem] mb-6">
            {item.price && (
              <>
                <div className="text-xl"></div>
                
                <div className={`leading-none font-bold ${item.id==="3"?"text-[2rem]":"text-[4rem]"}`}>
                  {item.price}
                  <div className="text-sm p-2">
                  {item.credit}
                  </div>
                </div>
              </>
            )}
          </div>
{/* 
          <a
            className=" mb-6 bg-gradient-to-r from-[#5459b9] to-[#AEECF9] text-black py-2.5 px-6 rounded-full shadow-md hover:shadow-lg"
            href={item.price ? "/pricing" : "mailto:contact@jsmastery.pro"}
         
          >
            {item.price ? "Get started" : "Contact us"}
          </a> */}

          <ul className="mt-4">
            {item.features.map((feature, index) => (
              <li
                key={index}
                className="flex items-start py-5 border-t border-n-6 "
              >
                <img src={check} width={24} height={24} alt="Check" />
                <p className="body-2 ml-4">{feature}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
      
    </div>
    </>
  );
};

export default PricingList;
