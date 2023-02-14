import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import './Card.css'
import Order from './Order'

function Card(props) {
  return (
    <div className='card'>
      <img className='card--background' src={props.background} />
        <div className='card--text'>
            <h1>{props.text}</h1>
            <p>{props.description}</p>
        </div>
        <div className='card--btns'>
          <Link to="/Order">
            <Button className='card--btn1'>{props.leftbtn}</Button>
          </Link>
          {props.rightbtn && <Button className='card--btn2'>{props.rightbtn}</Button>}
        </div>
    </div>
  )
}

export default Card