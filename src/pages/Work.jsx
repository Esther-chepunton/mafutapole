import React from 'react'
import WeDoHero from '../components/Events/EventsHero'
import EventsSection1 from '../components/Events/EventsSection1'
import Section4 from '../components/Section4'
import Footer from '../components/Footer'
import { Helmet } from 'react-helmet-async'
import Outreach from '../components/Events/Outreach'
import Training from '../components/Events/Training'
import Children from '../components/Events/Children'
import Governance from '../components/Events/Governance'
import Infrastructure from '../components/Events/Infrastructure'
import Documentation from '../components/Events/Documentation'
import Supplementary from '../components/Events/Supplementary'
import Media from '../components/Events/Media'
import Networking from '../components/Events/Networking'

function Work() {
  return (
    <div>
        <WeDoHero />
        <Outreach />
        <Training />
        <Children />
        <Governance />
        <Infrastructure />
        <Documentation />
        <Supplementary />
        
        <Media />
        <Networking />
        
        <Section4/>
        <Footer />
    </div>
  )
}

export default Work