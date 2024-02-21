import React from 'react'
import './Hero.css'

import girl_icon from '../Assets/image/exclusive_image.png';

export default function Hero() {
  return (
    <div className="hero">
<div className="hero-left">
<h2>NEW ARRIVALS ONLY</h2>
<div  className="hero-le">
    
<p>new</p>

   
    <p>collections</p>
    <p>for everyone</p>
    </div>
<div className="hero-latest-btn">
  <pre>Latest Collection </pre>
   <div className="hero-latest"><img   src={girl_icon} alt="" /></div>
    </div>
    
</div>

    </div>
  )
}
