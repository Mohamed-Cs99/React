import { createContext } from "react";

import axios from "axios";


export let CartContext = createContext();


export default function CartContextProvider(props) {

    let headers = { token: localStorage.getItem("storeToken") }

    function addProductToCart(productId) {
        return axios.post(`https://ecommerce.routemisr.com/api/v1/cart`, { productId: productId }, { headers })
            .then((res) => res)
            .catch((err) => err);

    }




    return <CartContext.Provider value={{addProductToCart}}>
        {props.children}
    </CartContext.Provider>
}