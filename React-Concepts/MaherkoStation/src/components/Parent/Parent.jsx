import React, { useState, useTransition } from 'react'
import Child from '../Child/Child';

export default function Parent() {

    // let [name, setName] = useState("Mohammed Maher");
    // let [age, setAge] = useState(25);
    // let [speciality, setSpeciality] = useState("Computer Science");

    // let [user, setUser] = useState({ id: 1, email: 'User@gmail.com', password: 'Mo2017170366' });


    let [products, setProducts] = useState([{ productId: 10, productName: 'Ta3mia', onSale: true }, { productId: 20, productName: 'Fool', onSale: false }, { productId: 30, productName: 'Flafel', onSale: true }]);


    function deleteProduct(idPar) {
        // Take A Copy From Array 

        let copiedArray = structuredClone(products);
        let newArray = copiedArray.filter((product) => { return product.productId !== idPar });
        setProducts(newArray);
    }

    function updateProduct(i) {
        let copied = structuredClone(products);

        copied[i].productId += 1;

        setProducts(copied);
    }


    return (
        <div className='text-center'>
            <h1>Parent Component</h1>

            <div className="row">

                {products.map(function (product, i) {
                    return <Child x={updateProduct} index={i} hambozo={product} deletedItem={deleteProduct} />
                })}


            </div>






        </div>
    )
}
