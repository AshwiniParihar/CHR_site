import {
 
  file02,
  homeSmile,
  plusSquare,
  searchMd
  
} from "../assets";
import aboutImage from "../assets/about_logo.png"
import card from "../assets/card-6.svg"
import feature1 from "../assets/keyfeatures/resume_screening.png"
import feature2 from "../assets/keyfeatures/audio_screening.png"
import feature3 from "../assets/keyfeatures/exam.png"
import feature4 from "../assets/keyfeatures/automated.png"

import {
  faUser,
  faLightbulb,
  faHandshake,
  faMoneyBillAlt,
  faEnvelope,
  faClock
} from '@fortawesome/free-solid-svg-icons';

export const navigation = [
  {
    id: "0",
    title: "Benefits",
    url: "#benifits",
  },
  {
    id: "1",
    title: "How It Works",
    url: "#how-to-use",
   
  },
  {
    id: "2",
    title: "Features",
    url: "#features",
  },
  {
    id: "3",
    title: "About us",
    url:"#aboutus",
  },
  {
    id: "4",
   
    title: "Pricing",
    url: "/pricing",
   
  },
  {
    id: "5",
    title: "Sign in",
    url: "https://app.candidhr.ai/app/login/",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const companyLogos = [];

export const brainwaveServices = [
  "Automated Screening",
  "Enhanced Interviews",
  "Data-Driven Insights",
];

export const roadmap = [
  {
    id: "0",
    title: "AI- based resume screening and candidate ranking",
    text: "Automates the process of analyzing resumes, identifying top skills, keywords, and relevant experience to match job requirements instantly",
    imageUrl: feature1,
    colorful: true,
  },
  {
    id: "1",
    title: "Audio Screening with Red Flag Detection",
    text: "Analyzes candidate audio responses for communication skills, tone, and clarity while automatically flagging inconsistencies, unprofessional behavior, or concerning patterns for smarter, unbiased hiring decisions",
    imageUrl: feature2,
    colorful: true,
  },
  {
    id: "2",
    title: "Pre-built MCQ Tests",
    text: "Customizable multiple-choice tests designed to assess candidates' skills and knowledge across various roles, saving time and ensuring standardized evaluations.",
    imageUrl:feature3,
    colorful: true,
  },
  {
    id: "3",
    title: "Automated Video Interview",
    text: "Conducts structured video interviews with candidates, leveraging AI to assess communication, body language, and responses, streamlining the interview process with consistent and unbiased evaluation.",
    imageUrl: feature4,
    colorful: true,
  },
];
export const collabText =
  " CandidHR is our latest innovation in streamlining the hiring process, making it faster, smarter, and more effective.";
export const collabText1 =
  "To empower companies to hire the right talent efficiently, leveraging AI and automation.";

export const collabContent = [
  {
    id: "0",
    text1: collabText,
    title: "Our Vision",
    text2: collabText1,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Starter",
    description: "Choose the Plan that Fits Your Hiring Needs and Budget",
    price: " $499 ",
    credit:"($2 per credit)",
    features: [
      "250 Credits",
      "30 days Free Onboarding Support",
      "Resume Screening",
      "Audio Responses Analysis",
      "MCQ Assessments",
      "Video Interview",
      "Normal Support"
    ],
  },
  {
    id: "1",
    title: "Growth",
    description: "Choose the Plan that Fits Your Hiring Needs and Budget",
    price: "$1899 ",
    credit:"($2 per credit)",
    features: [
      "1000 Credits",
      "30 days Free Onboarding Support",
      "Resume Screening",
      "Audio Responses Analysis",
      "MCQ Assessments",
      "Video Interview",
      "24/7 Support"
    ],
  },
  {
    id: "2",
    title: "Scale",
    description: "Choose the Plan that Fits Your Hiring Needs and Budget",
    price: "$3299 ",
    credit:"($2 per credit)",
    features: [
      "3500 Credits",
      "30 days Free Onboarding Support",
      "Resume Screening",
      "Audio Responses Analysis",
      "MCQ Assessments",
      "Video Interview",
      "24/7 Support"
    ],
  },
  {
    id: "3",
    title: "Enterprise",
    description: "Choose the Plan that Fits Your Hiring Needs and Budget",
    price: "Volume Discounts",
    credit:"",
    features: [
      "30 days Free Onboarding Support",
      "Resume Screening",
      "Audio Responses Analysis",
      "MCQ Assessments",
      "Video Interview",
      "24/7 Support Premium Support",
      
    
    ],
  },
];

// Update the benefits array
export const benefits = [
  {
    id: "0",
    title: "Enhanced Employer Experience",
    text: "With minimum human efforts and user-friendly interface makes applying, tracking, and engaging with the recruitment process effortless.",
  
    icon: faUser, // Pass the icon object
    imageUrl: [aboutImage,card]
  },
  {
    id: "1",
    title: "One Stop Solution for all Rounds",
    text: "CV Scanning, AI Screening, Ranking, Prebuilt Test, Audio interview, video interviews till final round – Everything within few clicks",
 
    icon: faLightbulb,
    imageUrl: [aboutImage,card],
    light: true,
  },
  {
    id: "2",
    title: "Reduction in Resume Noise ",
    text: "Minimize resume clutter and ensure no top candidate gets overlooked in the pool of applications.",
    
    icon: faHandshake,
    imageUrl: [aboutImage,card],
  },
  {
    id: "3",
    title: "Cost Saving (Credit Basis)",
    text: "Predictable costs, paired with a flexible credit system, offer an efficient and scalable solution to meet your hiring needs effectively.",
   
    icon: faMoneyBillAlt,
    imageUrl: [aboutImage,card],
    light: true,
  },
  {
    id: "4",
    title: "Ease of communication ",
    text: "Minimal manual interaction is achieved with automated emails, ensuring smooth communication with candidates.",
    
    icon: faEnvelope,
    imageUrl: [aboutImage,card],
  },
  {
    id: "5",
    title: "Time-Saving Automation",
    text: "Auto set emails and pre built automated tests saves time of continues interaction and allows candidates to complete the process as per their convivence",
    
    icon: faClock,
    imageUrl: [aboutImage,card],
  },
];
