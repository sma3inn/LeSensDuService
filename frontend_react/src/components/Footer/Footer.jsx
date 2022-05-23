import React from 'react'
import { images } from '../../constants'

import './Footer.scss';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="footer-col">
                        <h4>Le sens du service</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                        <div className='minirow'>
                            <ul><li><a href="#">Mentions légales</a></li></ul>  
                            <span>© Le sens du service</span>
                        </div>
                    </div>
                    <div className="footer-col">
                        <ul>
                            <li><a href="#">Accueil</a></li>
                            <li><a href="#">Nos prestations</a></li>
                            <li><a href="#">Notre équipe</a></li>
                            <li><a href="#">Nos engagements</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                    {/*<div class="footer-col">
                        <h4>online shop</h4>
                        <ul>
                            <li><a href="#">watch</a></li>
                            <li><a href="#">bag</a></li>
                            <li><a href="#">shoes</a></li>
                            <li><a href="#">dress</a></li>
                        </ul>
                    </div>
                    <div class="footer-col">
                        <h4>follow us</h4>
                        <div class="social-links">
                            <a href="#"><i class="fab fa-facebook-f"></i></a>
                            <a href="#"><i class="fab fa-twitter"></i></a>
                            <a href="#"><i class="fab fa-instagram"></i></a>
                            <a href="#"><i class="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
    */}
                </div>
            </div>
        </footer>
    )
}

export default Footer