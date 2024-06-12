"use client"
import React,{useRef} from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';


function HeroSection() {
  return (
    <section className='grid grid-cols-1 lg:grid-cols-12'>
        <div className='col-span-7 place-self-center text-center sm:text-left'>
        <h1 className='text-white  mb-4 text-4xl lg:text-6xl font-extrabold'>
          <span className='text-transparent  bg-clip-text bg-gradient-to-r from-pink-500 via-fuchsia-400-500 to-red-600'>Hello, I&apos;m {""}</span>
          <br />
          <TypeAnimation
            sequence={[
              'Sabrina',
              1000,
              'Web Developer',
              1000,
              'Mobile Developer',
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h1>
          <p className='text-[#ADB7BE] mb-4 text-lg lg:text-xl'>
            Software engineering student here, loving full-stack and mobile development! I&apos;m all about learning new tech and building cool apps with others.          </p>
          <div >
            <button className="w-full text-lg lg:w-1/3 bg-gradient-to-br from-pink-800 via-fuchsia-400-500 to-red-600  hover:bg-slate-200 text-white px-3 py-3 rounded-full mr-4">
              Hire Me
            </button>
            <button className="w-full lg:w-1/3 mt-4 bg-gradient-to-br from-pink-800 via-fuchsia-400-500 to-red-600 px-1 py-1  text-white rounded-full">
              <span className="block text-lg bg-[#121212] hover:bg-pink-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </button>
        </div>
        </div>
        <div className='col-span-5 place-self-center mt-4 lg:mt-0'>
          <div className='rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[300px] lg:h-[300px] relative'>
            <Image src="/assets/22.png" alt="hero" 
              className='rounded-full absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
              width={300} 
              height={300} />
          </div>
        </div>
    </section>
  )
}

export default HeroSection