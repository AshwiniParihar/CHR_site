import { useState } from 'react';
import Header from "../components/Header";
 
const faqs = [
  {
    question: 'What are credits?',
    answer: 'Credits are the unit of measurement for CandidHR consumption-based pricing model. They represent the resources used for your selected services.'
  },
  {
    question: 'How are credits used?',
    answer: 'Credits are used based on the services you consume on the CandidHR platform. Different services may require different amounts of credits.'
  },
  {
    question: 'How do I keep track of credit usage?',
    answer: 'CandidHR provides a dashboard to help you monitor your credit usage in real time, allowing you to manage consumption effectively.'
  },
  {
    question: 'How is my bill calculated?',
    answer: 'Your bill is calculated based on the credits consumed during the billing period. The more services you use, the more credits are consumed.'
  },
  
  {
    question: 'Where can I find more detailed info about credit-based pricing?',
    answer: 'For more detailed information, please visit our pricing page or reach out to our support team for a detailed breakdown.'
  }
];
 
const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);
 
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
 
  return (
    <>
    <Header/>
    <div className="  p-4">
      <h2 className="text-5xl font-bold text-center mb-6 mt-7">FAQ</h2>
      <p className="text-center mb-8">
        Learn more about CandidHR pricing in our frequently asked questions or glossary.
      </p>
      {faqs.map((faq, index) => (
        <div key={index} className="mb-4">
          <button
            onClick={() => toggleFAQ(index)}
            className="w-full flex justify-between items-center p-4 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <span className="font-medium text-left text-white">{faq.question}</span>
            <span>{openIndex === index ? '▼' : '►'}</span>
          </button>
          {openIndex === index && (
            <div className="p-4 text-white bg-gray-800 rounded-lg mt-2">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
    </>
  );
};
 
export default Faq;
