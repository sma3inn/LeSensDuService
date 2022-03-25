import React from 'react'
import { Hero, MiniPrestations,AvantagesFiscaux,Equipe,Engagements,Contact } from '../../container'

const LandingPage = () => {
  return (
    <div className='landingpage'>
        <Hero />
        <MiniPrestations />
        <AvantagesFiscaux />
        <Equipe />
        <Engagements />
        <Contact />
    </div>
  )
}

export default LandingPage