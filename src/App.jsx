import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Programs from './components/Programs/Programs'
import Title from './components/Title/Title'
import About from './components/About/About'
import Campus from './components/Campus/Campus'
import Testinomials from './components/Testinomials/Testinomials'
import Contact from './components/Contact/Contact'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
      <Title subTitle='OUR PROGRAM' title='What We Offer'/>
      <Programs />
      <About/>
      <Title subTitle='GALLERY' title='Campus Photos'/>
      <Campus/>
      <Title subTitle='TESTIMONIALS' title='What student Says'/>
      <Testinomials/>
      <Title subTitle='Contact Us' title='Get in touch'/>
      <Contact />
      </div>
    </div>
  )
}

export default App
