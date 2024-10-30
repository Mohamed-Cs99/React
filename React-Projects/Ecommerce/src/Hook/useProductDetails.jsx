import { useQuery } from '@tanstack/react-query'
import axios from 'axios';
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

export default function useProductDetails() {

    let { id } = useParams();
    function getDetails() {
        return axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)

    }

    let productDetails = useQuery({
        queryKey: ["productDetails"],
        queryFn: getDetails,
        select: (data) => data.data.data,
    })

    useEffect(() => {
        productDetails.refetch();
    }, [id])


    return productDetails;



}
