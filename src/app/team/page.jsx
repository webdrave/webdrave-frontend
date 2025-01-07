import csvjson from '../data/csvjson.json';
export default function TestimonialSection() {
    return (
        <div className="relative min-h-screen bg-gradient-to-b from-lightBlue from-[0%] via-blue-900 via-[5%] to-blackish to-[90%] flex justify-center items-center flex-col">
        
        <div className="intro w-[30%] h-fit p-4 mt-[8%]">
            <h2 className="text-6xl text-center font-semibold">Our Team</h2>
            <p className="mt-4 text-md text-center">Discover what our satisfied customers have to say about their experience with our product/services</p>
        </div>

        <div className="w-full px-24 py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
            {csvjson.map((data,i)=>(

<div className="w-full h-96 bg-red-200 rounded-lg bg-gradient-to-t from-[#404875] via-[#1e1942] to-[#0d0f35] hover:from-[#8994ca] hover:to-[#0d0f35] hover:via-[#504587] z-10"></div>


            ))}
        </div>
        <div className='w-full absolute left-0 -top-[8%] min-h-96 z-0'>
              <img src="/footer-grid.svg" alt="grid" className=' w-full h-full opacity-50'/>

            </div>
  </div>
    );
  }
  