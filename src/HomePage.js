import React, {useState} from 'react'
import './HomePage.css'
import Profile from "./Profile"

function HomePage() {

    const [title, setTitle]=useState("Quotes")



  return (
    <div className='homepage-container'>
        <h1>{title}</h1>
        <Profile />
        <Profile />
    </div>
  )
}

export default HomePage