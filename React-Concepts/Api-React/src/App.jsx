import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Products from './Components/Products/Products'
import Restaurant from './Components/Restaurant/Restaurant'
import Movies from './Components/Movies/Movies'
import Navbar from './Components/Navbar/Navbar'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import Home from './Components/Home/Home'
import NotFound from './Components/NotFound/NotFound'
import Pasta from './Components/Pasta/Pasta'
import Beef from './Components/Beef/Beef.'
import Salad from './Components/Salad/Salad'
import Pizza from './Components/Pizza/Pizza'

let x = createBrowserRouter([

  {
    path: "",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "movies", element: <Movies /> },
      { path: "products", element: <Products /> },
      {
        path: "restaurant", element: <Restaurant />, children: [
          { index: true, element: <Pizza /> },
          { path: "pasta", element: <Pasta /> },
          { path: "beef", element: <Beef /> },
          { path: "salad", element: <Salad /> },
        ]
      },
      { path: "*", element: <NotFound /> }
    ]
  }
])




function App() {

  return <RouterProvider router={x}></RouterProvider>
}

export default App
