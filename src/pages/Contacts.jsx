import React from 'react'
import ContactsHero from '../components/Contacts/ContactsHero'
import ContactForm from '../components/Contacts/ContactForm'
import Footer from '../components/Footer'

function Contacts() {
  return (
    <div>
        <ContactsHero />
        <ContactForm />
        <Footer/>
    </div>
  )
}

export default Contacts