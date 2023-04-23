import React from 'react'
import "./Navbar.css"
import {AiOutlineShoppingCart} from "react-icons/ai"
import {Link} from "react-router-dom"



export default function Navbar(props) {
  const [colorChange, setColorChange] = React.useState(false)
  const changeNavbarColor = () =>{
    if(window.scrollY >= 80){
        setColorChange(true)
    }else{
      setColorChange(false)
    }
  }
  window.addEventListener("scroll", changeNavbarColor)
  return (
  <nav className="">  
    <div className={colorChange ? "navbar sticky": "navbar"}>
      <h4 className="navbar--title">Marisalex</h4>
      <div className="toggler">
        <p className="toggler--light">Light</p>
        <div  className="toggler--slider" onClick={props.toggleDarkMode}>
        <div className="toggler--slider--circle"></div>
        </div>
        <p className="toggler--dark">Dark</p>
      </div>
      <div className="pages">
      <Link to="/">Home</Link>
      <Link to="/shop">Shop</Link>
      <Link to="/">Blog</Link>
      <Link to="/submit">Submit a story</Link>
      <Link to="/checkout"><AiOutlineShoppingCart className="cart"/></Link>
      </div>
    </div>
  </nav>
  )
}


// {props.darkMode ? "dark": ""}