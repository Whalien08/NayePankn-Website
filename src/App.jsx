import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Programs from './components/Programs'
import Donate from './components/Donate' /* 1. Import it */
import Footer from './components/Footer'
import './App.css'

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const toggleTheme = () => setIsDarkMode(!isDarkMode)

  return (
    <div className={isDarkMode ? "app dark-mode" : "app"}>
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <Hero />
      <About />
      <Programs />
      <Donate />
      <Footer />
    </div>
  )
}