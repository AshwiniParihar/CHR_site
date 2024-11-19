
import Calculator from '../components/CreditConsumptionCalculator'
const CreditsComponent = () => {
  return (
    <div className="w-full max-w-2xl mx-auto text-white p-8 md:max-w-6xl">
     
      <div className="text-center mb-12">
        <h2 className="text-5xl font-semibold mb-4 mt-20">How credits work</h2>
        <p className="text-lg text-gray-400 mt-11">
          When you buy a credit package, you get access to CandidHR.ai features—
          for an unlimited number of users. The pool of credits you purchase is
          drawn down as your people use those features.
        </p>
      </div>
 
     
      <div>
        <h3 className="text-2xl font-semibold mb-6">Credit consumption*</h3>
        <div className="border-t border-gray-700">
          <div className="grid grid-cols-2 text-left py-4 border-b border-gray-700">
            <div className="text-gray-200">Features</div>
            <div className="text-gray-200">Number of credits</div>
          </div>
          {[
            ["Resume Screening", "1 credit per Resume Screened."],
            ["MCQ Assessments", "2 credits per Candidate Assessment Submission."],
            ["AI Video Interviews", "3 credits per Interviews Taken."],
           
          ].map(([execution, credit], index) => (
            <div
              key={index}
              className="grid grid-cols-2 py-4 border-b border-gray-700 text-gray-300"
            >
              <div>{execution}</div>
              <div>{credit}</div>
            </div>
          ))}
        </div>
        <p className="text-sm text-gray-300 mt-4 text-center">*Subject to change.</p>
      </div>
     
      <Calculator/>
    </div>
   
  );
};
 
export default CreditsComponent;