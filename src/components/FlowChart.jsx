import dotted_bg_img from "../assets/dotted_bg.png";
import gradian_image from '../assets/gradiant.png';
 
const FlowChart = () => {
    return (
        <div className='mb-20 relative'>
 
            {/* Main Section */}
            <div className="hidden md:flex flex-col items-center justify-center text-center p-6  relative z-0 ">
 
 
                {/* Main Section with Flexbox for Heading and Subheadings */}
                <div className=" flex items-center justify-center space-x-8">
 
                    {/* Gradient Line and Heading */}
                    <div className="flex items-center space-x-3 ">
                        <div className="w-3 h-20 bg-gradient-to-b from-purple-400 to-indigo-400"></div>
                        <h1 className="text-7xl font-extrabold tracking-wider text-white">
                            REDUCE
                        </h1>
                    </div>
 
                    {/* Subheading Items */}
                    <div className="text-white space-y-1 text-left font-bold">
                        <p>Hiring time</p>
                        <p>Efforts</p>
                        <p>Subjectivity involved</p>
                    </div>
                </div>
 
                {/* Call to Action Button */}
                <div className="pb-10">
                    <button className="mt-8 bg-[#30313B] text-white py-2 px-6 rounded-full text-sm tracking-wider shadow-lg hover:bg-opacity-80">
                        Short steps, Smart hiring
                    </button>
                </div>
            </div>
 
            {/* Content for Larger Screens */}
            <div className="hidden md:flex relative min-h-screen justify-center items-center ">
 
                <div className="relative grid grid-cols-9 gap-4 items-center">
                    {/* Central Dashed Line for Large Screens */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 top-0 w-0.5 h-[calc(100%-80px)] border-l-2 border-dashed border-gray-400 z-0"></div>
 
                    {/* Step 1 */}
                    <div className="col-span-4 text-right mb-10">
                        <h2 className="font-semibold text-xl text-white">Job Set up</h2>
                        <p className="text-sm text-gray-400 max-w-xs ml-auto">
                            Effortlessly create job posting with a few clicks
                        </p>
                    </div>
                    <div className="col-span-1 flex justify-center z-10 relative mb-16">
                        <div className="w-12 h-12 flex items-center justify-center bg-[#374151] rounded-full text-white">
                            1
                        </div>
                    </div>
                    <div className="col-span-4 mb-16"></div>
 
                    {/* Step 2 */}
                    <div className="col-span-4 mb-16"></div>
                    <div className="col-span-1 flex justify-center z-10 relative mb-16">
                        <div className="w-12 h-12 flex items-center justify-center bg-[#374151] rounded-full text-white">
                            2
                        </div>
                    </div>
                    <div className="col-span-4 text-left mb-16">
                        <h2 className="font-semibold text-xl text-white">Candidate Applications</h2>
                        <p className="text-sm text-gray-400 max-w-xs">
                            Candidates can apply using the link you’ve created
                        </p>
                    </div>
 
                    {/* Step 3 */}
                    <div className="col-span-4 text-right mb-16">
                        <h2 className="font-semibold text-xl text-white">AI-Powered Screening</h2>
                        <p className="text-sm text-gray-400 max-w-xs ml-auto">
                            Our system auto-matches the candidates resume to the created job description
                        </p>
                    </div>
                    <div className="col-span-1 flex justify-center z-10 relative mb-16">
                        <div className="w-12 h-12 flex items-center justify-center bg-[#374151] rounded-full text-white">
                            3
                        </div>
                    </div>
                    <div className="col-span-4 mb-16"></div>
 
                    {/* Step 4 */}
                    <div className="col-span-4 mb-16"></div>
                    <div className="col-span-1 flex justify-center z-10 relative mb-16">
                        <div className="w-12 h-12 flex items-center justify-center bg-[#374151] rounded-full text-white">
                            4
                        </div>
                    </div>
                    <div className="col-span-4 text-left mb-16">
                        <h2 className="font-semibold text-xl text-white">HR Review for MCQ Testing</h2>
                        <p className="text-sm text-gray-400 max-w-xs">
                            HR can assign a relevant MCQ test tailored to the job role
                        </p>
                    </div>
 
                    {/* Step 5 */}
                    <div className="col-span-4 text-right mb-16">
                        <h2 className="font-semibold text-xl text-white">AI Video Interviews</h2>
                        <p className="text-sm text-gray-400 max-w-xs ml-auto">
                            HR can assign AI-powered interviews
                        </p>
                    </div>
                    <div className="col-span-1 flex justify-center z-10 relative mb-16">
                        <div className="w-12 h-12 flex items-center justify-center bg-[#374151] rounded-full text-white">
                            5
                        </div>
                    </div>
                    <div className="col-span-4 mb-16"></div>
 
                    {/* Step 6 */}
                    <div className="col-span-4 mb-16"></div>
                    <div className="col-span-1 flex justify-center z-10 relative mb-16">
                        <div className="w-12 h-12 flex items-center justify-center bg-[#374151] rounded-full text-white">
                            6
                        </div>
                    </div>
                    <div className="col-span-4 text-left mb-16">
                        <h2 className="font-semibold text-xl text-white">Final Steps</h2>
                        <p className="text-sm text-gray-400 max-w-xs">
                            After reviewing transcripts, MCQ tests & video responses
                        </p>
                    </div>
 
                    {/* Continue with other steps for larger screens as before... */}
                </div>
 
                {/* Background Images */}
                <div className="absolute inset-x-0 bottom-0 z-[-1] ">
                    <img src={dotted_bg_img} alt="Background" className="w-full object-cover" />
                </div>
                <div className="absolute top-0 -left-[10rem] w-[56.625rem] h-[56.625rem]  ">
                    <img
                        className="absolute  left-1/2 w-[79.5625rem] max-w-[79.5625rem] h-[88.5625rem] -translate-x-1/2 -translate-y-1/2"
                        src={gradian_image}
                        width={1417}
                        height={1417}
                        alt="Gradient"
                    />
                </div>
 
                <div className="absolute top-0 right-0 z-[-1] w-1/3  h-auto">
                    <img
                        src={gradian_image}
                        alt="Gradient Background"
                        className="w-full h-auto transform scale-x-[-1]"
                    />
                </div>
            </div>
 
            {/* Content for Small Screens (Mobile View) */}
            <div className='relative md:hidden'>
 
                {/* Main Section */}
                <div className="flex flex-col items-center justify-center text-center   relative z-0">
 
                    {/* Main Section with Flexbox for Heading and Subheadings */}
                    <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-8">
 
                        {/* Gradient Line and Heading */}
                        <div className="flex items-center space-x-3">
                            <div className="w-2 md:w-3 h-12 md:h-20 bg-gradient-to-b from-purple-400 to-indigo-400"></div>
                            <h1 className="text-4xl md:text-7xl font-extrabold tracking-wider text-white">
                                REDUCE
                            </h1>
                        </div>
 
                        {/* Subheading Items */}
                        <div className="text-white space-y-1 text-center md:text-left font-bold">
                            <p className="text-sm text-gray-300">Hiring time</p>
                            <p className="text-sm text-gray-300">Efforts</p>
                            <p className="text-sm text-gray-300">Subjectivity involved</p>
                        </div>
                    </div>
 
                    {/* Call to Action Button */}
                    <div className="">
                        <button className="mt-8 bg-[#30313B] text-white py-3 px-5 md:px-6 rounded-full text-xs md:text-sm tracking-wider shadow-lg hover:bg-opacity-80">
                            Short steps, Smart hiring
                        </button>
                    </div>
                </div>
            </div>
 
            <div className="flex md:hidden flex-col items-start space-y-8 relative z-0 p-6">
 
 
 
                {/* Central Dashed Line for Mobile Screens */}
                <div className="absolute left-12  transform -translate-x-1/2 top-20 w-0.5 h-[calc(100%-150px)] border-l-2 border-dashed border-gray-400 z-0"></div>
 
                {/* Step 1 */}
                <div className="flex items-center space-x-4 relative">
                    <div className="w-14 h-12 flex items-center justify-center bg-[#374151] rounded-full text-white">
                        1
                    </div>
                    <div>
                        <h2 className=" text-lg text-white">Job Set up</h2>
                        <p className="text-sm text-gray-400 max-w-xs">
                            Effortlessly create job posting with a few clicks
                        </p>
                    </div>
                </div>
 
                {/* Step 2 */}
                <div className="flex items-center space-x-4 relative">
                    <div className="w-14 h-12 flex items-center justify-center bg-[#374151] rounded-full text-white">
                        2
                    </div>
                    <div>
                        <h2 className=" text-lg text-white">Candidate Applications</h2>
                        <p className="text-sm text-gray-400 max-w-xs">
                            Candidates can apply using the link you’ve created
                        </p>
                    </div>
                </div>
                {/* Step 3 */}
                <div className="flex items-center space-x-4 relative">
                    <div className="w-14 h-12 flex items-center justify-center bg-[#374151] rounded-full text-white">
                        3
                    </div>
                    <div>
                        <h2 className=" text-lg text-white">AI-Powered Screening</h2>
                        <p className="text-sm text-gray-400 max-w-xs">
                            Our system auto-matches the candidates resume to the created job description
                        </p>
                    </div>
                </div>
 
                {/* Step 4 */}
                <div className="flex items-center space-x-4 relative">
                    <div className="w-14 h-12 flex items-center justify-center bg-[#374151] rounded-full text-white">
                        4
                    </div>
                    <div>
                        <h2 className=" text-lg text-white">HR Review for MCQ Testing</h2>
                        <p className="text-sm text-gray-400 max-w-xs">
                            HR can assign a relevant MCQ test tailored to the job role
                        </p>
                    </div>
                </div>
 
                {/* Step 5 */}
                <div className="flex items-center space-x-4 relative">
                    <div className="w-14 h-12 flex items-center justify-center bg-[#374151] rounded-full text-white">
                        5
                    </div>
                    <div>
                        <h2 className=" text-lg text-white">AI Video Interviews</h2>
                        <p className="text-sm text-gray-400 max-w-xs">
                            HR can assign automated AI-powered video interviews.
                        </p>
                    </div>
                </div>
 
 
                {/* Step 6 */}
                <div className="flex items-center space-x-4 relative">
                    <div className="w-14 h-12 flex items-center justify-center bg-[#374151] rounded-full text-white">
                        6
                    </div>
                    <div>
                        <h2 className=" text-lg text-white">Final Steps</h2>
                        <p className="text-sm text-gray-400 max-w-xs">
                            After reviewing transcripts, MCQ tests & video responses
                        </p>
                    </div>
                </div>
 
 
                {/* Continue with other steps for mobile screens... */}
            </div>
        </div>
    );
};
 
export default FlowChart;
 