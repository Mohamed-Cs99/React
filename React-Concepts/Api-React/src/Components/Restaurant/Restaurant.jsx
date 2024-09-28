import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom';

export default function Restaurant() {


    return (
        <>

            <div className="container-fluid pt-5">
                <div className="row">
                    <div className="col-md-2 vh-100 text-center ">
                        <div className="itemsList position-fixed  border p-4 ">
                            <h1>Food List</h1>
                            <div className="foodItem my-3 bg-info py-2">
                                <NavLink to="" className='text-decoration-none text-white font-weight-bolder'>Pizza</NavLink>
                            </div>
                            <div className="foodItem my-3 bg-info py-2">
                                <NavLink to="pasta" className=' text-decoration-none text-white font-weight-bolder'>Pasta</NavLink>
                            </div>

                            <div className="foodItem my-3 bg-info py-2">
                                <NavLink to="beef" className=' text-decoration-none text-white font-weight-bolder'>Beef</NavLink>
                            </div>

                            <div className="foodItem my-3 bg-info py-2">
                                <NavLink to="salad" className=' text-decoration-none text-white font-weight-bolder'>Salad</NavLink>
                            </div>

                        </div>


                    </div>
                    <div className="col-md-10">
                        <Outlet />
                    </div>
                </div>
            </div>








        </>
    )
}
