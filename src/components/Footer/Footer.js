import React from 'react'
import "./Footer.css"

export default function Footer() {
  return (
    <footer className="footer">
      <form>
        <label>Subscribe To our Newsletter</label>
        <input />
        <button>Submit</button>
      </form>
      <div>
        <h3>Contact</h3>
        <p>234-90924445746</p>
      </div>
      <div className="socials">
        <h3>Socials</h3>
        <i className="fa-brands fa-instagram"></i>
        <i className="fa-brands fa-facebook"></i>
        <i className="fa-brands fa-tiktok"></i>
      </div>
    </footer>
  )
}
