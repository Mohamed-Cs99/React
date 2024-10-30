import React, { useEffect, useState } from 'react'
import style from './CategoriesSlider.module.css'
import axios from 'axios';
import Slider from "react-slick";
import { Link } from 'react-router-dom';

export default function CategoriesSlider() {

  let [AllCategories, setAllCategories] = useState([]);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 3,
    autoplay:true,
    autoplaySpeed:2000
  };

  function getCategories() {
    axios.get(`https://ecommerce.routemisr.com/api/v1/categories`)
      .then((res) => {
        setAllCategories(res.data.data);
       
      })
  }

  useEffect(() => {
    getCategories();
  }, [])

  return (
    <>
      <section className='py-4'>
        <Slider  {...settings}>
          {AllCategories.map((cat) => (
            <div className=' text-center'>
              <Link className=' text-decoration-none' to={`categories/${cat.name}`} >
              <img className='catImage w-100' src={cat.image} alt="Category Image" />
              <h3>{cat.name}</h3>
              </Link>
             
            </div>
          ))}
        </Slider>
      </section>


    </>
  )
}
