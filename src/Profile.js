import React,{useState} from 'react'
import "./Profile.css"

function Profile({title,setTitle, quote, url}) {


  const[myTitle, setMyTitle]=useState({title})

 const changeTitle=()=>{
    setTitle("My Quotes")
  }
///  const changeMyTitle=()=>{
///    setMyTitle("My Quotes")
///  }

  return (
    <div className='quotecard-container'>
      <h1>{myTitle}</h1>
        <p>{quote}</p>
        <button onClick={changeTitle}>Change Parent's Title</button>
        <button onClick={()=>setMyTitle("My Quotes")}>Change Parent's Title</button>
    </div>
    
  )
}

export default Profile