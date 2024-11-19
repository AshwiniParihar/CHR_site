import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ellipse from "../images/Ellipse 8.png";
import toast from "react-hot-toast";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css"; // Import the CSS for the phone input
import "../../src/components/styles/requestdemo.css";
import { FaFacebook, FaTwitter, FaInstagram, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { Link } from "react-router-dom";

export default function RequestDemo() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    jobTitle: "",
    company: "",
    consent: false,
  });

  const [errors, setErrors] = useState({});
  const [formVisible] = useState(true);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validate = () => {
    const newErrors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const namePattern = /^[a-zA-Z ]+$/;
    const companyPattern = /^[a-zA-Z0-9 ]+$/;
    const phonePattern = /^\+?[0-9]{10,14}$/;

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required.";
    } else if (!namePattern.test(formData.firstName)) {
      newErrors.firstName =
        "First name should contain only alphabets and spaces.";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required.";
    } else if (!namePattern.test(formData.lastName)) {
      newErrors.lastName =
        "Last name should contain only alphabets and spaces.";
    }

    if (!emailPattern.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.phone) {
      newErrors.phone = "Phone number is required.";
    } else if (!phonePattern.test(formData.phone)) {
      newErrors.phone =
        "Phone number must be between 10 and 14 digits and may include a leading +.";
    }

    if (!formData.jobTitle.trim()) {
      newErrors.jobTitle = "Job title is required.";
    } else if (!namePattern.test(formData.jobTitle)) {
      newErrors.jobTitle =
        "Job title should contain only alphabets and spaces.";
    }

    if (!formData.company.trim()) {
      newErrors.company = "Company name is required.";
    } else if (!companyPattern.test(formData.company)) {
      newErrors.company =
        "Company name should contain only alphabets and numbers.";
    }

    if (!formData.consent) {
      newErrors.consent =
        "You must give consent to receive marketing material.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      setLoading(true);
      try {
        const response = await axios.post(
          "",
          formData
        );
        toast.success(response.data.message);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          jobTitle: "",
          company: "",
          consent: false,
        });
      } catch (error) {
        const errorMessage =
          error.response?.data?.error ||
          "An error occurred while submitting the form.";
        toast.error(errorMessage);
      } finally {
        setLoading(false);
      }
    }
  };

  const handleClose = () => {
    navigate("/");
  };

  if (!formVisible) return null;

  return (
    <div className="relative w-full h-[calc(96vh-4rem)] flex items-center justify-center">
      <div className="absolute right-0 z-[-1] rotate-180 hidden lg:block">
        <img
          src={ellipse}
          alt="Gradient Background"
          className="w-full h-auto transform scale-x-[-1]"
        />
      </div>

      <div className="p-6 md:p-8 rounded-md shadow-md w-full max-w-7xl mx-4 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* <div className="text-center lg:text-left">
            <h1 className="text-3xl md:text-4xl font-semibold text-white mb-4 leading-snug">
              Book your 30-minute <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7076F2] to-[#AEECF9]">
                CandidHR.ai
              </span>{" "}
              demo
            </h1>
            <ul className="list-disc pl-5 text-white space-y-2 text-sm md:text-xl mt-10 lg:mt-16">
              <li>
                Get a personalized demo of{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7076F2] to-[#AEECF9]">
                  CandidHR.ai
                </span>
              </li>
              <li>Hear proven customer success stories</li>
              <li>Learn about pricing for your use case</li>
            </ul>
          </div> */}
          <div className="lg:w-1/ p-8 bg-opacity-25 rounded-lg shadow-lg">
            <h2 className="lg:text-4xl 2xl:text-6xl text-3xl font-semibold mb-6 text-white relative z-0">Contact Us</h2>
            <p className="mb-6 text-gray-300">Feel free to reach out to us with any questions or inquiries you may have, and we will be happy to assist you!</p>

            <div className="space-y-6 text-lg">
              <div className="flex items-center">
                <FaMapMarkerAlt className="mr-4 text-gray-400" size={24} />
                <span className="text-gray-400">Pune</span>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="mr-4 text-gray-400" size={24} />
                <span className="text-gray-400">info@candidHR.ai</span>
              </div>
              <div className="flex items-center">
                <FaPhoneAlt className="mr-4 text-gray-400" size={24} />
                <span className="text-gray-400">(+46) 033-112233</span>
              </div>
            </div>

            <div className="mt-10">
              <div className="flex space-x-6 mt-8">
                
                <Link to ="https://www.facebook.com/profile.php?id=61565655770371&mibextid=ZbWKwL" target="_blank"  className="text-white hover:text-blue-500">
                  <FaFacebook size={24} />
                </Link>
                
                <Link to ="https://x.com/candidhr_ai?t=YdzOk6-7Wori3Mcf0png7Q&s=09" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400">
                  <FaTwitter size={24} />
                </Link>
                <Link to="https://www.instagram.com/candidhr.ai?igsh=MTlxMXNhZnoxa3A5eA" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-500">
                  <FaInstagram size={24} />
                </Link>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-5/6 mx-auto lg:mx-0">
            <form
              onSubmit={handleSubmit}
              className="space-y-4 p-4 sm:p-6 md:p-8 bg-opacity-80 bg-slate-800 rounded-lg border border-gray-500 relative z-0 lg:max-h-[85vh]"
            >
              <input
                type="text"
                name="firstName"
                placeholder="First name"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full p-2 sm:p-3 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                aria-describedby="firstNameError"
              />
              {errors.firstName && (
                <p id="firstNameError" className="text-red-500 text-sm">
                  {errors.firstName}
                </p>
              )}

              <input
                type="text"
                name="lastName"
                placeholder="Last name"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full p-2 sm:p-3 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                aria-describedby="lastNameError"
              />
              {errors.lastName && (
                <p id="lastNameError" className="text-red-500 text-sm">
                  {errors.lastName}
                </p>
              )}

              <input
                type="email"
                name="email"
                placeholder="Work email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 sm:p-3 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                aria-describedby="emailError"
              />
              {errors.email && (
                <p id="emailError" className="text-red-500 text-sm">
                  {errors.email}
                </p>
              )}

              {/* Updated PhoneInput field */}
              <PhoneInput
                country={"in"}
                value={formData.phone}
                onChange={(phone) => setFormData({ ...formData, phone })}
                className="w-full p-2 sm:p-3 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 bg-black text-white"
                inputStyle={{
                  backgroundColor: "black",
                  color: "white",
                  border: "none",
                }}
                dropdownClass="phone-input-dropdown" // Use your custom class
              />

              {errors.phone && (
                <p id="phoneError" className="text-red-500 text-sm">
                  {errors.phone}
                </p>
              )}

              <input
                type="text"
                name="jobTitle"
                placeholder="Job title"
                value={formData.jobTitle}
                onChange={handleChange}
                className="w-full p-2 sm:p-3 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                aria-describedby="jobTitleError"
              />
              {errors.jobTitle && (
                <p id="jobTitleError" className="text-red-500 text-sm">
                  {errors.jobTitle}
                </p>
              )}

              <input
                type="text"
                name="company"
                placeholder="Company name"
                value={formData.company}
                onChange={handleChange}
                className="w-full p-2 sm:p-3 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                aria-describedby="companyError"
              />
              {errors.company && (
                <p id="companyError" className="text-red-500 text-sm">
                  {errors.company}
                </p>
              )}

              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="consent"
                  checked={formData.consent}
                  onChange={handleChange}
                  className="mr-2"
                />
                I consent to receiving marketing material.
              </label>
              {errors.consent && (
                <p className="text-red-500 text-sm">{errors.consent}</p>
              )}

              <div>
                <div>
                  <button
                    type="submit"
                    className={`w-full p-2 sm:p-3 bg-blue-400 text-white rounded-md hover:bg-blue-600 transition duration-200 ${
                      loading ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                    disabled={loading}
                  >
                    {loading ? "Loading..." : "Contact Us"}
                  </button>
                </div>
                <div className="flex justify-center mt-7 mb-7">
                  <button
                    onClick={handleClose}
                    className="absolute text-center text-purple-500 hover:text-blue-400 transition duration-200"
                  >
                    Go Back to Home Page
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
