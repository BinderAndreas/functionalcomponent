import React, {useState,useEffect} from 'react'
import './HomePage.css'
import Profile from "./Profile"
import axios from 'axios'

function HomePage() {

    const [title, setTitle]=useState("Quotes")
    const [quoteOne, setQuoteOne]=useState("")
    const [quoteTwo, setQuoteTwo]=useState("")
    const [urlOne, setUrlOne]=useState("https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80")
    const [urlTwo, setUrlTwo]=useState("https://plus.unsplash.com/premium_photo-1661767329669-2ff46c34fffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8d29tYW58ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60")



    useEffect(()=>{
        axios.get("https://quote-garden.herokuapp.com/api/v3/quotes")
        .then(response=>{
          console.log(res.data)
          setQuoteOne[response.data[0].quoteText]
          setQuoteTwo(response.data[3].quoteText)
        })
        .catch(err=>console.log(err))


      
},{})


  return ( 
    <div className='homepage-container'>
        <h1>{title}</h1>
        <Profile title={title} setTitle={setTitle} quote={setQuoteOne}/>
        <Profile title={title} setTitle={setTitle} quote={setQuoteTwo}/>
    </div>
  )
}

export default HomePage