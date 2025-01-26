"use client";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { LuRotateCcw } from "react-icons/lu";
import Toast from "./Toast";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const { default: axios } = require("axios");
const ContactUs = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    mobile: "",
    reason: "",
    message: "",
  });

  const [toastContent, setToastContent] = useState(null); // To store toast content
  const [toastVariant, setToastVariant] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (
      !formData.fullname ||
      !formData.email ||
      !formData.reason ||
      !formData.message
    ) {
      setToastContent("Please fill in all the required fields");
      setToastVariant("error");
      return;
    }
    setLoading(true);
    try {
      const res = await axios.post(
        "https://webdrave-backend-6p3s.onrender.com/api/v1/contact",
        formData
      );
      console.log(res);
      setToastContent("Form submitted successfully!");
      setToastVariant("success");
      setFormData({
        fullname: "",
        email: "",
        mobile: "",
        reason: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      setToastContent("Something went wrong. Please try again.");
      setToastVariant("error");
    } finally{
      setLoading(false);
    }
  };

  return (
    <div className="w-full bg-background py-8 px-4 sm:px-8 md:px-16 lg:px-24 relative mt-48" id="contact">
      {/* Title Section */}
      <div className="flex justify-center items-center mb-32 ">
        <div className="relative text-4xl sm:text-6xl md:text-7xl lg:text-9xl text-center uppercase from-primary to-light bg-gradient-to-br bg-clip-text text-transparent font-americanCaptain">
          {/* Circle Background for Title */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 md:w-48 md:h-48 bg-[#5C67E5] rounded-full absolute left-[-9%]"></div>
          </div>
          <div className="relative z-10 flex items-center justify-start">
            <span className="text-white">Contact</span>
            <span className="text-[#5C67E5] ml-2">Us</span>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="w-full max-w-7xl mx-auto bg-gradient-to-tr from-[#1f2e35] to-[#0c101a] rounded-2xl shadow-md p-6 md:p-10 lg:p-12 flex flex-col md:flex-row justify-between items-start gap-8 text-white border border-[#1f2937]">
        {/* Left Section */}
        <div className="w-full md:w-1/2 pr-6">
          <h2 className="text-[4rem] max-sm:text-[3rem] max-sm:leading-none leading-[96px] font-americanCaptain font-normal mb-8">
            REACH OUT AND <span className="text-[#5C67E5]">CONNECT</span> WITH
            US
            <span className="text-[#5C67E5]">.</span>
          </h2>
          
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="relative">
          <input
            type="text"
            className="w-full bg-transparent border-b-2 border-gray-600 text-gray-300 focus:outline-none focus:border-[#5C67E5] transition pb-2 placeholder-[#AAAAAA] placeholder:font-thin text-md"
            placeholder="Full Name (Required)"
            required
            name="fullname"
            value={formData.fullname}
            onChange={handleChange}
          />
        </div>
        <div className="relative">
          <input
            type="email"
            className="w-full bg-transparent border-b-2 border-gray-600 text-gray-300 focus:outline-none focus:border-[#5C67E5] transition pb-2 placeholder-[#AAAAAA] placeholder:font-thin text-md"
            placeholder="Email Address (Required)"
            required
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="relative">
          <input
            type="tel"
            className="w-full bg-transparent border-b-2 border-gray-600 text-gray-300 focus:outline-none focus:border-[#5C67E5] transition pb-2 placeholder-[#AAAAAA] placeholder:font-thin text-md"
            placeholder="Phone Number (Optional)"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
          />
        </div>
        <div className="relative">
        <select
  className="w-full bg-transparent border-b-2 border-gray-600 text-[#AAAAAA] focus:outline-none focus:border-[#5C67E5] transition py-2 pr-8 appearance-none"
  name="reason"
  value={formData.reason} // Controlled value
  onChange={handleChange} // Handle changes
>
  <option value="" disabled hidden className="bg-transparent">
    Select an option
  </option>
  <option value="general" className="bg-gray-800 text-white hover:bg-gray-600">General Inquiry</option>
  <option value="support" className="bg-gray-800 text-white hover:bg-gray-600">Support</option>
  <option value="services" className="bg-gray-800 text-white hover:bg-gray-600">Services</option>
  <option value="feedback" className="bg-gray-800 text-white hover:bg-gray-600">Feedback</option>
</select>

        </div>
        <div className="relative">
          <textarea
            rows="2"
            className="w-full bg-transparent border-b-2 border-gray-600 text-gray-300 focus:outline-none focus:border-[#5C67E5] transition pb-2 placeholder-[#AAAAAA] placeholder:font-thin text-md"
            placeholder="Write your message here"
            name="message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="flex justify-between gap-2">
          <button
            type="submit"
            disabled={loading}
            className="w-full md:w-auto px-12 py-3 bg-[#5C67E5] text-white font-medium rounded-lg hover:bg-[#4f5ed7] transition"
          >
            {loading ? "Submitting..." : "Send"} {/* Change text based on loading */}
          </button>
          <button
          type="button"
          onClick={() => setFormData({ fullname: "", email: "", mobile: "", reason: "", message: "" })}
          className="w-auto bg-transparent hover:bg-gray-300 rounded-full p-4 transition duration-200 ease-in-out"
        >
          <LuRotateCcw className="text-gray-600 text-2xl" />
        </button>
        </div>
      </form>

      {toastContent && (
        <Toast
          title={toastVariant === "error" ? "Error" : "Success"}
          message={toastContent}
          variant={toastVariant === "error" ? "error" : "success"}
          onClose={() => setToastContent(null)}
        />
      )}
        </div>

        {/* Vertical Divider */}
        <div className="hidden md:flex self-stretch w-[1px] bg-[#334155]"></div>

        {/* Right Section */}
        <div className="w-full md:w-1/2">
          <h2 className="text-[4rem] max-sm:text-[3rem] max-sm:leading-none leading-[96px] font-americanCaptain font-normal mb-8 text-right max-sm:text-left">
            {"WE'RE"} HERE TO <span className="text-[#5C67E5]">HELP!</span>
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2 text-light">
                Email Us
              </h3>
              <p className="text-gray-400">
                Have inquiries or need assistance? Drop us an email at{" "}
                <span className="text-[#5C67E5]">support@webdrave.com</span>.
                {"We're"} committed to responding promptly and providing the
                help you need.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-semibold mb-2 text-light">
                Our Social
              </h3>
              <p>Follow us on:</p>
              <div className="flex space-x-10 text-gray-300 text-2xl mt-2">
                <a href="https://www.instagram.com/webdrave" className="hover:text-white ">
                  <FaInstagram className="text-3xl"/>
                </a>
                <a href="https://www.linkedin.com/company/webdrave-com" className="hover:text-white">
                  <FaLinkedin className="text-3xl"/>
                </a>
                <a href="#" className="hover:text-white">
                  <FaFacebook className="text-3xl"/>
                </a>
              </div>
            </div>
            <p className="text-gray-400">
              Your feedback and questions are important to us. {"We're"} here to
              ensure you get the best possible service. Connect with us today!
            </p>
          </div>
        </div>
      </div>

      {/* Watermark (Between Content and Footer) */}
      <div className="mt-16 mb-8 text-gray-400 text-9xl font-extrabold opacity-30 z-10 text-center max-[950px]:text-6xl max-sm:text-5xl">
        WEBDRAVE
      </div>

      {/* Line Divider */}
      <div className="border-t border-[#334155] my-8"></div>

      {/* Footer (Below Line Divider) */}
      <div className="relative z-20  mt-12 text-gray-500 text-sm max-sm:text-[10px]">
        <div className="flex justify-between items-center px-8 max-sm:px-0">
          <p className="w-1/3 text-left">Copyright ©2024</p>
          <p className="w-1/3 text-center flex max-sm:w-1/2">
            Agency | LinkedIn | Instagram | Facebook
          </p>
          <p className="w-1/3 text-right">
            Terms & Conditions | Privacy Policy
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
