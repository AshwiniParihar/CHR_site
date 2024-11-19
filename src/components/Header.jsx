import { Link, useLocation } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
 import "../components/styles/hero.css"
import image from "../assets/about_logo.png";
import { navigation } from "../constants";
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
 
const Header = () => {
  const navigate = useNavigate();
  const pathname = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);
 
  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };
  
  
  const handleRequestDemo = () => {
    navigate("/request-demo"); // Navigate to the Request Demo page
  };
 const handleClick = () => {
    // if (!openNavigation) return;
    navigate("/");
    enablePageScroll();
    setOpenNavigation(false);

  };

  const isActive=(url)=>{
    return pathname.hash === url  ;
  }


 
  return (
    <div
      className={`fixed top-0 left-0 w-full z-50  border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${
        openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
      }`}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4 ">
        <div className="flex items-center ">
        <a href="#hero" onClick={handleClick} className="block h-6 w-6 mt-1 object-cover sm:h-8 sm:w-8 md:h-10 md:w-10 flex-shrink-0">
            <img src={image} alt="Brainwave" />
          </a>
            
          <span className="text-white text-base font-semibold sm:text-lg md:text-2xl ml-2 flex-shrink-0">
            CandidHR.ai
          </span>
        </div>
 
        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                onClick={()=>{handleClick(pathname.hash)}}
                
                className={`block relative font-semibold text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${
                  item.onlyMobile ? "lg:hidden" : ""
                } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${
                  // item.url === pathname.hash
                  isActive(item.url)
                    ? "z-2 lg:text-n-1"
                    : "lg:text-n-1/50"
                } lg:leading-5 lg:hover:text-n-1 xl:px-12`}
              >
                {item.title}
              </a>
              
            ))}
            

            <button
              onClick={handleRequestDemo}
              className="bg-gradient-to-r from-[#5459b9] to-[#AEECF9] text-black hover:text-white py-2 px-4 rounded-full shadow-md hover:shadow-lg lg:hidden"
            >
              {/* Request Demo */}Contact Us
            </button>
          </div>
 
          <HamburgerMenu />
        </nav>

       <div className="flex space-x-3">
        
       <Link to={"https://app.candidhr.ai/app/login/"}
          
           className=" text-white ring-1 ring-gray-500 hover:text-white py-2 px-4 rounded-full shadow-md hover:shadow-lg hidden lg:block ml-auto"
         >
        Sign in
         </Link>
 
        <button
           onClick={handleRequestDemo}
           className="bg-gradient-to-r from-[#5459b9] to-[#AEECF9] text-black hover:text-white py-2 px-4 rounded-full shadow-md hover:shadow-lg hidden lg:block ml-auto"
         >
          {/* Request Demo */} Contact Us
         </button>
       </div>
        <Button
          className="ml-auto lg:hidden"
          px="px-3"
          onClick={toggleNavigation}
        >
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  );
};
 
export default Header;


// import { useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import { disablePageScroll, enablePageScroll } from "scroll-lock";
// import "../components/styles/hero.css";
// import image from "../assets/about_logo.png";
// import { navigation } from "../constants";
// import Button from "./Button";
// import MenuSvg from "../assets/svg/MenuSvg";
// import { HamburgerMenu } from "./design/Header";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Header = () => {
//   const navigate = useNavigate();
//   const { hash, pathname } = useLocation();
//   const [openNavigation, setOpenNavigation] = useState(false);

//   const toggleNavigation = () => {
//     if (openNavigation) {
//       setOpenNavigation(false);
//       enablePageScroll();
//     } else {
//       setOpenNavigation(true);
//       disablePageScroll();
//     }
//   };

//   const handleRequestDemo = () => {
//     navigate("/request-demo"); // Navigate to the Request Demo page
//   };

//   const handleClick = () => {
//     if (!openNavigation) return;
//     enablePageScroll();
//     setOpenNavigation(false);
//   };

//   // Scroll to the anchor (hash) when the route changes
//   useEffect(() => {
//     if (hash) {
//       const element = document.querySelector(hash);
//       if (element) {
//         element.scrollIntoView({ behavior: "smooth" });
//       }
//     }
//   }, [hash]);

//   return (
//     <div
//       className={`fixed top-0 left-0 w-full z-50 border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${
//         openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
//       }`}
//     >
//       <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
//         <div className="flex items-center">
//           <a
//             className="block h-6 w-6 mt-1 object-cover sm:h-8 sm:w-8 md:h-10 md:w-10 flex-shrink-0"
//             href="#hero"
//           >
//             <img src={image} alt="Brainwave" />
//           </a>
//           <span className="text-white text-base font-semibold sm:text-lg md:text-2xl ml-2 flex-shrink-0">
//             CandidHR.ai
//           </span>
//         </div>

//         <nav
//           className={`${
//             openNavigation ? "flex" : "hidden"
//           } fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
//         >
//           <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
//             {navigation.map((item) => (
//               <a
//                 key={item.id}
//                 href={item.url}
//                 onClick={handleClick}
//                 className={`block relative font-semibold text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${
//                   item.onlyMobile ? "lg:hidden" : ""
//                 } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${
//                   item.url === hash ? "z-2 lg:text-n-1" : "lg:text-n-1/50"
//                 } lg:leading-5 lg:hover:text-n-1 xl:px-12`}
//               >
//                 {item.title}
//               </a>
//             ))}

//             <button
//               onClick={handleRequestDemo}
//               className="bg-gradient-to-r from-[#5459b9] to-[#AEECF9] text-black hover:text-white py-2 px-4 rounded-full shadow-md hover:shadow-lg lg:hidden"
//             >
//               Request Demo
//             </button>
//           </div>

//           <HamburgerMenu />
//         </nav>

//         <div className="flex space-x-3">
//           <button className="text-white ring-1 ring-gray-500 hover:text-white py-2 px-4 rounded-full shadow-md hover:shadow-lg hidden lg:block ml-auto">
//             Sign in
//           </button>

//           <button
//             onClick={handleRequestDemo}
//             className="bg-gradient-to-r from-[#5459b9] to-[#AEECF9] text-black hover:text-white py-2 px-4 rounded-full shadow-md hover:shadow-lg hidden lg:block ml-auto"
//           >
//             Request Demo
//           </button>
//         </div>
//         <Button className="ml-auto lg:hidden" px="px-3" onClick={toggleNavigation}>
//           <MenuSvg openNavigation={openNavigation} />
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default Header;

