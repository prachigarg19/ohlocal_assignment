import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import './styles/navbar.css'
export default function Navbar(props) {
  return (
    <div className='navbar'>
      {/* menu icon */}
      <div className="left_navbar">
        <MenuIcon/>
      </div>
      {/* searchbar */}
      <div className="searchbar">
        <input type='text' placeholder='Enter Here'/>
        <button>Search</button>
      </div>
      <div className="right_navbar">
        <p>Live Bid</p>
        <img src={props.img}/>
        <p>Help & Support</p>
      </div>

    </div>
  )
}
