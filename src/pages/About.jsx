import React from 'react'
import Hero from '../components/About/Hero'
import AboutSection1 from '../components/About/AboutSection1'
import Approach from '../components/About/Approach'
import Stats from '../components/Stats'
import Section4 from '../components/Section4'
import Footer from '../components/Footer'
import { Helmet } from 'react-helmet-async'
import Structure from '../components/About/Structure'
import DRMPAInfo from '../components/About/DRMPAInfo'

function About() {
  return (
    <div>
      <Helmet>
        <title>About Us - TePA</title>
        <meta name="description" content="TePA, which stands for Teenage Pregnancy Awareness Project, is steadfast in its commitment to fostering awareness and empowerment in Kenya." />
        <link rel="canonical" href="https://www.tepa2030.org/about" />
      </Helmet>
        <Hero />
        <AboutSection1 />
        <Approach />
        <Stats />
        <Structure />
        <DRMPAInfo />
       
        <Footer />
    </div>
  )
}

export default About