import heroPic from "../components/hero/hero_pic.png";

import frame from "../components/hero/frame.png";

import film from "../components/hero/film1.png";

import video from "../components/hero/vid.mp4";

import crown from "../components/hero/crown.png";

import note_top from "../components/hero/note_top.png";

import note_bottom from "../components/hero/note_bottom.png";

import plane from "../components/hero/plane.png";

import arrow from "../components/hero/arrow.png";

import tape from "../components/hero/tape.png";

import React, { useRef } from "react";

import { gsap } from "gsap";

import { useGSAP } from "@gsap/react";

import star from "../components/about/star.png";

import heart from "../components/about/heart.png";

import { Link } from "react-router-dom";

import aboutlink from "../components/hero/aboutlink.png";

import serviceslink from "../components/hero/serviceslink.png";

import contactlink from "../components/hero/contactlink.png";



gsap.registerPlugin(useGSAP);







const Hero = () => {



  const Mau = useRef(null);

  const frameRef = useRef(null);



useGSAP(

  () => {

    gsap.from(Mau.current, {

      opacity: 0,

      y: 1000,

      duration: 2,

      ease: "power3.out",

    });



    gsap.from(frameRef.current, {

      opacity: 0,

      

      duration: 1,

      

    });

  },





  

);

  return (

    <div className="flex justify-center items-center h-screen bg-orange-300">

      <div className="relative w-[95%] h-[92%] bg-orange-200 rounded-[50px] overflow-hidden">



        <div ref={Mau} className="absolute top-[200px] left-[380px] w-[28vw] group"> 

          <img src={crown} alt="Crown" className=" absolute -top-[90px] left-[280px] -translate-x-1/2 w-[280px] rotate-18 z-30 transition-all duration-500 ease-out opacity-80 group-hover:scale-110 group-hover:-translate-y-6 group-hover:opacity-100 group-hover:brightness-200 group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.9)] "/>

          <img src={heroPic} alt="Hero" className=" w-full h-full object-cover transition-all duration-500 ease-out group-hover:scale-110 "/>

        </div>



        <div ref={frameRef} className=" rotate-5 transition-transform duration-300 hover:-rotate-4 hover:scale-105 flex flex-col">

          <img src={frame} alt="Frame" className=" absolute top-[40px] left-[35px] w-[450px] h-auto z-20 pointer-events-none select-none"/>

          <img src={film} alt="Film" className=" absolute w-[228px] top-[69px] left-[137px] "/>

             <div className=" absolute h-[140px] w-[215px] mt-[500px] ml-[154px] overflow-hidden rounded-lg">

              <video autoPlay muted loop playsInline className="w-full h-full object-cover">

              <source src={video} type="video/mp4" /></video>

             </div>

        </div>

        <div className=' w-full h-full '>

          <img src={note_top} alt="Note" className=" absolute top-30 -right-8 w-65 h-65 object-cover -rotate-15 transition-transform duration-300 hover:-rotate-3 hover:scale-110"/>

          <img src={note_bottom} alt="Note" className=" absolute -bottom-12 right-0 w-100 h-80 object-cover transition-transform duration-300  hover:scale-105 "/>

          <img src={plane} alt="Plane" className=" absolute top-[230px] right-[150px] w-40 h-40 object-cover transition-transform duration-300  hover:scale-115 z-50"/>

          <img src={arrow} alt="Arrow" className=" absolute top-[300px] right-[580px] w-40 h-20 object-cover transition-transform duration-300  hover:scale-120 z-50"/>

          

        </div>

        <div className="absolute top-[130px] right-[130px] w-[560px] z-40">

          <div className='relative transition-transform duration-300  hover:scale-105 hover:rotate-3'> 

            <img src={tape} alt="Tape" className=" absolute -top-70 left-0 w-[350px] h-auto object-cover -rotate-3"/>

            <h1 className=" relative mt-15 ml-15 -top-20 font-bold text-black -rotate-3 font-[font9] text-3xl text-olive-900"> Hello, I'm Mansi ✿</h1>

          </div>

          <div className='relative transition-transform duration-300  hover:scale-105 '>

             <h1 className='relative font-bold ml-10 -top-8 text-black  font-[font1] text-[55px] text-olive-900 '>Collecting</h1>

             <h1 className='relative font-bold ml-25 -top-7 text-black  font-[font9] text-[55px] text-olive-900 '>Mements,,</h1>

             <h1 className='relative font-bold ml-28 -top-10 text-black  font-[font4] text-[55px] text-olive-900 '>Creating Memories..</h1>

          </div>



          <div className="relative flex  gap-3 mt-8 left-25 -top-10">



             <span className="px-5 py-2 rounded-full border border-[#A88255] text-[#5A4335] font-[font10] -mt-8 text-[25px] flex transition-transform duration-300  hover:scale-120">

               Engineering Student<h1 className="text-[25px] px-10 -mt-1 font-bold">.</h1> Lifestyle creator

             </span>

          </div>

          <div className='relative flex gap-3 mt-8 left-25 -top-15 transition-transform duration-300  hover:scale-105'>

            <p className="max-w-[420px] font-[font2] text-[25px]">Sharing everyday stories through creativity, curiosity and meaningful moments. Welcome to<span className="font-semibold text-[#9C6842]"> {" "}The Mau Tales. </span></p>

          </div>



         

          <div>

            <img src={star} alt="Star" className='absolute top-[40px] -left-[390px] w-[200px] h-auto z-40 -rotate-12 group transition-transform duration-300  hover:scale-135 hover:rotate-10' />

            <img src={star} alt="Star" className='absolute -top-[150px] -left-[150px] w-[200px] h-auto z-40 -rotate-12 group transition-transform duration-300  hover:scale-135 hover:rotate-10' /> 

            <img src={heart} alt="Star" className='absolute top-[480px] -left-[80px] w-[200px] h-auto z-40 -rotate-12 group transition-transform duration-300  hover:scale-135 hover:rotate-10' /> 

            <img src={heart} alt="Heart" className='absolute top-[200px] -right-[140px] w-[150px] h-auto group transition-transform duration-300 z-30  hover:scale-130 hover:rotate-10' />

          </div>
          <div className="relative flex gap-5 mt-3 ">
            <a href="https://www.youtube.com/@MansiMauu">
              <button className="relative mt-8 left-25 -top-20 px-5 py-2 rounded-full border border-[#A88255] text-[#5A4335] font-[font10] text-[25px] hover:bg-[#A88255] hover:text-white transition-colors duration-300 transition-transform duration-300 hover:scale-125">youtube</button>
            </a>
            <a href="https://www.instagram.com/mansiooforsuree">
              <button className="relative mt-8 left-25 -top-20 px-5 py-2 rounded-full border border-[#A88255] text-[#5A4335] font-[font10] text-[25px] hover:bg-[#A88255] hover:text-white transition-colors duration-300 transition-transform duration-300 hover:scale-125">instagram</button>
            </a>
          </div>

          

          

        </div>

        <Link to="/about">

          <img src={aboutlink} alt="Arrow" className='absolute top-[00px] right-[200px] w-[130px] h-auto group transition-transform duration-300 z-50  hover:scale-130 ' />

        </Link>

        

        <Link to="/services">

          <img src={serviceslink} alt="Arrow" className='absolute top-[00px] right-[50px] w-[130px] h-auto group transition-transform duration-300 z-50  hover:scale-130 ' />

        </Link>

        <Link to="/contact">

          <img src={contactlink} alt="Arrow" className='absolute top-[00px] right-[350px] w-[130px] h-auto group transition-transform duration-300 z-50  hover:scale-130 ' />

        </Link>

      </div>
      

    </div>

  );

}



 

export default Hero;