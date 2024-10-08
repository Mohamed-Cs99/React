import React from 'react'

import hStyle from './home.module.css'

export default function Home() {
    return (
        <>

            <section className={`${hStyle.home} ${hStyle.homeFont}`} >
                <div className="container-fluid  vh-100 d-flex justify-content-center align-items-center">
                    <div className="home-content bg-light text-center p-4  rounded ">
                        <h1 className=' font-weight-bolder'>Welcome Home </h1>
                        <p className=' lead text-muted'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
                        <button className=' btn btn-info font-weight-bolder mx-2'>SignUp </button>
                        <button className=' btn btn-info font-weight-bolder mx-2'>Login </button>
                    </div>

                </div>
            </section>

        </>
    )
}
