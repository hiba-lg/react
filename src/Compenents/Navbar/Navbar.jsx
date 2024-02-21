import React ,{useState} from 'react'
import { Link } from "react-router-dom"
import './Navbar.css'
import logo from '../Assets/image/logo.png'
import cart from '../Assets/image/cart_icon.png'
 function Navbar() {
  const[menu,setMenu]=useState("shop");
  return (
    <div className='navbar'>
    <div className="nav-logo">
<img src={logo} alt="" />
<p>SHOPPER</p>
</div>
<ul className="nav-menu">
<li onClick={()=>{setMenu("shop")}}><Link  style={{textDecoration:'none'}} to="/">Shop{menu==="shop"?<hr/>:<></>}</Link></li>
<li onClick={()=>{setMenu("mens")}}><Link  style={{textDecoration:'none'}} to="/mens">Men{menu==="mens"?<hr/>:<></>}</Link></li>
<li onClick={()=>{setMenu("womens")}}><Link  style={{textDecoration:'none'}} to="/womens">Women{menu==="womens"?<hr/>:<></>}</Link></li>
<li onClick={()=>{setMenu("kids")}}><Link  style={{textDecoration:'none'}} to="/kids">Kids{menu==="kids"?<hr/>:<></>}</Link></li>
</ul>
<div className="nav-login-cart">

<img src={cart} alt="" />
  
</div>
    </div>

    
  )
}
export default Navbar;


