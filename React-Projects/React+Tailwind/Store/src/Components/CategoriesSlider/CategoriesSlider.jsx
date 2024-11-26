import React from 'react'
import style from './CategoriesSlider.module.css'
import useCategories from './../../Hooks/useCategories';

import Slider from "react-slick";
import { Link } from 'react-router-dom';



export default function CategoriesSlider() {

    let { data, isLoading } = useCategories();

    if (isLoading) {
        return <span class="loader "></span>
    }
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>

            <section className=' py-8 font-extrabold '>
                <h1 className=' text-center font-serif font-extrabold mb-4 '>Categories</h1>
                <Slider {...settings} >
                    {
                        data?.map((cat) => (
                            <div>
                                <Link to={`/category/${cat.name}`}>
                                    <img src={cat.image} alt="CategoryImage" className=' w-full h-[300px] object-cover' />
                                    <h2 className='text-center py-2'>{cat.name}</h2>
                                </Link>

                            </div>
                        ))
                    }

                </Slider>
            </section>



        </>
    )
}
