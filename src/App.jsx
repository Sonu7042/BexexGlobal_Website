import React from 'react'
import './App.css'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'
import { store } from './redux/store'
import { Provider } from 'react-redux'
import BlueTrailGrid from './animation/BlueTrailGrid'

const App = () => {
  return (
    <Provider store={store} >
    <BlueTrailGrid/>
    <Header/>

    <main className=' px-4 md:px-16 lg:px-24 py-8 z-50'>
    <Outlet/>
    </main>
    
    </Provider>
  )
}
export default App
