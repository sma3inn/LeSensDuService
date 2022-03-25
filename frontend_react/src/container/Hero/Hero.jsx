import React from 'react'
import { images } from '../../constants'

import './Hero.scss';

const Hero = () => {
  return (

    <header>
      <div className='container'>
        <div className='hero__content'>
          <h1>Le Sens Du Service</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Nobis cum consequatur ex deserunt nam hic, quam recusandae
            aspernatur fugiat dignissimos ipsam veritatis sed,
            exercitationem labore iure ad accusamus error odio.
          </p>
          <a href='#prestations' className='btn'>Nos Prestations</a>
        </div>
        <div className='hero__image'>
          <img src={images.first} />
        </div>
      </div>
    </header>
    /*<section className='accueil' id='Accueil'>
      <div className="accueil__container bd-grid">
        <div className="accueil__img">
          
        </div>

        <div className="accueil__data">
          <h1 className="accueil__title">Le Sens<br></br> Du Service</h1>
          <p className="accueil__description">blablablabla</p>
          <a href="#" className="accueil__button">Nos Tarifs</a>
        </div>
      </div>
    </section>
    */
  )
}

export default Hero