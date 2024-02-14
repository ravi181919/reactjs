import React from 'react'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import ScrollText from './components/ScrollText'
import About from './components/About'
import Eyes from './components/Eyes'
import FeaturedProjects from './components/FeaturedProjects'
function App() {
  return (
    <div className='w-full text-white bg-black'>
      <Navbar />
      <LandingPage />
      <ScrollText />
      <About />
      <Eyes />
      <FeaturedProjects />
    </div>
  )
}

export default App
