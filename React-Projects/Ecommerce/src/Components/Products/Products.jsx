import React from 'react'
import style from './Products.module.css'
import useProduct from '../../Hook/useProduct'
import { Link } from 'react-router-dom';

export default function Products() {

  let { data, isError, error, isLoading } = useProduct();

  if (isLoading) {
    return <div className="spinner">
      <div className="cube1"></div>
      <div className="cube2"></div>
    </div>
  }

  return (
    <>
      <section>
        <div className="container-fluid py-3">
          <div className="row">
            {data.map((pr) => (
              <div key={pr.id} className="product col-md-3 my-2 text-center">
                <div className="item rounded border bg-light">
                  <Link className=' text-decoration-none' to={`/productdetails/${pr.id}/${pr.category.name}`}>
                    <img src={pr.imageCover} className='w-75' alt="product image" />
                    <h3 className={`text-success`}>{pr.category.name}</h3>
                    <p className=' lead text-muted'>{pr.title.split(" ").splice(0, 5).join(" ")}</p>
                    <div className=' d-flex align-items-center justify-content-between w-75 mx-auto '>
                      <span>{pr.price} EGP</span>
                      <span> <i className=' fas fa-star text-warning'></i>{pr.ratingsAverage} </span>
                    </div>
                  </Link>

                  <button className=' btn btn-outline-secondary  my-2'>Add To Cart</button>
                </div>
              </div>
            ))}

          </div>

        </div>
      </section>

    </>
  )
}
