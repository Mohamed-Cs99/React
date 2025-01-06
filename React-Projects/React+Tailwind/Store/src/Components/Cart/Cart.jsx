import React, { useContext, useEffect, useState } from 'react';
import style from './Cart.module.css';
import { CartContext } from '../../Context/CartContext';

export default function Cart() {
    const [cartDetails, setcartDetails] = useState(null);
    let { getCartItems, updateCartQantity, removeCartItem } = useContext(CartContext);

    async function getCartDetails() {
        let response = await getCartItems();
        if (response.data.status === "success") {
            setcartDetails(response.data.data);

        } else {
            console.log("Failed");
        }
    }

    async function updateCart(prId, nwC) {
        let response = await updateCartQantity(prId, nwC);
        if (response.data.status == "success") {
            getCartDetails();
        }
        else {
            console.log("Updating Failed");
        }
    }

    async function deleteProduct(prId) {
        let response = await removeCartItem(prId);
        console.log(response);
        if (response.data.status == "success") {
            getCartDetails();
        }
        else {
            console.log("deleting Failed");
        }
    }


    useEffect(() => { getCartDetails(); }, []);

    return (
        <div className={style["table-container"]}>
            <table className={style.table}>
                <thead>
                    <tr>
                        <th scope="col" className="px-16 py-3">
                            <span className="sr-only">Image</span>
                        </th>
                        <th scope="col" className="px-6 py-3">Product</th>
                        <th scope="col" className="px-6 py-3">Qty</th>
                        <th scope="col" className="px-6 py-3">Price</th>
                        <th scope="col" className="px-6 py-3">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {cartDetails?.products.map((product) => (
                        <tr key={product.product.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td className="p-4" data-label="Image">
                                <img src={product.product.imageCover} className="w-16 md:w-32 max-w-full max-h-full" alt="Product Image" />
                            </td>
                            <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white" data-label="Product">
                                {product.product.title}
                            </td>
                            <td className="px-6 py-4" data-label="Qty">
                                <div className="flex items-center">
                                    <button onClick={() => { updateCart(product.product.id, product.count--) }} className="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                                        <span className="sr-only">Quantity button</span>
                                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h16" />
                                        </svg>
                                    </button>
                                    <div><span>{product.count}</span></div>
                                    <button onClick={() => { updateCart(product.product.id, product.count++) }} className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                                        <span className="sr-only">Quantity button</span>
                                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 1v16M1 9h16" />
                                        </svg>
                                    </button>
                                </div>
                            </td>
                            <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white" data-label="Price">
                                ${product.price * product.count}
                            </td>
                            <td className="px-6 py-4" data-label="Action">
                                <a onClick={() => { deleteProduct(product.product.id) }} className="font-medium  text-red-600 dark:text-red-500 cursor-pointer hover:underline">Remove</a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
