import  { useState } from "react";
import Header from "../components/Header";
const FooterFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What makes Candid HR Portal unique compared to traditional recruitment tools?",
      answer: "Candid HR Portal integrates AI-powered resume scoring, assessments, and video interviews within a single platform, streamlining recruitment, allowing HR teams to focus on qualified candidates."
    },
    {
      question: "How does the AI-based resume screening work?",
      answer: "The AI engine evaluates resumes based on HR-defined criteria. Each attribute (e.g., skills, experience, certifications) is scored out of 10, providing an objective metric for comparison."
    },
    {
      question: "Can HR adjust the scoring criteria for different job roles?",
      answer: "Yes, HR can assign weights to various qualifications, skills, certifications, and experience, totaling exactly 10 points for a tailored evaluation."
    },
    {
      question: "Are there customization options for the assessment?",
      answer: "Yes, HR can select or create job-specific questions, ensuring the assessment aligns with the role’s essential skills and knowledge areas."
    },
    {
      question: "Can HR choose the order of the Test Assessment and Video interview assessments?",
      answer: "Yes, Candid HR Portal offers flexibility in sequencing the Test Assessment and video interview stages to suit the role and hiring strategy."
    },
    {
      question: "What options are available for candidate status management?",
      answer: "HR can categorize candidates as shortlisted, on hold, under review, or not shortlisted, making it easier to track progress throughout the recruitment pipeline."
    },
    {
      question: "Does the AI scoring influence HR’s final decision?",
      answer: "The AI scoring serves as a guideline to highlight strengths and potential gaps, but HR makes the final decision on candidate suitability."
    },
    {
      question: "What types of assessments can I assign to candidates?",
      answer: "CandidHR Portal offers two types of assessments: pre-built assessments (standardized tests available within the platform) and customized assessments (tailored by your organization to meet job-specific needs)."
    },
    {
      question: "How do I set the assessment validity period?",
      answer: "In the Configuration section, you can specify how long the assessment link will be active by setting an expiry date. This period ensures candidates complete the assessment within a specific timeframe."
    },
    {
      question: "Can I edit a custom assessment after creating it?",
      answer: "Yes, custom assessments can be edited in the Test Builder section. Go to the test, click on actions, and select edit. Make the necessary changes and save them, but you cannot edit the assessment after publishing it."
    },
    {
      question: "How are candidates notified about the assessment?",
      answer: "Once you assign an assessment, candidates receive an email with the assessment link and instructions on how to complete it."
    },
    {
      question: "What should I do if a candidate’s assessment link expires?",
      answer: "If an assessment link expires, you can reassign the test by setting a new validity period in the Configuration section and sending the updated link to the candidate."
    },
    {
      question: "Can I view candidate results directly on CandidHR Portal?",
      answer: "Yes, once candidates complete the assessment, their scores and results are automatically available in their profile within CandidHR Portal, allowing HR to review performance quickly."
    },
    {
      question: "How can I ensure that the difficulty level is appropriate for the job role?",
      answer: "When creating a custom assessment, you can set the Difficulty level in Test Builder to match the job’s requirements. This ensures that candidates are tested at an appropriate level for the role. You can even set the difficulty level per question too."
    },
    {
      question: "What domains and categories are available in the Test Builder?",
      answer: "The Test Builder offers a range of domains and categories that can be customized based on your needs. Domains might include areas like technical skills, management, or finance, while categories might cover specific skill sets, such as analytical skills or problem-solving. You can see this while creating new assessments."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (

    <>
    <Header/>
    <div className="w-full max-w-4xl mx-auto p-6 mt-20">
      <h2 className="text-4xl font-bold text-center mb-11">FAQ Section for Candid HR Portal</h2>
      {faqs.map((faq, index) => (
        <div key={index} className="mb-4">
          <button
            onClick={() => toggleFAQ(index)}
            className="w-full flex justify-between items-center p-4 text-white bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <span className="font-medium text-left">{faq.question}</span>
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

export default FooterFAQ;
