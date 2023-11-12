import React from 'react';
import { Helmet } from 'react-helmet';
import ContactsHero from '../components/Contacts/ContactsHero';
import ContactForm from '../components/Contacts/ContactForm';
import Footer from '../components/Footer';

function Contacts() {
  return (
    <div>
      <Helmet>
        <title>Contact Us - TePA </title>
        <meta name="description" content="Contact TePA 2030 to get involved, seek assistance, or learn more about our commitment to raising awareness and empowering communities in addressing teenage pregnancy in Kenya. Reach out to us through our contact form or find our contact information here." />
        <link rel="canonical" href="https://www.tepa2030.org/contacts" />
      </Helmet>
      <ContactsHero />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default Contacts;
