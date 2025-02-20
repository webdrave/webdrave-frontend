import React from 'react'
import {WorkSlider} from '../../SwiperComponent';
const WorkSection = () => {
  return (
    <div className='w-full p-10 max-md:p-4 bg-background z-40' id='portfolio'>
<div className=" heading flex w-full  items-center justify-between">
        <h2 className="text-[7rem] max-sm:text-[4rem] max-sm:leading-none leading-[128px] font-americanCaptain font-normal">
          OUR <span className="text-primary">BEST</span><br /> WORKS
          <span className="text-primary">.</span>
        </h2>
        <p className="capitalize text-[20px] font-montserrat leading-[37.5px] text-right max-lg:hidden">
        At Web Drave, we take pride in our diverse portfolio 
          <br /> of projects showcasing our expertise
          <br />
          and creativity in web development.{" "}
        </p>
      </div> 
      <hr className=" my-2"/>
      <div className='w-full h-[50vh] mt-12 max-md:h-[25vh]'>
      <WorkSlider/>

      </div>
    </div>
  )
};

export default WorkSection;