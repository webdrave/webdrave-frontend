const ContactUs = () => {
    return (
      <div className="w-full bg-background py-8 px-4 sm:px-8 md:px-16 lg:px-24 relative">
        {/* Title Section */}
        <div className="flex justify-center items-center mb-32">
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
        <div className="w-full max-w-7xl mx-auto bg-[#0F172A] rounded-2xl shadow-md p-8 md:p-12 lg:p-16 flex flex-col md:flex-row justify-between items-start gap-8 text-white border border-[#1f2937]">
          {/* Left Section */}
          <div className="w-full md:w-1/2 pr-6">
            <h2 className="text-[4rem] max-sm:text-[3rem] max-sm:leading-none leading-[96px] font-americanCaptain font-normal mb-8">
              REACH OUT AND <span className="text-[#5C67E5]">CONNECT</span> WITH
              US
              <span className="text-[#5C67E5]">.</span>
            </h2>
            <form className="space-y-6">
              <div className="relative">
                <input
                  type="text"
                  className="w-full bg-transparent border-b-2 border-gray-600 text-gray-300 focus:outline-none focus:border-[#5C67E5] transition placeholder-transparent pb-2"
                  placeholder="Full Name"
                  required
                />
                <label className="absolute left-0 top-0 text-gray-400 text-sm pointer-events-none transition-all transform scale-100">
                  Full Name (Required)
                </label>
              </div>
              <div className="relative">
                <input
                  type="email"
                  className="w-full bg-transparent border-b-2 border-gray-600 text-gray-300 focus:outline-none focus:border-[#5C67E5] transition placeholder-transparent pb-2"
                  placeholder="Email Address"
                  required
                />
                <label className="absolute left-0 top-0 text-gray-400 text-sm pointer-events-none transition-all transform scale-100">
                  Email Address (Required)
                </label>
              </div>
              <div className="relative">
                <input
                  type="tel"
                  className="w-full bg-transparent border-b-2 border-gray-600 text-gray-300 focus:outline-none focus:border-[#5C67E5] transition placeholder-transparent pb-2"
                  placeholder="Phone Number"
                />
                <label className="absolute left-0 top-0 text-gray-400 text-sm pointer-events-none transition-all transform scale-100">
                  Phone Number (Optional)
                </label>
              </div>
              <div className="relative">
                <select className="w-full bg-transparent border-b-2 border-gray-600 text-gray-300 focus:outline-none focus:border-[#5C67E5] transition py-2 pr-8 pl-3 appearance-none">
                  <option value=""></option>
                  <option value="#">General Inquiry</option>
                  <option value="#">Support</option>
                  <option value="#">Services</option>
                  <option value="#">Feedback</option>
                </select>
                {/* Custom Dropdown Arrow */}
                <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                  <i className="fa fa-chevron-down"></i>
                </span>
                <label className="absolute left-0 top-0 text-gray-400 text-sm pointer-events-none transition-all transform scale-100">
                  Reason for Contact
                </label>
              </div>
  
              <div className="relative">
                <textarea
                  rows="2"
                  className="w-full bg-transparent border-b-2 border-gray-600 text-gray-300 focus:outline-none focus:border-[#5C67E5] transition placeholder-transparent pb-2"
                  placeholder="Write your message here"
                ></textarea>
                <label className="absolute left-0 top-0 text-gray-400 text-sm pointer-events-none transition-all transform scale-100">
                  Message
                </label>
              </div>
              <button
                type="submit"
                className="w-full md:w-auto px-8 py-3 bg-[#5C67E5] text-white font-medium rounded-lg hover:bg-[#4f5ed7] transition"
              >
                Send
              </button>
            </form>
          </div>
  
          {/* Vertical Divider */}
          <div className="hidden md:flex self-stretch w-[1px] bg-[#334155]"></div>
  
          {/* Right Section */}
          <div className="w-full md:w-1/2 pl-6">
            <h2 className="text-[4rem] max-sm:text-[3rem] max-sm:leading-none leading-[96px] font-americanCaptain font-normal mb-8 text-right">
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
                  {"We're"} committed to responding promptly and providing the help
                  you need.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-light">
                  Our Social
                </h3>
                <p>Follow us on:</p>
                <div className="flex space-x-10 text-gray-300 text-2xl">
                  <a href="#" className="hover:text-white">
                    <i className="fa fa-instagram"></i>
                  </a>
                  <a href="#" className="hover:text-white">
                    <i className="fa fa-linkedin"></i>
                  </a>
                  <a href="#" className="hover:text-white">
                    <i className="fa fa-facebook"></i>
                  </a>
                  <a href="#" className="hover:text-white">
                    <i className="fa fa-youtube"></i>
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
        <div className="mt-16 mb-8 text-gray-400 text-9xl font-extrabold opacity-30 z-10 text-center">
          WEBDRAVE
        </div>
  
        {/* Line Divider */}
        <div className="border-t border-[#334155] my-8"></div>
  
        {/* Footer (Below Line Divider) */}
        <div className="relative z-20  mt-12 text-gray-500 text-sm">
          <div className="flex justify-between items-center px-8">
            <p className="w-1/3 text-left">Copyright ©2024</p>
            <p className="w-1/3 text-center">
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