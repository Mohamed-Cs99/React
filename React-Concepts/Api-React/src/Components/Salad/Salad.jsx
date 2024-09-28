import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function Salad() {
 
  const [Salad, setSalad] = useState([])
  async function getSalad() {
      let { data } = await axios.get(`https://forkify-api.herokuapp.com/api/search?q=salad`);
      setSalad(data.recipes);
  }

  useEffect(() => {
      getSalad();
  }, [])


  return (
      <>

          <h1 className='text-center font-weight-bolder'>Salad Menue</h1>
          {<div className="row justify-content-center">
              {Salad.length > 0 ? Salad.map((itm) => (
                  <div className="col-md-3 my-2">
                      <div className="pz bg-light py-1">
                          <img src={itm.image_url} className='SaladImage w-100' alt="SaladItem" />
                          <h3 className='text-center lead text-muted font-weight-bolder'>{itm.title}</h3>

                      </div>
                  </div>

              )) : <div className="loading  vh-100 w-100 d-flex align-items-center  justify-content-center ">
                  <div className="item">
                      <span className="loader"></span>
                  </div>

              </div>}
          </div>}



      </>
  )
}
