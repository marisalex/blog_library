import React from 'react'
import {v4 as uuidv4} from 'uuid'
import {useNavigate} from 'react-router-dom'
import "./Story.css"

export default function Story() {
  const navigate = useNavigate()
  const [submitStory, setSubmitStory] = React.useState(
    
      {
      fullname: "",
      email: "",
      title: "",
      image: "",
      location: "",
      story: ""
      }
    
  )

  function handleChange(event){
     const{name, value} = event.target
     setSubmitStory({
          ...submitStory,
          [name]: value
     })
    //  const blogDetails = localStorage.setItem("SubmitSory", JSON.stringify(submitStory))
    
  }


 function handleSubmit(event){
   
   event.preventDefault()

   const blogDetails = localStorage.getItem("details")
   ? JSON.parse(localStorage.getItem("details"))
   : []

    // const copyBlogDetails = [...blogDetails, {...submitStory, id: uuidv4()}]

   blogDetails.unshift({...submitStory, id: uuidv4()})

   localStorage.setItem("details", JSON.stringify(blogDetails));

  //  window.location.reload(true)
    
   navigate('/main')
 }
  

const {fullname, email, title, image, location, story} = submitStory
  return (
    <div className="form">
      <h3 className="form-header">Share unique wonderful culture pieces from anywhere in the world</h3>
      <p className="form-subtitle">Hello, Traveller👋</p>
      <form onSubmit={handleSubmit} className="form-input">
        <label htmlFor="fullname">Full Name</label>
        <input 
           type="text"
           id="fullname"
           name="fullname"
           value={fullname}
           onChange={handleChange}
          // required
        />

        <label htmlFor='email'>Email</label>
        <input 
           type="email"
           id="email"
           name="email"
           value={email}
           onChange={handleChange}
          // required
        />

        <label htmlFor='title'>Title</label>
        <input 
           type="title"
           id="title"
           name="title"
           value={title}
           onChange={handleChange}
          // required
        />    

        <label htmlFor="image">Add Image</label>
        <input 
           type="text"
           id="image"
           name="image"
           value={image}
           onChange={handleChange}
          // required
        />

        <label htmlFor='location'>Location</label>
        <input 
           type="location"
           id="location"
           name="location"
           value={location}
           onChange={handleChange}
          // required
        /> 

        <label htmlFor="story">Story</label>
        <textarea
          id="story"
          name="story"
          value={story}
          onChange={handleChange}
          // required
        />

        <button>Submit Story</button>
      </form>
    </div>
  )
}
