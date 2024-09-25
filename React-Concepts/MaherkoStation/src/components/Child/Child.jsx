import React, { useState } from 'react'

export default function Child(props) {

    // Making Destruct

    let { productId, productName, onSale } = props.hambozo;



    return (
        <>
            <div className="col-md-4 bg-dark p-4">
                <div className="item bg-light p-3 position-relative">
                    <h1>Product ID : {productId}</h1>
                    <h2>Produt Name : {productName}</h2>

                    <button onClick={() => props.deletedItem(productId)} className='btn btn-outline-danger '>Delete</button>
                    <button onClick={()=>props.x(props.index)} className='btn btn-outline-success ml-3'>Update</button>
                    {
                        onSale == true ? (<div className="son position-absolute font-weight-bolder bg-primary p-2 text-white">
                            Sale
                        </div>) : null
                    }



                </div>
            </div>

        </>
    )
}
