import  { useState } from 'react';
 
const Calculator = () => {
  const [numJobs, setNumJobs] = useState('');
  const [resumeScreened, setResumeScreened] = useState('');
  const [mcqTests, setMcqTests] = useState('');
  const [aiInterviews, setAiInterviews] = useState('');
  const [result, setResult] = useState('');
  const [totalCredits, setTotalCredits] = useState(0);
 
  const calculateCredits = () => {
    // Convert empty strings to 0 for calculations
    const jobs = Number(numJobs) || 0;
    const resumes = Number(resumeScreened) || 0;
    const mcq = Number(mcqTests) || 0;
    const ai = Number(aiInterviews) || 0;
 
    const credits = (jobs * resumes * 1) + (jobs * mcq * 2) + (jobs * ai * 3);
    setTotalCredits(credits);
 
    if (credits >= 0 && credits <= 999) {
      setResult('Starter');
    } else if (credits >= 1000 && credits <= 3499) {
      setResult('Growth');
    } else if (credits >= 3500 && credits <= 9999) {
      setResult('Scale');
    } else if (credits >= 10000) {
      setResult('Enterprise - Talk to sales');
    } else {
      setResult('Invalid input');
    }
  };
 
  return (
    <div className="p-8 max-w-xl mx-auto bg-gray-900 bg-opacity-90 rounded-lg border border-gray-600 mt-10">
      <h1 className="text-2xl font-bold mb-6 text-white">Credit Consumption Calculator</h1>
 
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col">
          <label className="text-gray-300 mb-1">Number of Jobs</label>
          <input
            type="number"
            className="w-full p-2 border border-gray-700 rounded bg-gray-800 text-white focus:outline-none focus:ring focus:ring-blue-500"
            value={numJobs}
            placeholder="Enter number of jobs"
            onChange={(e) => setNumJobs(e.target.value)}
          />
        </div>
 
        <div className="flex flex-col">
          <label className="text-gray-300 mb-1">Resume Screened per Job</label>
          <input
            type="number"
            className="w-full p-2 border border-gray-700 rounded bg-gray-800 text-white focus:outline-none focus:ring focus:ring-blue-500"
            value={resumeScreened}
            placeholder="Enter resumes screened"
            onChange={(e) => setResumeScreened(e.target.value)}
          />
        </div>
 
        <div className="flex flex-col">
          <label className="text-gray-300 mb-1">Test Takers per Job (MCQ)</label>
          <input
            type="number"
            className="w-full p-2 border border-gray-700 rounded bg-gray-800 text-white focus:outline-none focus:ring focus:ring-blue-500"
            value={mcqTests}
            placeholder="Enter MCQ test takers"
            onChange={(e) => setMcqTests(e.target.value)}
          />
        </div>
 
        <div className="flex flex-col">
          <label className="text-gray-300 mb-1">AI Interview per Job</label>
          <input
            type="number"
            className="w-full p-2 border border-gray-700 rounded bg-gray-800 text-white focus:outline-none focus:ring focus:ring-blue-500"
            value={aiInterviews}
            placeholder="Enter AI interviews"
            onChange={(e) => setAiInterviews(e.target.value)}
          />
        </div>
      </div>
 
      <button
        className="w-full bg-blue-600 text-white py-2 mt-6 rounded-md hover:bg-blue-700 focus:outline-none"
        onClick={calculateCredits}
      >
        Calculate
      </button>
 
      {result && (
        <div className="mt-6 p-4 bg-gray-800 rounded-md shadow-md text-white text-center">
          <h2 className="text-lg font-bold mb-2">Result Summary</h2>
          <div className="text-gray-300">
            <p>
              <span className="font-semibold text-blue-400">Recomended Plan:</span> {result}
            </p>
            <p>
              <span className="font-semibold text-blue-400">Total Credits:</span> {totalCredits}
            </p>
          </div>
          <div className="mt-2">
            {result === 'Starter' && (
              <p className="text-sm text-gray-400">
                Perfect for getting started with small-scale hiring.
              </p>
            )}
            {result === 'Growth' && (
              <p className="text-sm text-gray-400">
                Ideal for organizations expanding their recruitment efforts.
              </p>
            )}
            {result === 'Scale' && (
              <p className="text-sm text-gray-400">
                Designed for businesses managing large recruitment needs.
              </p>
            )}
            {result === 'Enterprise - Talk to sales' && (
              <p className="text-sm text-gray-400">
                Tailored solutions for enterprise-level hiring. Contact us!
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
 
export default Calculator;