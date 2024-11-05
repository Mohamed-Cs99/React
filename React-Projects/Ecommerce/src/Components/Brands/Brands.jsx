import React from 'react'
import style from './Brands.module.css'
import useBrands from '../../Hook/useBrands'
import { Link } from 'react-router-dom';

export default function Brands() {

  let { data ,isLoading } = useBrands();
  
  if(isLoading)
  {
    return <div className="spinner">
    <div className="cube1"></div>
    <div className="cube2"></div>
  </div>

  }
  
  return (
    <>
      <section>

        <div className="container-fluid py-3 ">
          <h1 className=' text-center'>Brands</h1>
          <div className="row  text-center">
            {

              data?.map((brand) => <div key={brand._id} className='col-md-3' >
                <div className="brandItem">
                  <Link to={`/brandDetails/${brand._id}`}><img src={brand.image} alt="brandImage" /></Link> 
                  {/* <h2 className='font-weight-bolder'>{brand.name}</h2> */}
                </div>
              </div>)
            }
          </div>

        </div>




      </section>

    </>
  )
}
