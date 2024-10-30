import React, { useContext, useEffect, useState } from 'react'
import style from './ProductDetails.module.css'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios';
import Slider from "react-slick";
import useProductDetails from './../../Hook/useProductDetails';
import useRelatedProducts from '../../Hook/useRelatedProducts';
import RelatedProducts from '../RelatedProducts/RelatedProducts';
import { CartContext } from '../../Context/CartContext';
import toast from 'react-hot-toast';

export default function ProductDetails() {

  let { data, isLoading, error, isError } = useProductDetails();
  let { addProductToCart } = useContext(CartContext);

  async function addToCart(id) {
    let response = await addProductToCart(id);
    if (response.data.status == 'success') {
      toast.success(response.data.message);
    }
    else {
      toast.error(response.data.message);
    }
  }



  // let relatedProducts = useRelatedProducts();



  if (isLoading) {
    return <div className="spinner">
      <div className="cube1"></div>
      <div className="cube2"></div>
    </div>
  }




  // let { id, category } = useParams();
  // const [ProductDetails, setProductDetails] = useState(null)
  // const [RelatedProducts, setRelatedProducts] = useState([]);



  // function getDetails(id) {
  //   axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
  //     .then((res) => {
  //       setProductDetails(res.data.data);
  //       console.log(ProductDetails);
  //     })
  //     .catch(() => {
  //       console.log("Failed");
  //     })

  // }


  // // Filter Depend on category . 
  // function getAllProducts() {
  //   axios.get(`https://ecommerce.routemisr.com/api/v1/products`)
  //     .then((res) => {
  //       let related = res.data.data.filter((prod) => prod.category.name == category)
  //       setRelatedProducts(related);
  //       console.log(RelatedProducts);
  //     })
  //     .catch(() => {
  //       console.log(res);
  //     })
  // }

  // useEffect(() => {
  //   getAllProducts();
  //   getDetails(id);
  // }, [id, category])

  return (
    <>
      <section>

        <div className="container-fluid vh-100 ">
          <div className="row bg-light p-3 w-100">
            <div className="col-md-3 ">
              <div className="item">
                <img className=' w-100' src={data.imageCover} alt="ProductImage" />
              </div>
            </div>
            <div className="col-md-9 d-flex align-items-center  ">
              <div className="item-description ">
                <h1>{data.category.name}</h1>
                <h2>{data.title}</h2>
                <h3 className=' lead text-muted'>{data.description}</h3>
                <div className=' d-flex align-items-center justify-content-between w-100 mx-auto '>
                  <span>{data.price} EGP</span>
                  <span> <i className=' fas fa-star text-warning'></i>{data.ratingsAverage} </span>
                </div>
                <button onClick={() => { addToCart(data.id) }} className=' btn btn-success w-100 mt-2'><i className='fas fa-plus'></i> Add To Cart</button>
              </div>
            </div>
          </div>

          <RelatedProducts />


        </div>

      </section>



    </>
  )
}
