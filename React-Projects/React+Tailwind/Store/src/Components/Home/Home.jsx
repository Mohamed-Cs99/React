import React from 'react'
import styles from './Home.module.css'
import useAllPrdoucts from '../../Hooks/useAllPrdoucts'

import Products from './../Products/Products';
import CategoriesSlider from './../CategoriesSlider/CategoriesSlider';
export default function Home() {


    return (
        <>
            <CategoriesSlider />
            <Products />
        </>
    )
}
