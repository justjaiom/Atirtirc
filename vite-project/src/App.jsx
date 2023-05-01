import { Component, useState } from 'react'
import './App.css'
import Navbar from './pages/Navbar.jsx'
import Home from './pages/Home'
import Pricing from './pages/Pricing'
import About from './pages/About'


function App() {
  let Component
  switch(window.location.pathname) {
    case "/":
      Component = <Home />
      break
    case "/pricing":
      Component = <Pricing />
      break
    case "/about":
      Component = <About />
      break
    }

  return (
    <>
    <Navbar/>
    <div className="container">
    {Component}
    </div>
    </>
  )
}

export default App
