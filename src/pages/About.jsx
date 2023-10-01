import React from 'react'
import Hero from '../components/About/Hero'
import AboutSection1 from '../components/About/AboutSection1'
import Approach from '../components/About/Approach'
import Stats from '../components/Stats'
import Section4 from '../components/Section4'
import Footer from '../components/Footer'

function About() {
  return (
    <div>
        <Hero />
        <AboutSection1 />
        <Approach />
        <Stats />
        <Section4 />
        <Footer />
    </div>
  )
}

export default About