import React from 'react'
import { Link, NavLink } from 'react-router-dom'

import logo from '../../../src/assets/logo.jpg'

export default function Navbar() {
    return (
        <>

            <nav className='fixed-top bg-dark'>
                <div className="container-fluid  py-1">
                    <div className="row">
                        <div className="col-md-3 ">
                            <img src={logo} className='logo rounded' alt="" />
                        </div>
                        <div className="offset-3 col-md-6  text-white d-flex align-items-center ">
                            <div className="row w-100 text-center font-weight-bolder text-capitalize">
                                <div className="col">
                                    <NavLink className='text-decoration-none text-white' to="">Home</NavLink>
                                </div>
                                <div className="col">
                                    <NavLink className='text-decoration-none text-white' to="movies">Movies</NavLink>

                                </div>
                                <div className="col">
                                    <NavLink className='text-decoration-none text-white' to="products">Products</NavLink>

                                </div>
                                <div className="col">
                                    <NavLink className='text-decoration-none text-white' to="restaurant">Restaurant</NavLink>

                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </nav>

        </>
    )
}
