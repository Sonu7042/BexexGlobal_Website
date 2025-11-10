import React from 'react'

const Header = () => {
  return (
    <>
        <header className="w-full flex justify-center mt-7 mb-12">
        <nav className="bg-white shadow-md rounded-full px-8 py-4 flex items-center w-[95vw] max-w-4xl">
          <span className="text-xl font-semibold mr-12 tracking-wide">Bexex</span>
          <ul className="hidden md:flex gap-8 flex-grow">
            <li><a href="#" className="text-gray-900 font-medium">HOME</a></li>
            <li><a href="#" className="text-gray-700 hover:text-gray-900">SERVICES</a></li>
            <li><a href="#" className="text-gray-700 hover:text-gray-900">ABOUT US</a></li>
            <li><a href="#" className="text-gray-700 hover:text-gray-900">RESOURCES</a></li>
            <li><a href="#" className="text-gray-700 hover:text-gray-900">COMMUNITIES</a></li>
          </ul>
          <div className="ml-auto flex items-center">
            <button className="w-8 h-8 flex md:hidden items-center justify-center rounded hover:bg-gray-100">
              {/* Hamburger Icon */}
              <svg viewBox="0 0 20 20" fill="none" className="w-6 h-6"><path d="M3 6h14M3 10h14M3 14h14" stroke="black" strokeWidth="2" strokeLinecap="round"/></svg>
            </button>
            <button className="ml-3 hidden md:block rounded-full p-2 hover:bg-gray-100">
              {/* Search Icon */}
              <svg className="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <circle cx="11" cy="11" r="8" strokeWidth="2"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-3.5-3.5"/>
              </svg>
            </button>
          </div>
        </nav>
      </header>
      
    </>
  )
}

export default Header
