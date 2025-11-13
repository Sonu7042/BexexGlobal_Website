import React from 'react'
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

const App = () => {
  return (
    <Provider store={store} >

    <Header/>
    <main className=' px-4 md:px-16 lg:px-12  z-50'>
    <Home />
    <Services/>
    <Resources/>
    

    </main>
    
    
    </Provider>
  )
}
export default App
