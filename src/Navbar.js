import React from 'react'
import './Navbar.css'
import logo from "./assets/brand@2x.png"
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
// import DensitySmallIcon from '@mui/icons-material/DensitySmall';


function Navbar() {
  return (
    <div className='navbar'>
        <div className='logo--container'>
            <img className='logo' src={logo} />
        </div>
        
        <div className='center--navbar'>
            <ul className='center--navbarList'>
                <li className='center--navbarListItem'>Model S</li>
                <li className='center--navbarListItem'>Model 3</li>
                <li className='center--navbarListItem'>Model X</li>
                <li className='center--navbarListItem'>Model Y</li>
                <li className='center--navbarListItem'>Solar Roof</li>
                <li className='center--navbarListItem'>Solar Panel</li>
            </ul>
        </div>
        <DensityMediumIcon className='right--navbarListIcon' />
        <div className='right--navbar'>
            
            {/* <DensitySmallIcon className='right--navbarListIcon' /> */}
            <ul className='right--navbarList'>
                <li className='right--navbarListItem'>Shop</li>
                <li className='right--navbarListItem'>Account</li>
                <li className='right--navbarListItem'>Menu</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar