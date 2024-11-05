import React, { useContext, useEffect, useState } from 'react'
import style from './Cart.module.css'
import { CartContext } from '../../Context/CartContext'
import toast from 'react-hot-toast';
import emptyCart from '../../assets/EmptyCart.webp'
export default function Cart() {


  let { getLoggedUserCart, updateCartProductQuantity, removeSpecificCartItem, clearUserCart } = useContext(CartContext);
  let [CartDetails, setCartDetails] = useState(null);

  async function getCartItems() {
    let response = await getLoggedUserCart();

    if (response.data.status == 'success') {
      setCartDetails(response.data.data);
    }

  }

  async function updateCartQunatity(id, newCount) {

    let response = await updateCartProductQuantity(id, newCount);
    if (response.data.status == "success") {
      setCartDetails(response.data.data);
      toast.success("Updated...");
    }
  }

  async function removeCartItem(id) {
    let response = await removeSpecificCartItem(id);
    if (response.data.status == "success") {
      setCartDetails(response.data.data);
      toast.success('Item deleted');
    }
  }

  async function clearCart() {
    let response = await clearUserCart();
    if (response.data.message == "success") {
      setCartDetails(null);
    }

  }


  useEffect(() => {
    getCartItems(); 
  }, [])

  return (
    <>
      {
        CartDetails?.products.length > 0 ? <section id='cartSec'>
          <div className="py-5 container text-center">
          <h1 className=' text-center bg-info text-white'>Total Price : ${CartDetails.totalCartPrice} </h1>
            <table className="table table-bordered ">
              <thead className='bg-dark text-white '>
                <tr>
                  <th >Image</th>
                  <th >Product</th>
                  <th >Qty</th>
                  <th >Price</th>
                  <th >Action</th>
                </tr>
              </thead>
              <tbody className='bg-light '>
                {
                  CartDetails?.products.map((pr) =>
                    <tr key={pr.product.id}>

                      <td ><img src={pr.product.imageCover} alt="Product Image " /></td>
                      <td className=' py-5 '> <span >{pr.product.title}</span></td>
                      <td className=' py-5 '> <span className='d-flex justify-content-center align-items-center'> <button onClick={() => { updateCartQunatity(pr.product.id, pr.count - 1) }} className=' btn border rounded-circle '><i className='fas fa-minus' /></button> <span className='mx-2 border px-3 py-2'>{pr.count} </span><button onClick={() => { updateCartQunatity(pr.product.id, pr.count + 1) }} className='btn border rounded-circle'><i className='fas fa-plus' /></button></span> </td>
                      <td className=' py-5 '>${pr.price * pr.count}</td>
                      <td className=' py-5 '><button onClick={() => { removeCartItem(pr.product.id) }} className=' btn btn-outline-danger'>Remove</button></td>

                    </tr>)
                }


              </tbody>
            </table>

            <button onClick={clearCart} className='btn btn btn-danger'>Clear Cart</button>
          </div>

        </section> : <div className='emptyCary vh-100 d-flex justify-content-center align-items-center'><img src={emptyCart}></img></div> 
      }


    </>
  )
}
