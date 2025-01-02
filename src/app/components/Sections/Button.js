
const Button = (data) => {
    return (
      <div>
          <button
          className="relative items-center opacity-90 lg:px-5 lg:py-1 lg:text-sm px-2.5 py-1 font-montserrat font-[400] text-xs text-white bg-[#333967] border border-[#7B87FF] rounded-[68px] overflow-hidden hover:opacity-90 transition-opacity before:absolute before:top-4 before:left-1/2 before:-translate-x-1/2 before:w-[100px] before:h-[100px] before:rounded-full before:bg-gradient-to-b before:from-blue-50/10 before:blur-xl"
          >
          {data.data}
          </button>
  
      </div>
    )
  }
  
  export default Button
  