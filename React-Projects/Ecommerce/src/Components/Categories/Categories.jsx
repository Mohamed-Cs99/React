import React, { useEffect, useState } from 'react'
import style from './Categories.module.css'
import { useParams } from 'react-router-dom'
import axios from 'axios';


export default function Categories() {
  let [CatProducts, setCatProducts] = useState([]);
  let { category } = useParams();



  function getCategoryProducts() {
    axios.get(`https://ecommerce.routemisr.com/api/v1/products`)
      // if response succedded. 
      .then((res) => {
        let cp = res.data.data.filter((p) => p.category.name == category);
        setCatProducts(cp);
        console.log(CatProducts);
      })
      // if there is response error. 
      .catch((res) => {
        console.log(res);
      })
  }

  useEffect(() => {
    getCategoryProducts();
  }, [category])

  return (
    <>

      <section>
        <div className="container-fluid py-3">
          <h1 className=' text-center'>{category}</h1>
          <div className="row justify-content-center">
            {(CatProducts.length > 0) ? CatProducts.map((pr) => (
              <div key={pr.id} className="product col-md-3 my-2 text-center">
                <div className="item rounded border bg-light">

                  <img src={pr.imageCover} className='w-75' alt="product image" />
                  <h3 className={`text-success`}>{pr.category.name}</h3>
                  <p className=' lead text-muted'>{pr.title.split(" ").splice(0, 5).join(" ")}</p>
                  <div className=' d-flex align-items-center justify-content-between w-75 mx-auto '>
                    <span>{pr.price} EGP</span>
                    <span> <i className=' fas fa-star text-warning'></i>{pr.ratingsAverage} </span>
                  </div>


                  <button className=' btn btn-outline-secondary  my-2'>Add To Cart</button>
                </div>
              </div>
            )) : <div className="spinner">
              <div className="cube1"></div>
              <div className="cube2"></div>
            </div>}

          </div>

        </div>
      </section>


    </>
  )
}
