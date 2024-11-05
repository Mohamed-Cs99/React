import React, { useContext } from 'react'
import style from './Navbar.module.css'
import logo from '../../../src/assets/logo.jpg'
import { NavLink, Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../../Context/UserContext'






export default function Navbar() {
  let navigate = useNavigate();
  let { userLogin, setuserLogin } = useContext(UserContext);

  function signOut() {
    localStorage.removeItem("userToken");
    setuserLogin(null);
    navigate("/login");
  }


  return (
    <>
      <nav class=" fixed-top navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <div className="logo ">
            <img src={logo} className='border rounded' width="40" height="40" alt="logoImage" /> <span className='font-weight-bolder'>Maherko</span>
          </div>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="true" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse  px-4" id="navbarNav">
            <div className="navList w-50">
              {userLogin != null ? <ul class="navbar-nav ml-2  d-flex justify-content-between">
                <li class="nav-item">
                  <span><NavLink className=' text-decoration-none text-black-50 font-weight-bolder' to="">Home</NavLink></span>
                </li>
                <li class="nav-item">
                  <span><NavLink className=' text-decoration-none text-black-50 font-weight-bolder' to="cart">Cart</NavLink></span>
                </li>
                <li class="nav-item">
                  <span><NavLink className=' text-decoration-none text-black-50 font-weight-bolder' to="products">Products</NavLink></span>
                </li>
                <li class="nav-item">
                  <span><Link className=' text-decoration-none text-black-50 font-weight-bolder' >Categories</Link></span>
                </li>
                <li class="nav-item">
                  <span><NavLink className=' text-decoration-none text-black-50 font-weight-bolder' to="brands">Brands</NavLink></span>
                </li>
              </ul> : null}
            </div>


            <div className="icons d-flex justify-content-around  w-25 ">
              <i className='fab fa-facebook fa-2x' ></i>
              <i className='fab fa-twitter fa-2x' ></i>
              <i className='fab fa-linkedin fa-2x' ></i>
              <i className='fab fa-instagram fa-2x' ></i>
            </div>
            <div className="status w-25">
              <div className="navStatus d-flex  justify-content-around w-100">

                {userLogin != null ? <div className="item">
                  <button onClick={signOut} className='btn btn-outline-info font-weight-bolder'> SignOut</button>
                </div> : <>
                  <div className="item">
                    <button className='btn btn-info'><Link className=' text-white text-decoration-none font-weight-bolder' to="login">Login</Link></button>
                  </div>
                  <div className="item">
                    <button className='btn btn-info'><Link className=' text-decoration-none text-white font-weight-bolder' to="register">SignUp</Link></button>
                  </div>
                </>}


              </div>
            </div>

          </div>
        </div>

      </nav>

    </>
  )
}
