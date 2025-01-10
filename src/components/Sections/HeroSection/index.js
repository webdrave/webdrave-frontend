import Video from "./Video";

const HeroSection = () => {
  return (
    <div className="flex justify-center items-center min-h-screen w-full relative px-4 sm:px-6 lg:px-8">
      {/* Main Content */}
      <div className="flex flex-col justify-center items-center w-[90%] lg:w-[80%] py-12 lg:py-0">
        {/* Headline */}
        <h1 className="text-5xl sm:text-7xl md:text-7xl lg:text-[8rem] text-center uppercase from-primary to-light bg-gradient-to-br bg-clip-text text-transparent font-americanCaptain">
          We Create Beautiful <br className="" /> Things For You
        </h1>

        {/* Subheadline */}
        <p className="text-center text-sm sm:text-base md:text-lg lg:text-xl font-thin text-light/60 mb-3 px-4 sm:px-0 mt-2 sm:mt-0 max-[400px]:text-xs">
          We transform your ideas into digital wonders of{" "}
          <span className="italic font-extralight text-light max-[400px]:text-xs">
            stunning quality
          </span>
          . <br className="hidden sm:block" /> Our{" "}
          <span className="italic font-extralight text-light max-[400px]:text-xs">
            unique designs
          </span>{" "}
          and{" "}
          <span className="italic font-extralight text-light max-[400px]:text-xs">
            intuitive user experiences
          </span>{" "}
          will ensure your <br className="hidden sm:block" /> brand can be uniquely recognized in an
          overcrowded{" "}
          <span className="italic font-extralight text-light max-[400px]:text-xs">
            digital landscape
          </span>
          .
        </p>

        {/* Buttons */}
        <div className="flex flex-row justify-center items-center w-full space-x-4 lg:space-x-6 mt-6 sm:mt-0">
          {/* Btn - 1 */}
          <button className="border-primary border bg-primary/20 px-4 sm:px-5 py-1 rounded-full flex justify-center items-center relative text-xs sm:text-md">
            Explore
            <span className="ml-2 rounded-full bg-primary h-full w-full p-[14px] sm:p-[22px] flex justify-center items-center translate-x-3 sm:translate-x-4">
              {/* Arrow Icon */}
              <svg
                width="20"
                height="14"
                viewBox="0 0 20 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute scale-[0.6] sm:scale-90"
              >
                <path
                  d="M13.2268 1.06572C12.8383 0.843775 12.3436 0.978723 12.1216 1.36713C11.8997 1.75554 12.0346 2.25034 12.423 2.47228L14.7506 3.80228C15.6952 4.34205 16.3436 4.71399 16.8057 5.05255C16.9558 5.16257 17.0767 5.26246 17.1747 5.35538L1.49447 9.55689C1.06237 9.67268 0.805934 10.1168 0.921717 10.5489C1.0375 10.981 1.48165 11.2375 1.91376 11.1217L17.594 6.92018C17.5556 7.04966 17.5008 7.19662 17.4258 7.36698C17.1949 7.8912 16.8194 8.53752 16.2712 9.47729L14.9205 11.7929C14.6951 12.1793 14.8256 12.6753 15.212 12.9007C15.5984 13.1261 16.0944 12.9955 16.3198 12.6091L17.6949 10.2518C18.2128 9.36398 18.636 8.63835 18.9084 8.01989C19.1916 7.37676 19.3554 6.75713 19.2648 6.09029C19.2449 5.9441 19.2158 5.79947 19.1777 5.65726C19.1396 5.51504 19.0925 5.37524 19.0366 5.2387C18.7816 4.61591 18.33 4.16117 17.7632 3.74581C17.2181 3.34638 16.4887 2.92961 15.5962 2.41967L13.2268 1.06572Z"
                  fill="#1D213D"
                />
              </svg>
            </span>
          </button>

          {/* Btn - 2 */}
          <button className="border-light border bg-dark px-4 sm:px-6 py-2 sm:py-4 rounded-full flex justify-center items-center relative text-xs sm:text-md">
            Contact Now
          </button>
        </div>
      </div>

      {/* Side Content */}
      <div>
        {/* Left Content */}
        <span className="text-light text-[6px] sm:text-[10px] font-thin uppercase tracking-[4px] sm:tracking-[8px] absolute top-1/2 -translate-y-1/2 -left-6 -rotate-90">
          Creative
        </span>
        <div className="absolute top-[80%] -translate-y-1/2 left-4 sm:left-10 flex flex-col gap-1 sm:gap-2">
          <div className="absolute top-0 -left-3 w-[1px] h-full bg-light"></div>
          <div className="absolute top-full -left-3 w-[4px] h-[4px] sm:w-[6px] sm:h-[6px] -translate-y-1/2 -translate-x-1/2 bg-light rounded-full"></div>
          <span className="font-semibold text-base sm:text-lg md:text-2xl text-primary">
            Creative
          </span>
          <span className="font-semibold text-base sm:text-lg md:text-2xl">Experience</span>
          <span className="font-semibold text-base sm:text-lg md:text-2xl text-primary">
            Unordinary
          </span>
        </div>

        {/* Right Content */}
        <span className="text-light text-[6px] sm:text-[10px] font-thin uppercase tracking-[4px] sm:tracking-[8px] absolute top-1/2 -translate-y-1/2 -right-4 rotate-90">
          Agency
        </span>
        <div className="absolute top-[90%] -translate-y-1/2 right-4 flex flex-col items-end gap-4">
          <span className="font-silkserif text-xs sm:text-md">#2025</span>
        </div>
        <Video />

        {/* Center Content */}
        <span className="absolute bottom-4 sm:bottom-0 -translate-y-1/2 left-1/2 -translate-x-1/2 animate-bounce">
          {/* Scroll Icon */}
          <svg
            width="20"
            height="20"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="sm:w-[25px] sm:h-[25px]"
          >
            <path
              d="M18.2632 10.9666C18.5669 10.6601 18.5647 10.1655 18.2583 9.86174C17.9518 9.55801 17.4571 9.56021 17.1534 9.86667L15.3333 11.7031C14.5946 12.4484 14.0862 12.9597 13.6555 13.3056C13.237 13.6416 12.9683 13.7569 12.7276 13.7876C12.5764 13.8069 12.4235 13.8069 12.2724 13.7876C12.0316 13.7569 11.7629 13.6416 11.3444 13.3056C10.9137 12.9597 10.4053 12.4484 9.66663 11.7031L7.84651 9.86667C7.54278 9.56021 7.04812 9.55801 6.74167 9.86174C6.43521 10.1655 6.43301 10.6601 6.73674 10.9666L8.58964 12.8361C9.2875 13.5402 9.85786 14.1157 10.3661 14.5239C10.8945 14.9483 11.4309 15.2555 12.0748 15.3376C12.3571 15.3735 12.6428 15.3735 12.9251 15.3376C13.569 15.2555 14.1054 14.9483 14.6339 14.5239C15.1421 14.1157 15.7124 13.5402 16.4103 12.8361L18.2632 10.9666Z"
              fill="#FAFAFA"
            />
          </svg>
        </span>
      </div>
    </div>
  );
};

export default HeroSection;