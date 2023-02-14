import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className='footer'>
        <ul className='footer--list'>
            <li className='footer--listItem'>Tesla © {new Date().getFullYear()}</li>
            <li className='footer--listItem'>Privacy & Legal</li>
            <li className='footer--listItem'>Vehicle Recalls</li>
            <li className='footer--listItem'>Contact</li>
            <li className='footer--listItem'>Careers</li>
            <li className='footer--listItem'>News</li>
            <li className='footer--listItem'>Engage</li>
            <li className='footer--listItem'>Location</li>
        </ul>
    </div>
  )
}

export default Footer