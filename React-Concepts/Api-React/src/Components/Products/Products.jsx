import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Products() {


    const [Products, setProducts] = useState([])

    async function getProducts() {
        let { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/products`);
        setProducts(data.data);

    }

    useEffect(() => {
        getProducts();
    }, [])



    return (
        <>

            <div className="container-fluid py-5">
                <div className="row text-center">

                    {Products.length > 0 ? Products.map((product) => (
                        <div className="col-md-3">
                            <div className="item">
                                <img src={product.imageCover} className='w-100' alt="ProductIamge" />
                                <h3 className='lead text-muted py-2 font-weight-bolder'>{product.title}</h3>

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
