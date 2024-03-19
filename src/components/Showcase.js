import React from 'react'
import working from '../resources/illustration-working.svg'
import './Showcase.css';

function Showcase() {
  return (
    <div className='container'>
        <div className="left">
            <div className='heading'>
                <h1>More than just shorter links</h1>
            </div>
            <div className='sub-heading'>
                <p>Build your brand's recognition and get detailed insights on how your links are performing.</p>
            </div>
            <div className="btn">
                <button>Get Started</button>
            </div>
        </div>
        <div className="right">
            <img src={working} alt="illustration_working" />
        </div>
    </div>
  )
}

export default Showcase