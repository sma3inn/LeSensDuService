import React from 'react'
import { client } from '../../client.js'
import { images } from '../../constants'
import { useState, useEffect} from "react"
import './Contact.scss'

const Contact = () => {
  const [contact, setContact] = useState([])
  useEffect(()=>{
    client.fetch( 
      `*[_type == "contact"] {
        contact,
        telephone,
        mail,
        adresse
        
      }`
    ).then((data) => setContact(data[0]))
    }, [])


  return (
    <section className='contact' id='contact'>
    <h2><span className='highlight'>Contactez nous</span></h2>

    <div>
      <h1>{contact.contact}</h1>
      <p>{contact.telephone}</p>
      <p>{contact.mail}</p>
      <p>{contact.adresse}</p>
      
    </div>
    </section>
  )
}

export default Contact