import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function Restaurant() {

    const [Pizza, setPizza] = useState([])
    async function getPizza() {
        let { data } = await axios.get(`https://forkify-api.herokuapp.com/api/search?q=pizza`);
        setPizza(data.recipes);
    }

    useEffect(() => {
        getPizza();
    }, [])
    return (
        <>

            <div className="container-fluid py-5">
                <div className="row">
                    {Pizza.length > 0 ? Pizza.map((itm) => (
                        <div className="col-md-3 my-2">
                            <div className="pz bg-light py-1">
                                <img src={itm.image_url} className='pizzaImage w-100' alt="pizzaItem" />
                                <h3 className='text-center lead text-muted font-weight-bolder'>{itm.title}</h3>

                            </div>
                        </div>



                    )) : <div className="loading  vh-100 w-100 d-flex align-items-center  justify-content-center ">
                        <div className="item">
                            <span className="loader"></span>
                        </div>

                    </div>}
                </div>
            </div>








        </>
    )
}
