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
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute'
import Notfound from './Components/Notfound/Notfound';
import ProductDetails from './Components/ProductDetails/ProductDetails';

let x = createBrowserRouter([
  {
    path: "", element: <Layout />, children: [
      { index: true, element: <ProtectedRoute> <Home /></ProtectedRoute> },
      { path: "cart", element: <ProtectedRoute><Cart /> </ProtectedRoute> },
      { path: "products", element: <ProtectedRoute><Products /></ProtectedRoute> },
      { path: "brands", element: <ProtectedRoute><Brands /></ProtectedRoute> },
      { path: "categories/:category", element: <ProtectedRoute> <Categories /></ProtectedRoute> },
      { path: "productdetails/:id/:category", element: <ProtectedRoute> <ProductDetails /></ProtectedRoute> },
      { path: "register", element: <Register /> },
      { path: "login", element: <Login /> },
      { path: "*", element: <Notfound /> }

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
