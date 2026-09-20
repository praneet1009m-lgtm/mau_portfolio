import React, { useState } from "react";
import { Link } from "react-router-dom";

import backdrop from "../components/contact/backdrop.webp";
import cardboard from "../components/contact/cardboard.webp";
import available_for from "../components/contact/available_for.webp";
import contact_me from "../components/contact/contact_me.webp";
import insta from "../components/contact/insta.webp";
import lets_connect from "../components/contact/lets_connect.webp";
import mail from "../components/contact/mail.webp";
import page from "../components/contact/page.webp";
import response_time from "../components/contact/response_time.webp";
import seal from "../components/contact/seal.webp";
import send_letter from "../components/contact/send_letter.webp";
import telephone from "../components/contact/telephone.webp";
import youtube from "../components/contact/youtube.webp";
import home from "../components/about/home.webp";
import pointer from "../components/about/pointer.webp";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    brand: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      return;
    }

    const subject = form.brand
      ? `Collaboration Inquiry - ${form.brand}`
      : `Collaboration Inquiry - ${form.name}`;

    const body = `
Hello Mansi,

I would love to get in touch regarding a collaboration.

Name: ${form.name}
Email: ${form.email}
Brand / Company: ${form.brand || "Not provided"}

Message:
${form.message}

Thank you!
    `.trim();

    const mailto = `mailto:mansip1007@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
  };

  return (
    <>
    <main className="min-h-screen bg-orange-200 px-5 py-7 text-[#4b3426] md:hidden">
      <Link to="/" className="inline-block rounded-full border border-[#a88255] px-4 py-2 font-[font10] text-lg">← Home</Link>
      <section className="mx-auto max-w-md text-center"><img src={contact_me} alt="Contact me" className="mx-auto mt-3 w-64" /><p className="mt-2 font-[font2] text-xl">Let&apos;s make something meaningful together.</p>
        <form onSubmit={handleSubmit} className="mt-7 rounded-3xl bg-[#f8e1bf] p-6 text-left shadow-md">
          <label className="mb-4 block font-[font10] text-xl">Your Name<input name="name" value={form.name} onChange={handleChange} required className="mt-1 block w-full border-b border-[#8c6b58] bg-transparent p-2 font-sans text-base outline-none" /></label>
          <label className="mb-4 block font-[font10] text-xl">Your Email<input name="email" type="email" value={form.email} onChange={handleChange} required className="mt-1 block w-full border-b border-[#8c6b58] bg-transparent p-2 font-sans text-base outline-none" /></label>
          <label className="mb-4 block font-[font10] text-xl">Brand / Company<input name="brand" value={form.brand} onChange={handleChange} className="mt-1 block w-full border-b border-[#8c6b58] bg-transparent p-2 font-sans text-base outline-none" /></label>
          <label className="block font-[font10] text-xl">Tell me about your idea...<textarea name="message" value={form.message} onChange={handleChange} required rows="5" className="mt-1 block w-full resize-none rounded-lg border border-[#8c6b58] bg-transparent p-2 font-sans text-base outline-none" /></label>
          <button type="submit" className="mt-6 w-full rounded-full bg-[#a88255] px-5 py-3 font-[font10] text-xl text-white">Send letter</button>
        </form>
        <div className="my-7 flex justify-center gap-5 font-[font10] text-xl underline"><a href="https://www.instagram.com/mansiooforsuree">Instagram</a><a href="https://www.youtube.com/@MansiMauu">YouTube</a></div>
      </section>
    </main>
    <div className="hidden relative h-screen w-screen overflow-hidden md:block">

      {/* BACKDROP */}
      <img
        src={backdrop}
        alt="Backdrop"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* CONTACT TITLE */}
      <img
        src={contact_me}
        alt="Contact Me"
        className="absolute top-0 left-[40%] z-30 w-[350px] h-auto"
      />

      {/* RIGHT SIDE */}
      <img
        src={cardboard}
        alt=""
        className="absolute top-[15%] left-[52%] z-10 w-[420px] h-auto"
      />

      <img
        src={lets_connect}
        alt="Let's Connect"
        className="absolute top-[20%] left-[58%] z-20 w-[220px] h-auto"
      />

      <img
        src={insta}
        alt="Instagram"
        className="absolute top-[30%] left-[54%] z-20 w-[180px] transition-all duration-300 hover:z-40 hover:scale-110 hover:-rotate-2"
      />

      <img
        src={youtube}
        alt="YouTube"
        className="absolute top-[29%] left-[66%] z-20 w-[190px] transition-all duration-300 hover:z-40 hover:scale-110 hover:rotate-2"
      />

      <img
        src={mail}
        alt="Mail"
        className="absolute top-[45%] left-[53.5%] z-20 w-[195px] transition-all duration-300 hover:z-40 hover:scale-110 hover:-rotate-2"
      />

      <img
        src={response_time}
        alt="Response Time"
        className="absolute top-[45%] left-[66%] z-20 w-[200px] transition-all duration-300 hover:z-40 hover:scale-110 hover:rotate-2"
      />

      <img
        src={available_for}
        alt="Available For"
        className="absolute top-[60%] left-[55%] z-20 w-[280px] transition-all duration-300 hover:z-40 hover:scale-105"
      />

      {/* PAPER */}
      <img
        src={page}
        alt="Contact Form"
        className="absolute top-[13%] right-[45%] z-10 w-[600px] h-auto pointer-events-none"
      />

      {/* FORM */}
      <form
        onSubmit={handleSubmit}
        className="absolute top-[13%] right-[45%] z-30 w-[600px] h-[600px]"
      >

        {/* NAME */}
        <div className="absolute top-[72px] left-[110px] flex items-center">
          <label
            htmlFor="name"
            className="whitespace-nowrap font-[font10] text-[22px] italic text-[#4b3426]"
          >
            Your Name :
          </label>

          <input
            id="name"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            required
            className="
              ml-3 w-[280px]
              border-0 border-b border-dashed border-[#8c6b58]
              bg-transparent px-1 py-1
              font-['Caveat'] text-[18px] text-[#4b3426]
              outline-none
            "
          />
        </div>

        {/* EMAIL */}
        <div className="absolute top-[117px] left-[110px] flex items-center">
          <label
            htmlFor="email"
            className="whitespace-nowrap font-[font10] text-[22px] italic text-[#4b3426]"
          >
            Your Email :
          </label>

          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
            className="
              ml-3 w-[280px]
              border-0 border-b border-dashed border-[#8c6b58]
              bg-transparent px-1 py-1
              font-['Caveat'] text-[18px] text-[#4b3426]
              outline-none
            "
          />
        </div>

        {/* BRAND */}
        <div className="absolute top-[162px] left-[110px] flex items-center">
          <label
            htmlFor="brand"
            className="whitespace-nowrap font-[font10] text-[22px] italic text-[#4b3426]"
          >
            Brand / Company :
          </label>

          <input
            id="brand"
            name="brand"
            type="text"
            value={form.brand}
            onChange={handleChange}
            className="
              ml-3 w-[230px]
              border-0 border-b border-dashed border-[#8c6b58]
              bg-transparent px-1 py-1
              font-['Caveat'] text-[18px] text-[#4b3426]
              outline-none
            "
          />
        </div>

        {/* MESSAGE */}
        <div className="absolute top-[215px] left-[110px]">
          <label
            htmlFor="message"
            className="mb-2 block font-[font10] text-[22px] italic text-[#4b3426]"
          >
            Tell me about your idea...
          </label>

          <textarea
            id="message"
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            className="
              h-[145px] w-[380px]
              resize-none
              border-0
              bg-transparent
              px-1 py-1
              font-['Caveat'] text-[18px] leading-[29px] text-[#4b3426]
              outline-none
              [background-image:repeating-linear-gradient(transparent,transparent_28px,#8c6b58_29px)]
            "
          />
        </div>
        <div>
            <Link to="/">
               <img src={home} alt="Home" className='absolute -top-[110px] -right-[660px] w-[250px] h-auto group transition-transform duration-300  hover:scale-125' />
            </Link>
              <img src={pointer} alt="Pointer" className='absolute top-[30px] -right-[600px] w-[100px] h-auto group transition-transform duration-300  animate-pulse' />  
            </div>

        {/* SEND LETTER */}
        <button
          type="submit"
          className="
            absolute top-[405px] left-[205px]
            w-[190px]
            cursor-pointer
            border-0 bg-transparent p-0
            transition-all duration-300
            hover:scale-110 hover:-rotate-2
            active:scale-95
          "
        >
          <img
            src={send_letter}
            alt="Send Letter"
            className="w-full h-auto"
          />
        </button>
      </form>

      {/* SEAL */}
      <img
        src={seal}
        alt=""
        className="absolute top-[68%] right-[53%] z-20 w-[100px] h-auto"
      />

      {/* TELEPHONE */}
      <img
        src={telephone}
        alt="Telephone"
        className="
          absolute top-[60%] right-[75%] z-20
          w-[250px] h-auto
          -rotate-[35deg]
          transition-all duration-500
          hover:z-40 hover:scale-110 hover:-rotate-[30deg]
        "
      />
      

    </div>
    </>
  );
};

export default Contact;
