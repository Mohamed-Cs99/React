import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <>

            <nav className='py-1 bg-dark px-2 fixed-top '>
                <div className="continer-fluid">
                    <div className="row">
                        <div className="col-md-2">
                            <div className="item ">
                                <img id='logo' className='w-75' src="../../src/assets/bakery-light-1.png" alt="Logo" />
                            </div>
                        </div>

                        <div className="offset-2 col-md-8 bg-primary d-flex align-items-center">
                            <div className="row bg-light py-1 w-100 font-weight-bolder">
                                <div className="col ">
                                    <div className="item">
                                        <span><Link className=' text-black-50 text-decoration-none' to="" >Home</Link></span>
                                    </div>
                                </div>
                                <div className="col ">
                                    <div className="item">
                                        <span><Link className=' text-black-50  text-decoration-none' to="products">Products</Link></span>
                                    </div>
                                </div>

                                <div className="col ">
                                    <div className="item">
                                        <span>navItem</span>
                                    </div>
                                </div>

                                <div className="col ">
                                    <div className="item">
                                        <span>navItem</span>
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
