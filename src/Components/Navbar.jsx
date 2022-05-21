import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import './styles/navbar.css'
export default function Navbar(props) {
  return (
    <div className='navbar'>
      <div className="left_navbar">
        <MenuIcon/>
      </div>
      <div className="searchbar">
        <input type='text' placeholder='Enter Here'/>
        <button>Search</button>
      </div>
      <div className="right_navbar">
        <p>Live Bid</p>
        {/* <PersonAddIcon/> */}
        <img src={props.img}/>
        <p>Help & Support</p>
      </div>

    </div>
  )
}
