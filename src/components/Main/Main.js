import React from 'react'
import "./Main.css"
import Bloglist from '../Bloglist/Bloglist'
import Hero from "../Hero/Hero"

export default function Main() {
  return (
    <main>
      <Hero />
      <h2>My most recent routes</h2>
      <Bloglist />
      <button className="blog-btn">All stories here</button>
    </main>
  )
}
