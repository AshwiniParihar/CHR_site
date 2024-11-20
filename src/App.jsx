// import ButtonGradient from "./assets/svg/ButtonGradient";
// import Benefits from "./components/Benefits";
// import AboutUs from "./components/AboutUs";
// import Footer from "./components/Footer";
// import Header from "./components/Header";
// import Hero from "./components/Hero";
// import KeyBenefits from "./components/KeyBenefits";
// // import Pricing from "./components/Pricing";
// import Features from "./components/Features";
// import InfoPage from "./components/InfoPage";
// import Chatbot from "./components/Chatbot";
// // import Contact from "./components/Contact";
// // import RequestDemoForm from "./components/RequestDemo"


// const App = () => {
//   return (
//     <>
//       <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden ">
//         <Header />
//         <Chatbot/>
//         <Hero />
//         <Benefits />
//         <KeyBenefits/>
//         <InfoPage />
//         <Features />
//         {/* <Pricing /> */}
//         <AboutUs />
//        {/* <Contact/> */}
//         <Footer />
//         {/* <RequestDemoForm/> */}
//       </div>

//       <ButtonGradient />
//     </>
//   );
// };

// export default App;



import { Route, Routes } from "react-router-dom";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import KeyBenefits from "./components/KeyBenefits";
import Features from "./components/Features";

import InfoPage from "./components/InfoPage";
import Chatbot from "./components/Chatbot";
import Pricing from "./components/Pricing";
// import Contact from "./components/Contact";
import RequestDemoPage from "./components/RequestDemo"; 
import TermsOfUse from "./components/TermsOfUse";
// import Faq from "./components/Faq";
import FooterFAQ from "./components/FooterFAQ";
import Calculator from "./components/Calculator";



import { Toaster } from 'react-hot-toast';

const App = () => {
  return (
    <>
    
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden ">
        <Routes>
          <Route 
            path="/" 
            element={
              <>
               <Header />
               <Chatbot />
                <Hero />
               <Benefits />
                <KeyBenefits />
                <InfoPage />
               <Features />
              
               <AboutUs />
               {/* <Contact/>  */}
               <Footer />
               
              </>
            } 
          />
        <Route path="/request-demo" element={<RequestDemoPage />} /> 
          <Route path="/pricing" element={ <Pricing />} /> 
          <Route path="/terms-of-use" element={<TermsOfUse />} />
          {/* <Route path="/Faq" element={<Faq />} /> */}
          <Route path="/footer-faq" element={<FooterFAQ/>} />
          <Route path="/cal" element={<Calculator/>} />
        </Routes>
      </div>
      
      <ButtonGradient />

      <Toaster 
        position="top-right" // Customize position if needed
        reverseOrder={false} // Determines the order of the toasts
      />
    </>
  );
};

export default App;

