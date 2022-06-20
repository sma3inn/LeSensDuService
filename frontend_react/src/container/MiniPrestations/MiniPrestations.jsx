import React from 'react'
import './MiniPrestations.scss'

const MiniPrestations = () => {
  return (
    <section className='miniPrestations'>
      <h2><span className='highlight'>Nos Prestations</span></h2>
      {/*
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
      
       */}
      <ul class="cards">
        <li>
          <a href="/prestations" class="card">
            <img src="https://i.imgur.com/2DhmtJ4.jpg" class="card__image" alt="" />
            <div class="card__overlay">
              <div class="card__header">
                <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                <div class="card__header-text">
                  <h3 class="card__title">Ménage</h3>
                  {/*<span class="card__status">1 hour ago</span>*/}
                </div>
              </div>
              <p class="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
            </div>
          </a>
        </li>
        <li>
          <a href="" class="card">
            <img src="https://i.imgur.com/2DhmtJ4.jpg" class="card__image" alt="" />
            <div class="card__overlay">
              <div class="card__header">
                <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                <div class="card__header-text">
                  <h3 class="card__title">Jardinage</h3>
                </div>
              </div>
              <p class="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
            </div>
          </a>
        </li>
        <li>
          <a href="" class="card">
            <img src="https://i.imgur.com/2DhmtJ4.jpg" class="card__image" alt="" />
            <div class="card__overlay">
              <div class="card__header">
                <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                <div class="card__header-text">
                  <h3 class="card__title">Repassage</h3>
                </div>
              </div>
              <p class="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
            </div>
          </a>
        </li>
      </ul>
    </section>
  )
}

export default MiniPrestations