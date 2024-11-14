import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Components/Layout/Layout';
import Cart from './Components/Cart/Cart';
import Home from './Components/Home/Home';
import Categories from './Components/Categories/Categories';
import Notfound from './Components/Notfound/Notfound';
import Products from './Components/Products/Products';
import Brands from './Components/Brands/Brands';
import Profile from './Components/Profile/Profile';
import Settings from './Components/Settings/Settings';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';


let x = createBrowserRouter([
  {
    path: "", element: <Layout />, children: [
      { index: true, element: <Home /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      { path: "products", element: <Products /> },
      { path: "cart", element: <Cart /> },
      { path: "categories", element: <Categories /> },
      { path: "brands", element: <Brands /> },
      { path: "profile", element: <Profile /> },
      { path: "settings", element: <Settings /> },
      { path: "*", element: <Notfound /> }
    ]
  }
])


function App() {


  return (
    <>
      <RouterProvider router={x}></RouterProvider>
    </>
  )
}

export default App
