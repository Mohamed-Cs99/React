import axios from "axios";
import { createContext } from "react";


export let CartContext = createContext();


export default function CartContextProvider(props) {
    let headers = {
        token: localStorage.getItem("userToken")
    }

    // All Cart Methods 

    function addProductToCart(productId) {
        return axios.post(`https://ecommerce.routemisr.com/api/v1/cart`,
            { productId: productId },
            {
                headers
            }
        ).then((res) => res)
         .catch((err) => err)

    }

    function getLoggedUserCart() {
        return axios.get(`https://ecommerce.routemisr.com/api/v1/cart`, { headers })
            .then((res) => res)
            .catch((err) => err)
    }

    function updateCartProductQuantity(id, newCount) {
        return axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${id}`, { count: newCount }, { headers })
            .then((res) => res)
            .catch((err) => err)
    }

    function removeSpecificCartItem(id) {
        return axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${id}`, { headers })
            .then((res) => res)
            .catch((err) => err)
    }

    function clearUserCart() {
        return axios.delete(`https://ecommerce.routemisr.com/api/v1/cart`, { headers })
            .then((res) => res)
            .catch((err) => err)
    }
    return <CartContext.Provider value={{ addProductToCart, getLoggedUserCart, updateCartProductQuantity, removeSpecificCartItem, clearUserCart }}>
        {props.children}
    </CartContext.Provider>
}