import React, { useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'
import { store } from './redux/store'
import { Provider } from 'react-redux'
import BlueTrailGrid from './animation/BlueTrailGrid'
import Home from './components/Home'
import Services from './components/Services'
import ProfileSection from './components/aboutSection'
import Resources from './components/Resources'
import TeamList from './components/TeamList'
import Clients from './components/Clients'
import CompareConsulting from './components/CompareConsulting'
import LetsConnect from './components/LetsConnect'
import Lenis from "@studio-freight/lenis";


const App = () => {

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smooth: true,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);


  return (
    <Provider store={store} >
    <Header/>


    <main className=' px-4 md:px-16 lg:px-12  z-50'>
    <Home />
    <Services/>
    <Resources/>
    <TeamList/>
    <Clients/>
    <CompareConsulting/>
    </main>
    <LetsConnect/>    
    
    
    </Provider>
  )
}
export default App
