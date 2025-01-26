import React from "react";
import ServicesBox from "./ServicesBox";

export const ServicesPage = () => {
  const items = [
    {
      title: "Web Development",
      description:
        "Experting the maintenance, building and programming of a website is indeed a great task. webDrave delivers you with services of web development along with convenience.",
    },
    {
      title: "SEO",
      description:
        "Marketing is a company’s prime concern. webDrave favours you with the complete optimization of search engine with our impactful approaches.",
    },
    {
      title: "Web hosting",
      description:
        "Security, scalability, performance optimization, technical support and so on... all at only a single platform? webDrave allocating web hosting services according to your comfort.",
    },
    {
      title: "Web design",
      description:
        "An Exceptional Web Design can transform the way your brand speaks to your audience. So webDrave is here to ease your task and favour you with an exceptional web design.",
    },
  ];
  const widths = ["50%", "40%", "40%", "50%"];
  const directions = ["tr", "tl", "tr", "tl"];
  return (
    <div className="min-h-screen w-full bg-background p-10 max-md:p-4 z-30" id="services">
      <div className="heading flex w-full items-center justify-between">
        <h2 className="text-[7rem] max-sm:text-[4rem] max-sm:leading-none leading-[128px] font-americanCaptain font-normal">
          WE <span className="text-primary">CREATE</span> &<br /> INNOVATE
          <span className="text-primary">.</span>
        </h2>
        <p className="capitalize text-[20px] font-montserrat leading-[37.5px] text-right max-lg:hidden">
          At Web Drave, we offer a comprehensive range
          <br /> of web development services tailored
          <br />
          to bring your vision to life.
        </p>
      </div>
      <hr className="my-2" />
      <div className="services-container min-h-screen relative flex flex-wrap gap-4 w-full justify-center items-center mt-12 max-xl:flex-col">
        {items.map((item, index) => (
          <React.Fragment key={index}>
            {/* Add the SERVICES div in the middle for small screens */}
            {index === 2 && (
              <div className="hidden max-sm:block text-center w-full">
                <div className="bg-background px-[60px] py-2 rounded-xl text-[40px] font-americanCaptain tracking-[3px]">
                  <span>SERVICES</span>
                </div>
              </div>
            )}
            <ServicesBox
              width={widths[index % widths.length]}
              direction={directions[index % directions.length]}
              title={item.title}
              description={item.description}
            />
          </React.Fragment>
        ))}

        {/* Centered SERVICES text for larger screens */}
        <div className="absolute max-sm:hidden transform top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-background px-[60px] py-2 rounded-xl text-[50px] font-americanCaptain z-10 tracking-[3px]">
          <span>SERVICES</span>
        </div>
      </div>
    </div>
  );
};
