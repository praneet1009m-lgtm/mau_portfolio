import React from 'react'
import { Link } from "react-router-dom";
import frame from "../components/about/frame.png";
import mau from "../components/about/15.png";
import page1 from "../components/about/page1.png";
import page2 from "../components/about/page2.png";
import cam from "../components/about/cam.png";
import tag1 from "../components/about/tag1.png";
import tag2 from "../components/about/tag2.png";
import tape from "../components/hero/tape.png";
import card from "../components/about/card.png";
import flower1 from "../components/about/flower1.png";
import flower2 from "../components/about/flower2.png";
import crown from "../components/about/crown.png";
import double_arrow from "../components/about/double_arrow.png";
import star from "../components/about/star.png";
import plane from "../components/about/plane.png";  
import home from "../components/about/home.png";
import heart from "../components/about/heart.png";
import pointer from "../components/about/pointer.png";

const About = () => {
  return (
    <div className='overflow-hidden relative h-screen w-screen bg-orange-200'>
        <div className='relative h-screen w-screen bg-orange-200'></div>
        <div>
          <div className='absolute top-[80px] left-[250px] w-[28vw] group transition-transform duration-300  hover:scale-105 '>
            <img src={frame} alt="Frame" className="absolute -top-[50px] -left-[35px] w-[450px] h-auto z-20 drop-shadow(0 18px 30px rgba(0,0,0,.18))   " />
            <img src={mau} alt="Mau" className='absolute top-[35px] left-[10px] w-[335px] h-auto -rotate-2 '/>
          </div>
          <div className='absolute -bottom-[200px] -right-[10px] w-[850px] h-auto z-20 -rotate-4 group transition-transform duration-300  hover:scale-105'>
            <img src={page1} alt="Page" className='w-full h-full object-cover' />
          </div>
          <div className='absolute -bottom-[80px] -left-[500px] w-[800px] h-auto z-20 rotate-50 group transition-transform duration-300  hover:scale-105'>
            <img src={page2} alt="Page" className='w-full h-full object-cover' />
          </div>
          <div className='absolute -top-[260px] -left-[450px] w-[800px] h-auto z-20 -rotate-18 group transition-transform duration-300  hover:scale-105'>
            <img src={page1} alt="Page" className='w-full h-full object-cover' />
          </div>
          <div className='absolute top-[150px] -left-[20px] w-[420px] h-auto z-20 -rotate-12 group transition-transform duration-300  hover:scale-105'>
            <img src={cam} alt="Cam" className='w-full h-full object-cover' />  
          </div>
          <div >
            <img src={tag2} alt="Tag" className='absolute top-[500px] left-[350px] w-[250px] h-auto z-20 -rotate-5 group transition-transform duration-300  hover:scale-105' />
            <img src={tape} alt="Tag" className='absolute top-[415px] left-[410px] w-[100px] h-[200px] z-20 -rotate-12 group transition-transform duration-300  hover:scale-105' />
            <img src={tag1} alt="Tag" className='absolute top-[25px] left-[820px] w-[400px] h-[150px] z-20 -rotate-5 group transition-transform duration-300  hover:scale-105 hover:rotate-0' />
            <img src={card} alt="Card" className='absolute top-[500px] left-[750px] w-[450px] h-auto z-20 group transition-transform duration-300  hover:scale-105' /> 
            <img src={flower1} alt="Flower" className='absolute top-[00px] -left-[50px] w-[350px] h-auto z-20 -rotate-5 group transition-transform duration-300  hover:scale-105' />
            <img src={flower2} alt="Flower" className='absolute top-[290px] right-[00px] w-[250px] h-auto z-20 -rotate-5 group transition-transform duration-300  hover:scale-105' />
            <img src={crown} alt="Crown" className='absolute -top-[20px] left-[390px] w-[250px] h-auto z-20 rotate-18 group transition-transform duration-300  hover:scale-105' />
            <img src={double_arrow} alt="Arrow" className='absolute top-[200px] left-[550px] w-[250px] h-auto z-20 group transition-transform duration-300  hover:scale-105' />
            <img src={star} alt="Star" className='absolute top-[450px] left-[590px] w-[200px] h-auto z-20 -rotate-12 group transition-transform duration-300  hover:scale-105' />
            <img src={plane} alt="Plane" className='absolute top-[140px] left-[1100px] w-[200px] h-auto z-30 -rotate-12 group transition-transform duration-300  hover:scale-105   ' />
            <div>
               <Link to="/">
                 <img src={home} alt="Home" className='absolute -top-[10px] -right-[10px] w-[250px] h-auto group transition-transform duration-300  hover:scale-125' />
               </Link>
              
            </div>
               <img src={pointer} alt="Pointer" className='absolute top-[140px] right-[55px] w-[100px] h-auto group transition-transform duration-300  animate-pulse' />
            <img src={heart} alt="Heart" className='absolute top-[550px] right-[180px] w-[150px] h-auto group transition-transform duration-300 z-30  hover:scale-130' />
            <img src={heart} alt="Heart" className='absolute top-[600px] right-[800px] w-[150px] h-auto group transition-transform duration-300  hover:scale-130' />
            <div className=' absolute top-[20px] right-[700px] w-[150px] h-auto group transition-transform duration-300  hover:scale-130 flex leading-[0]'>
              <img src={heart} alt="Heart" className=' top-[20px] right-[700px] w-[150px] h-auto ' />
              <img src={heart} alt="Heart" className=' top-[20px] right-[720px] w-[150px] h-auto  -rotate-60 -ml-45 ' />
            </div>
            

          </div>
          <div className='absolute top-[10px] left-[650px] w-[400px] h-auto z-20 mt-10 '>
            <div className="absolute top-[140px] left-[120px] w-[550px] text-[#3F2E25] group transition-transform duration-300  hover:scale-105">

               <h1 className="font-[font2] text-[34px] leading-none group transition-transform duration-300  hover:scale-105"> Hello, I'm Mansi ✿. </h1>
               <div className="mt-2 w-[280px] h-[6px] rounded-full bg-[#C48A5A] rotate-[-2deg] leading-[5] group transition-transform duration-300  hover:scale-105"></div>
               <div className="mt-10 ">
                 <p className="text-[28px] leading-[1.2] font-[font7] max-w-[400px] group transition-transform duration-300  hover:scale-105"> I’m an engineering student and a lifestyle creator who loves turning everyday moments into meaningful stories. Through my content, I share my journey, experiences, and creativity in the most authentic way possible.</p>

                 <p className="text-[28px] leading-[1.6] font-[font7] mt-4 max-w-[420px] group transition-transform duration-300  hover:scale-105">The Mau Tales is not just a channel,it’s a part of me.</p>
                 <p className="text-[25px] text-[#B7724C] font-semibold font-[font9] mt-2  max-w-[420px] group transition-transform duration-300  hover:scale-105 ">Thanks for being here!</p>
             </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About