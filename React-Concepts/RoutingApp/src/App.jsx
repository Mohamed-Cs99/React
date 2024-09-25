import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Layout from './Components/Layout/Layout'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Components/Home/Home'
import Products from './Components/Products/Products'



let x = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        index: true, element: <Home />,

      },
      {
        path: "products", element: <Products />
      }
    ]
  }


])






function App() {


  return <RouterProvider router={x} ></RouterProvider>


}

export default App
