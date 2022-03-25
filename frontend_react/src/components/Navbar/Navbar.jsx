import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.scss';




const Navbar = () => {

  /*useEffect(() => {
    window.addEventListener('scroll', function () {
      var app__navbar = document.querySelector('app__navbar');
      app__navbar.classlist.toggle('sticky', window.scrollY > 0);
    })
  })
  */

  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setSticky(window.pageYOffset > 50)
      );}}, []); //Hook to change className of navbar

  return (

    <nav className={`app__navbar ${sticky ? "sticky" : ""}`}>
      <a className='app__navbar-logo' href='#'>logo</a>
      <ul>
        <li><Link to="/">Accueil</Link></li>
        <li><Link to="/prestations">Prestations</Link></li>
      </ul>



      {/*}<div className='app__navbar-links'>
        <div className='app__navbar-item'>
          <Link to="/">Accueil</Link>
          <Link to="/prestations">Prestations</Link>
        </div>
      </div>
      */}
    </nav>



  )

}

export default Navbar