import React, { useContext, useEffect, useState } from 'react'
import style from './RecentProducts.module.css'
import axios from 'axios'
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import useProduct from '../../Hook/useProduct';
import { CartContext } from '../../Context/CartContext';
import toast from 'react-hot-toast';
export default function RecentProducts() {


  let { data, error, isError, isLoading } = useProduct();
  let { addProductToCart } = useContext(CartContext);

  async function addToCart(prId) {
    let response = await addProductToCart(prId);
    if (response.data.status == 'success') {
      toast.success(response.data.message);
    }
    else {
      toast.error(response.data.message);
    }
  }

  if (isLoading) {
    return <div className="spinner">
      <div className="cube1"></div>
      <div className="cube2"></div>
    </div>
  }



  // let [Products, setProducts] = useState([]);
  // let [ErrorMsg, setErrorMsg] = useState("");

  // function getProducts() {

  //   axios.get(`https://ecommerce.routemisr.com/api/v1/products`)
  //     // if response succedded. 
  //     .then((res) => {
  //       setProducts(res.data.data);
  //     })
  //     // if there is response error. 
  //     .catch((res) => {
  //       setErrorMsg(res.response.data.message);
  //     })



  // }

  // useEffect(() => {
  //   getProducts();
  // }, [])


  return (
    <>
      <section>
        <div className="container-fluid py-3">
          <div className="row">
            {data.map((pr) => (
              <div key={pr.id} className="product col-md-3 my-2 text-center">
                <div className="item rounded border bg-light">
                  <Link className=' text-decoration-none' to={`productdetails/${pr.id}/${pr.category.name}`}>
                    <img src={pr.imageCover} className='w-75' alt="product image" />
                    <h3 className={`text-success`}>{pr.category.name}</h3>
                    <p className=' lead text-muted'>{pr.title.split(" ").splice(0, 5).join(" ")}</p>
                    <div className=' d-flex align-items-center justify-content-between w-75 mx-auto '>
                      <span>{pr.price} EGP</span>
                      <span> <i className=' fas fa-star text-warning'></i>{pr.ratingsAverage} </span>
                    </div>
                  </Link>

                  <button onClick={() => { addToCart(pr.id) }} className=' btn btn-outline-secondary  my-2'>Add To Cart</button>
                </div>
              </div>
            ))}

          </div>

        </div>
      </section>


    </>
  )
}
