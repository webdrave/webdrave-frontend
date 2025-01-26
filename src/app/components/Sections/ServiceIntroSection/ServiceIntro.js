import Image from "next/image"
import Button from "./Button"
import BackgroundLight from "../../LightComponent"


const ServiceIntro = () => {
  return (
    <div className="md:min-h-fit lg:px-20 lg:py-20 lg:pb-56 lg:gap-12 md:px-10 md:py-20 md:pb-36 w-full min-h-[100vh] py-6 px-3 pb-16 overflow-hidden relative flex flex-col gap-8 justify-center items-center bg-background border-t-1 border-white">

      <h1 className="md:text-4xl lg:text-5xl lg:px-60 md:px-32 text-white uppercase font-americanCaptain font-black text-[7vw] tracking-wide leading-none text-center  ">
        Ride with <span className="text-[#7a87ff]">Web Drave</span> for top-<br/>quality <span className="text-[#7a87ff]">web development</span> services, <br/><span className="text-[#7a87ff]">tailored</span> especially for you.
      </h1>
      <div className="w-full flex flex-col md:flex-row md:px-10 md:gap-6 lg:gap-8 gap-3 px-1 justify-center items-center  " >
        <div className="h-64 max-w-[600px] w-full  py-6 px-2 md:w-full md:h-64 lg:w-full lg:h-80 lg:px-6 lg:py-8 overflow-hidden flex flex-col bg-gradient-to-br from-[#181D32] to-[#101423]  justify-between items-center shadow-[0px_0px_30px_0px_#1C3350] rounded-[15px] border border-[#B0B0B0]">
            <h1 className="text-white text-center font-montserrat font-[500] leading-5 lg:leading-7 md:leading-5 lg:text-xl lg:px-10 text-md ">
                Make your vision <br/>come to life through the professional <br/> services of <span className="text-[#7a87ff]">Web Drave&apos;s.</span>
            </h1>
            <p className="text-[#CECECE] px-2 md:px-4 font-montserrat lg:px-8 lg:text-xs font-[400] text-center text-xs">
                Custom Web Development, UI/UX Design, SEO, Web Hosting, and Website Maintenance are what Web Drave offers.
            </p>
            <div className="flex flex-wrap gap-1.5 justify-center ">
                <Button data={"Web Development"}></Button>
                <Button data={"UI/UX Design"}></Button>
                <Button data={"SEO"}></Button>
                <Button data={"Website Maintenance"}></Button>
                <Button data={"Web Hosting"}></Button>
            </div>
        </div>
        <Image src={`/redbull.webp`} className="shadow-[0px_0px_30px_0px_#1C3350] lg:w-80 lg:h-80 rounded-[15px] border border-[#B0B0B0] md:w-72 md:h-64 w-full h-60 object-cover" alt='' width={350} height={100} />
      </div>

      <div
            x-data="{}"
            x-init="$nextTick(() => {
                    let ul = $refs.services;
                    ul.insertAdjacentHTML('afterend', ul.outerHTML);
                    ul.nextSibling.setAttribute('aria-hidden', 'true');
                    })"
            className="w-full inline-flex bg-[#5C67E5] py-2 lg:py-4 md:py-3 lg:bottom-16 absolute bottom-8 md:bottom-10 -rotate-3 flex-nowrap overflow-hidden "
        >
            <ul x-ref="services" className="flex uppercase text-white text-base md:text-lg lg:text-3xl font-montserrat font-[600] text-nowrap items-center justify-center md:justify-start lg:[&_li]:mx-10 [&_li]:mx-3 animate-infinite-scroll">
                <li>
                    Web Development 
                </li>
                <span className="">✵</span>
                <li>
                    SEO
                </li>
                <span className="">✵</span>
                <li>
                    Web Hosting
                </li>
                <span className="">✵</span>
                <li>
                    UI/UX Design
                </li>
                <span className="">✵</span>
                <li>
                    Web Maintenance
                </li>
                <span className="">✵</span>
            </ul>   
            <ul x-ref="services" className="flex uppercase text-white text-base md:text-lg lg:text-3xl font-montserrat font-[600] text-nowrap items-center justify-center md:justify-start lg:[&_li]:mx-10 [&_li]:mx-3 animate-infinite-scroll">
                <li>
                    Web Development
                </li>
                <span className="">✵</span>
                <li>
                    SEO
                </li>
                <span className="">✵</span>
                <li>
                    Web Hosting
                </li>
                <span className="">✵</span>
                <li>
                    UI/UX Design
                </li>
                <span className="">✵</span>
                <li>
                    Web Maintenance
                </li>
                <span className="">✵</span>
            </ul>   
                                  
        </div>

    </div>
  )
}

export default ServiceIntro
