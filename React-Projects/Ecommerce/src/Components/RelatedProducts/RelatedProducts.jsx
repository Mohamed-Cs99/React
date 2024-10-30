import React from 'react'
import style from './RelatedProducts.module.css'
import useRelatedProducts from '../../Hook/useRelatedProducts'
import Slider from 'react-slick';
import { Link } from 'react-router-dom';


export default function RelatedProducts() {

  let { data, isLoading, error, isError } = useRelatedProducts();

  if (isLoading) {
    return <div className="spinner">
      <div className="cube1"></div>
      <div className="cube2"></div>
    </div>
  }

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,

  };

  return (
    <>
      <h2>Related Items</h2>
      <Slider {...settings}>

        {data.map((pr) => (
          <div key={pr.id} className=" text-center">
            <div className="item rounded border-left p-3 bg-light ">
              <Link className='text-decoration-none' to={`/productdetails/${pr.id}/${pr.category.name}`}>
                <img src={pr.imageCover} className='w-100' alt="product image" />
                <p className={`text-info text-muted lead`}>{pr.title}</p>

                <div className=' d-flex align-items-center justify-content-between w-75 mx-auto '>
                  <span>{pr.price} EGP</span>
                  <span> <i className=' fas fa-star text-warning'></i>{pr.ratingsAverage} </span>
                </div>
              </Link>

              <button className=' btn btn-outline-secondary  my-2'>Add To Cart</button>
            </div>
          </div>
        ))}
      </Slider>



    </>
  )
}
