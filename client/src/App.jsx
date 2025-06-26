import React from 'react'
import Header from './components/Header'
import './App.css'
import Hero from './components/Hero'
import AboutMe from './components/AboutMe'
import MyProject from './components/MyProject'
import Services from './components/Services'
import Experience from './components/Experience'
const App = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      <AboutMe/>
      <MyProject/>
      <Services/>
      <Experience/>
    </div>
  )
}

export default App