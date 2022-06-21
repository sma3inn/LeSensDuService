import React from 'react'
import './Engagements.scss'
import { client } from '../../client.js'
import { images } from '../../constants'
import { useState, useEffect } from "react"

const Engagements = () => {
  const [engagement, setEngagement] = useState([])
  useEffect(() => {
    client.fetch(
      `*[_type == "engagement"] {
        titre,
        texte,
        image
        
      }`
    ).then((data) => setEngagement(data[0]))
  }, [])


  return (
    <section className='Engagements' id='engagements'>
      <h2><span className='highlight'>Nos Engagements</span></h2>
      <div>
        <h1>{engagement.titre}</h1>
        <p>{engagement.texte}</p>


      </div>

    </section>
  )
}

export default Engagements