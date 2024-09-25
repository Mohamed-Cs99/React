import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
    
    <nav className='fixed-top bg-dark'>
      <div className="row">
        <div className="col-md-2">
          <h2 className='text-white  '>Logo</h2>
        </div>
        <div className=" offset-2 col-md-8">
          <ul className='d-flex justify-content-around list-unstyled text-white'>
            <li><NavLink to="">Home</NavLink></li>
            <li><NavLink to="Parent">Parent</NavLink></li>
          </ul>
        </div>
      </div>
    </nav>
    
    
    </>
  )
}
