import React from "react";
import serviceImg from '../assets/images/serviceImg.png'
import { Plus } from "lucide-react";


export default function Services() {
  return (
    <section className="min-h-screen  flex flex-col justify-center">
      {/* Main grid for left/right sections */}
      <div className="flex flex-col lg:flex-row items-stretch w-full ">
        {/* Left column */}
        <div className="flex flex-col justify-center w-full lg:w-2/5">
          {/* Service icon and title */}
          <div className="flex items-center gap-3 mb-10 mt-12 lg:mt-0">
            <span>
              <svg width="34" height="34">
                <circle cx="17" cy="17" r="15" fill="#299fff" />
                <text x="10" y="24" fontWeight="bold" fill="#fff" fontSize="18">x</text>
              </svg>
            </span>
            <span className="font-bold text-xl md:text-2xl text-black">Our services</span>
          </div>
          {/* Paragraph/description */}
          <p className="font-bold text-lg md:text-xl text-gray-800 text-justify mb-8 leading-snug">
            We help businesses strengthen systems, ensure compliance, and boost performance through expert consulting, management, audits, and training.
          </p>
          {/* CTA Button */}
          <button className="flex items-center gap-2 px-4 py-2 rounded-md bg-white border border-blue-500 text-black text-base font-semibold shadow hover:bg-blue-100 transition w-max">
            Learn more
            <span className="ml-1 rounded bg-blue-500 w-7 h-7 flex items-center justify-center">
              <svg width="17" height="17" fill="none" stroke="#fff" strokeWidth="3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 4l6 4.5-6 4.5" />
              </svg>
            </span>
          </button>
        </div>
        {/* Right column */}
        <div className="lg:w-3/5 flex flex-col justify-center pl-0 lg:pl-14 mt-10 lg:mt-0">
          <h1 className="font-semibold
 text-black text-[6vw] md:text-[3vw] text-left leading-[1.14] w-full md:w-[38rem] lg:w-full">
            Empowering organizations through expert consulting, management support, audits, and training that drive compliance and performance.
          </h1>
        </div>
      </div>


       <div className="flex flex-col md:flex-row items-center justify-between min-h-screen gap-8">
      {/* Left Section - Image */}
      <div className="flex-shrink-0">
        <img
          src={serviceImg}
          alt="Profile"
          className="rounded-lg shadow-md object-cover w-80 h-80"
        />
      </div>

      {/* Right Section - Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-3xl">
        {/* Management Card */}
        <div className="bg-white rounded-xl shadow p-6 flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-semibold mb-2 flex justify-between items-center">
              Management
              <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-md p-1">
                <Plus size={20} />
              </button>
            </h2>
            <p className="text-gray-700 font-medium">
              Enhancing organizational efficiency through structured management
              systems and strategic guidance.
            </p>
          </div>
        </div>

        {/* Consulting Card */}
        <div className="bg-white rounded-xl shadow p-6 flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-semibold mb-2 flex justify-between items-center">
              Consulting
              <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-md p-1">
                <Plus size={20} />
              </button>
            </h2>
          </div>
        </div>

        {/* Auditing Card (full width on bottom) */}
        <div className="md:col-span-2 bg-white rounded-xl shadow p-6 flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-semibold mb-2 flex justify-between items-center">
              Auditing
              <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-md p-1">
                <Plus size={20} />
              </button>
            </h2>
            <p className="text-gray-700 font-medium">
              Providing independent audits to assess compliance, improve
              systems, and ensure continual improvement.
            </p>
          </div>
        </div>
      </div>
    </div>




    </section>
  );
}
