import { useState } from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import Section from './Section';
import "../../src/components/styles/requestdemo.css"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [status, setStatus] = useState('');
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'name') {
      if (/[^a-zA-Z\s]/.test(value)) return;
    }

    if (name === 'phone') {
      if (/[^0-9]/.test(value) || value.length > 10) return;
    }

    setFormData({ ...formData, [name]: value });

    validateField(name, value);
  };

  const validateField = (name, value) => {
    const newErrors = { ...errors };
    let isValid = true;

    switch (name) {
      case 'name':
        if (!value.trim()) {
          newErrors.name = "*Name is required.";
          isValid = false;
        }
        break;
      case 'email':
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!value.trim()) {
          newErrors.email = "*Email is required.";
          isValid = false;
        } else if (!emailPattern.test(value)) {
          newErrors.email = "*Please enter a valid email address.";
          isValid = false;
        }
        break;
      case 'phone':
        if (!value.trim()) {
          newErrors.phone = "*Phone number is required.";
          isValid = false;
        } else if (value.length !== 10) {
          newErrors.phone = "*Phone number must be exactly 10 digits.";
          isValid = false;
        }
        break;
      case 'message':
        if (!value.trim()) {
          newErrors.message = "*Message is required.";
          isValid = false;
        } else if (value.length > 500) {
          newErrors.message = "Message cannot exceed 500 characters.";
          isValid = false;
        }
        break;
      default:
        break;
    }

    setErrors(newErrors);

    const allFieldsValid = Object.keys(formData).every(
      (field) => formData[field].trim() && !newErrors[field]
    );
    setIsFormValid(allFieldsValid);
  };

  const handlePhoneChange = (value) => {
    setFormData({ ...formData, phone: value });

    // Optionally validate phone number length if required
    if (value.length >= 10) {
      setErrors({ ...errors, phone: '' });
    } else {
      setErrors({ ...errors, phone: "*Phone number must be valid." });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.status === 400 && data.error === 'This email is already added.') {
        setStatus('This email is already added response.');
      } else if (response.status === 201 && data.message === 'Message sent successfully!') {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setStatus('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('Error sending message.');
    }
  };

  return (
    <>
      <Section id="contact" className="absolute inset-0 bg-cover bg-center opacity-50"></Section>
      <div className="p-6 text-white flex flex-col justify-center items-center" style={{ height: "calc(100dvh - 90px)" }}>
        <div className="flex flex-col lg:flex-row justify-evenly w-5/6">
          <div className="lg:w-1/2 p-8 bg-opacity-25 rounded-lg shadow-lg">
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
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500">
                  <FaFacebook size={24} />
                </a>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400">
                  <FaTwitter size={24} />
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-500">
                  <FaInstagram size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <form
            onSubmit={handleSubmit}
            className="lg:w-[450px] p-8 bg-opacity-80 rounded-lg border border-gray-500 space-y-4 lg:mt-0 lg:ml-8 relative z-0"
          >
            <h2 className="lg:text-4xl 2xl:text-4xl text-3xl font-semibold">Get in Touch</h2>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className="w-full p-2 border border-gray-700 rounded bg-gray-800 text-white placeholder-gray-400"
            />
            {errors.name && <p className="text-red-400 text-xs mt-1 text-left">{errors.name}</p>}

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full p-2 border border-gray-700 rounded bg-gray-800 text-white placeholder-gray-400"
            />
            {errors.email && <p className="text-red-400 text-xs mt-1 text-left">{errors.email}</p>}

            {/* Phone input with country code */}
            <PhoneInput
           country={'us'}
           value={formData.phone}
           onChange={handlePhoneChange}
           inputStyle={{ width: '100%', backgroundColor: '#2d2d2d', color: '#fff',border:'none' }}
           className="w-full p-2 border border-gray-700 rounded bg-gray-800 text-white placeholder-gray-400"
           buttonStyle={{ backgroundColor: '#2d2d2d', color: '#fff' }}
           dropdownClass="phone-input-dropdown"
         />
            {errors.phone && <p className="text-red-400 text-xs mt-1 text-left">{errors.phone}</p>}

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              rows="5"
              className="w-full p-2 border border-gray-700 rounded bg-gray-800 text-white placeholder-gray-400"
            />
            {errors.message && <p className="text-red-400 text-xs mt-1 text-left">{errors.message}</p>}

            <button
              type="submit"
              className={`w-full bg-blue-500 text-white py-2 px-4 rounded-lg ${isFormValid ? 'hover:bg-blue-600' : 'cursor-not-allowed'}`}
              disabled={!isFormValid}
            >
              Submit
            </button>
            {status && <p className="mt-4 text-center text-xs text-white">{status}</p>}
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
