import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import AOS from 'aos'
import 'aos/dist/aos.css'

import Preloader from './components/Preloader'
import CustomCursor from './components/CustomCursor'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import About from './components/About'
import Education from './components/Education'
import Certifications from './components/Certifications'
import ResumeSection from './components/ResumeSection'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 60,
      delay: 0,
    })

    const timer = setTimeout(() => {
      setLoading(false)
      AOS.refresh()
    }, 3200)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <CustomCursor />
      <AnimatePresence mode="wait">
        {loading ? (
          <Preloader key="preloader" />
        ) : (
          <main key="main">
            <Navbar />
            <Hero />
            <Projects />
            <Skills />
            <About />
            <Education />
            <Certifications />
            <ResumeSection />
            <Contact />
            <Footer />
          </main>
        )}
      </AnimatePresence>
    </>
  )
}
