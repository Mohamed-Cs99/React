import React from 'react'
import style from './Navbar.module.css'
import logo from '../../../src/assets/logo.jpg'
import { NavLink ,Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
      <nav className=' fixed-top'>

        <div className="container-fluid bg-light py-2">
          <div className="row align-items-center">
            <div className="col-md-1">
              <div className="logo text-center">
                <img src={logo} className='w-50 border rounded' alt="logoImage" />
                {/* <span className='pl-2 font-weight-bolder text-black-50 '>Amazon Ramada</span> */}
              </div>
            </div>
            <div className="col-md-3  d-flex align-items-center">
              <div className="components  d-flex justify-content-between  w-100 py-1">
                <div className="item">
                  <span><NavLink className=' text-decoration-none text-black-50 font-weight-bolder' to="">Home</NavLink></span>
                </div>
                <div className="item">
                  <span><NavLink className=' text-decoration-none text-black-50 font-weight-bolder' to="cart">Cart</NavLink></span>
                </div>
                <div className="item">
                  <span><NavLink className=' text-decoration-none text-black-50 font-weight-bolder' to="products">Products</NavLink></span>
                </div>
                <div className="item">
                  <span><NavLink className=' text-decoration-none text-black-50 font-weight-bolder' to="categories">Categories</NavLink></span>
                </div>
                <div className="item">
                  <span><NavLink className=' text-decoration-none text-black-50 font-weight-bolder' to="brands">Brands</NavLink></span>
                </div>
              </div>
            </div>

            <div className=" offset-4 col-md-4 ">
              <div className="row ">
                <div className="col-md-7 ">
                  <div className="icons  d-flex justify-content-between ">
                    <i className='fab fa-facebook fa-2x' ></i>
                    <i className='fab fa-twitter fa-2x' ></i>
                    <i className='fab fa-linkedin fa-2x' ></i>
                    <i className='fab fa-instagram fa-2x' ></i>
                    <i className='fab fa-facebook fa-2x' ></i>
                  </div>
                </div>
                <div className="col-md-5 d-flex align-items-center">
                  <div className="navStatus d-flex  justify-content-between w-100">
                    <div className="item">
                      <span><Link className=' text-decoration-none text-black-50 font-weight-bolder' to="login">Login</Link></span>
                    </div>
                    <div className="item">
                      <span><Link className=' text-decoration-none text-black-50 font-weight-bolder' to="register">SignUp</Link></span>
                    </div>
                    <div className="item">
                      <span><Link className=' text-decoration-none text-black-50 font-weight-bolder' to="login">signOut</Link></span>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>

      </nav>
    </>
  )
}
