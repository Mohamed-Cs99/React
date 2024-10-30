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
      <nav className=' fixed-top'>

        <div className="container-fluid bg-light py-2">
          <div className="row align-items-center">
            <div className="col-md-2">
              <div className="logo ">
                <img src={logo} className='w-25 border rounded' alt="logoImage" /> <span className='font-weight-bolder ml-1'>Eshrak Egypt</span>
              </div>
            </div>

            <div className="col-md-3  d-flex align-items-center">
              {userLogin != null ? <div className="components  d-flex justify-content-between  w-100 py-1">
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
                  <span><Link className=' text-decoration-none text-black-50 font-weight-bolder' >Categories</Link></span>
                </div>
                <div className="item">
                  <span><NavLink className=' text-decoration-none text-black-50 font-weight-bolder' to="brands">Brands</NavLink></span>
                </div>
              </div> : null}

            </div>

            <div className=" offset-3 col-md-4 ">
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
                  <div className="navStatus d-flex  justify-content-around w-100">

                    {userLogin != null ? <div className="item">
                      <span onClick={signOut} className='sout text-decoration-none text-black-50 font-weight-bolder'> SignOut</span>
                    </div> : <>
                      <div className="item">
                        <span><Link className=' text-decoration-none text-black-50 font-weight-bolder pointer-event' to="login">Login</Link></span>
                      </div>
                      <div className="item">
                        <span><Link className=' text-decoration-none text-black-50 font-weight-bolder pointer-event' to="register">SignUp</Link></span>
                      </div>
                    </>}


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
