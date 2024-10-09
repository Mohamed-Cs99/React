import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import Home from './Components/Home/Home'
import Cart from './Components/Cart/Cart'
import Products from './Components/Products/Products'
import Categories from './Components/Categories/Categories'
import Brands from './Components/Brands/Brands'
import Register from './Components/Register/Register'
import Login from './Components/Login/Login';

import UserContextProvider from './Context/UserContext'

let x = createBrowserRouter([
  {
    path: "", element: <Layout />, children: [
      { index: true, element: <Home /> },
      { path: "cart", element: <Cart /> },
      { path: "products", element: <Products /> },
      { path: "brands", element: <Brands /> },
      { path: "categories", element: <Categories /> },
      { path: "register", element: <Register /> },
      { path: "login", element: <Login /> }

    ]
  }
])



function App() {


  return (
    <>
      <UserContextProvider>
        <RouterProvider router={x}></RouterProvider>
      </UserContextProvider>

    </>
  )

}

export default App
