import React, { useEffect, useState } from 'react'
import style from './ProductDetails.module.css'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios';
import Slider from "react-slick";

export default function ProductDetails() {

  let { id, category } = useParams();
  const [ProductDetails, setProductDetails] = useState(null)
  const [RelatedProducts, setRelatedProducts] = useState([]);


  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,

  };

  function getDetails(id) {
    axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
      .then((res) => {
        setProductDetails(res.data.data);
        console.log(ProductDetails);
      })
      .catch(() => {
        console.log("Failed");
      })

  }


  // Filter Depend on category . 
  function getAllProducts() {
    axios.get(`https://ecommerce.routemisr.com/api/v1/products`)
      .then((res) => {
        let related = res.data.data.filter((prod) => prod.category.name == category)
        setRelatedProducts(related);
        console.log(RelatedProducts);
      })
      .catch(() => {
        console.log(res);
      })
  }

  useEffect(() => {
    getAllProducts();
    getDetails(id);
  }, [id, category])

  return (
    <>
      <section>

        {ProductDetails != null ?

          <div className="container-fluid vh-100 ">
            <div className="row bg-light p-3 w-100">
              <div className="col-md-3 ">
                <div className="item">
                  <img className=' w-100' src={ProductDetails.imageCover} alt="ProductImage" />
                </div>
              </div>
              <div className="col-md-9 d-flex align-items-center  ">
                <div className="item-description ">
                  <h1>{ProductDetails.category.name}</h1>
                  <h2>{ProductDetails.title}</h2>
                  <h3 className=' lead text-muted'>{ProductDetails.description}</h3>
                  <div className=' d-flex align-items-center justify-content-between w-100 mx-auto '>
                    <span>{ProductDetails.price} EGP</span>
                    <span> <i className=' fas fa-star text-warning'></i>{ProductDetails.ratingsAverage} </span>
                  </div>
                  <button className=' btn btn-success w-100 mt-2'><i className='fas fa-plus'></i> Add To Cart</button>
                </div>
              </div>
            </div>
            <h2>Related Items</h2>
            <Slider {...settings}>
             
            {(RelatedProducts.length > 0) ? RelatedProducts.map((pr) => (
                <div key={pr.id} className="product  text-center">
                  <div className="item rounded border bg-light">
                    <Link className=' text-decoration-none ' to={`/productdetails/${pr.id}/${pr.category.name}`}>
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
              )) : <div className="spinner">
                <div className="cube1"></div>
                <div className="cube2"></div>
              </div>}
            </Slider>

        

          </div>

          : <div className="spinner">
            <div className="cube1"></div>
            <div className="cube2"></div>
          </div>}


      </section>



    </>
  )
}
