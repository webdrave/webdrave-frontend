import React from 'react'

const ServicesBox = ({width,direction,title,description}) => {
  const gradientDirectionClass = {
    tr: 'bg-gradient-to-tr',
    tl: 'bg-gradient-to-tl',
    br: 'bg-gradient-to-br',
    bl: 'bg-gradient-to-bl',
  }[direction] || 'bg-gradient-to-tr'; // Default to `tr`

  const widthClass = {
    "40%": "w-[40%]",
    "50%": "w-[50%]",
  }[width] || "w-auto"; // Default to `auto`
  return (
   <div
      className={`services-box h-[350px]  border-slate-500 ${gradientDirectionClass} from-[#2f3764] to-[#121526] rounded-xl shadow-custom ${widthClass} max-xl:w-[80%] max-md:w-[95%] max-sm:w-[100%] p-8 max-sm:p-4 gap-4 flex flex-col justify-around min-h-fit border border-[#B0B0B0] shadow-[0px_0px_30px_0px_#1C3350]`}
    >
      <h3 className='font-americanCaptain text-6xl capitalize leading-[-3px] w-24 max-sm:text-5xl'>{title}</h3>
      <p className='font-montserrat capitalize text-lg font-medium leading-[35px]'>{description}</p>
    </div>
  )
}

export default ServicesBox