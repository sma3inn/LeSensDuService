import React from 'react'

import './Hero.scss';

const Hero = () => {
  return (
    <section className='home' id='Accueil'>
      <div className="home__container bd-grid">
        <div className="home__img">
          
        </div>

        <div className="home__data">
          <h1 className="home__title">Le Sens<br></br> Du Service</h1>
          <p className="home__description">blablablabla</p>
          <a href="#" className="home__button">Nos Tarifs</a>
        </div>
      </div>
    </section>
  )
}

export default Hero