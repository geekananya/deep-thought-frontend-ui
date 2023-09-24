import React from 'react'
import logo from '../assets/logo.svg'
import home from '../assets/icons/home-asset-snip.png'
import tools from '../assets/icons/tools-asset-snip.png'
import bell from '../assets/icons/bell.svg'
import pfp from '../assets/icons/pfp.png'
import menu from '../assets/icons/menu.png'
import './Navbar.css'

function NavBar(){
    return(
        <div className='flex nav'>
            <img className='logo' src={logo} alt="Deep Thought"></img>
            <img className='nav-icon' src={home} alt="Home"></img>
            <img className='nav-icon' src={tools} alt="tools"></img>
            <img className='nav-icon' src={bell} alt="Notifications"></img>
            <img className='nav-icon' src={pfp} alt="Profile"></img>
            <img className='nav-icon menu' src={menu} alt="Options"></img>
        </div>
    )
}

export default NavBar;