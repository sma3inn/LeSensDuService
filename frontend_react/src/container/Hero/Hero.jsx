import React from 'react'
import { images } from '../../constants'
import { urlFor, client } from '../../client';
import { useState, useEffect } from "react"
import imageBuilder from '@sanity/image-url'
import { useLottie } from "lottie-react";
import animation from "../../assets/files/animation.json";

import './Hero.scss';



const Hero = () => {

  const options = {
    animationData: animation,
    loop: true,
    autoplay: true,
  };

  const { View } = useLottie(options);



  const [accueil, setAccueil] = useState([])
  useEffect(() => {
    client.fetch(
      `*[_type == "accueil"] {
        titre,
        texte,
        mainImage {
          asset -> {
            _id,
            url
          },
          alt
        }
      }`
    ).then((data) => setAccueil(data[0]))
  }, [])


  return (

    <header>
      <div className='container'>
        <div className='hero__content'>
          <h1>{accueil.titre}</h1>
          <p>
            {accueil.texte}
          </p>
          {/*<img src={urlFor(accueil.image)}/>*/}

          <a href='#prestations' className='btn'>Nos Prestations</a>
        </div>
        <div className='hero__image'>
          {View}
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