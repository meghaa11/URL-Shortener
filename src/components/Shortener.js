import React from 'react'
import './Shortener.css'

function Shortener() {
  return (
    <div className="short-container">
        <div className="wrapper">
            <div className="input">
                <input type="url" name="url" placeholder='Shorten a url here..' className="url" />
            </div>
            <div className="submit-btn">
                <button type='button'>Shorten it!</button>
            </div>
        </div>
    </div>
  )
}

export default Shortener