import React from 'react'
import './Footer.css'
import logo from '../Assets/image/logos.jpeg'
import insta from '../Assets/image/woss.jpeg'
import pri from '../Assets/image/pintt.jpeg'
import whats from '../Assets/image/wat.jpeg'

export default function Footer() {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={logo} alt="" />
            <p>SHOPPER</p>
        </div>
        <ul className="footer-links">
            <li>Company</li>
            <li>Product</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
   <div className="footer-social-icon">
     <div className="fotter-icons-container">
        <img src={insta} alt="" />
     </div>

     <div className="fotter-icons-container">
        <img src={pri} alt="" />
     </div>

     <div className="fotter-icons-container">
        <img src={whats} alt="" />
     </div>
   </div>
<div className="footer-copyright">
    <hr />
    <p>Copyright @ 2023 -All Right Reserved</p>
</div>
    </div>
  )
}
