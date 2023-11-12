import React from 'react'
import WeDoHero from '../components/Events/EventsHero'
import EventsSection1 from '../components/Events/EventsSection1'
import Section4 from '../components/Section4'
import Footer from '../components/Footer'
import { Helmet } from 'react-helmet-async'

function Events() {
  return (
    <div>
      <Helmet>
        <title>Our Events - TePA</title>
        <meta name="description" content="Explore and join upcoming events organized by TePA. Stay informed about our initiatives, workshops, and community activities dedicated to raising awareness and addressing teenage pregnancy in Kenya." />
        <link rel="canonical" href="https://www.tepa2030.org/events" />
      </Helmet>
        <WeDoHero />
        <EventsSection1 />
        <Section4/>
        <Footer />
    </div>
  )
}

export default Events