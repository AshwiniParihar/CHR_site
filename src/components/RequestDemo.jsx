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
          "http://localhost:5000/api/demo/request-demo",
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
    <div className="relative w-full h-auto flex flex-col items-center justify-center p-4 sm:p-4 md:p-8 md:h-[calc(96vh-4rem)]">
      <div className="absolute right-0 z-[-1] rotate-180 hidden lg:block">
        <img
          src={ellipse}
          alt="Gradient Background"
          className="w-full h-auto transform scale-x-[-1]"
        />
      </div>
  
      <div className="p-4 sm:p-6 md:p-8 bg-opacity-80 rounded-md shadow-md w-full max-w-4xl mx-2 sm:mx-4 md:mx-4 lg:mx-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          <div className="p-4 sm:p-6 bg-opacity-25 rounded-lg shadow-lg">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-2 sm:mb-4 text-white">Contact Us</h2>
            <p className="mb-2 sm:mb-4 text-sm sm:text-base text-gray-300">Feel free to reach out to us with any questions or inquiries you may have, and we will be happy to assist you!</p>
            <div className="space-y-2 sm:space-y-4 text-base sm:text-lg">
              <div className="flex items-center">
                <FaMapMarkerAlt className="mr-2 sm:mr-4 text-gray-400" size={20} />
                <span className="text-gray-400">Pune</span>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="mr-2 sm:mr-4 text-gray-400" size={20} />
                <span className="text-gray-400">info@candidHR.ai</span>
              </div>
              <div className="flex items-center">
                <FaPhoneAlt className="mr-2 sm:mr-4 text-gray-400" size={20} />
                <span className="text-gray-400">(+46) 033-112233</span>
              </div>
            </div>
  
            <div className="mt-2 sm:mt-4 md:mt-8">
              <div className="flex space-x-2 sm:space-x-4 md:space-x-6">
                <Link to="https://www.facebook.com" target="_blank" className="text-white hover:text-blue-500">
                  <FaFacebook size={20} />
                </Link>
                <Link to="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400">
                  <FaTwitter size={20} />
                </Link>
                <Link to="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-500">
                  <FaInstagram size={20} />
                </Link>
              </div>
            </div>
          </div>
  
          <div className="w-full">
            <form
              onSubmit={handleSubmit}
              className="space-y-2 sm:space-y-4 p-4 sm:p-6 md:p-8 bg-opacity-80 bg-gray-800 rounded-lg border border-gray-500"
            >
              <input
                type="text"
                name="firstName"
                placeholder="First name"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full p-2 sm:p-3 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm">{errors.firstName}</p>
              )}
  
              <input
                type="text"
                name="lastName"
                placeholder="Last name"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full p-2 sm:p-3 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              {errors.lastName && (
                <p className="text-red-500 text-sm">{errors.lastName}</p>
              )}
  
              <input
                type="email"
                name="email"
                placeholder="Work email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 sm:p-3 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
  
  <PhoneInput
  country={"in"}
  value={formData.phone}
  onChange={(phone) => setFormData({ ...formData, phone })}
  className="w-full"
  inputStyle={{
    backgroundColor: "black",
    color: "white",
    border: "1px solid #4a5568",
    borderRadius: "0.375rem",
    padding: "1rem",
    paddingLeft: "3rem", // Space for country code
    width: "100%", // Ensures responsiveness
    maxWidth: "100%", // Keeps it responsive
  }}
  containerStyle={{
    position: "relative",
    marginRight: "0.5rem",
    width: "100%", // Ensures the container is full width
  }}
  dropdownClass="phone-input-dropdown"
/>
{errors.phone && (
  <p className="text-red-500 text-sm">{errors.phone}</p>
)}
              <input
                type="text"
                name="jobTitle"
                placeholder="Job title"
                value={formData.jobTitle}
                onChange={handleChange}
                className="w-full p-2 sm:p-3 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              {errors.jobTitle && (
                <p className="text-red-500 text-sm">{errors.jobTitle}</p>
              )}
  
              <input
                type="text"
                name="company"
                placeholder="Company name"
                value={formData.company}
                onChange={handleChange}
                className="w-full p-2 sm:p-3 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              {errors.company && (
                <p className="text-red-500 text-sm">{errors.company}</p>
              )}
  
              <div className="flex items-start mb-2 sm:mb-4">
                <input
                  type="checkbox"
                  name="consent"
                  checked={formData.consent}
                  onChange={handleChange}
                  className="w-4 h-4 text-blue-600 bg-gray-900 border-gray-600 rounded focus:ring-blue-500"
                />
                <label htmlFor="consent" className="ml-2 text-xs sm:text-sm text-gray-300">
                  I consent to receive marketing communications.
                </label>
              </div>
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
                <div className="flex justify-center mt-4 sm:mt-7 mb-4 sm:mb-7">
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

