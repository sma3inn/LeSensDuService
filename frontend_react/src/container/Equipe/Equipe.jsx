import React from 'react'
import { client } from '../../client.js'
import { images } from '../../constants'
import { useState, useEffect } from "react"
import './Equipe.scss'

const Equipe = () => {
  const [equipe, setEquipe] = useState([])
  useEffect(() => {
    client.fetch(
      `*[_type == "equipe"] {
        titre,
        texte,
        image
        
      }`
    ).then((data) => setEquipe(data[0]))
  }, [])


  return (
    <section className='Equipe' id='equipe'>
      <h2><span className='highlight'>Notre Equipe</span></h2>
      <div>
        <h1>{equipe.titre}</h1>
        {/*<p>{equipe.texte}</p>*/}

      </div>
    </section>

  )
}

export default Equipe