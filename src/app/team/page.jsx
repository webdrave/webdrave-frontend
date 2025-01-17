"use client"
import { useEffect, useState } from 'react';
import csvjson from '../data/csvjson.json';
import axios from 'axios';
import Image from 'next/image';
import { Playwrite_CA } from 'next/font/google';
import NavBar from '@/components/NavBar';
export default function TestimonialSection() {
  const [teamMembers, setteamMembers] = useState([])

  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        const response = await axios.get("https://webdrave-backend.onrender.com/api/v1/team");
        setteamMembers(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Failed to fetch team members:", error.message);
      }
    };

    fetchTeamMembers();
  }, []);
    return (
      <>
     <NavBar />
        <div className="relative min-h-screen bg-gradient-to-b from-lightBlue from-[0%] via-blue-900 via-[5%] to-blackish to-[90%] flex justify-center items-center flex-col">
        
        <div className="intro w-full h-fit p-4 mt-[8%]">
            <h2 className="text-6xl text-center font-semibold">Our Team</h2>
            <p className="mt-4 text-md text-center w-full">Discover what our satisfied customers have to say about their experience with our product/services</p>
        </div>

        <div className="w-full py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center px-4 sm:px-5 md:px-8 lg:px-10 xl:px-20 items-stretch">
            {csvjson.map((data,i)=>(

<div className="w-full h-auto min-h-96 bg-red-200 rounded-lg bg-gradient-to-t from-[#404875] via-[#1e1942] to-[#0d0f35] hover:from-[#8994ca] hover:to-[#0d0f35] hover:via-[#504587] z-10 flex flex-col gap-2 px-6 py-6 shadow-[0_0_10px_rgba(64,72,117,0.5)] hover:shadow-[0_0_20px_rgba(137,148,202,0.8)] border border-[#404875] hover:border-[#8994ca] transition-all duration-300 hover:scale-105"
      key={i}>
  <div className='min-w-20 max-w-20 min-h-20 max-h-20 bg-gray-200 rounded-full mt-2 overflow-hidden'>
    <Image src={data.imgUrl} alt="image" width={100} height={100} className='object-cover min-w-full min-h-full'/>
  </div>
  <h4 className='text-md font-bold'>{data.name}</h4>
  <span className='text-sm'>{data.role}</span>
  <p className='text-sm mt-4'>{data.bio}</p>
</div>


            ))}
        </div>
        <div className="w-full absolute left-0 top-0 min-h-screen z-0">
  <img
    src="/footer-grid.svg"
    alt="grid"
    className="w-full h-full object-cover"
  />
</div>

  </div>
  </>
    );
  }
  