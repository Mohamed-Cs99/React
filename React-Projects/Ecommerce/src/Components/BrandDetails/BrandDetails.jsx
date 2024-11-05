import React from 'react'
import style from './BrandDetails.module.css'
import useBrandDetails from './../../Hook/useBrandDetails';

export default function BrandDetails() {

  let { data, isLoading ,isFetching } = useBrandDetails();

  if (isFetching) {
    return <div className="spinner">
      <div className="cube1"></div>
      <div className="cube2"></div>
    </div>

  }

  return (
    <>
      <section>
        <div className="container-fluid py-3 text-center">

          {
            <><img src={data.image} alt="brand name" />
              <h2>{data.name}</h2></>

          }

        </div>
      </section>

    </>
  )
}
