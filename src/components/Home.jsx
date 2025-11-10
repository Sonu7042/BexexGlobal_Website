import React from "react";
import home1 from '../assets/images/home1.png';
import home2 from '../assets/images/home2.png';
import Header from './Header';

const Home = () => {
  return (
    <div className="min-h-screen bg-[#f4f4f4] flex flex-col border-[2px] border-fuchsia-400">
      <Header />
      <main className="flex flex-col lg:flex-row justify-between items-start px-4 md:px-16 lg:px-24 py-8 flex-grow">
        {/* Left Block */}
        <div className="flex-1 flex flex-col justify-center max-w-xl mb-12 lg:mb-0 lg:mr-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-black mb-6">
            Your Partner in Building Safer, Compliant, and <span className="text-green-600">High-Performing</span> Operations
          </h1>
          <p className="text-base md:text-lg text-gray-600 mb-7">
            Integrated EHS, Quality, and Sustainability solutions designed for lasting business excellence.
          </p>
          <button className="w-fit border border-gray-500 text-gray-700 px-6 py-2 rounded bg-white hover:bg-gray-100 transition">
            View more
          </button>
        </div>
        {/* Right Images */}
        <div className="flex flex-col gap-6 flex-1 items-center lg:items-end mt-2">
          <div className="bg-white rounded-[6px] shadow-lg p-2 w-[235px] md:w-[370px] mb-2 lg:mb-0">
            <img src={home1} alt="Feature 1" className="w-full h-auto rounded-[4px]" />
          </div>
          <div className="bg-white rounded-[6px] shadow-lg p-2 w-[335px] md:w-[530px]">
            <img src={home2} alt="Feature 2" className="w-full h-auto rounded-[4px]" />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
