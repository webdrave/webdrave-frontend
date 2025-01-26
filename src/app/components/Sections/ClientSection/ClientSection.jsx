import React from 'react'
import { ClientSlider } from '../../SwiperComponent'
import BackgroundLight from '../../LightComponent'

const ClientSection = () => {
  return (
    <div className='w-full p-10 max-md:p-4 bg-background relative z-40'>

    <div className=" heading flex w-full  items-center justify-between">
            <h2 className="text-[7rem] max-sm:text-[4rem] max-sm:leading-none leading-[128px] font-americanCaptain font-normal">
              WHAT <span className="text-primary">OUR</span> <br /><span className='text-primary'>CLIENTS</span> SAY
              <span className="text-primary">.</span>
            </h2>
            <p className="capitalize text-[20px] font-montserrat leading-[37.5px] text-right max-lg:hidden">
            At WebDrave, what our clients value is the inventive solutions <br /> and dedication we commit to creating visually appealing <br />  sites that are user-friendly; it reflects their brand. 
              {" "}
            </p>
          </div> 
          <hr className=" my-2"/>
          <div className='w-full h-[50vh] mt-12 max-lg:h-[35vh]'>
        <ClientSlider/>
          </div>
        </div>
  )
}

export default ClientSection