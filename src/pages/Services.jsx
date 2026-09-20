  import React from 'react'
  import tag from "../components/services/tag.webp";
  import reels from "../components/services/reels.webp";
  import brand from "../components/services/brand.webp";
  import coffee from "../components/services/coffee.webp";
  import fashion from "../components/services/fashion.webp";
  import flower from "../components/services/flowers.webp";
  import food from "../components/services/food.webp";
  import lifestyle from "../components/services/lifestyle.webp";
  import ugc from "../components/services/ugc.webp";
  import tech from "../components/services/tech.webp";
  import tag1 from "../components/services/tag1.webp";
  import review from "../components/services/review.webp";
  import stories from "../components/services/stories.webp";
  import sponsored from "../components/services/sponsored.webp";
  import pen from "../components/services/pen.webp";
  import page1 from "../components/about/page1.webp";
  import page2 from "../components/about/page2.webp";
  import home from "../components/about/home.webp";
  import pointer from "../components/about/pointer.webp";
  import crown from "../components/about/crown.webp";
  import star from "../components/about/star.webp";
  import plane from "../components/about/plane.webp";
  import mau from "../components/services/mau.webp";



  const services = () => {
    return (
      <>
      <main className="min-h-screen overflow-hidden bg-orange-200 px-5 py-7 text-[#4a3426] md:hidden">
        <a href="/" className="inline-block rounded-full border border-[#a88255] px-4 py-2 font-[font10] text-lg">← Home</a>
        <section className="mx-auto max-w-md text-center">
          <img src={mau} alt="Mansi" className="mx-auto mt-4 w-52" /><img src={tag} alt="Services" className="mx-auto -mt-12 w-80" />
          <p className="mt-1 font-[font2] text-xl font-semibold leading-snug">Helping brands tell their story through authentic, engaging and relatable content. ♡</p>
          <div className="mt-8 grid grid-cols-2 gap-4">{[[reels,"Reels"],[ugc,"UGC"],[sponsored,"Sponsored"],[brand,"Brand collaborations"],[review,"Reviews"],[stories,"Stories"],[fashion,"Fashion"],[lifestyle,"Lifestyle"],[food,"Food"],[tech,"Tech"]].map(([image,label]) => <article key={label} className="rounded-3xl bg-orange-100 p-2 shadow-sm"><img src={image} alt={label} loading="lazy" className="w-full" /><p className="pb-1 font-[font10] text-lg">{label}</p></article>)}</div>
          <a href="/contact" className="my-8 inline-block rounded-full border border-[#a88255] px-5 py-2 font-[font10] text-xl">Work with me</a>
        </section>
      </main>
      <div className="hidden relative h-screen w-screen overflow-hidden bg-orange-200 md:block">
        <div className="group transition-transform duration-300 hover:scale-105 ">
          <img src={mau} alt="Mau" className='absolute top-[160px] left-[0px] w-[30vw] group transition-transform duration-300 z-10   ' />
        </div>
        
        <div className="group transition-transform duration-300 hover:scale-105">
          <img src={tag} alt="Tag" className='absolute -top-[110px] right-[320px] w-[39vw] group transition-transform duration-300 z-20   ' />
        </div>
        <div>
          <img src={flower} alt="Tag" className='absolute top-[190px] right-[0px] w-[12vw] group transition-transform duration-300 z-60 group transition-transform duration-300  hover:scale-120 hover:-rotate-12   ' />
          <img src={reels} alt="Tag" className='absolute top-[180px] right-[830px] w-[12vw] group transition-transform duration-300 z-60 group transition-transform duration-300  hover:scale-120  ' />
          <img src={ugc} alt="Tag" className='absolute top-[180px] right-[620px] w-[12.5vw] group transition-transform duration-300 z-60 group transition-transform duration-300  hover:scale-120  ' />
          <img src={sponsored} alt="Tag" className='absolute top-[180px] right-[410px] w-[12vw] group transition-transform duration-300 z-60 group transition-transform duration-300  hover:scale-120  ' />
          <img src={brand} alt="Tag" className='absolute top-[180px] right-[200px] w-[12vw] group transition-transform duration-300 z-60 group transition-transform duration-300  hover:scale-120  ' />
          <img src={review} alt="Tag" className='absolute top-[400px] right-[880px] w-[12vw] group transition-transform duration-300 z-60  group transition-transform duration-300  hover:scale-120 ' />
          <img src={stories} alt="Tag" className='absolute top-[400px] right-[710px] w-[12vw] group transition-transform duration-300 z-60 group transition-transform duration-300  hover:scale-120  ' />
          <img src={fashion} alt="Tag" className='absolute top-[400px] right-[540px] w-[12vw] group transition-transform duration-300 z-60 group transition-transform duration-300  hover:scale-120  ' />
          <img src={lifestyle} alt="Tag" className='absolute top-[400px] right-[370px] w-[12vw] group transition-transform duration-300 z-60 group transition-transform duration-300  hover:scale-120  ' />
          <img src={food} alt="Tag" className='absolute top-[430px] right-[220px] w-[10.5vw] group transition-transform duration-300 z-60 group transition-transform duration-300  hover:scale-120  ' />
          <img src={tech} alt="Tag" className='absolute top-[430px] right-[70px] w-[10.5vw] group transition-transform duration-300 z-60  group transition-transform duration-300  hover:scale-120 ' />
        </div>
        <div>
          <img src={tag1} alt="Tag" className='absolute top-[550px] left-[510px] w-[40vw] group transition-transform duration-300 z-50 group transition-transform duration-300  hover:scale-115  ' />
          
        </div>
        <div className='absolute -top-[260px] -left-[450px] w-[800px] h-auto z-20 -rotate-18 group transition-transform duration-300  hover:scale-105'>
            <img src={page1} alt="Page" className='w-full h-full object-cover' />
        </div>
        <div className='absolute -bottom-[170px] -left-[400px] w-[1000px] h-[500px] z-20 rotate-30 group transition-transform duration-300  hover:scale-105'>
            <img src={page2} alt="Page" className='w-full h-full object-cover' />
        </div>
        <div className='absolute -bottom-[200px] -right-[10px] w-[850px] h-auto z-20 -rotate-4 group transition-transform duration-300  hover:scale-105'>
            <img src={page1} alt="Page" className='w-full h-full object-cover' />
            <img src={coffee} alt="Coffee" className='absolute top-[230px] left-[450px] w-[20vw] group transition-transform duration-300 z-20   ' />
        </div>
        <div>
          <a href="/">
            <img src={home} alt="Home" className='absolute -top-[10px] -right-[10px] w-[250px] h-auto group transition-transform duration-300  hover:scale-125' />
          </a>
          <img src={pointer} alt="Pointer" className='absolute top-[140px] right-[55px] w-[100px] h-auto group transition-transform duration-300  animate-pulse' />
        </div>
        <div>
            <img src={crown} alt="Crown" className='absolute -top-[20px] left-[300px] w-[250px] h-auto z-20 rotate-18 group transition-transform duration-300  hover:scale-105' />
            <img src={star} alt="Star" className='absolute top-[650px] left-[300px] w-[200px] h-auto z-20 -rotate-12 group transition-transform duration-300  hover:scale-105' />
            <img src={plane} alt="Plane" className='absolute top-[80px] left-[1100px] w-[200px] h-auto z-30 -rotate-12 group transition-transform duration-300  hover:scale-105   ' />
            <img src={pen} alt="Pen" className='absolute top-[450px] right-[0px] w-[120px] h-auto z-30 -rotate-12 group transition-transform duration-300  hover:scale-120 hover:rotate-0   ' />
        </div>
        <div className="flex justify-center">
          <div className="text-center max-w-3xl top-[140px] left-[650px] absolute group transition-transform duration-300  hover:scale-115 z-50">
            <p className="font-[font2] text-[#4a3426] text-[24px] leading-tight" style={{ fontWeight: 600 }}>Helping brands tell their story through authentic,<br />engaging and relatable content.<span className="ml-2 text-[28px]">♡</span></p>

          <div className="flex justify-center mt-1">
          <div className="w-40 h-[3px] bg-[#7d5a46] rounded-full"></div>
          </div>
        </div>
      </div>
      </div>
      </>
    )
  }

  export default services
