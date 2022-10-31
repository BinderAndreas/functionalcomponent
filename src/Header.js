import React, {useState} from 'react'
import './Header.css';

function Header() {

    const [username, setUserName] = useState("John Doe");
  const [imageUrl, setImageUrl] = useState("https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80")

const changeuser=()=>{
  setUserName("Jane Doe")
  setImageUrl("https://plus.unsplash.com/premium_photo-1661767329669-2ff46c34fffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8d29tYW58ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60")
}

  return (
    <div className="header-containter">
      <div className="profile">
        <p>{username}</p>
        <img className="profile-img" src={imageUrl}/>
      </div>
      <button onClick={changeuser}>Change User</button>
    </div>
  )
}

export default Header