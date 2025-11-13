import React from "react";
import cardImg from '../assets/images/homeImg.png'
import Services from "./Services";
import ProfileSection from "./aboutSection";

export default function Home() {
  return (
    <>
    <div className="min-h-screen  font-sans">
      <main className="pt-36  lg:px-1 flex items-start relative">
        {/* Left hero area */}
        <section className="flex-1 max-w-[58vw]">
          {/* Logo and brand */}
          <div className="flex items-center gap-3 mb-6">
            <span>
              <svg width="30" height="30">
                <circle cx="15" cy="15" r="13" fill="#299fff" />
                <text x="8" y="23" fontWeight="bold" fill="#fff" fontSize="15">x</text>
              </svg>
            </span>
            <span className="font-semibold text-xl text-gray-900">Consulting firm</span>
          </div>
          {/* Headline */}
          <h1 className="font-black text-black leading-tight text-[86.6px] md:text-[5vw] lg:text-[4vw] xl:text-[3.6vw] max-w-[900px]">
            Your Partner in Building Safer,<br />
            Compliant, and <span className="italic font-serif font-bold text-gray-700">High-Performing</span>
            <br />
            Operations
          </h1>
          {/* Subtext */}
          <div className="mt-10 text-lg md:text-xl font-semibold text-black max-w-md">
            Integrated EHS, Quality, and Sustainability
            solutions designed for lasting business excellence.
          </div>
          {/* Discover more button */}
          <button className="mt-8 flex items-center px-5 py-2 bg-white border border-blue-500 text-black text-base font-semibold rounded-md hover:bg-blue-100 transition shadow">
            Discovery more
            <span className="ml-3 rounded bg-blue-500 w-7 h-7 flex items-center justify-center">
              <svg width="17" height="17" fill="none" stroke="#fff" strokeWidth="3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 4l6 4.5-6 4.5" />
              </svg>
            </span>    
    

          </button>
        </section>
        {/* Right floating card */}
        <aside className="absolute right-[-1px]  bottom-[2px] max-w-[450px] w-[30vw] hidden lg:block">
          <div className="flex bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden min-h-[230px]">
            <div className="flex flex-col justify-between p-6 w-[60%]">
              <div>
                <div className="text-xs text-black font-bold mb-1">Consulting firm</div>
                <div className="font-bold text-base text-black leading-tight">
                  Your Partner in Building <b>Safer, Compliant, and <i className="font-serif italic font-bold text-gray-700">High-Performing</i></b> Operations
                </div>
              </div>
              <div className="text-xs font-semibold mt-3 mb-1">
                Integrated EHS, Quality, and Sustainability solutions designed for lasting business excellence.
              </div>
              <button className="flex items-center space-x-3 px-3 py-1 text-black text-sm font-semibold border border-blue-500 rounded mt-2 hover:bg-blue-50">
                <span>Discovery more</span>
                <span className="rounded bg-blue-500 w-6 h-6 flex items-center justify-center">
                  <svg width="12" height="12" fill="none" stroke="#fff" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 3l4 3-4 3" />
                  </svg>
                </span>
              </button>
            </div>
            <div className="w-[40%] flex items-center justify-center rounded-r-2xl overflow-hidden">
              <img
                src={cardImg}
                alt="Card artwork"
                className="w-full h-full min-h-[160px] object-cover"
              />
            </div>
          </div>
        </aside>
      </main>
      {/* Mobile card: shown below hero for <lg screens */}
      <div className="lg:hidden mt-8 mb-12 px-2 flex justify-center">
        <div className="flex bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden max-w-[460px] min-h-[230px] w-full">
          <div className="flex flex-col justify-between p-6 w-[60%]">
            <div>
              <div className="text-xs text-black font-bold mb-1">Consulting firm</div>
              <div className="font-bold text-base text-black leading-tight">
                Your Partner in Building <b>Safer, Compliant, and <i className="font-serif italic font-bold text-gray-700">High-Performing</i></b> Operations
              </div>
            </div>
            <div className="text-xs font-semibold mt-3 mb-1">
              Integrated EHS, Quality, and Sustainability solutions designed for lasting business excellence.
            </div>
            <button className="flex items-center space-x-3 px-3 py-1 text-black text-sm font-semibold border border-blue-500 rounded mt-2 hover:bg-blue-50">
              <span>Discovery more</span>
              <span className="rounded bg-blue-500 w-6 h-6 flex items-center justify-center">
                <svg width="12" height="12" fill="none" stroke="#fff" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 3l4 3-4 3" />
                </svg>
              </span>
            </button>
          </div>
          <div className="w-[40%] flex items-center justify-center rounded-r-2xl overflow-hidden">
            <img
              src="/your-card-image.jpg"
              alt="Card artwork"
              className="w-full h-full min-h-[120px] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
    <hr />

    </>
  );
}
