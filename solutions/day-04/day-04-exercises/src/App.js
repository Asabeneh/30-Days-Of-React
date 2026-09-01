import React from 'react'
// import Background from './pages/Background'
import './App.css'
import Footer from './pages/Footer'
import ProfileCard from './pages/ProfileCard'
import Skills from './pages/Skills'
// import Stripe from './pages/Stripe'


const App = (props) => {
  return (
    <div>
        {/* <Background /> */}
        {/* <Stripe bgColor="#518cef" color="#518cef" />
        <Stripe bgColor="#3b10c4" color="#3b10c4" />
        <Stripe bgColor="#9aede6" color="#9aede6" />
        <Stripe bgColor="#8ee763" color="#8ee763" />
        <Stripe bgColor="#a30dd0" color="#a30dd0" /> */}
        <ProfileCard />
        <Skills />
        <Footer />
    </div>
  )
}

export default App