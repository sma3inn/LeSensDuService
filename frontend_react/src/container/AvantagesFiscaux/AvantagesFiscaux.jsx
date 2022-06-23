import React from 'react'
import './AvantagesFiscaux.scss';
import { client } from '../../client.js'
import { images } from '../../constants'
import { useState, useEffect } from "react"

const AvantagesFiscaux = () => {

  const [avantages, setAvantages] = useState([]);

  useEffect(() => {
    const query = '*[_type == "avantages"]';

    client.fetch(query).then((data) => {
      setAvantages(data);
    });
  }, []);

  return (
    <section className='AvantagesFiscaux' id='avantagesfiscaux'>
      <h2><span className='highlight'>Vos Avantages Fiscaux</span></h2>
      {avantages.map((avantage) => (
          <div class="containerss center">
          <div class="cardss">
            <h2>{avantage.titre}</h2>
            <hr/>
            <p>{avantage.texte}</p>
          </div>
        </div>

      ))}
    </section>
  )
}

export default AvantagesFiscaux