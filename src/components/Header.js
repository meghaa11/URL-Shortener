import React from 'react'
import logo from '../resources/logo.svg'
import './Header.css'

function Header() {
  return (
    
    <div className='header max-width'>
        <div><img src={logo} alt="logo" /></div>
        <div className='header-list'>
            <ul>
                <li><button> Features </button></li>
                <li><button> Pricing </button></li>
                <li><button> Resources </button></li>
            </ul>
        </div>
        <div className='header-signup'> 
            <ul>
                <li><button> Login </button></li>
                <li><button className='button'> Sign Up </button></li>
            </ul>
        </div>
    </div>
  )
}

export default Header