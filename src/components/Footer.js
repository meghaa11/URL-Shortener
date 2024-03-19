import React from 'react'
import logo from '../resources/logo.svg'
import facebook_icon from '../resources/icon-facebook.svg'
import twitter_icon from '../resources/icon-twitter.svg'
import pinterest_icon from '../resources/icon-pinterest.svg'
import insta_icon from '../resources/icon-instagram.svg'
import './Footer.css'

function Footer() {
  return (
    <footer className='footer'>
        <div className='max-width'>
            <div>
                <img src={logo} alt="logo" />
            </div>
            <div className='features'>
                <p>Features</p>
                <ul>
                    <li><button>Link Shortening</button></li>
                    <li><button>Branded Links</button></li>
                    <li><button>Analytics</button></li>
                </ul>
            </div>
            <div className='resources'>
                <p>Resources</p>
                <ul>
                    <li><button>Blog</button></li>
                    <li><button>Developers</button></li>
                    <li><button>Support</button></li>
                </ul>
            </div>
            <div className='company'>
                <p>Company</p>
                <ul>
                    <li><button>About</button></li>
                    <li><button>Our Team</button></li>
                    <li><button>Careers</button></li>
                    <li><button>Contact</button></li>
                </ul>
            </div>
            <div className='icons'>
                <ul>
                    <li><img src={facebook_icon} alt="facebook" /></li>
                    <li><img src={twitter_icon} alt="twitter" /></li>
                    <li><img src={pinterest_icon} alt="pinterest" /></li>
                    <li><img src={insta_icon} alt="insta" /></li>
                </ul>
            </div>
        </div>
    </footer>
  )
}

export default Footer