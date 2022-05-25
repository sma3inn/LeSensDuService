import React from 'react'
import { client } from '../../client.js'
import { images } from '../../constants'
import { useState, useEffect} from "react"

const Prestations = () => {
  const [prestation, setPrestation] = useState([])
  useEffect(()=>{
    client.fetch( 
      `*[_type == "prestation"] {
        titre,
        description,
        image,
        tarif
        
      }`
    ).then((data) => setPrestation(data[0]))
    }, [])
      

  return (
    <section>
        <h1>u are viewing {prestation.length} prestation</h1>
        <h2>le titre est {prestation.titre}</h2>
        <p>{prestation.description}</p>
      
    </section>
    

  )
}

export default Prestations