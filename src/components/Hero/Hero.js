import React from 'react'
import hero from "../../heroimg.jpg"
import "./Hero.css"

export default function Hero() {
  return (
    <div className="hero">
      <img src={hero} className="hero--img"/>
      <div className="hero-text">
        <h1 className="hero-heading">Travelling around the globe<br/><span className="hero-heading-small">and sharing culture.</span></h1>
        <p className="hero-subheading">The world is filled with endless beauty and adventures. It's my dream to explore every corner of this incredible planet. Join me on my journey across roads, seas, and skies.</p>
      </div>
    </div>
  )
}
