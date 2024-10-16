import React, { createContext } from 'react'
import style from './Home.module.css'
import axios from 'axios'
import RecentProducts from './../RecentProducts/RecentProducts';
import CategoriesSlider from '../CategoriesSlider/CategoriesSlider';

export default function Home() {

  return (
    <>
      <CategoriesSlider></CategoriesSlider>
      <RecentProducts></RecentProducts>

    </>
  )
}
